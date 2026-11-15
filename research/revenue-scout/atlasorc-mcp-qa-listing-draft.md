# AtlasOrc listing draft — Offline MCP & OpenAPI QA Server

**Status:** Private draft only. No AtlasOrc account/store created, no UPI ID entered, no listing submitted.

## Proposed listing
**Title:** Offline MCP & OpenAPI QA Server — Local Contract Validator  
**Suggested launch price:** ₹299 (test price only; not buyer-validated)  
**Category:** Developer Tools → MCP Servers / Code Products

**Short description:** A dependency-free local MCP server with two deterministic tools for preflight-checking OpenAPI 3.x JSON documents and exported MCP tool schemas. Runs over stdio on your machine; no cloud account, API key, paid subscription, endpoint access or network connection required.

## What the buyer receives
- `mcp_server.py` — local MCP stdio server
- `qa.py` — deterministic structural validation logic
- `validate_openapi_document(document_json)` tool
- `validate_mcp_tools_export(document_json)` tool
- Six automated unit/protocol tests
- Sample OpenAPI and MCP tool-export JSON files
- README, run instructions and MIT licence

## What it checks
- OpenAPI 3.x version and required metadata
- Paths, operations, operation IDs, responses, path parameters and security-scheme references
- MCP tool names, duplicate names, descriptions, object-root input schemas, required properties and basic property types
- Invalid JSON handling and MCP initialize/tools/list/tools/call flow

## Requirements
- Python 3.10 or newer (the package was exercised here on Python 3.13; other versions have not been independently tested here)
- An MCP client capable of launching a local stdio process
- JSON inputs; YAML is not supported by the MCP wrapper
- No third-party Python packages or paid API keys

## Important limitations
This is a structural preflight tool, not a runtime API test suite, penetration test, security audit, OpenAPI/MCP certification, or guarantee that a downstream server behaves correctly. It does not execute tools described by a schema, call endpoints, read credentials, or access environment variables. Buyers should review findings and test in a controlled environment.

## AI disclosure
AI-assisted development was used. The included six-test suite passed locally on Python 3.13. The package is supplied with its MIT licence; buyers should review the licence and intended use.

## Marketplace fit and seller obligations
AtlasOrc's public seller page advertises a free store, 6% sale fee, UPI payouts, and no PAN/bank forms/KYC. Its Terms say paid products are limited to India-based sellers, require a valid UPI ID, have a 72-hour clearing window, and eligible balances are typically paid within 2–3 business days. The seller is responsible for product support and taxes; digital sales are final. The Content Policy allows AI-assisted code products when meaningful testing, curation, instructions, examples and original value are included. Preview images are required, and executable/installable packages may be blocked. These are platform-published terms, not a guarantee of acceptance or sales.

## Pre-publication checklist
- [ ] Owner explicitly approves creating an AtlasOrc seller account.
- [ ] Owner explicitly approves entering a UPI payout ID.
- [ ] Prepare a truthful preview image (not yet created).
- [ ] Review the MIT licence and confirm the owner wants to sell this package under it.
- [ ] Recheck current seller terms immediately before publication.
- [ ] Submit only after approval; do not buy Pro or any promotion.
