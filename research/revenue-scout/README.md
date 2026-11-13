# Revenue Scout Registry

Updated: 2026-11-14 (UTC)

## Purpose
A deduplicated discovery registry for candidate revenue sources and a separate opportunity ledger. A domain in this registry is not proof of a live job, buyer, AI permission, payment, or India payout eligibility.

## Verification vocabulary
- **Search-result discovery**: surfaced in a search result; not a claim that the destination page was visited.
- **Directory-listed**: listed in a live directory page inspected during the run; the underlying platform was not necessarily inspected.
- **Direct page verified**: the platform or official event page was opened and inspected at the recorded date.
- **Job-level verified**: an exact live listing was inspected. Index-only snapshots are labelled separately.
- **Eligible**: passes the owner's filters, including AI-only execution, no upfront spend, no unapproved third-party account/ID creation, and a credible payout path to India.
- **Proposal-ready**: exact scope, buyer, AI policy, acceptance, India payout and payment evidence are verified. This is deliberately stricter than discovery.

## Current coverage
- Unique source domains: **203** (20.3% of the 1,000-domain target).
- Domains with direct page verification: **18**. New direct checks this run included Advance.to, Apart Research, Code for India, IndiaHackathons, TryAPI, Appixa, AgentFoundry, Hack4Hack and Frantic.
- Job-level verified source domains: **3**. A directly opened platform homepage or event page is not counted as a job.
- Opportunity records in the current ledger: **22**.
- Opportunity verification: discovered 22; exact pages directly verified 13; aggregator/index-level 6; search-result-only or page-extraction-limited 3.
- Pipeline: eligible 0; proposal-ready 0; approved-to-contact 0; submitted 0; accepted 0; delivered 0; approved 0; payable 0; cash received 0.
- Search-result discovery is not counted as direct page verification. A directory listing is not counted as a job. A platform's own payment receipt is not independent proof of bank or wallet receipt by this owner.

## Current best leads

**Apart Research — Threat Intelligence & Threat Modelling Hackathon** is the strongest currently identified high-upside contest with an explicit India payment path. The official event page advertises $5,000 total cash prizes ($2,500 / $1,250 / $750 / $250 / $250), 4–6 December 2026, free, online, global, solo or teams of 1–5. AI tools are explicitly permitted. Ground rules require public data only, defensive/methodology framing and already-publicly-attributed adversaries; no live penetration testing is required. Official prize terms say international bank transfers are handled through Mercury communications and Indian bank accounts must provide SWIFT details. However, the event page's embedded submission form says the submission window is closed despite the future event dates and the visible free sign-up form. Held pending a reliable registration-status check and owner approval; no sign-up or terms acceptance performed.

**Apart Research — Agent Attribution Hackathon** is another potential online sprint on 11–13 December 2026. The official page allows solo participation and explicitly permits AI tools; Track 1 uses a held-out test set. Advance.to reports $2,000 in cash prizes, but the official event page does not publish the amount. The embedded submission form also says closed despite future dates. Hold until the organiser's prize amount and registration status are confirmed. Common Apart prize terms cover SWIFT transfers to Indian bank accounts.

**Google / Kaggle — Gemma 4 Developer Agent Competition** is the strongest machine-scored AI-coding candidate: the official Kaggle search result confirms a $65,000 main track ($37k / $18k / $10k) plus a $10,000 small-model bonus; main entry deadline 2026-11-25 23:59 UTC and final submission 2026-12-02 23:59 UTC. The separate $35,000 paper track closed 2026-11-12. The main task is to post-train Gemma 4 into an offline coding agent evaluated on hidden repository tasks. The official page could not be extracted into readable lines during this run, so the entry rules, India-specific payout method and any identity checks remain unverified. Kaggle account creation and binding rule acceptance are required; no sign-in, rules acceptance, data download or submission performed.

**Kiroween 2026** remains a possible Kiro-build contest from the previous run, with a $100,000 advertised pool and a 2026-12-04 deadline. It requires Devpost/Kiro registration and acceptance of binding rules, and winner payment is subject to verification. No account was created and no terms were accepted.

## Rejections / holds
- **Code for a Billion (Code for India):** official page advertises ₹18 lakh in prizes and a 2026-11-15 deployment/submission deadline. Registration requires name, email, mobile, address-level location fields, GitHub handle and open-source consent; AgentFoundry sign-up is also required. Payment rail not stated and deadline is one day away. Rejected for this run; no registration or project submission.
- **Frantic #148 — Silvertongue MCP draft:** exact page is now closed. It reports 96 paid and 4 accepted; a public receipt records a $1 USD x402 payout on 2026-11-13. The receipt explicitly says the source is not verified and no external public anchor is published, so this is a platform ledger record, not independent proof of cash receipt. The task also asks for a personal message/post and requires an identity gate; India cash-out path not verified.
- **Frantic #97 — first-bounty rebate:** still open but requires the owner to fund a $10+ bounty and pay an independent worker before receiving the rebate. This violates the no-upfront-spend rule. Frantic's terms say vendor funding is not escrow or held client money.
- **BountyBook:** 118 open index entries, typical $2–$12 USDC promised; 0% escrowed on Jobbi snapshot, wallet/x402 required; direct job API pages returned 502.
- **Agent Bounties:** 12 open index entries; most require funding child bounties (upfront money), and the remaining Safari task requires macOS; wallet/claim bond required.
- **BasedAgents:** 10 open entries; 0% escrowed, 0.25–$2 USDC promised; wallet required and runtime installation scope needs review.
- **TryAPI provider programme:** free to join and advertises 70% revenue share, but requires an existing owner-controlled API, has a $50 withdrawal threshold, and does not state the India payout rail. Not an immediate job.
- **Appixa referral programme:** UPI is listed, but commissions require referring businesses through WhatsApp/Telegram/email. Rejected because it depends on personal outreach.
- **AgentX Hackathon:** ended; registration closed 3 Nov and submissions closed 12 Nov; teams of 2–4 and shortlisted teams pay ₹499. Rejected.
- **boss.dev:** official docs list 23 payout countries and India is absent.
- **Algora:** payout eligibility for Indian individual contributors not established; surfaced evidence points to sole proprietors/LLPs/companies.
- **Meta VR Start Developer Competition 2026:** up to $1M advertised, but requires Meta VR Start membership and Developer Access; winner verification, payment provider details and publicity terms conflict with owner constraints.
- **AgentLancer service 301:** remains one channel, but no new job-level opportunity or new buyer/escrow/payment was verified in this run.

## Guardrails
No proposals, comments, messages, claims, account creation, identity uploads, wallet connections, payout setup, signed terms, deposits, paid upgrades, or commitments were made. No income is reported because no payment was independently confirmed for this owner.

## Files
- `source-registry.csv`: deduplicated candidate domains with provenance and verification status.
- `opportunity-ledger-2026-11-14.csv`: current opportunity pipeline snapshot.
