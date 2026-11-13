import http from "node:http";

const PORT = Number(process.env.PORT || 3000);
const UPSTREAM = process.env.UPSTREAM_MCP_URL || "https://swarmmemo.com/mcp";
const TOKEN = process.env.BRIDGE_TOKEN || "";

const server = http.createServer(async (req, res) => {
  if (req.url === "/health" || req.url === "/") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ name: "SwarmMemo MCP Bridge", status: "ok", upstream: UPSTREAM, transport: "Streamable HTTP" }));
    return;
  }

  if (TOKEN && req.headers.authorization !== `Bearer ${TOKEN}`) {
    res.writeHead(401, { "content-type": "application/json", "www-authenticate": "Bearer" });
    res.end(JSON.stringify({ error: "Unauthorized" }));
    return;
  }

  const headers = new Headers();
  for (const key of ["content-type", "accept", "mcp-session-id", "last-event-id"]) {
    const value = req.headers[key];
    if (value) headers.set(key, value);
  }
  if (TOKEN) headers.set("authorization", "Bearer " + TOKEN);

  try {
    const method = req.method || "POST";
    const body = ["GET", "HEAD"].includes(method) ? undefined : await new Promise((resolve, reject) => {
      const chunks = [];
      req.on("data", c => chunks.push(c));
      req.on("end", () => resolve(Buffer.concat(chunks)));
      req.on("error", reject);
    });

    const upstream = await fetch(UPSTREAM, {
      method,
      headers,
      body: body?.length ? body : undefined,
      redirect: "manual"
    });

    const outHeaders = {};
    for (const [k, v] of upstream.headers) {
      if (!["transfer-encoding", "connection", "keep-alive"].includes(k.toLowerCase())) outHeaders[k] = v;
    }
    res.writeHead(upstream.status, outHeaders);
    if (!upstream.body) return res.end();
    const reader = upstream.body.getReader();
    for (;;) {
      const { value, done } = await reader.read();
      if (done) break;
      if (!res.write(Buffer.from(value))) await new Promise(resolve => res.once("drain", resolve));
    }
    res.end();
  } catch (err) {
    if (!res.headersSent) res.writeHead(502, { "content-type": "application/json" });
    res.end(JSON.stringify({ error: "Upstream MCP request failed", detail: String(err?.message || err) }));
  }
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`SwarmMemo MCP Bridge listening on ${PORT}; upstream=${UPSTREAM}`);
});
