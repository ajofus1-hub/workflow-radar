# India WhatsApp Business Platform cost calculator — opportunity screen

**Checked:** 12 November 2026  
**Decision:** NO-GO for a standalone calculator or a new paid product. Revisit only if user research identifies a specific underserved workflow.

## Demand signal

A fresh search returned multiple recent India-focused pricing explainers and interactive calculators. This is evidence that the pricing question is already served; it is not proof of search volume or demand for Workflow Radar.

Examples:
- [Kavion Solutions — WhatsApp API pricing calculator](https://kavionsolutions.in/tools/whatsapp-api-pricing-calculator): country and message-category inputs, monthly Meta cost estimate.
- [BeeCMO — WhatsApp API cost calculator India](https://beecmo.com/tools/whatsapp-api-pricing-calculator): India rate card, GST and category estimates.
- [TextNation — WhatsApp API pricing calculator](https://textnation.in/tools/whatsapp-pricing-calculator/): category, service free-tier and INR cost breakdown.
- [CampaignHQ — WhatsApp pricing calculator](https://www.campaignhq.co/products/whatsapp-pricing-calculator): country-level pricing, tiers and platform-fee context.
- [SMSGatewayHub — WhatsApp pricing calculator](https://www.smsgatewayhub.com/whatsapp-pricing-calculator): Meta cost, provider plan and tax estimates.
- [Takat AI — India WhatsApp API pricing](https://www.takat.ai/insights/whatsapp-business-api-pricing-india): current explanatory guide.
- [Wamafy — India WhatsApp API pricing](https://wamafy.com/resources/whatsapp-business-api-pricing-india): worked examples and category breakdown.

## Pricing accuracy gate

Third-party pages consistently report an India Meta rate card effective 1 October 2026, including ₹0.8631 per delivered marketing message and ₹0.115 per delivered utility/authentication message, plus a 1,000-service-message monthly allowance per business number. These figures are **not independently verified against Meta's primary source in this run**.

Meta's public pricing page at https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing returned a logged-out wall, so the underlying INR rate-card file and account-specific billing terms could not be inspected. Do not hard-code these rates or publish a calculator until the primary rate card is accessible and verified.

## Competitive and distribution assessment

- The interactive-tool category is already crowded, with several direct India-specific competitors.
- A new generic calculator would offer little differentiation and risks reproducing stale rates.
- Search results show multiple recent articles, but do not establish search volume, qualified traffic, or willingness to buy.
- Organic distribution would likely require a differentiated use case, such as combining Meta message charges with provider subscription/markup, GST assumptions, and an auditable rate-card date. Existing tools already cover much of this.
- No affiliate partner, ad network, or sponsorship economics were validated for this niche. Do not infer revenue from competitor presence.

## Portfolio decision

**NO-GO now** for:
- a standalone WhatsApp cost-calculator website;
- a second paid storefront;
- pre-filled or hard-coded Meta prices without a primary-source check;
- an affiliate CTA embedded in a cost estimate.

**Revisit only if** a specific audience segment demonstrates an unmet calculation need and Meta's current primary rate card can be verified. A future tool, if justified, should keep calculations client-side and separate Meta charges from provider fees, taxes and optional add-ons.

## Operational observation

On 12 November 2026, a public browser check of https://workflow-radar-app.onrender.com/tools/business returned HTTP 200 but remained on Render's “Application loading” screen for over a minute; the Business Studio and CRM calculator did not render. The narrow 375px viewport did not overflow, but the actual tool layout could not be assessed. This is an availability observation, not a diagnosis of the cause.

The Render service inspection could not be performed in this run because the connected Render tools require the owner to confirm which workspace to operate in. Do not guess or select a workspace in an automated run.

## Sources checked

- https://www.takat.ai/insights/whatsapp-business-api-pricing-india
- https://wamafy.com/resources/whatsapp-business-api-pricing-india
- https://kavionsolutions.in/tools/whatsapp-api-pricing-calculator
- https://beecmo.com/tools/whatsapp-api-pricing-calculator
- https://textnation.in/tools/whatsapp-pricing-calculator/
- https://www.campaignhq.co/products/whatsapp-pricing-calculator
- https://www.smsgatewayhub.com/whatsapp-pricing-calculator
- https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing

No traffic, signups, conversions, partnerships, or revenue are claimed by this research.
