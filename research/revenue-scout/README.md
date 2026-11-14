
## Run 14 — 2026-11-14 08:22 UTC

### Coverage after this run
- **378 distinct source domains** in the cumulative registry; 170 marked directly inspected and 53 with at least one job-level verification.
- **190 distinct opportunity/program URLs** in the cumulative ledger; 175 directly verified records and 26 with aggregator-index evidence. These are not all confirmed jobs.
- Added six new source domains: `synmerco.com`, `egig.in`, `neonlink.ai`, `agent-hire.com`, `openforgemarketplace.com`, and `the402.ai`.
- Added 7 new exact job/API-search records and refreshed the Javelin anti-cheat issue evidence. No proposals or external actions were made.

### New findings
1. **Circle Agent Marketplace / Managed Agentic Payments:** Circle's seller docs say direct API sellers receive per-call USDC to an EVM wallet. Separately, Circle says Managed Agentic Payments can pay bank accounts in 50+ currencies, and its Feb 17, 2026 CPN update says an India payout corridor is live via Saber (NEFT typically under two hours; IMPS/RTGS near-instant). This is a conditional B2B/platform route, not proof of individual AI-agent seller eligibility. No sales contact, account, API listing or wallet was created.
2. **Synmerco:** public funds-verified jobs API returned `jobs=[]`, `total=0`. Official payment methods list USD/Stripe and USDC/Base; no India INR/bank route documented. No agent keypair, DID or wallet created.
3. **eGig:** narrow read-only API queries returned zero matches for remote API-testing jobs and MCP-integration projects. This does not prove the entire marketplace is empty; broader queries were not completed after Browser Use credits ran out.
4. **Toku:** official board showed 380+ jobs and 4,185+ agents, but two exact MakeMoney Research AI tasks were weak: one $5–$25 job was marked withdrawn after 183 bids and zero accepted; one $1–$3 report job remained open after 175 bids with zero delivered/accepted. Stripe Connect payout/KYC required; no funded escrow shown.
5. **OpenTask:** exact $500 USDC OpenAPI documentation task remains listed in Hire-first mode. Platform explicitly says it does not hold funds; buyer pays wallet-to-wallet after review. Platform page showed 28 open tasks, 892 agents and one completed-and-paid task. No India bank route or funded escrow.
6. **FinMind:** two $500 Algora issues (#121 and #76) still appear Open in GitHub/Jobbi, but the repository was archived on Jun 19, 2026. Issue #121 has many competing attempts/PRs; #76 already has a contributor/PR. Rejected as non-actionable.
7. **Neon Link:** exact India remote AI Agent Engineer role pays INR 60,000–95,000/month, but requires human application, voice introduction, background check, photo ID and proof of past work. It is not an AI-only task and was rejected.
8. **AgenticTrade:** official page reports 794+ services, 4,886 calls and 1,258 active agents; providers receive monthly USDC to a Base wallet, $10 minimum. No INR bank payout.
9. **Agoragentic:** official page says paid purchasing is temporarily unavailable while custody policy is frozen.
10. **Code4rena:** official homepage says the platform is winding down; active contests are being completed and no new bounty submissions are open.
11. **the402:** official homepage states the platform is closing. **Agent-Hire.com** says its agent marketplace is coming soon and currently charges buyers $99.99 to post jobs. **OpenForge** remains search-result-only because its direct page returned no readable content.
12. **boss.dev:** official docs list 23 supported bounty-earner countries and exclude India; INR is a supported bounty-creation currency, not an India earner location. Personal financial details and a bank account are required.

### Eligibility and financial state
- Fully eligible: 0
- Proposal-ready: 0
- Approved to contact: 0
- Submitted / accepted / delivered / approved / payable: 0
- Independently confirmed cash received: **$0**

The strongest new payment-rail lead is Circle's India CPN corridor, but it requires platform/enterprise onboarding and does not establish an individual seller payout path. It remains research-only until India eligibility and onboarding requirements are confirmed.

# Revenue Scout Registry

Updated: 2026-11-14 06:17 UTC

## Run 13 — 2026-11-14 07:25 UTC

- Added **3 new unique source domains**: agentsigned.com, hacktraining.in and unrealengine.com. The source registry now has **372 unique domains**, of which **163** have direct page verification and **52** have job-level verification. Added direct verification for BasedAgents (previously index-only) and refreshed the itch.io source record for Epic AI MegaJam.
- Added **19 unique opportunity/program records**. The ledger now has **183 unique URLs**: 14 exact BasedAgents tasks, 3 exact AgentSigned jobs, 1 Epic AI MegaJam contest and 1 HACKTRAINING programme-board availability check. These are not 19 eligible paid jobs. The ledger has 168 directly verified records, 26 with aggregator evidence (overlapping categories), and 6 search-only records.
- **BasedAgents:** a read-only browser/API inspection at 2026-11-14 07:25 UTC found 14 open tasks from one buyer agent, Industrial Sentinel Acquisition (creator certification none). All show payment pending, payment due false, payment verified false, payment settled false and escrow null; payment is sign-at-accept, not upfront funded. Five Revenue Guard tasks pay 0.25 USDC but require an external Docker runtime, monitoring the operator seller wallet and at least 0.50 USDC real settled revenue across two UTC dates. Five Revenue Cashback tasks pay 2 USDC but require at least 2.50 USDC real settled revenue across two UTC dates. Four Revenue Trial tasks have no guaranteed bounty and only an optional rebate up to 2 USDC after at least 10 USDC revenue and positive gross profit. All require docker, automation, x402 and a verified Base USDC wallet; no India bank/UPI/INR route is documented. External image installation, unverified buyer and no escrow make all 14 rejected. No registration, wallet, claim or external runtime.
- **AgentSigned:** official jobs board says 10 open roles; three exact job pages were inspected: Marketplace Match-Rate Audit ($3.5k, Meridian Ops, posted Jun 24, 1 applicant); Business Intelligence & Data Analyst ($3k/month, Lumen Data, Jun 30, 0 applicants); Competitor Mention Research Analyst ($1.2k, Nimbus Support, Jun 26, 1 applicant). All remain labelled open but are roughly four months old. Buyers are generic display names with no independent legal identity. Pricing says Stripe checkout, ~8% fee; homepage says earnings example is illustrative and payouts activate only when billing is enabled. No escrow, exact acceptance tests, billing activation, India payout eligibility or receipts verified. All three rejected; no sign-in/application.
- **HACKTRAINING:** official homepage, /programs and responsible disclosure policy inspected. Homepage markets $40K+ paid but live counters show $0K+, 0 researchers, 0 active programs and 0 bugs reported; /programs page showed no programme cards. Responsible disclosure rules authorize only active scoped programs and prohibit automated scanning without permission, DoS, phishing and unnecessary data access. UPI/bank/PayPal payout is claimed but no exact active job, buyer, bounty or payout proof exists. No account or testing.
- **Epic AI MegaJam 2026:** official itch.io jam page and Epic's Unreal Engine announcement inspected. Submissions remain open until **2026-11-16 01:59 UTC / 07:29 IST**; page showed 9,952 joined and 66 entries. Any AI tools are permitted; solo entry allowed; $65,000 total cash prizes, with $2,500 Solo Driver award and separate discretionary continuation grants up to $50,000. It is human-judged, not machine-accepted; requires active Epic account, human submission, playable game and 30–60 second gameplay video (no face/camera appearance required). Full rules on Box were inaccessible, so India eligibility and international payment rail are unconfirmed. Conditional hold only; no account, Join action, rule acceptance or submission.
- **NeuraViz:** refreshed official main page still shows a Dec 10 2026 deadline and ₹150,000 advertised pool, but winners may be invited to an in-person interview/demo; AI policy and payout rail remain unspecified. Existing rejection retained. **Build with AI 2026** landing page still says applications open but its own deadline is April 26 2026; expired. **AMD AI League** old lablab.ai URL now redirects to Starfield Labs events page showing “No events yet”; do not treat old league listing as a live opportunity.
- **Apart Research AI x Epistemics** remains the closest conditional cash opportunity: $2,000 pool, AI tools allowed, online/solo/global, Indian SWIFT bank transfer specified by official prize terms, deadline **2026-11-16 17:29 IST**. Human judged, no escrow; official template and author details remain outstanding. Private OpportunityProof draft has not been submitted.
- No new eligible or proposal-ready opportunity. No proposal, public post, comment, account, registration, wallet, API key, ID, payout details, signed terms, deposit, claim or submission was made. AgentLancer service 301 remains separately tracked. Cash received remains **$0**.

## Run 12 — 2026-11-14 06:17 UTC

- Added **2 new unique root domains**: Agentizable.ai and Jobs in AI. Both official pages/docs were directly inspected. The source registry now has **369 unique domains**.
- Added **12 new opportunity/program records** and refreshed two existing Taskmarket task records. The ledger now has **164 unique URLs**. The 12 additions comprise four exact Taskmarket task records, five exact Nexussyn GitHub issues, one Daydreams agent-bounty issue, and two platform-programme records (Agentizable and Jobs in AI).
- **Apart Research:** rechecked the live AI x Epistemics sprint page and prize terms. The page showed 1,497 signed up; AI tools are explicitly allowed; online/global/solo participation is permitted; a 3–5 minute video demo is optional, with no mandatory camera presentation stated. Submission closes 2026-11-16 11:59 UTC / 17:29 IST. The public sign-up and submission forms request personal details, and submission accepts the terms. Ashgro Inc pays by bank transfer; Indian recipients must provide SWIFT details. No escrow; human judging; official template copy redirects to Google sign-in. The private report was refreshed, but no form, account, terms acceptance or submission was made.
- **Taskmarket:** the official public API filter `GET /api/tasks?status=open&minReward=10000000&sort=reward_desc&limit=20` returned an empty task list. A control query returned six open tasks; the highest reward was **USD 5.00**, so no open task at or above USD 10 was present. The six open tasks were: a USD 5 promotional-post pool split among up to 50 agents (personal public posting, excluded); two FlapJax tasks with USD 1 listing deposits but actual worker payouts in FLAPJAX off-platform (token-only, excluded); two USD 0.50 USDC code/data tasks with 88–99 submissions and no evaluator; and one USD 0.50 OUSD meme task. The public task pages/API expose held-reward transaction hashes, but BaseScan could not be accessed for independent chain confirmation. Taskmarket's withdrawal docs only describe USDC on Base/OUSD on Tempo to a registered on-chain address; no India bank/INR route is documented. The homepage platform-reports 1,025 tasks posted, 463 agents paid and USD 4,398.62 rewards posted; the separate Explorer reports USD 3,355.74 paid all-time, 1,146 settlements, USD 195 in seven days and 304 active agents. Metric definitions/totals differ across surfaces and are not independently reconciled receipts. No wallet was connected.
- **Agentizable.ai:** its public earn inventory API returned `degraded=true`, `coverage=unavailable`, `item_count=0`, `items=[]`. No current funded bounty was visible. Terms say funding is not payment and only canonical settlement events prove solver payment. Account/wallet linking required; no account or wallet created.
- **Jobs in AI:** official agent registry shows four seeded example profiles, all with zero verified completions. The agent registration form requires an API endpoint, pricing and approval for an API key. Stripe escrow is described, but programmatic job discovery is not shipped, x402 payouts are only roadmap, and no exact agent-eligible funded job or India payout route was verified. No registration.
- **Nexussyn AI Growth Engine:** five exact GitHub agent-task issues (#1–#5) advertise USD 5–15 USDC and explicitly permit AI agents. Acceptance is PR review/merge, not an automated evaluator; rewards are described as logged on merge, not pre-funded escrow. GitHub connector search returned zero merged PRs in the repository, despite many open/competing claims. A separate AutoGen collaboration issue claims USD 560+ in prior bounty payments, but that claim was not substantiated by the current merged-PR query. No wallet/payout route or India cash-out was verified. All five rejected.
- **Daydreams agent-bounties:** exact issue #297 advertises USD 1,000 for a deployed Fresh Markets Watch agent, but does not specify worker payout currency/network or show funded escrow. It requires Cloudflare/Alchemy setup and x402 deployment. The repository currently returned 34 open PRs and zero merged PRs in the GitHub connector search. A separate payment-proof question (#340) has no maintainer response. Rejected.
- No new eligible or proposal-ready opportunity was found. No comments, claims, proposals, PRs, accounts, wallets, API keys, payout details, signatures, deposits or submissions were made.




## Run 11 — 2026-11-14 05:21 UTC

- Added **6 new unique root domains**: MoltJobs, VoxPact, NEAR.org Founder Hub, NEAR Protocol Rewards, NEAR Hackathon and Shipyard. All six official source pages/programmes were directly inspected; the source registry now has **367 unique domains**.
- Added **16 new opportunity/program records** (six exact MoltJobs jobs; four stale NEAR legacy listings; VoxPact provider programme; NEAR Agent Market provider programme; NEAR Protocol Rewards; NEAR Hackathon; Shipyard MAKE ME MONEY; QNX Global Hackathon). The ledger now has **152 unique URLs**. The six MoltJobs pages are exact open jobs; the four NEAR legacy pages are stale/expired; the remaining six are platform programmes or competitions, not ordinary paid jobs.
- **MoltJobs:** six exact open jobs are posted by the displayed buyer “Amin”; budgets range from 5 to 200 USDC and deadlines from 4–10 Dec. Every exact page says “No deposit recorded” and requires a verified Google account, proof-of-work hash and human-moderator dispute resolution. Platform stats as of 03:55:56 UTC show 70 marketplace jobs, 15 completed, 42.3 USDC settled, 6 employers, only 1 funded employer and 7 agents ever paid (out of 1,501 agents). This is a low-liquidity, unfunded near-miss, not a proposal-ready job. No account or wallet.
- **VoxPact:** official terms claim Stripe-held job funds, 48-hour auto-release, AI arbitration and EUR bank payouts via Stripe Connect Express. First agent is free; additional agents cost €5. Stripe onboarding is mandatory and Stripe Identity is required above €1,000 cumulative earnings. No exact current open job was verified; public activity feed was quiet. India individual cross-border Stripe payout is not supported; a business/sole-proprietor route requires KYC and eligibility confirmation. No account.
- **NEAR Agent Market:** the current /jobs route redirects to sign-in and the unauthenticated API returns unauthorized. The accessible legacy board shows two OPEN pages 280–281 days old, one DISPUTED/expired and one CLOSED/expired; two old open pages have 50 bids mostly pending and no public transaction/acceptance record. Four exact legacy pages were added as stale/closed records. Standardized terms say held funds are not escrow, not segregated client money and not insured; India bank payout is not supported, so India builders need USDC and a destination address. No account, wallet or payout address.
- **NEAR Protocol Rewards:** official page advertises up to $10,000/month, but the linked repository shows Cohort 3 closed on 7 July 2026 and requires substantial GitHub plus on-chain activity and community engagement. This is a conditional developer incentive programme, not an open job; next cohort unknown.
- **NEAR HACKATHON:** official HACKATHON.md confirms a $250,000 prize pool paid in NEAR, with a submission deadline of 14 Nov 23:59 UTC (15 Nov 05:29 IST). AI code is allowed, but the human must publish an X demo post and provide a NEAR mainnet payout address. Rejected under the no-personal-social-engagement/no-payout-details rules; no submission.
- **Shipyard MAKE ME MONEY:** applications are closed; teams received a £100 stake and finalists must attend the 21 Nov London demo day. The leaderboard shows platform-reported agent revenue, including one agent at £38.20 with zero human inputs, but receipts are not independently reconciled. Rejected due stake and physical attendance.
- **QNX Global Hackathon:** BlackBerry/Devpost rules show a $50,000 total prize table, India not excluded, no entry fee, and a Dec 15 deadline. However it requires a free Devpost account, QNX 8.0 project, public repo, YouTube demo, winner identity/qualification verification and affidavits; AI-use policy is not specified. Hold; no account or rule acceptance.
- Refreshed Apart Research to **1,495 signed up** and confirmed the deadline is **16 Nov 2026 17:29 IST**. AI tools are allowed; no need to attend all three days; official template and ethical/dual-use appendix are mandatory. The private OpportunityProof draft is not in the official template and remains unsubmitted. Homingo remains a conditional hold because its target is students/early-career developers and the owner’s 7.5 years of IT experience makes eligibility uncertain. NeuraViz has conflicting deadlines (30 Nov on login page vs 10 Dec on event page) and may require in-person winner interviews.
- Kaggle Gemma 4 prize totals now conflict across surfaces: prior detailed rules show $65k main + $10k small-model bonus (paper track closed), the current listing card displays $150k, and an official Google post says $100k. No single total is treated as verified; direct Kaggle page remains unreadable.
- Pipeline remains eligible 0; proposal-ready 0; approved-to-contact 0; submitted 0; accepted 0; delivered 0; approved 0; payable 0; cash received 0. No account, ID, wallet, payout details, proposal, public post, contract, payment or commitment was made.

## Run 10 — 2026-11-14 04:17 UTC

- Added **8 new unique domains**: Elgora, GH Bounty, HSTLE, NASCA, Smart Scholars, USAVCO, SiddhiXsys/Kriti and RunToo. Five were directly inspected; three remain search-result-only. Also upgraded TensorHack and ZIVOX to direct-page verification and refreshed Homingo and Apart Research.
- Added **8 opportunity/program records** (3 exact Elgora bounties, Smart Scholars open-problems prize, GH Bounty platform programme, NASCA, ZIVOX and HSTLE). The ledger now has 136 unique URLs; these are not all paid jobs.
- **Smart Scholars** is the strongest new India-compatible cash prize lead: $1,000 to the highest-scoring solution of the round, free entry, AI allowed with disclosure, and bank transfer in India within 30 days after winner details are confirmed. Round 1 opens 2026-12-01 and closes 2027-05-31. Problem 28 has a measurable F1 >=0.95 target for author-name disambiguation. Judges may require a live show-and-answer check; no camera is specified, but entrant participation is required. No escrow evidence. Conditional hold.
- **Elgora** has three exact funded bounties: #3 $36 USDC (local Foundry security PoC only; 3/10 submissions; deadline Nov21), #7 $20 USDC (requires real Base gas/x402 USDC calls and signed terms; 3/10), and #8 $20 USDC (requires Base wallet plus separate Claude/Codex/Grok agent wallets; 0/10). The analytics page reports 231 USDC total funded, 70 finalized and 161 active; 36 agents and 59 submissions. The exact bounty pages show funding commitments, but BaseScan returned 403. All require a wallet/gas to submit or claim, and no India fiat off-ramp was documented. No wallet or submission.
- **GH Bounty** advertises AI validators, Solana escrow and SOL payouts. The homepage feed shows six examples (3 open, 2 reviewing, 1 paid) but no exact task URLs; the platform requires a new Solana keypair and GitHub OAuth Device Flow. India off-ramp is unverified. No account or wallet.
- **Apart Research AI x Epistemics** remains live, with 1,491 signed up and a deadline of 2026-11-16 11:59 UTC (17:29 IST). AI tools are explicitly allowed, solo/global participation is allowed, and India SWIFT payment is documented. $2,000 total pool, human judged, no escrow. Submission terms grant a broad non-exclusive publication/processing license. The existing OpportunityProof draft is preexisting work and must be clearly labelled; the official 8-page report template and personal registration/submission details remain outstanding. No signup or submission.
- **Homingo** is free, solo, India-wide, AI tools allowed and has a ₹5,000 top prize; registration closes 2026-11-15 23:59 IST. It requires a public repo, demo video and live finalist demo; payout rail/escrow are unknown. Conditional hold.
- **Rejected**: NASCA ($25 entry and in-kind awards), ZIVOX (₹199 entry), HSTLE (human tasks and ID/face verification). USAVCO, SiddhiXsys and RunToo remain search-only discoveries.
- Pipeline remains eligible 0; proposal-ready 0; approved-to-contact 0; submitted 0; accepted 0; delivered 0; approved 0; payable 0; cash received 0. No account, ID, wallet, payout details, proposal, public comment, contract, payment or commitment was made.

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
- Unique source domains: **367** (36.7% of the 1,000-domain target).
- Domains with direct page/feed inspection: **157**.
- Exact paid job listings directly verified in this run: **6** (all six are MoltJobs listings; none is funded or eligible).
- Index-only verified source domains: **6**.
- Opportunity records in the current ledger: **152** (unique URLs; includes jobs, bounties, competitions, platform programmes and board snapshots; not 152 jobs).
- Opportunity verification: **137 directly verified exact/program pages**, plus **26 aggregator/index-evidence records** and **6 search-only records**; categories can overlap. The cumulative ledger has **11 records explicitly tagged as exact job-level listings**: one human-only Karmyug task, six unfunded MoltJobs research tasks, and four stale NEAR legacy listings. The remaining records include competitions, programmes and board snapshots; the ledger count is not a job count.
- Pipeline: eligible 0; proposal-ready 0; approved-to-contact 0; submitted 0; accepted 0; delivered 0; approved 0; payable 0; cash received 0.
- Search-result discovery is not counted as direct page verification. A directory listing is not counted as an official organiser page. A platform-reported prize or payout total is not independent proof of cash received by this owner.

## Current best leads

**Apart Research — AI x Epistemics Research Sprint** is the closest immediate conditional opportunity. The official page showed 1,495 signed up; it is online, solo/global and explicitly permits AI tools. The $2,000 pool is human-judged and not escrowed. Deadline: **16 Nov 2026 17:29 IST**. Official terms specify bank transfer via Ashgro Inc/Mercury and SWIFT details for Indian recipients. The official report template, owner details and approval remain outstanding; no registration or submission.

**Smart Scholars — Problem 28 (author-name disambiguation)** remains the best longer-horizon India cash-prize lead. Round 1 opens 1 Dec 2026; the $1,000 is for the highest-scoring solution of the round, not per problem. AI tools are allowed with disclosure; a bank transfer in India is documented. Judges may ask the entrant to show the work live; camera requirement is not specified. No escrow.

**Elgora #3** remains the strongest exact funded bounty near-miss at 36 USDC gross. It requires a local Foundry security proof, a Base wallet and gas; no India fiat off-ramp is documented. Hold; no wallet or submission.

**QNX Global Hackathon** is a high-upside but conditional cash contest: $50,000 total prize table, India not listed among excluded countries, no entry fee, deadline 15 Dec 2026 14:00 EST. It requires a free Devpost account, QNX 8.0 project, public repo, YouTube demo, winner identity/qualification verification and affidavits; AI policy and India bank processing are not explicit. Hold; no account or rule acceptance.

**MoltJobs** has six exact open research jobs at 5–200 USDC, but every page says no deposit recorded. The displayed buyer is 'Amin' with no public legal identity evidence. Platform stats show only one funded employer among six and seven agents ever paid. Reject until a specific deposit, buyer verification and India-compatible payout route are evidenced.

**VoxPact** claims Stripe-held job funds and AI arbitration, but no exact current open job was verified; Stripe Connect onboarding is mandatory and India individual payouts are not established. **NEAR Agent Market** current /jobs redirects to sign-in and the public API returns unauthorized. The legacy board exposes two OPEN listings 280–281 days old, one disputed/expired and one closed/expired; all four exact legacy pages are retained, but none is current. Terms say held funds are not escrow and India bank payouts are unavailable. VoxPact and NEAR Agent Market remain rejected under current account/payout constraints.

**Rejected:** NEAR HACKATHON requires a human X demo post and NEAR payout address; Shipyard requires a £100 stake and London demo day; NEAR Protocol Rewards has no current cohort and requires a wallet plus substantial on-chain/community activity. Homingo remains uncertain because its target is students/early-career developers; NeuraViz has conflicting deadlines and possible in-person finalist interviews.

## Run 7 — 2026-11-14

- Added **18 new root domains** to the deduplicated source registry; 6 were directly inspected this run. New direct job/event-level domains include OpenTrain, Geek Room, FirstHack and DevGrants Daily.
- Added **13 new distinct listing URLs** to the opportunity ledger and refreshed three existing records (Apart Research AI x Epistemics, Code for a Billion and AI Vibeathon). The ledger now contains 108 distinct listing URLs.
- Directly inspected the live AI Hackathon directory: it reports 34 open events and explicitly warns that imported Unstop/Devpost entries are not hand checked. It is a discovery source, not a substitute for organiser verification.
- Inspected five OpenTrain job pages and official payout documentation. India is supported for payout, but Stripe-hosted setup collects identity, tax and bank details; the jobs rely on human review or original engineering judgment.
- Prepared a private **OpportunityProof** research-sprint work sample: 16-record dataset, evidence-gate CLI, 10 passing unit tests and a six-page PDF (four main pages plus appendix and references). It is not in the public repository and has not been submitted. The organiser's official Google Docs template redirects to sign-in, so the template has not been copied.
- No accounts, Discord memberships, wallets, payout methods or registrations were created. No ID was uploaded, no terms were accepted, no messages or proposals were sent, and no money was spent.
- Independently confirmed cash received remains **$0**.


## AgentLancer — current public snapshot

The public homepage was directly opened on **2026-11-14 03:48 IST**, but its dynamic service/job panels rendered loading placeholders. The static page says that service listings and activity are not payment, GMV, earnings, review, or reputation proof, and that a real buyer transaction hash plus confirmations are required before any payment claim. A same-run search-result snapshot showed 44 real activity records, 484 negotiations, 9,638 views and three open job cards (`ssrf3`, `ssrf2`, `ssrf-evt`); those figures and cards are **search-result discovery**, not direct feed/job verification. The last exact job-level checks remain the direct API records inspected on 2026-11-13.

- The three previously inspected SSRF/security-test-like requests remain rejected because no written target scope or authorization was supplied.
- The visible service cards are provider offers, not buyer orders. The current homepage did not surface the existing **service 301**; its prior price discrepancy remains unresolved.
- AgentLancer advertises card or USDT/USDC buyer payment and USDT/USDC seller payout, with staged escrow only after a contract is accepted. No new buyer transaction hash, funded order, or payout to the owner was found.
- No service edit, message, proposal, claim, or work was made.

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
- **48 opportunity records** in the ledger: 38 have a direct-page verification (36 direct-only, 2 also surfaced through an aggregator), 6 aggregator-only, and 4 search-result-only.
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



## Run 4 — 2026-11-14 03:48 IST

### Coverage and verification
- **241 unique candidate source domains** (24.1% of the 1,000-domain target); 9 new registrable source domains added this run.
- **52 domains with direct source-page inspection** and **17 domains with at least one job-level check**.
- **58 opportunity records**: 48 exact pages directly verified, 6 aggregator/index-only and 4 search-result/page-extraction-limited.
- **0 eligible, 0 proposal-ready, 0 approved-to-contact, 0 submitted, 0 accepted, 0 delivered, 0 approved, 0 payable, 0 cash received**.

### Strongest new lead — make.fun
- The official homepage lists four live bounties at the check: **$150 AI-joke**, **$250 AI-image**, **$250 news-image**, and **$500 tiny-chess**; a **$250 food-picture** bounty was scheduled to open at 05:30 IST, after this run's 03:48 IST check.
- The first three exact pages state that the full reward is locked in Solana USDC escrow and provide escrow addresses and funding transaction signatures. The chess page says its $500 is paid from the platform reward wallet and is not escrowed.
- AI coding agents are explicitly allowed. Acceptance is machine-graded (pairwise AI judging for joke/image tasks; Elo/game harness for chess). The chess engine must be deterministic, <=4,096 bytes, use Python 3.13 standard library, make no model calls, and score at least 1,154 practice Elo; a prize additionally requires beating the Sunfish 4KB baseline.
- The official payout ledger inspected this run lists **$3,404 USDC to 110 accounts across 198 transfers**, median payout $12 and largest $100; 55 rewards are listed as claimed from escrow. A public winner profile also lists an earlier **$8 USDC payout for a prior “Make the AI judge laugh” round (9th place)** with a transaction signature. A separate make.fun page reports $3,519 to 111 accounts, so the platform's own totals are inconsistent and should not be treated as reconciled. The payout page lists transaction signatures, but the explorer lookup timed out, so they were not independently chain-reverified.
- **Decision: hold, not eligible under current permissions.** Rewards go to a Solana wallet. The agent guide says a keypair is required and connecting an agent wallet to the owner's account requires the owner to approve the connection. The competitions also require genuine coding-agent transcripts; the guide says a ChatGPT account export has no provider usage and may be marked “handed over,” which can exclude paid places when the competition's `handed_over_places` is `none`. The per-competition requirements endpoint could not be retrieved in this run. No wallet was generated/connected, no account was created, and no entry was started.

### Other new checks
- **DeskCrew:** one live $0.25 support/research bounty with 3 entries. AI agents are explicitly allowed, but human approval is required and each attempt costs the agent the normal tool price. Rewards pay 85% in USDC to a wallet. Rejected because of upfront per-attempt cost, wallet/off-ramp requirement and tiny reward.
- **HackerEarth AI Work:** India-only programme advertises up to ₹8,000 per task, but it is human expert work, requires a 30-minute human assessment and lists PhD/Postdoc/Master's qualifications for the relevant CS role. Owner's BE does not meet the stated CS qualification. Rejected.
- **Steerability Challenge:** coding agents allowed and $40,000+ cash awards advertised, but registration closed Nov 1 AoE, teams of 2–5 required, and winners must present at NeurIPS in person or virtually. Rejected.
- **HackerRank Orchestrate:** $1,200 first prize and $300 for places 2–5, Dec 12 start. AI coding tools are allowed, but the entrant must complete a 30-minute voice interview with the AI judge; cash payout method/India eligibility are not stated. Rejected for AI-only execution.
- **GrantFox OSS issue #1:** claims $1,200 USDC escrow, but the issue describes a controlled judging rehearsal that deliberately plants an auth bypass and requires human merge. Buyer/funding not independently verified. Rejected; no security actions taken.
- **Opire / n8n $200 issue:** remains open but has at least 3 competing PRs and 212 comments. The official Opire FAQ says creators arrange payment after PR approval; no automatic escrow. India payout route is unverified. Existing ledger record OPP-2026-1114-35 updated and rejected as saturated/unfunded.
- **AgentLancer:** direct homepage opened, but dynamic service/job panels rendered placeholders. A same-run search-result snapshot showed 44 activity records, 484 negotiations, 9,638 views, three open job cards and no recent verified settlements; these are discovery only, not direct feed verification. The static page says listings/activity are not payment/GMV proof and requires a buyer transaction hash plus confirmations. Prior exact job endpoints from Nov 13 remain the last direct checks; SSRF/security-test-like tasks remain rejected. Service 301 was not surfaced; no buyer order/payment proof.

### New source domains
Added: make.fun, aiagentbounties.com, agentdeadlines.vercel.app, starfieldlabs.ai, hackerrank.com, grand-challenge.org, alipay.com, deskcrew.io and github.com. Existing github.io, hackerearth.com and opire.dev entries were updated rather than duplicating them. Search-result discovery, direct source inspection and exact job verification remain separate flags.

### Decision
The strongest current machine-verifiable and escrow-backed opportunity is make.fun, but it cannot be entered under the current permissions without owner-approved agent-wallet/account connection and a transcript-capable coding harness. No other fresh task passed all filters. No proposals, comments, messages, claims, registrations, wallet connections, payout setup, terms acceptance, deposits, paid upgrades, or commitments were made. No income is reported without independent payment confirmation.


## Run 5 — 2026-11-14 04:48 IST

### Coverage and provenance
- **247 unique source domains** in the deduplicated registry (24.7% of the 1,000-domain target); 6 new domains added: lightningfaucet.com, zylalabs.com, getanyapi.com, cracked.ai, ai-agentmarketplace.ai and seekclaw.com.
- **57 domains have direct page/feed inspection** and **19 have at least one job-level verification**. Direct inspection includes the GOAT public JSON feed; its normal TLS certificate validation failed and the feed was retrieved only with verification disabled, so its integrity remains a caveat.
- **67 opportunity records**: 57 exact pages directly verified, 6 aggregator/index-only and 4 search-result-only/page-extraction-limited. The 9 new exact records are ARC WhestBench, LayerZero/Immunefi, two Dozer SQL/WASM bounties, Dozer LangChain sample, Revert Workable integration, EdgeChains AWS Comprehend integration, Coolify Backup Manager and Javelin anti-cheat.
- No new source or listing was counted as eligible, proposal-ready, approved-to-contact, submitted, accepted, delivered, approved, payable or cash received.

### Fresh aggregator audit — Jobbi
- Directly inspected the market report, boards page, plain-text feed and filtered JSON feed.
- Report snapshot: **679 open gigs**, 548 with dollar-denominated USD/USDC/USDT prices, 496 marked escrowed, and 126 machine-accepted.
- Separate JSON feed snapshot: 674 total items, 637 agent-lane items.
- Applying the high-confidence filter to the 637 agent-lane items — escrowed, USD/USDC, machine acceptance and reward at least 10 — returned **zero**.
- There were 12 near-misses that were escrowed, machine-accepted and denominated in USD/USDC, but all paid only 0.1, 0.9 or 2 USDC. All came from Agent Bounties, where a wallet and refundable claim bond are required. Not pursued.
- Jobbi is an index, not a payer. Original boards must still be checked for status, scope and payout.

### GOAT Market feed audit
- Public offers.json returned **4,806 rows across seven source platforms**: Freelancer 4,035; GitHub bounty labels 552; Immunefi 167; AIcrowd 18; SeekClaw 15; Superteam Earn 12; TaskMarket 7.
- The feed snapshot timestamp was 2026-11-13T23:21:05Z, but row-level source checks were from 2026-10-17 to 2026-10-24. A current aggregator timestamp does not make each listing current.
- The feed distinguishes original URL from GOAT's own directory page. The feed was retrievable only after normal TLS certificate verification failed because of an expired certificate. Treat GOAT as a useful discovery index, not verified payment or job evidence.
- Attempts to reopen the exact SeekClaw, Superteam and TaskMarket samples were not completed because the public-browser service had insufficient credits; web page opens for these exact URLs returned inaccessible/cache-miss results. No current open status is claimed for those listings.

### New source checks — API monetization
- **Lightning Faucet:** official gateway documentation directly inspected. It offers 90% of per-request price in Lightning sats, with a 10% platform fee, but requires an operator account, a stable HTTPS API owned by the provider and a Lightning payout route. No existing API, account or wallet was registered. India fiat conversion was not verified.
- **Zyla API Hub:** official provider documentation directly inspected. Providers can keep up to 80% depending on uptime, but customer payments are held 60 days; payouts are only PayPal or ACH (US accounts), with tax/payout setup and a 2% gateway fee. India payout eligibility was not verified. No API/account/payout details were created.
- **AnyAPI:** search result advertises 80% share, but the direct page was unavailable and payout/India terms remain unknown.
- **Cracked:** search result advertises 70% per-call revenue and a $50 monthly threshold, but the provider page returned 404; payout rail remains unknown.
- **AI Agent Marketplace:** search result shows a $45/month provider subscription and Stripe Connect; direct page timed out and the result showed no agents listed. Rejected due paid subscription and unverified India payout.

### Exact job-level checks and decisions
- **AIcrowd / ARC WhestBench:** exact official challenge page confirms LLM-assisted development is encouraged and evaluation is automated using MSE under a FLOP budget. The 2026 Phase 2 deadline was 2026-09-19 and results were announced 2026-10-01. The advertised $100,000 pool is historical; rejected as closed.
- **Immunefi / LayerZero:** exact official program page lists a maximum $15,000,000 and requires a runnable PoC, local-fork-only testing and mandatory KYC for every paid hunter, including passport/government ID and proof of address. Payout can be USD wire or USDC/USDT/BUSD, but AI policy and India eligibility are not specified. Rejected under the no-ID rule; the maximum is not an expected payout.
- **Dozer #1659 ($600):** issue remains open but multiple active/previous PRs and reward links exist. A September 2026 contributor explicitly asked whether any remaining funded scope exists. Rejected pending a maintainer-confirmed remaining gap.
- **Dozer #1653 ($600):** WASM UDF support has an earlier PR and multiple 2026 implementations. Rejected as already heavily competed.
- **Dozer #1690 ($250):** LangChain/vector chatbot sample has multiple PRs across dozer and dozer-samples; the 2023 spec appears outdated against current architecture and maintainers have not confirmed a remaining payable gap. Rejected.
- **Revert #551 ($100):** Workable ATS integration has numerous attempts and competing PRs through 2026-11-10. Rejected due crowding and no distinct remaining scope.
- **EdgeChains #290 ($50):** AWS Comprehend PII-redaction task has existing complete-looking PRs #459 and #461 and many other attempts. Rejected as duplicated.
- **Coolify #2389 ($100 per Jobbi):** exact issue is marked Core Team Only; external contribution is not available. Rejected.
- **Javelin anti-cheat #2 ($10,000):** exact issue remains open, but multiple existing PRs/attempts already implement the requested behavior. AI assistance is not blanket-banned, but low-quality AI PRs are explicitly rejected. Rejected due competition and no distinct remaining scope.

### Algora payout constraint
- The current official Algora payment documentation says India is supported only for eligible business forms such as sole proprietors, LLPs or companies; Indian individuals are not supported for international payouts. The owner's eligible entity status has not been established. All Algora-linked tasks therefore remain ineligible for this run; no onboarding or Stripe account was attempted.

### Safety and execution
- No accounts were created, no identity documents uploaded, no wallet connected, no payout details entered, no terms signed, no comments or proposals posted, no claims made, no PRs opened, no money spent and no security testing performed.
- The only financial evidence counted for this owner remains **$0 independently confirmed cash received**.
- Browser Use credits were insufficient for a second GOAT exact-listing inspection. Firecrawl was not used. This limits further direct verification but does not affect the successful Jobbi/GOAT feed reads and GitHub issue fetches already described.

### Links
- Jobbi report: https://jobbi.org/gigs/report
- Jobbi feed docs: https://jobbi.org/docs/mcp
- GOAT public offers feed: https://goatmarket.com/offers.json
- Lightning Faucet API gateway: https://lightningfaucet.com/build/gateway/
- Zyla provider payout docs: https://zylalabs.com/docs/earn
- ARC WhestBench: https://www.aicrowd.com/challenges/arc-white-box-estimation-challenge-2026
- LayerZero Immunefi program: https://immunefi.com/bug-bounty/layerzero/information/
- Algora payout rules: https://github.com/algora-io/algora/blob/main/priv/content/docs/payments.md


## Run 6 — 14 November 2026 (05:45 IST snapshot)

### Reconciled coverage

Counts below are recalculated from the persisted CSV files, not copied from earlier narrative summaries. The CSVs are the source of truth.

- **Source registry:** 276 unique domains, 79 with a directly inspected source page/feed, and 32 with at least one exact job/competition page inspected. This run added 29 new domains.
- **Opportunity ledger:** 94 unique listing URLs. This run added 27 new opportunity records and refreshed four existing records (Apart Threat Intelligence, Code for India, Dozer #1659 and IceHacks).
- **Evidence split:** 81 records have direct-page verification; 17 have aggregator/index evidence (some overlap with direct verification); 6 remain search-result-only. Discovery is not treated as verification.
- **Income:** USD 0 independently confirmed cash received. No eligible, proposal-ready or approved-to-contact job was found.

### Highest-priority conditional leads

1. **Apart Research × Security Level 5 — Threat Intelligence & Threat Modelling Hackathon**  
   https://apartresearch.com/sprints/threat-intelligence-threat-modelling-2026  
   USD 5,000 advertised prize pool; 4–6 December 2026; solo or teams of 1–5; AI tools explicitly allowed; public data and defensive framing; up to eight-page PDF; no camera appearance required. The official prize terms say international recipients, including Indian bank accounts, must provide SWIFT details; payment is made by Ashgro Inc, with Mercury payment communications. India is not excluded. No public escrow or independent prefunding was found. Human judging, not machine acceptance. Registration asks for personal details and submission accepts prize terms, so it remains **conditional and not entered**.

2. **Atlassian Codegeist 2026 — Best Agents / Atlassian MCP**  
   https://codegeist2026.devpost.com/rules  
   USD 120,000 advertised cash pool; 33 cash-paying positions; six USD 1,500 Best Agents awards and six USD 1,500 Atlassian MCP awards. India is not on the excluded list, entry is free, and a free Atlassian developer license is offered. Requires Devpost and Atlassian developer accounts, a working Forge app, installation link and public YouTube demo. Winner identity/qualification verification is mandatory; publicity terms allow use of name, likeness, voice and image for three years. No public escrow and India-specific bank delivery not confirmed. **Conditional only; no accounts or ID actions.** Private concept brief: `/mnt/data/codegeist-taskproof-private-brief.md`.

3. **Google #BuildHybridAI 2026**  
   https://firebasehybridaihackathon.devpost.com/rules  
   USD 30,000 advertised cash pool; AI coding tools including Codex and Claude Code are explicitly allowed; India is not excluded; free Firebase AI Logic tier is available. Requires a free Devpost account, working Firebase AI Logic app, public repo, demo and winner identity/qualification verification. India payout rail not specifically confirmed. **Conditional only; no account, quota request or entry.**

4. **Open Agentic Web Challenge**  
   https://cognizant-agenticweb.devpost.com/  
   USD 10,000 cash; India not listed among exclusions. Requires an agentic website, public demo video with entrant explanation, free Devpost account, winner identity verification and broad three-year publicity rights for name/likeness/voice. Bank/mail payment terms exist but India route is not confirmed. **Conditional only.**

### Material rejections and payment risks

- **UGREEN AI NAS Hackathon:** USD 46,000 advertised pool, but official rules explicitly exclude India.
- **AWS MSP AI Hackathon:** USD 64,000 advertised pool, but entrant must be employed by or authorised for an AWS Partner Network organisation; no such authority was established.
- **Build with Google Gemini (Hack2Skill):** INR 8 lakh advertised pool, but 10% of scoring is UGC/social-media activity and the event asks entrants to post on personal LinkedIn; rejected under the no-personal-social-engagement rule. Payout route not published.
- **Code for a Billion / India Runs:** INR 18 lakh headline; submission/deployment deadline 15 November 2026 and AgentFoundry account required. No payout rail published; no account or entry.
- **Homingo Hack Days:** INR 5,000 top prize, AI tools allowed and online, but payout method is unstated and eligibility language targets students/early-career developers.
- **Deck the Pixels:** USD 25,000 cash pool, but requires entrant's own likeness/avatar, Devpost/Adobe accounts, winner identity verification and publicity rights; not pursued.
- **GTransformer Buildathon:** USD 1,000 advertised, but official page asks for a USD 50 fee to confirm a spot; rejected.
- **HackWithAditya:** student-only, team of 4–6, on-campus final and ₹800/member after shortlist; rejected.
- **OpenTask API documentation task:** USD 500 USDC advertised, but buyer is pseudonymous, listing is old/ambiguous, no escrow proof or India payout route, and offer submission requires login.
- **FinMind PII export bounty:** USD 500 advertised, but repository is archived; many prior attempts and wallet-only payout with no verified India route.
- **Dozer #1659:** USD 600 advertised, but crowded with competing PRs and no maintainer confirmation that funded scope remains.
- **Sourceify:** exact task cards show USD 0.10–$2.30 for physical actions recorded on an iPhone; rejected as physical human work.
- **PaisaTask:** UPI claims and visible offer examples, but tasks are human app trials/surveys/referrals and require Aadhaar/PAN KYC; claims of HDFC escrow were not independently verified.
- **SideCash / Pixel4Hub / Workero:** manual annotation or human expert roles, account/ID/background checks, country restrictions, or inaccessible direct pages; not eligible.

### Discovery-source rotation

- **insiderOne:** direct aggregator page showed 121 AI hackathons, 33 closing that week; individual organiser rules were checked separately.
- **BuildJams:** direct directory showed 148 events across eight sources; use for discovery, not proof of payment.
- **HackathonRadar:** direct page showed 162 web hackathons, but underlying event data was about two weeks old; treat as stale discovery.
- **Techsnap / Aspirova:** exact listings were checked; Catalyst and Project Last Mile had closed registration by the check.
- **Jobbi:** report and agent-lane feed rechecked. The broad feed is not itself payment evidence; no qualifying $10+ task with machine acceptance and confirmed India payout was found.
- **AgentPact:** official page describes escrow, delivery evidence and acceptance/timeout settlement, but no exact public task or funded job was verified.
- **AgentLancer service 301:** remains listed at https://agentlancer.io/agents/173; public refresh found no buyer order or verified payment. It remains one channel, not the whole strategy.

### Execution and safety

- No proposals, comments, messages, claims, PRs, registrations, account creation, identity uploads, wallet connections, payout setup, terms acceptance, deposits or commitments were made.
- No external security testing was performed.
- The two private preparation briefs are not entries or submissions:
  - `/mnt/data/apart-threat-intel-private-brief.md`
  - `/mnt/data/codegeist-taskproof-private-brief.md`
- Actual income remains **USD 0 independently confirmed cash received**.


## Run 8 — 2026-11-14 07:48 IST

### Coverage refresh
- Added 10 new unique root domains after checking the existing registry for duplicates. Source registry now contains **304 unique domains**.
- Directly inspected source domains now total **97**; domains with at least one exact job/event page inspected total **44**.
- Added 8 new opportunity rows. The ledger now contains **115 opportunity records**. Existing Apart Research AI x Epistemics, Threat Intelligence, and Agent Attribution records were refreshed from the official pages during this run.
- Search-result discovery, direct page verification, and exact job verification remain separate. The MPOnline result is search-only; the Cicada Unstop listing is search-only even though Cicada's own homepage was directly inspected.

### Strongest current conditional lead
**Apart Research — AI x Epistemics Research Sprint** remains live. The official page says 1,485 signed up; submission closes **16 November 2026 at 11:59 UTC (17:29 IST)**. It is global/online, solo participation is allowed, AI tools are explicitly permitted, and the cash pool is **$2,000**. Expert judges score submissions; this is not machine-graded and there is no public escrow. Apart's prize terms say Ashgro Inc pays by bank transfer through Mercury and Indian recipients must provide SWIFT details. The private OpportunityProof report is a draft only; the official template has not been copied, author details remain blank, and no registration or submission occurred.

**Apart Research — Threat Intelligence & Threat Modelling** is a later conditional lead: 4–6 December 2026, $5,000 pool, global/online, solo allowed, AI tools allowed, public data only and defensive/methodology framing. The official page showed 211 signed up. It has human judging and no escrow. The event's signup form is visible; its submission widget currently reports closed before the event begins. The common Apart prize terms document SWIFT transfers for Indian bank recipients. No registration made.

### Fresh rejections and holds
- **FUTUREHACK '26:** ₹10,000 advertised; AI tools allowed and free/online, but mandatory webcam/screen/tab monitoring, live code defense and prize KYC violate the owner's camera/human-presence constraints.
- **ai2hum BNT-057:** ₹50 for an Instagram story; personal social engagement and phone/name claim flow. The board counter says 0 open/₹0 paid while individual cards still show open slots. **BNT-052** offers ₹700 for three physical Delhi photos. Both rejected.
- **Braintrustai Wizard:** $15/hour advertised, but the official page says US-based workers only, requires human evaluation and government ID verification. Rejected.
- **Cicada AI Response Evaluator:** Unstop search result advertises ₹600–₹1,350/hour and bank payment, but the exact Unstop page had no readable content. Cicada's own page confirms person-specific human ratings, screen-shared sessions and written reasons. Not AI-only; rejected. Rate and payout remain search-result claims.
- **HackIndia 13th Protocol:** ₹60,000 advertised; registration open, but final event is in person at KCCITM Greater Noida and teams must have 2–4 members. Rejected.
- **BharatCode Build League:** ₹10,000 first prize; official deadline was 10 November and had passed. Rejected.
- **openbounty #5 ($100) and #3 ($150):** exact agent-only tasks with objective acceptance criteria and strong MCP/agent fit, but the live site explicitly says mock-payments mode and no real funds move during MVP. Rejected.
- **Taskuler:** escrow described in public rules, but bidders must put down a deposit and use its wallet/token. Rejected.
- **GitReward / GitWork:** wallet connection required for payout; no exact funded task and no India off-ramp verified.
- **Remote Adda:** official page advertises UPI/bank payouts but contributor verification requires ID and tasks include voice/photo/POV recording and human annotation. Rejected.
- **2une:** requires Google sign-in and credential verification; work is human expert evaluation/review; no exact listing rendered. Rejected.
- **MPOnline:** search result advertises ₹1 lakh/₹75k/₹50k technical prizes, but official page returned no readable rules, deadline or payout details. Search-only; hold.

### Private work-sample integrity check
- Re-ran the OpportunityProof test suite: **10/10 tests passed**.
- Corrected the PDF's prior test-count typo from nine to ten; the six-page PDF and private ZIP were regenerated.
- The report still states that it is a small convenience sample, not a validated model benchmark; no payment outcome is claimed. No submission was made.

### Pipeline
- Eligible: 0
- Proposal-ready: 0
- Approved to contact: 0
- Submitted: 0
- Accepted: 0
- Delivered: 0
- Approved: 0
- Payable: 0
- Independently confirmed cash received: **$0**

No accounts, registrations, claims, proposals, comments, messages, wallets, payout methods, ID uploads, signed terms, deposits or commitments were made. AgentLancer service 301 remains tracked as a separate channel; no new funded buyer order or payment proof was found.


## Run 8 — 2026-11-14 02:29 UTC (07:59 IST)

### Reconciliation of the stored registry
The stored files were re-read before this run. The actual pre-run source registry contained **304 unique domains**, not the 294 stated in the prior chat summary. The opportunity ledger contained **115 unique listing/feed URLs**, not 107. The stored files are authoritative; the prior summary undercounted both.

This run added **28 new source domains**:
- 25 country-specific hackathon directories linked from the Hackathons Australia network footer. 23 destination pages opened successfully; Japan and Colombia destination fetches failed and remain discovery-only.
- ClawHunt (direct marketplace page opened; no visible open tasks or held funds).
- DivyKairoth (search-result discovery only; direct page returned a cache miss).
- TryBounty (official homepage, terms and agent docs opened).

After the update: **332 unique source domains**, **124 directly inspected source domains**, **44 domains with job-level verification**, and **4 domains with index-only verification**. The new additions include 23 directly opened country directories plus ClawHunt and TryBounty. The 2 failed directory links and DivyKairoth are not counted as directly visited.

The ledger adds 8 unique records, bringing it to **123 unique listing/feed URLs** with zero duplicate URLs and zero blank opportunity IDs. Of these, 108 records have direct-page verification, 26 have aggregator-index evidence, and 6 remain search-only; evidence categories can overlap. Board/feed snapshots are clearly labelled as aggregator-level records, not exact job listings.

### New source and platform findings

- **Jobbi live feed:** `gigs.md` generated 2026-11-14T01:00:08Z shows 685 open gigs (649 agent lane, 36 human lane). Jobbi indexes; it does not hold funds or pay workers. The JSON feed browser attempt failed with a proxy/SOCKS error, so the accessible Markdown feed and board pages were used.
- **BountyBook:** 118 open, 0% escrowed, all payment states promised, median $4, 39 failed payouts reported. Visible tasks are mostly $2-$9 USDC with automated code tests. Rejected due no funded escrow and weak payout evidence.
- **Agent Bounties:** 12 open, 100% marked escrowed, median $1.45, 46 historical paid events reportedly include transaction hashes. Most current tasks require a claim bond or funding a child bounty; rewards are too small. Rejected under no-wallet/no-upfront constraints.
- **BountyHub:** 28 open, 7 escrowed and 21 promised, median $67.50. India appears on the supported-country list, but official documentation requires Stripe identity verification. The RCS issue has a credible $5,000 prepaid amount confirmed by the BountyHub founder; the $14,999 issue title is not the funded amount. Rejected because of KYC and unclear AI permission.
- **IssueHunt:** 274 open issues, all marked escrowed by Jobbi, median $40. Terms list Stripe debit remittance, SWIFT or ETH. Direct task pages returned 502; no exact current task or India payout route was verified. Hold only.
- **TryBounty:** official terms last updated Nov 2, 2026; operated by THE AI EXPERIMENTAL LAB, INC. It advertises prefunded bounties and automated verification followed by a 72-hour buyer review. India is supported for Stripe Connect subject to approval, but Stripe collects/verifies identity and payout details. No deposit, subscription or API fee. No public task list without an Agent account/API key. Strong future candidate only if the owner changes the no-ID/account-creation constraint; nothing was registered.
- **ClawHunt:** direct marketplace page showed blank open-task/escrow counters and no visible task cards; page says “No funds held yet”. No task or payout route verified.
- **Agent Hansa:** official docs and public quest feed inspected; 171 quests reported, first visible page contained settled and social/referral/video tasks. No qualifying open AI-only task found; wallet/account onboarding required.
- **Country hackathon directories:** 23 of 25 linked destinations opened. They are discovery sources, not payers; most listings are local/in-person and event-specific terms must be checked.
- **Hack4Hack ML Challenge:** online/global ₹1 lakh prize pool, but every scored Round-1 team must pay ₹299 in India to enter prize-deciding Round 2. Rejected under no-upfront-fee rule.
- **Hack4Hack Buildathon 1.0:** AI models allowed, but requires a 2–4 person team, ₹600 finalist fee and online jury presentation. Rejected.

### Exact GitHub issue checks

- **microG RCS #2994:** BountyHub founder publicly confirmed $5,000 prepaid. The issue title says $14,999, but the current funded amount is $5,000. The bounty requires a merged PR and creator acceptance; public contributors dispute AI-generated submissions, and BountyHub requires Stripe identity verification. Rejected.
- **Coolify #6894:** $1,000 headline bounty remains on an open issue with a Hold label. Maintainer explicitly says the Algora bounty program stopped and no payout will occur. Rejected.
- **BAWES #55:** $600 headline bounty is paused indefinitely by the maintainer. Scope touches IAM credentials and Civil ID data; no secrets were accessed. Rejected.
- **Javelin anti-cheat #2:** $10,000 headline remains on Jobbi; the issue is still open, but its history shows multiple competing implementation PRs (#19, #24, #30, #84, #92) and a Nov 13 attempt. No distinct remaining scope or current escrow balance is confirmed. Algora payout eligibility for Indian individuals is restricted. Rejected.
- **Dozer #1659:** $600 headline; several competing PRs and no maintainer confirmation of remaining funded scope. Algora India payout restrictions apply. Rejected.

### Current pipeline
No opportunity passed all current rules. No proposal, bid, comment, account, wallet, payout setup, ID upload, contract, deposit or commitment was made. AgentLancer service 301 remains a separate channel and has no verified buyer order or payment. Cash received remains **$0**.

### Run 8 sources
- https://jobbi.org/gigs.txt
- https://jobbi.org/gigs/boards/bountybook
- https://jobbi.org/gigs/boards/agentbounties
- https://jobbi.org/gigs/boards/bountyhub
- https://jobbi.org/gigs/boards/issuehunt
- https://trybounty.ai/terms-and-conditions
- https://docs.trybounty.ai/agents/connect/
- https://clawhunt.store/marketplace
- https://hack4hack.com/hackathons/ml-challenge-qg4o
- https://hack4hack.com/hackathons/buildathon-1-0-7ruu
- https://indiahackathons.com/ai-hackathons


## Run 9 — 2026-11-14 03:20 UTC

### Coverage and provenance
- Added **21** new candidate websites: OddJob, Karmyug AI, MyTypingAI, TaskBridge AI, Corpshore/Jwuma, SELQIK, UserNinjas, BountyCore, 4mo, StudentCompetitions, NX-913, DevNovate, Agrenting, CoreDhristi, WorkMart, MeatLayer, Mundane, HumanLayer, ClawTasks, TaskPool and AgentBaazar.
- Two additions (4mo and DevNovate) remain search-result discovery only because direct page attempts returned no readable content. The other 19 new domains were directly inspected; the existing HackLoop record was also upgraded from search-only to direct directory-page verification.
- Updated HackLoop from search-only to direct directory-page verification; its Homingo entry is index-only, not payer evidence.
- Source registry now has **353 unique domains**, **144 directly inspected**, **45 exact job-level verified** and **6 index-only**.
- Opportunity ledger now has **128 unique URLs**: **113 directly verified**, **27 with aggregator/index evidence**, **6 search-only**. Five new records are clearly labelled platform programmes rather than specific job listings.

### Strongest new agent-service channels (none eligible yet)
- **Agrenting** — official homepage shows illustrative provider examples and advertises 95% provider share plus pre-funded escrow; it does not expose a confirmed buyer task queue. A read-only browser attempt to inspect the live agent directory failed with `ERR_SOCKS_CONNECTION_FAILED`, so no current agent-count or activity-count claim is made. Docs state 5% platform fee and NOWPayments stablecoin withdrawals (USDT/USDC/DAI), $10–$5,000, 1% fee plus network fee. Paid work requires the agent to be claimed under the owner's account; no India bank/UPI rail is documented. No agent registered and no wallet connected.
- **CoreDhristi** — official pricing/terms specify 80% creator share, monthly bank/UPI payout (NEFT/IMPS), ₹1,000 minimum and 21-day hold. Custom developer projects use four 25% milestone escrow tranches. The public bids page remained at "Loading briefs"; no exact buyer project or funded milestone was visible. Account and phone OTP are required; no government-ID check is stated in the inspected terms. Creators also accept an update-cadence commitment and liability for direct losses caused by agent malfunction. No signup.
- **SELQIK** — India-focused digital/AI-agent marketplace, free listing, 3% escrow fee, 24-hour buyer confirmation and UPI payout claimed. Homepage showed **0 live listings** and **0 escrow protections**. Seller verification tiers are email, phone+email and original-creator verification. No listing posted.
- **AgentBaazar** — invite-only beta for MCP skills, UPI and 4% network fee claimed; no public buyer task, escrow proof or verified payout. Waitlist requires personal details; no waitlist submitted.
- **TryAPI** remains a provider-program candidate only: 70% share and $50 withdrawal threshold, but its provider guide does not specify payout rail or India eligibility; an existing owned API is required.

### Exact new job and rejected India task sources
- **Karmyug AI — Tamil Samvaad** exact listing is open until Dec 30, with a 10,000-hour target and 300–1,200 second clips. It requires two human speakers, genuine natural Tamil conversations, consent and manual audio QA; artificial recordings are not allowed unless explicitly authorised. Public rate is hidden in the dashboard; homepage claims weekly UPI/bank and one-time government ID verification. Rejected as human-only and account/ID gated.
- **OddJob** directly inspected; its live board showed **0 tasks**. It claims UPI payment after poster approval, but task categories include Google Reviews and Product Hunt upvotes, plus WhatsApp instructions and manual review. Rejected.
- **MyTypingAI** advertises ₹0.05–₹5 per manual CAPTCHA/typing/data-entry task and ₹300–₹3,000 withdrawal thresholds; page showed 0 reviews and 0 verified members. Rejected.
- **TaskBridge AI** requires government photo ID and a live face photo; work is human labeling/rating/transcription, manually reviewed and paid weekly by PayPal/AirTM. Rejected.
- **Jwuma/Corpshore** explicitly requires an identity document and camera check; India work is human annotation, response ranking, transcription, translation and field tasks. Weekly Wise payout is claimed. Rejected.
- **UserNinjas** pays human usability-study participants to INR bank/UPI after session approval; exact studies are hidden behind sign-in. Rejected.
- **BountyCore** claims 200+ tasks/day and $1.8M+ paid, but no independent payment evidence or exact buyer listing was found; categories are surveys, app testing, product testing and content engagement. Rejected.
- **WorkMart, MeatLayer, Mundane, HumanLayer and TaskPool** route tasks to humans for local errands, field visits, deliveries, photos or in-person verification; rejected.
- **ClawTasks** paid-bounty programme is winding down; current tasks are free-only and legacy claims require a wallet and 10% stake. Rejected.
- **4mo** remains search-only; snippets describe consumer surveys, video/ad viewing, referrals and KYC, not AI-only work.

### Current competitions rechecked
- **Apart Research — AI x Epistemics** is live and online; solo entry and AI tools are allowed. Official deadline is Nov 15 11:59 PM AoE = **Nov 16 11:59 UTC / 17:29 IST**. The page showed 1,488 signed up. Prize pool is $2,000, judged by humans (not machine-graded). Official terms say Ashgro Inc (US 501(c)(3)) pays by bank transfer and Indian recipients must provide SWIFT details; no public escrow. A private OpportunityProof draft exists but is not a validated final submission. No registration, terms acceptance or submission.
- **Homingo Hack Days** remains open until Nov 15 23:59 IST, ₹5,000 top prize, AI tools allowed and online. It requires a public repo, short demo video and online finalist demo; payout rail/escrow are not stated and the organiser's Luma listing targets students/early-career developers. NX-913 has a stale conflicting Nov 9 deadline; use the official Homingo page, which says Nov 15.
- **Code for a Billion** official page confirms Nov 15 submission deadline and ₹18 lakh advertised pool; requires AgentFoundry account and open-source deployment, payout rail not stated. No account created.

### Current pipeline
No opportunity passed every owner constraint. No account, wallet, payout setup, ID upload, registration, proposal, bid, comment, message, contract, deposit or public listing was made. AgentLancer service 301 remains separately tracked and has no verified buyer order or payment. Cash received remains **$0**.

### Run 9 source pages inspected
- https://oddjob.co.in/
- https://work.karmyug.in/jobs/8071afb8-4c64-46a0-9a24-f7f244cc4707
- https://mytypingai.com/
- https://taskbridgeai.cloud/
- https://platform.corpshore.ai/india
- https://selqik.com/
- https://www.userninjas.com/opportunities
- https://www.bountycore.com/earn/india
- https://studentcompetitions.com/index.php/competitions/homingo-hack-days
- https://nx-913.com/
- https://agrenting.com/earn
- https://agrenting.com/docs/financial
- https://www.coredhristi.com/marketplace/bids
- https://www.agentbaazar.com/
- https://workmartjobs.com/
- https://meatlayer.ai/
- https://mundane.market/
- https://humanlayer.vercel.app/
- https://clawtasks.com/
- https://www.taskpool.ai/
- https://apartresearch.com/sprints/ai-x-epistemics-research-sprint-2026-11-13-to-2026-11-15
- https://apartresearch.com/sprints/prize-terms
- https://hackathon.homingo.co.in/
- https://app.hackthefuture.co.in/futurehack
