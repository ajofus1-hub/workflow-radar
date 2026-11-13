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
- Domains with direct page verification: **19**.
- Job-level verified source domains: **4**.
- Opportunity records in the current ledger: **34**.
- Opportunity verification: discovered 34; exact pages directly verified 25; aggregator/index-level 6; search-result-only or page-extraction-limited 3.
- Pipeline: eligible 0; proposal-ready 0; approved-to-contact 0; submitted 0; accepted 0; delivered 0; approved 0; payable 0; cash received 0.
- Search-result discovery is not counted as direct page verification. A directory listing is not counted as a job. A platform's own payment receipt is not independent proof of bank or wallet receipt by this owner.

## Current best leads

**Apart Research — Threat Intelligence & Threat Modelling Hackathon** is the strongest currently identified high-upside contest with an explicit India payment path. The official event page advertises $5,000 total cash prizes ($2,500 / $1,250 / $750 / $250 / $250), 4–6 December 2026, free, online, global, solo or teams of 1–5. AI tools are explicitly permitted. Ground rules require public data only, defensive/methodology framing and already-publicly-attributed adversaries; no live penetration testing is required. Official prize terms say international bank transfers are handled through Mercury communications and Indian bank accounts must provide SWIFT details. However, the event page's embedded submission form says the submission window is closed despite the future event dates and the visible free sign-up form. Held pending a reliable registration-status check and owner approval; no sign-up or terms acceptance performed.

**Apart Research — Agent Attribution Hackathon** is another potential online sprint on 11–13 December 2026. The official page allows solo participation and explicitly permits AI tools; Track 1 uses a held-out test set. Advance.to reports $2,000 in cash prizes, but the official event page does not publish the amount. The embedded submission form also says closed despite future dates. Hold until the organiser's prize amount and registration status are confirmed. Common Apart prize terms cover SWIFT transfers to Indian bank accounts.

**Google / Kaggle — Gemma 4 Developer Agent Competition** is the strongest machine-scored AI-coding candidate: the official Kaggle search result confirms a $65,000 main track ($37k / $18k / $10k) plus a $10,000 small-model bonus; main entry deadline 2026-11-25 23:59 UTC and final submission 2026-12-02 23:59 UTC. The separate $35,000 paper track closed 2026-11-12. The main task is to post-train Gemma 4 into an offline coding agent evaluated on hidden repository tasks. The official page could not be extracted into readable lines during this run, so the entry rules, India-specific payout method and any identity checks remain unverified. Kaggle account creation and binding rule acceptance are required; no sign-in, rules acceptance, data download or submission performed.

**Kiroween 2026** remains a possible Kiro-build contest from the previous run, with a $100,000 advertised pool and a 2026-12-04 deadline. It requires Devpost/Kiro registration and acceptance of binding rules, and winner payment is subject to verification. No account was created and no terms were accepted.

## AgentLancer — current public snapshot
A read-only public feed refreshed 2026-11-13 UTC showed **12 service offers and 12 open job requests**. Feed status was `none_verified_yet`: buyer instructions were not ready, a transaction hash was missing, and the snapshot showed 0 confirmed deposits and 0 payouts with transaction hashes.

- All 12 job requests are open/unassigned and attributed to requester 146 / `ctf01523`; the buyer's real-world identity is not independently verified.
- Three titles (`ssrf3`, `ssrf2`, `ssrf-evt`) appear to concern SSRF/security testing, but no authorization, target scope or acceptance criteria are supplied; rejected under the no-unauthorized-security-testing rule.
- Five titles contain test/injection-like strings, including SQL-injection-shaped payloads; rejected without execution.
- Four remaining titles (`ntfyevt`, `hookdet`, `jr1` and one opaque title group) do not disclose enough scope or acceptance criteria; held/rejected.
- Budgets shown are 20–22 with currency unspecified and a one-day duration. No job states escrow, acceptance criteria, a payout rail, India eligibility or a transaction hash.
- The 12 service offers are provider listings, not buyer jobs; their advertised budgets range from 5 to 40 USDT/USDC, but none shows escrow or payment proof.
- Public agent profile 173 (`@workflowradaragent`) advertises a $120 / 2-day verification service and USDT/USDC payout after platform fee, but has 0 verified reviews and no escrow or completed payout proof. The previously tracked AgentLancer service 301 remains a separate channel; no new buyer or payment was verified.

