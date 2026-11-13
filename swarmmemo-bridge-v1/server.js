import http from "node:http";
import { readFile } from "node:fs/promises";
const PORT = Number(process.env.PORT || 3000);
const UPSTREAM = process.env.UPSTREAM_MCP_URL || "https://swarmmemo.com/mcp";
const TOKEN = process.env.BRIDGE_TOKEN || "";
if (!TOKEN) { console.error("BRIDGE_TOKEN is required; refusing to start without authentication."); process.exit(1); }
const html = await readFile(new URL("./index.html", import.meta.url));
const server = http.createServer(async (req, res) => {
  const pathname = new URL(req.url || "/", "http://localhost").pathname;
  if (req.method === "GET" && pathname === "/") {
    res.writeHead(200, {"content-type":"text/html; charset=utf-8","cache-control":"no-store","x-content-type-options":"nosniff","content-security-policy":"default-src 'self'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; connect-src 'self'; img-src 'self' data:; base-uri 'none'; frame-ancestors 'none'"});
    res.end(html); return;
  }
  if (req.method === "GET" && pathname === "/health") {
    res.writeHead(200, {"content-type":"application/json","cache-control":"no-store"});
    res.end(JSON.stringify({name:"SwarmMemo MCP Bridge",status:"ok",transport:"Streamable HTTP"})); return;
  }
  if (pathname !== "/mcp") {
    res.writeHead(404, {"content-type":"application/json"}); res.end(JSON.stringify({error:"Not found"})); return;
  }
  if (req.headers.authorization !== `Bearer ${TOKEN}`) {
    res.writeHead(401, {"content-type":"application/json","www-authenticate":"Bearer","cache-control":"no-store"});
    res.end(JSON.stringify({error:"Unauthorized"})); return;
  }
  const headers = new Headers();
  for (const key of ["content-type","accept","mcp-session-id","last-event-id","mcp-protocol-version"]) {
    const value = req.headers[key]; if (value) headers.set(key,value);
  }
  try {
    const method = req.method || "POST";
    const body = ["GET","HEAD"].includes(method) ? undefined : await new Promise((resolve,reject) => {
      const chunks=[]; req.on("data",c=>chunks.push(c)); req.on("end",()=>resolve(Buffer.concat(chunks))); req.on("error",reject);
    });
    const upstream = await fetch(UPSTREAM,{method,headers,body:body?.length?body:undefined,redirect:"manual"});
    const outHeaders={};
    for (const [key,value] of upstream.headers) if (!["transfer-encoding","connection","keep-alive","content-length"].includes(key.toLowerCase())) outHeaders[key]=value;
    outHeaders["cache-control"]="no-store";
    res.writeHead(upstream.status,outHeaders);
    if (!upstream.body) return res.end();
    const reader=upstream.body.getReader();
    for (;;) { const {value,done}=await reader.read(); if(done) break; if(!res.write(Buffer.from(value))) await new Promise(resolve=>res.once("drain",resolve)); }
    res.end();
  } catch(err) {
    if(!res.headersSent) res.writeHead(502,{"content-type":"application/json"});
    res.end(JSON.stringify({error:"Upstream MCP request failed",detail:String(err?.message||err)}));
  }
});
server.listen(PORT,"0.0.0.0",()=>console.log(`SwarmMemo MCP Bridge + mobile console listening on ${PORT}; upstream=${UPSTREAM}`));
