# Qxel listing draft — Offline MCP & OpenAPI QA Server v1.1

**Status:** Private draft only. No Qxel account created, no seller activation completed, no UPI ID or billing/payout details entered, no OTP requested, and no product uploaded or published.

## Proposed product listing

**Title:** Offline MCP & OpenAPI QA Server — Local Contract Validator

**Suggested launch price:** ₹299 (test price only; not buyer-validated and not a sales forecast)

**Product type/category:** Software / Developer Tools / APIs & Automation / MCP

**Product URL slug suggestion:** offline-mcp-openapi-qa

### Short description

Validate OpenAPI 3.x JSON documents and exported MCP tool schemas locally before integrating them into an application. This package includes a local stdio MCP server, deterministic structural checks, sample inputs and a six-test suite. It does not require a cloud account, paid API key, external endpoint or network connection to perform its included checks.

### What is included

- mcp_server.py — local MCP stdio server
- qa.py — deterministic validation functions
- validate_openapi_document(document_json)
- validate_mcp_tools_export(document_json)
- Six automated unit/protocol tests
- Sample OpenAPI and MCP tool-export JSON files
- README, setup instructions and MIT licence

### Checks included

- OpenAPI 3.x version and required metadata
- Paths, operations, operation IDs and responses
- Path-parameter and security-scheme references
- MCP tool names, duplicate names and descriptions
- Object-root input schemas, required properties and basic property types
- Invalid JSON handling and MCP initialize / tools-list / tools-call flow

### Requirements

- Python 3.10 or newer is the stated target; the included test suite was executed in this environment on Python 3.13
- An MCP client capable of launching a local stdio process
- JSON inputs; the MCP wrapper does not currently accept YAML
- No third-party Python packages or paid API keys

### Important limitations

This is a structural preflight validator, not a runtime API test suite, penetration test, security audit, OpenAPI/MCP certification or guarantee that a downstream server behaves correctly. It does not execute tools described by a schema, call endpoints, inspect credentials or access environment variables. Buyers should review findings and test in a controlled environment.

### AI-use disclosure

AI-assisted development was used. The included six-test suite passed locally on Python 3.13 (6 passed). The package is supplied under the included MIT licence. Buyers should review the licence and their intended use.

### Delivery

One ZIP archive containing the complete source package, examples, tests, README and licence. Qxel supports ZIP uploads and documents a 300 MB product-file limit.

### Preview asset still required

Qxel requires a product thumbnail. No thumbnail has been created or uploaded. A truthful screenshot or original product graphic should be prepared before any publication.

## Seller-channel checks (16 Nov 2026)

- Qxel's pricing page advertises 2% platform commission during its first-anniversary promotion from 1 November 2026 to 17 January 2027; its Seller Agreement states a standard 6% commission. The 6 November payment announcement confirms the 2% campaign rate as an exception to the standard 6%. Payment gateway charges and applicable taxes are separate.
- Qxel advertises Cashfree processing and withdrawals to UPI or an Indian bank. Its payout guide says fresh sales become withdrawable after 24 hours and a withdrawal usually completes in 1–2 hours, with possible payout charges. The pricing page separately advertises 3–5 day withdrawals, so actual timing is inconsistent and must be confirmed in the seller dashboard.
- Account activation requires billing address, legal name, UPI or bank payout details and WhatsApp OTP phone verification.
- The privacy policy says Qxel may collect KYC information from certain sellers/buyers where required by law or for security. The public activation guide does not list a mandatory PAN/Aadhaar upload, but it does not guarantee KYC will never be requested.
- Software, source code, scripts, plugins, APIs, automation tools, MCP-related workflows and AI integration guides are within listed allowed categories. No blanket AI-generated-code prohibition was found; disclose AI assistance and ensure ownership/licence rights.
- Seller is responsible for product support, accurate descriptions, intellectual-property compliance, invoices and applicable taxes. Qxel may hold payouts for fraud review or disputes. Its terms describe Qxel as a marketplace facilitator; no seller escrow guarantee was established.
- No buyer order, sale or product-specific demand was verified.

Relevant pages:
- https://www.qxel.in/pricing
- https://www.qxel.in/announcements/november-payment-change
- https://www.qxel.in/docs/seller/activation
- https://www.qxel.in/docs/seller/payouts
- https://www.qxel.in/docs/seller/products/upload-product
- https://www.qxel.in/docs/seller/products/allowed-products
- https://www.qxel.in/legal/seller-agreement
- https://www.qxel.in/legal/privacy-policy
- https://www.qxel.in/legal/terms-of-service

## Pre-publication checklist

- [ ] Owner explicitly approves creating a Qxel account.
- [ ] Owner explicitly approves entering billing information and the preferred UPI payout destination.
- [ ] Confirm no third-party KYC/ID upload will be required; stop if it is.
- [ ] Confirm current commission and any Cashfree/payout charges.
- [ ] Confirm actual withdrawal timing because the public pages conflict.
- [ ] Prepare a truthful thumbnail/preview image.
- [ ] Confirm product ownership/licence and support/refund obligations.
- [ ] Owner explicitly approves the final price and publication.

No account, OTP, UPI entry, upload, listing, buyer contact or sale has occurred.