No proposal, message, claim, profile edit or work was submitted on AgentLancer.

## Rejections / holds
- **Code for a Billion (Code for India):** official page advertises ₹18 lakh in prizes and a 2026-11-15 deployment/submission deadline. Registration requires name, email, mobile, location fields, GitHub handle and open-source consent; AgentFoundry sign-up is also required. Payment rail not stated and deadline is one day away. Rejected for this run; no registration or project submission.
- **Frantic #148 — Silvertongue MCP draft:** exact page is now closed. It reports 96 paid and 4 accepted; a public receipt records a $1 USD x402 payout on 2026-11-13. The receipt explicitly says the source is not verified and no external public anchor is published, so this is a platform ledger record, not independent proof of cash receipt. The task also asks for a personal message/post and requires an identity gate; India cash-out route not verified.
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

## Guardrails
No proposals, comments, messages, claims, account creation, identity uploads, wallet connections, payout setup, signed terms, deposits, paid upgrades, or commitments were made. No income is reported because no payment was independently confirmed for this owner.

## Files
- `source-registry.csv`: deduplicated candidate domains with provenance and verification status.
- `opportunity-ledger-2026-11-14.csv`: current opportunity pipeline snapshot.

---

## Run 3 — 2026-11-14 02:43 IST

### Coverage snapshot

- **232 unique candidate source domains** in the deduplicated registry (203 previously recorded + 29 newly added).
- **44 source pages/feeds directly inspected**; search-result-only and aggregator-only sources remain separately labelled.
- **11 source domains have at least one job-level check**.
- **48 opportunity records** in the ledger: 38 exact listings/pages directly verified, 8 aggregator-index-only, and 2 official search-result discoveries.
- **0 eligible, 0 proposal-ready, 0 approved-to-contact, 0 submitted, 0 accepted, 0 delivered, 0 payable, 0 cash received**.

### Fresh agent-marketplace checks

- **Olas Mech:** the official explorer reports about $111,061 in total task payments and $103,768 realised by Mechs, with 13 daily active agents in the latest inspected snapshot. This is real on-chain agent commerce, but monetization requires deploying a Mech and connecting a wallet; no wallet was connected.
- **AI Agent Store / Claw Earn:** the live task board showed 0 available tasks, 1 in progress and 83 completed. Its USDC-on-Base escrow is contract-enforced, but the worker must connect a wallet, hold Base ETH for gas and stake 30% on the first task (20% for tasks 2–3, then 10%). No task was available at the check.
- **AI Agent Store card-paid jobs:** the public jobs page showed no open jobs. It advertises a buyer card hold before publication and 85% seller share, but payouts use Stripe and seller verification. India payout eligibility is not established; no account was created.
- **Toku:** its FAQ explicitly allows AI agents, charges 15%, and sends 85% to an agent wallet; bank withdrawal uses Stripe Connect. The inspected $1–$3 DeFi-report task had 174 bids and 0 accepted/delivered; a $5–$25 due-diligence task had 182 bids and contradictory Open/Withdrawn status. Stripe's India Connect requirements restrict transfer-capable connected accounts to companies/LLPs, with verification; an individual route is not available under the current rules. No agent was registered.
- **AgenticTrade:** the public marketplace lists many paid API services, with advertised per-call prices from fractions of a cent to $100. The platform reports 4,886 calls and 1,258 active agents; provider earnings are paid in USDC to a linked Base wallet with a $10 monthly minimum. The metrics are platform-reported, not independently reconciled to a payout transaction. Wallet and account setup are prohibited under the current constraints.
- **RapidAPI:** official provider docs say a 20% marketplace fee and PayPal-only payouts after customer payments settle, generally at the end of the following month. No account or PayPal setup was attempted.
- **Apify:** official monetization docs show a 20% commission and monthly payouts, but identity/KYC is mandatory; individuals must upload a government-issued ID or driver's licence. Rejected under the owner's no-ID rule.

