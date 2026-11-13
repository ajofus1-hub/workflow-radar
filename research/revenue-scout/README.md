# Revenue Scout Registry

Updated: 2026-11-14 (UTC)

## Purpose
A deduplicated discovery registry for candidate revenue sources and a separate opportunity ledger. A domain in this registry is not proof of a live job, buyer, AI permission, payment, or India payout eligibility.

## Verification vocabulary
- **Search-result discovery**: surfaced in a search result; not a claim that the destination page was visited.
- **Directory-listed**: listed in a live directory page inspected during the run; the underlying platform was not necessarily inspected.
- **Direct page verified**: the platform or official event page was opened and inspected at the recorded date.
- **Job-level verified**: an exact live listing was inspected. Index-only snapshots are labelled separately.
- **Eligible**: passes the owner’s filters, including AI-only execution, no upfront spend, no third-party ID/account creation, and a credible payout path to India.
- **Proposal-ready**: exact scope, buyer, AI policy, acceptance, India payout and payment evidence are verified. This is deliberately stricter than discovery.

## Current coverage
- Unique source domains: 191 (19.1% of the 1,000-domain target)
- Source directory pages directly inspected: gigs.sh and DesiTasks.
- Direct platform/event pages inspected this run: Jobbi, gigs.sh, DesiTasks, TaskMarket, HireForHumans, AgentRE-Bench, IceHacks.
- Exact job listings with full direct source-page verification: 0.
- Jobbi index-level task snapshots: BountyBook, Agent Bounties, BasedAgents.
- Eligible / proposal-ready / approved-to-contact / submitted / accepted / delivered / approved / payable / cash received: all 0.
- Search result discovery is not counted as direct page verification. A directory listing is not counted as a job.

## Current best lead
Google's Gemma 4 Developer Agent Competition is the strongest current high-upside AI-agent competition found. It has an official Kaggle listing, automated patch tests, $65,000 main prizes plus a $10,000 small-model bonus, entry rules deadline 2026-11-25 and final submission deadline 2026-12-02. India appears not excluded under Kaggle's general worldwide eligibility, but prize payment method and India payment compliance remain unverified. No Kaggle rules were accepted and no entry was created or submitted. It remains **discovered / partial verification**, not eligible or proposal-ready.

## Rejections / holds
- BountyBook: 118 open index entries, typical $2-$12 USDC promised; 0% escrowed on Jobbi snapshot, wallet/x402 required; direct job API pages returned 502.
- Agent Bounties: 12 open index entries; most require funding child bounties (upfront money), and the remaining Safari task requires macOS; wallet/claim bond required.
- BasedAgents: 10 open entries; 0% escrowed, 0.25-$2 USDC promised; wallet required and runtime installation scope needs review.
- boss.dev: official docs list 23 payout countries and India is absent.
- Algora: payout eligibility for Indian individual contributors not established; surfaced evidence points to sole proprietors/LLPs/companies.
- PayPal AI Hackathon: closed 2026-11-12 20:00 UTC.
- IceHacks: student-only and conflicting cash-prize description.
- AgentRE Challenge: $1,000 headline prize but stale/inconsistent dates; no entries on leaderboard and no confirmed payout rail.
- AgentLancer service 301 remains a channel, but no buyer, offer, escrow, or payment exists; listed price differs between service JSON and profile.

## Guardrails
No proposals, comments, messages, claims, account creation, identity uploads, wallet connections, payout setup, signed terms, deposits, paid upgrades, or commitments were made. No income is reported because no payment was independently confirmed.

## Files
- `source-registry.csv`: deduplicated candidate domains with provenance and verification status.
- `opportunity-ledger-2026-11-14.csv`: current opportunity pipeline snapshot.
