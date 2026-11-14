# Google Quantum AI — Verifiable Quantum Circuit Compilation
## Private no-spend preparation note — 14 November 2026

Status: **not entered**. No Kaggle account was created, no rules were accepted, no API token was created, and no submission was made.

## Why this is the strongest technical lead
- Sponsor/host: Google Quantum AI / Google LLC, hosted on Kaggle.
- Advertised monetary pool: USD 150,000.
- AI coding agents are explicitly invited; the competition is built around agentic optimization and fast verification.
- No quantum hardware or prior quantum-physics background is stated as necessary.
- Scoring is based on a geometric mean of improvements across three tasks; the open kickmix verifier fuzz-tests candidate circuits.
- Entry/team-merger deadline: 13 January 2027, 23:59 UTC (14 January 2027, 05:29 IST).
- Final submission: 20 January 2027, 23:59 UTC (21 January 2027, 05:29 IST).
- Mid-competition prize: 20 November 2026, 23:59 UTC (21 November 2026, 05:29 IST).
- No purchase is stated as necessary; solo or teams up to five are allowed.

## The three workstreams
1. **Fusion / inverse square root:** 22-bit input x=1..3,133,452; implement a phase proportional to 1/sqrt(x) with relative error bound 2^-24. Reference circuit: 260 qubits and 7,735 Toffolis.
2. **DQI / Reed–Solomon decoder:** m=4095, n=70, GF(2^12), up to 35 symbol errors; reference circuit is roughly 1,893 qubits and 5.7 million Toffolis.
3. **FeMoCo chemistry:** 76 orbitals and 113 electrons; co-optimize tensor factorization, Givens tree and QROM circuits; meet the published 20 mHa Frobenius error and 128-qubit per-circuit constraints.

## No-spend work plan
1. Read the official Kaggle overview/search-result content and companion paper (arXiv:2610.23832); use the public Qualtran kickmix format and verifier as the specification.
2. Reproduce the reference inverse-square-root circuit and verifier locally before changing anything. Record baseline qubits, Toffolis, T gates, Z rotations, size and verifier result.
3. Start with a deterministic local optimizer for inverse square root: reversible fixed-point range reduction, lookup/table segmentation, Newton-style refinement and uncomputation. Compare circuit cost against the reference after every change.
4. Do not optimize all three tasks simultaneously at first. Establish one reproducible improvement, then evaluate whether DQI or FeMoCo can improve the geometric-mean score.
5. Use only local CPU execution and public open-source tools. Do not call paid model APIs, rent compute, buy credits, or use any external key. A public third-party compiler repository describes historical paid agent attempts around USD 13–15 each; that is not authorized.
6. Keep all experiments local/private until the owner approves account creation, rule acceptance and any submission.

## Payout and eligibility gate
The official competition-specific India payout path and any identity-verification requirement were not readable/confirmed in this run. Generic Kaggle prize administration can involve tax and winner-eligibility documents and a payment provider. Under the current restrictions, do not create a Kaggle account, accept rules, submit, or provide identity/payment information until the exact India payout and ID requirements are confirmed and separately approved.

## Competition pressure
The Kaggle indexed page showed a historical snapshot of 7,364 entrants, 2,647 teams and 28,458 submissions. This is not a live count, but it indicates substantial competition. The USD 150,000 is a prize pool, not expected earnings.