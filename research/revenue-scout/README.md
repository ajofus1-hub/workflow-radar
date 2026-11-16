# Revenue Scout — Run 22 snapshot (16 Nov 2026, 10:46 IST)

- Distinct source websites: **654**; 11 new domains added this run (10 directly inspected; 1 search-only/inaccessible).
- Directly inspected source domains: **391**; job/program-verified domains: **125**.
- Unique exact opportunity URLs: **503**. These are not the same as confirmed paid jobs; the ledger includes closed competitions, rejected listings, service offers and aggregator discoveries.
- Opportunity evidence flags (not mutually exclusive): **440** directly verified, **85** aggregator-index verified, **36** discovery-only/no direct or aggregator verification.
- Execution ledger counts: eligible **0**, proposal-ready **0**, approved-to-contact **0**, submitted **0**, accepted **0**, delivered **0**, approved **0**, payable **0**, cash received **0**. Cash received remains independently confirmed only; no advertised prize is income.

## Run 22 findings

- **AgentLancer reconciliation corrected:** Service 301 is a published offer owned by public agent profile `@workflowradaragent` (agent 173), not an accepted paid contract. Its service JSON says `price_from=$25`, while the profile page says `$120` starting price and 0 verified reviews. Job #343 is requested by and assigned to `@ctf01523` (agent 145), not agent 173. Contract #327 is therefore not evidence of the owner's accepted work.
- **AgentLancer payment blocker:** Contract #327 has no tx hash, 0/10 confirmations, no payment_id in the canonical monitor, and a non-payable placeholder address. The public status card conflicts (payment_id 7, $20 USDT versus the monitor's $21 USDT); the first-payment page references contract #123, whose status endpoint returns `contract_not_found`. Do not send buyer payment instructions or deliver the opaque `ssrf-qe2` job.
- **BountBee missions directly refreshed:** M-2419, M-2426 and M-2422 pages load and show Racing. Homepage claims ₹14,87,900 aggregate escrow, 40 verified missions and same-day INR payouts, but these are platform statements without an independent escrow receipt or named payout processor. M-2419 has a live-banner/countdown conflict and one unanswered exception-queue schema. Labs onboarding asks for Lab name, GitHub logins and skills; no ID field is visible, but verification policy is unpublished. Terms page returns 404.
- **Agentware** remains the best upcoming AI-agent-specific contest: free, online, solo permitted, AI coding tools expected, Nov27–30, $1,800 advertised prizes. Registration is through Discord; payout rail, escrow and India-specific payment eligibility are not published. No code before Nov27.
- **Steerability Challenge:** $40k+ and AI coding agents allowed, but teams of 2–5 required and registration closed Nov1 AoE; final submission Nov23 AoE. Not available to a new solo entrant.
- **TimeNet:** Round 1 closes Nov22; prizes are compute credits only, teams of 2–4, and public X/LinkedIn/Discord posts are mandatory. Rejected.
- **Codegeist 2026 ($120k) and Cognizant Open Agentic Web ($10k):** official rules require original entrant-owned work and winner identity/qualification/role verification; AI coding permission is not explicit. Rejected under no-ID/AI-only restrictions.
- **AWS MSP AI Hackathon ($64k):** requires an AWS Partner Network/MSP organization and corporate email; owner eligibility not established. Rejected.
- **Builder.io Agent-Native Hackathon ($10k):** closed Nov9; winner identity verification and tax forms required. Rejected.
- **AgentX–AgentBeats:** Phase 2 ended Jun2; the headline $1M includes mostly credits/resources, with cash only in selected custom tracks. Closed.
- **ARC Prize 2026:** closed Nov2/Nov8; results Dec4; open-source and offline Kaggle evaluation, no API-based systems.
- **AI Trainers Jobs** and **AgentDeadlines** are useful discovery aggregators, not payers. AgentDeadlines data footer says last updated Nov8. **AgenticJobs** remains search-only because direct fetch failed.
- The Google Quantum AI Verifiable Quantum Circuit Compilation competition remains the strongest machine-verifiable AI-agent competition ($150k, AI coding agents explicitly encouraged), but current India prize payment is unresolved and the only public payout-vendor evidence previously found points to Payoneer KYC/ID. No Kaggle account or rules acceptance.

## Current priorities

1. Keep BountBee M-2422 as a conditional private work sample only; do not create a Lab, claim a slot or submit until the buyer identity, independent escrow, Indian payout processor and verification policy are documented.
2. Do not continue AgentLancer job #343; it is not the owner's job and its payment/scope records conflict.
3. Monitor Agentware before Nov27 without joining Discord or writing project code.
4. Continue searching for a machine-verifiable task with a documented India bank payout that does not require third-party ID/KYC, wallet setup or account creation.

No accounts, proposals, comments, messages, slot claims, contracts, wallet connections, identity uploads, payout details, deposits or submissions were created in this run.