### Other fresh findings

- **Taskmarket:** the Markdown TOC task is funded at $0.50 USDC but had 90 submissions and requester-controlled acceptance with no evaluator. The FlapJax task has a $1 listing deposit but pays workers in 100,000 FLAPJAX tokens off-platform. Both require a wallet; the latter is token-only.
- **Bounty Radar:** its $600 USDC RFC 9421 mirror claims escrow, but the index marks escrow unknown and no public funding transaction was found. A $2,000 Tenstorrent issue requires N150 hardware and has no verified escrow. Neither was pursued.
- **Opire / Claude Builders Bounty:** three open GitHub issues advertise $50–$200, but creator-arranged Stripe payment is not automatic escrow; India payout/KYC was not verified. No claim or PR was made.
- **GitReward and Collaborators:** both claim escrow/automatic payout on merged GitHub PRs, but require wallet connection; no exact funded task or transaction was independently verified.
- **OpenBounty.ai:** the site states its MVP is in mock-payment mode and no real funds move. **OpenBounty.app** routes work to humans and does not pre-fund the worker.
- **WorkUSDC:** direct page inspection found a 2 USDC proposal credit and wallet requirement; rejected as upfront cost.
- **Frantic:** current page showed no open bounties; the previously inspected #148 is closed and higher payouts require identity verification.
- **AgentBounty.org:** its page claims hundreds of active bounties, but featured examples show February/March 2026 deadlines, already past. No current job or payment proof accepted.

### Competition watchlist

- **Gemma 4 Developer Agent Competition:** remains the strongest AI-agent-specific machine-scored competition found. The main track is open into late November/early December; the paper track is closed. Entry requires a Kaggle account and rule acceptance, and the payout route to India is not confirmed. No account was created or rules accepted.
- **Name That LLM:** a longer-horizon Kaggle model-attribution competition advertises $50,000 across ten $5,000 prizes and automated balanced-accuracy scoring. It requires a Kaggle account; the readable official rules and India payout route were not available, so it remains a gated discovery only.
- **Codegeist 2026:** $120,000 advertised cash pool, but requires Devpost/Atlassian accounts, winner identity/qualification verification and broad publicity rights. Rejected under current constraints.
- **NeuraViz AI Challenge:** ₹150,000 advertised, free entry, but human idea judging and possible in-person interview/live demo; no payout rail or escrow evidence. Rejected.
- **AgentVerse 26:** registration closed, ₹100 entry fee, and advertised rewards are OpenAI credits rather than cash. Rejected.
- **AWS MSP AI Hackathon:** requires an AWS Partner Network organization and corporate email; owner authorization was not established. Rejected.

### AgentLancer continuity

AgentLancer service 301 remains one tracked channel. The service-301 URL did not resolve during this run; the public feed previously inspected showed no confirmed funded buyer order or payout. No listing edits or buyer messages were made.

### Decision

No current opportunity satisfies all of the owner's restrictions at once. The most promising real agent marketplaces either require a wallet/stake (Claw Earn, Olas, AgenticTrade, Taskmarket), Stripe/KYC (Toku, AI Agent Store, Opire), PayPal/KYC (RapidAPI), or government ID (Apify). Competition listings are promising but require account creation and/or identity verification that has not been approved.

No proposals, bids, comments, messages, claims, registrations, wallet connections, payout setup, signed terms, deposits, paid upgrades, deployments, or commitments were made. The automation continues to search; no income is reported without independent payment confirmation.

