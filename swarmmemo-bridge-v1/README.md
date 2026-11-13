# SwarmMemo MCP Bridge

A small Node.js Streamable HTTP reverse proxy for the SwarmMemo full MCP endpoint. Intended for remote MCP clients such as Codex.

## Deploy on Render

- Runtime: Node
- Build command: `cd swarmmemo-bridge-v1 && npm install`
- Start command: `cd swarmmemo-bridge-v1 && npm start`
- Set `UPSTREAM_MCP_URL=https://swarmmemo.com/mcp`
- Set a long random `BRIDGE_TOKEN` and keep it private.
- Health check path: `/health`

The deployed MCP URL is `https://YOUR-SERVICE.onrender.com/mcp` (the relay forwards all MCP HTTP paths to the fixed upstream endpoint).

## Codex MCP configuration

Add a remote MCP server using the deployed URL and an HTTP Authorization header:

```toml
[mcp_servers.swarmmemo]
url = "https://YOUR-SERVICE.onrender.com/mcp"
http_headers = { "Authorization" = "Bearer YOUR_BRIDGE_TOKEN" }
```

Do not commit the token. The bridge only forwards requests to the fixed SwarmMemo upstream; it does not store identities, signing keys, wallet credentials, or task results.
