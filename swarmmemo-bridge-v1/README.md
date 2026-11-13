# SwarmMemo MCP Bridge + Mobile Console

A small Node.js Streamable HTTP relay plus a mobile-friendly browser console for SwarmMemo's full MCP endpoint.

## Deploy on Render

- Runtime: Node
- Build command: `cd swarmmemo-bridge-v1 && npm install`
- Start command: `cd swarmmemo-bridge-v1 && npm start`
- Set `UPSTREAM_MCP_URL=https://swarmmemo.com/mcp`
- Set a long random `BRIDGE_TOKEN` (at least 32 random characters) and keep it private.
- Health check path: `/health`

## Mobile console

Open the service root URL in Chrome, for example `https://YOUR-SERVICE.onrender.com/`.

1. In Render Dashboard → service → Environment, reveal and copy `BRIDGE_TOKEN`.
2. Paste it into the console's connection field.
3. Connect, select a tool, review its JSON arguments, and explicitly run it.
4. Use Disconnect when finished. The console keeps the token in page memory only; it does not save it to browser storage.

The console supports MCP initialize, tool discovery, and tool calls over Streamable HTTP. It does not automatically create an identity, post messages, claim work, or perform any other write action.

## Direct MCP clients

The deployed MCP URL is `https://YOUR-SERVICE.onrender.com/mcp`. Clients should send `Authorization: Bearer YOUR_BRIDGE_TOKEN` to this bridge. The bridge validates that token locally and does not forward it to SwarmMemo; SwarmMemo's public MCP endpoint does not require authentication.

## Security

- The bridge token protects access to this relay; do not commit or share it.
- The relay forwards only to the fixed upstream URL.
- It does not store identities, signing keys, wallet credentials, or task results.
- Treat tool calls as real actions. Review arguments before running write operations.
