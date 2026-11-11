import { createFileRoute } from '@tanstack/react-router'

const title = 'Systeme.io Free Plan Limits (2026): Contacts, Funnels, Automation and the $10,000 Sales Cap'
const description =
  'A practical breakdown of Systeme.io Free in 2026: 2,000 contacts, one CRM pipeline, unlimited email sends, one campaign and workflow, three funnels, one course, and the $10,000 lifetime sales limit.'

export const Route = createFileRoute('/guides/systeme-io-free-plan-limits')({
  head: () => ({
    meta: [
      { title: title + ' | Workflow Radar' },
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'article' },
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://workflow-radar-app.onrender.com/guides/systeme-io-free-plan-limits',
      },
    ],
  }),
  component: SystemeFreePlanLimitsPage,
})

function SystemeFreePlanLimitsPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: title,
            description,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://workflow-radar-app.onrender.com/guides/systeme-io-free-plan-limits',
            },
            datePublished: '2026-11-11',
            dateModified: '2026-11-11',
            publisher: {
              '@type': 'Organization',
              name: 'Workflow Radar',
              url: 'https://workflow-radar-app.onrender.com/',
            },
          }),
        }}
      />
      <nav className="mb-8 text-sm text-slate-500" aria-label="Breadcrumb">
        <a className="hover:text-slate-900" href="/">Workflow Radar</a>
        <span className="mx-2">/</span>
        <a className="hover:text-slate-900" href="/guides/free-email-marketing-tools">Guides</a>
        <span className="mx-2">/</span>
        <span>Systeme.io Free plan limits</span>
      </nav>

      <header className="mb-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-indigo-700">Plan limits guide · Published November 11, 2026 · Checked November 11, 2026</p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Systeme.io Free plan limits: what you actually get in 2026</h1>
        <p className="text-lg leading-8 text-slate-600">
          Systeme.io's Free plan is a real $0 plan, not a short trial. It gives you 2,000 contacts, unlimited email sends, three sales funnels and one course. The important restrictions are smaller feature caps—and a $10,000 lifetime sales-revenue limit that is easy to miss if you only look at the headline contact allowance.
        </p>
      </header>

      <aside className="mb-8 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        <strong>Affiliate disclosure:</strong> This guide contains a tracked Systeme.io affiliate link. If you create an account through it, Workflow Radar may earn a commission at no extra cost to you. The limits and recommendations below are based on Systeme.io's published pricing and terms, not on commission rates.
      </aside>

      <section className="mb-10 rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-indigo-800">Quick answer</p>
        <h2 className="mb-3 text-2xl font-bold">Free is useful for validating one small online business—not for running an unlimited operation.</h2>
        <ul className="space-y-2 leading-7 text-slate-700">
          <li><strong>Price:</strong> $0 per month; Systeme.io says no credit card is required.</li>
          <li><strong>Core capacity:</strong> 2,000 contacts, unlimited email sends, three funnels and 15 funnel steps.</li>
          <li><strong>Feature caps:</strong> one CRM pipeline, one email campaign, one automation rule, one workflow, one tag, one blog and one course.</li>
          <li><strong>Sales cap:</strong> $10,000 in lifetime sales revenue on Free. Affiliate commissions are excluded from this calculation.</li>
        </ul>
        <a className="mt-5 inline-flex items-center rounded-lg bg-indigo-700 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-indigo-800" href="https://systeme.io/pricing?sa=sa0286089660ebed8476e8d7899489bd8eb71bc507&tk=workflow-radar-systeme-free-plan-limits" target="_blank" rel="sponsored nofollow noopener">
          Check the free plan on Systeme.io <span className="ml-2" aria-hidden="true">↗</span>
        </a>
        <p className="mt-2 text-xs text-slate-500">Tracked affiliate link · The Free plan is listed at $0 and does not require a credit card.</p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-bold">Systeme.io Free plan limits at a glance</h2>
        <p className="mb-4 leading-7 text-slate-600">The table below follows the Free / Freemium column on Systeme.io's official plan comparison. Limits and plan names can change, so confirm the live page before building a launch around them.</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm">
            <thead className="bg-slate-100">
              <tr><th className="p-4 font-semibold">Feature</th><th className="p-4 font-semibold">Free allowance</th><th className="p-4 font-semibold">What it means in practice</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr><th className="p-4 font-medium">Contacts</th><td className="p-4">2,000</td><td className="p-4">Enough to validate a small list; plan an upgrade before exceeding the cap.</td></tr>
              <tr><th className="p-4 font-medium">CRM pipelines</th><td className="p-4">1</td><td className="p-4">One pipeline for tracking leads and deals; separate pipelines for different products or teams need more capacity.</td></tr>
              <tr><th className="p-4 font-medium">Email sends</th><td className="p-4">Unlimited</td><td className="p-4">No published monthly send quota, but your contact and campaign limits still apply.</td></tr>
              <tr><th className="p-4 font-medium">Email campaigns</th><td className="p-4">1</td><td className="p-4">A tight limit if you need separate campaigns for different products or launches.</td></tr>
              <tr><th className="p-4 font-medium">Email newsletters</th><td className="p-4">Unlimited</td><td className="p-4">You can send newsletters without a stated plan-level count cap.</td></tr>
              <tr><th className="p-4 font-medium">Automation rules / workflows</th><td className="p-4">1 rule and 1 workflow</td><td className="p-4">Suitable for a simple welcome or lead follow-up flow, not a complex branching system.</td></tr>
              <tr><th className="p-4 font-medium">Tags</th><td className="p-4">1</td><td className="p-4">Limited segmentation for buyers, leads and interest groups.</td></tr>
              <tr><th className="p-4 font-medium">Sales funnels / steps</th><td className="p-4">3 funnels / 15 steps</td><td className="p-4">Enough for a lead magnet, one offer and a simple follow-up path.</td></tr>
              <tr><th className="p-4 font-medium">Blogs / blog posts</th><td className="p-4">1 blog / unlimited posts</td><td className="p-4">One blog property with no listed post-count cap.</td></tr>
              <tr><th className="p-4 font-medium">Courses / students</th><td className="p-4">1 course / 500 students</td><td className="p-4">Enough to test one course; check the student cap before a larger launch.</td></tr>
              <tr><th className="p-4 font-medium">Custom domains</th><td className="p-4">1</td><td className="p-4">One custom-domain slot for your site or funnel setup.</td></tr>
              <tr><th className="p-4 font-medium">A/B tests</th><td className="p-4">1</td><td className="p-4">Limited testing capacity across pages and offers.</td></tr>
              <tr><th className="p-4 font-medium">1-click upsells / order bumps</th><td className="p-4">1 each</td><td className="p-4">One of each checkout add-on type.</td></tr>
              <tr><th className="p-4 font-medium">Events / bookings</th><td className="p-4">1 event / unlimited bookings</td><td className="p-4">One booking event type, with no listed booking-count cap.</td></tr>
              <tr><th className="p-4 font-medium">Community</th><td className="p-4">1 / unlimited members</td><td className="p-4">One community space.</td></tr>
              <tr><th className="p-4 font-medium">API rate</th><td className="p-4">30 requests per minute</td><td className="p-4">Relevant if you connect external systems through the API.</td></tr>
              <tr><th className="p-4 font-medium">Lifetime sales revenue</th><td className="p-4">$10,000</td><td className="p-4">A separate sales ceiling on Free; see the terms section below.</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs leading-5 text-slate-500">Systeme.io's pricing page also lists unlimited subaccounts on every plan. Each subaccount receives the same limits as the main account's plan; this does not increase the limits of one individual account.</p>
      </section>

      <section className="mb-10 rounded-xl border border-rose-200 bg-rose-50 p-6">
        <h2 className="mb-3 text-2xl font-bold text-rose-950">The $10,000 lifetime sales limit: the important catch</h2>
        <p className="mb-3 leading-7 text-rose-950">Systeme.io's Terms and Conditions, Article 5a, say that Free accounts are limited to <strong>USD $10,000 in lifetime sales revenue</strong>. This is cumulative sales revenue, not a monthly allowance. Affiliate commissions are not included. Sales in other currencies are converted to USD, so exchange-rate changes can affect when the limit is reached.</p>
        <ol className="mb-4 list-decimal space-y-2 pl-6 leading-7 text-rose-950">
          <li>A dashboard notification appears as the account approaches the limit.</li>
          <li>When the limit is reached, Systeme.io says it sends an email and gives the account three days to upgrade.</li>
          <li>If the account is not upgraded within that period, its payment pages stop accepting new sales.</li>
          <li>The terms say the account is not automatically upgraded or charged; a paid subscription is needed to resume selling.</li>
        </ol>
        <p className="text-sm leading-6 text-rose-950">If you are planning a launch, read Article 5a yourself and keep an eye on the account's sales total. Do not treat the Free plan as an unlimited-revenue plan.</p>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold">When does the Free plan stop being enough?</h2>
        <div className="space-y-4">
          <div className="rounded-xl border border-slate-200 p-5">
            <h3 className="mb-2 text-lg font-bold">You need more than one nurture path</h3>
            <p className="leading-7 text-slate-700">One campaign, one automation rule, one workflow and one tag can support a simple start. If you need separate onboarding for multiple products, buyer-specific tagging or multi-branch journeys, these feature caps may matter before you reach 2,000 contacts.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-5">
            <h3 className="mb-2 text-lg font-bold">You need another funnel, course or domain</h3>
            <p className="leading-7 text-slate-700">Free includes three funnels, one course and one custom domain. A second course or a fourth funnel is a clearer upgrade signal than waiting until the contact limit is full.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-5">
            <h3 className="mb-2 text-lg font-bold">Your sales approach the lifetime ceiling</h3>
            <p className="leading-7 text-slate-700">If your cumulative sales are approaching $10,000, plan the upgrade before the payment-page restriction becomes urgent. The limit excludes affiliate commissions, but it applies to sales revenue as defined in the terms.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold">What does Startup add?</h2>
        <p className="mb-4 leading-7 text-slate-700">The official pricing page currently lists Startup at <strong>$17 per month</strong> on monthly billing. Compared with Free, it raises the published limits to 5,000 contacts, five CRM pipelines, 10 email campaigns, 10 automation rules, five workflows, 10 funnels, 50 funnel steps, five courses and three custom domains. Check the live price and billing selector before upgrading.</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[440px] border-collapse text-left text-sm">
            <thead className="bg-slate-100"><tr><th className="p-4 font-semibold">Limit</th><th className="p-4 font-semibold">Free</th><th className="p-4 font-semibold">Startup</th></tr></thead>
            <tbody className="divide-y divide-slate-200">
              <tr><th className="p-4 font-medium">Monthly price</th><td className="p-4">$0</td><td className="p-4">$17</td></tr>
              <tr><th className="p-4 font-medium">Contacts</th><td className="p-4">2,000</td><td className="p-4">5,000</td></tr>
              <tr><th className="p-4 font-medium">CRM pipelines</th><td className="p-4">1</td><td className="p-4">5</td></tr>
              <tr><th className="p-4 font-medium">Email campaigns</th><td className="p-4">1</td><td className="p-4">10</td></tr>
              <tr><th className="p-4 font-medium">Automation rules / workflows</th><td className="p-4">1 / 1</td><td className="p-4">10 / 5</td></tr>
              <tr><th className="p-4 font-medium">Funnels / steps</th><td className="p-4">3 / 15</td><td className="p-4">10 / 50</td></tr>
              <tr><th className="p-4 font-medium">Courses</th><td className="p-4">1</td><td className="p-4">5</td></tr>
              <tr><th className="p-4 font-medium">Custom domains</th><td className="p-4">1</td><td className="p-4">3</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10 rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
        <h2 className="mb-3 text-2xl font-bold">Who should start with Free?</h2>
        <ul className="mb-5 list-disc space-y-2 pl-6 leading-7 text-slate-700">
          <li>A solo creator testing one course, service or digital product.</li>
          <li>A small business with fewer than 2,000 contacts and a simple follow-up flow.</li>
          <li>A seller who needs a few funnels and one blog rather than a large multi-brand setup.</li>
          <li>Someone who wants to validate the offer before committing to a monthly software bill.</li>
        </ul>
        <p className="mb-4 leading-7 text-slate-700">It is a poor fit if you already know you need several campaigns, multiple automation paths, more than one course or sales beyond the Free plan's lifetime revenue limit.</p>
        <a className="inline-flex items-center rounded-lg bg-indigo-700 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-indigo-800" href="https://systeme.io/pricing?sa=sa0286089660ebed8476e8d7899489bd8eb71bc507&tk=workflow-radar-systeme-free-plan-limits-bottom" target="_blank" rel="sponsored nofollow noopener">
          Compare plans and start free <span className="ml-2" aria-hidden="true">↗</span>
        </a>
        <p className="mt-2 text-xs text-slate-500">Affiliate link · No extra cost to you. Verify current limits and terms before signing up.</p>
      </section>

      <section className="mb-10 rounded-xl bg-slate-50 p-6">
        <h2 className="mb-3 text-xl font-bold">Official sources checked</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
          <li><a className="text-indigo-700 underline" href="https://systeme.io/pricing" target="_blank" rel="noopener noreferrer">Systeme.io official pricing and plan comparison</a> — contacts, email, campaigns, automation, funnels, blogs, courses, students, bookings and paid-plan limits.</li>
          <li><a className="text-indigo-700 underline" href="https://systeme.io/terms-and-conditions" target="_blank" rel="noopener noreferrer">Systeme.io Terms and Conditions, Article 5a</a> — $10,000 lifetime sales revenue limit on Free, affiliate-commission exclusion and upgrade process.</li>
          <li><a className="text-indigo-700 underline" href="https://help.systeme.io/article/162-how-the-systeme-io-affiliate-program-works" target="_blank" rel="noopener noreferrer">Systeme.io affiliate programme help</a> — affiliate ID tracking and the requirement to use the systeme.io domain without www.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-bold">Frequently asked questions</h2>
        <div className="space-y-3">
          <details className="rounded-lg border border-slate-200 p-4">
            <summary className="cursor-pointer font-semibold">Is Systeme.io Free really free forever?</summary>
            <p className="mt-3 leading-7 text-slate-700">Systeme.io lists the Freemium plan at $0 and says no credit card is required. It is subject to the published feature and $10,000 lifetime sales-revenue limits, so “free” does not mean every feature or sales volume is unlimited.</p>
          </details>
          <details className="rounded-lg border border-slate-200 p-4">
            <summary className="cursor-pointer font-semibold">Can I send unlimited emails on the Free plan?</summary>
            <p className="mt-3 leading-7 text-slate-700">The official comparison lists unlimited emails sent and unlimited email newsletters. The same Free column lists one email campaign, one automation rule and one workflow; those separate limits still matter.</p>
          </details>
          <details className="rounded-lg border border-slate-200 p-4">
            <summary className="cursor-pointer font-semibold">What happens after $10,000 in sales?</summary>
            <p className="mt-3 leading-7 text-slate-700">Article 5a says the account receives an email and has three days to upgrade. If it does not, payment pages stop accepting new sales. The terms say the account is not automatically upgraded or charged. Affiliate commissions are excluded from the calculation.</p>
          </details>
          <details className="rounded-lg border border-slate-200 p-4">
            <summary className="cursor-pointer font-semibold">Does Systeme.io charge transaction fees?</summary>
            <p className="mt-3 leading-7 text-slate-700">The pricing page lists 0% transaction fees from Systeme.io. This is the platform's fee; your payment provider may still apply its own processing charges.</p>
          </details>
          <details className="rounded-lg border border-slate-200 p-4">
            <summary className="cursor-pointer font-semibold">How many students can I have on Free?</summary>
            <p className="mt-3 leading-7 text-slate-700">The detailed plan comparison lists one course and up to 500 students on Free. Check the current plan table before enrolling a larger cohort.</p>
          </details>
        </div>
      </section>

      <footer className="border-t border-slate-200 pt-6 text-sm leading-6 text-slate-600">
        <p>For plan prices, see our <a className="font-semibold text-indigo-700 underline" href="/guides/systeme-io-pricing">Systeme.io pricing guide</a>. Related comparisons: <a className="font-semibold text-indigo-700 underline" href="/guides/systeme-io-vs-kit">Systeme.io vs Kit</a>, <a className="font-semibold text-indigo-700 underline" href="/guides/systeme-io-vs-mailerlite">Systeme.io vs MailerLite</a>, <a className="font-semibold text-indigo-700 underline" href="/guides/systeme-io-vs-brevo">Systeme.io vs Brevo</a>, and <a className="font-semibold text-indigo-700 underline" href="/guides/systeme-io-vs-mailchimp">Systeme.io vs Mailchimp</a>.</p>
        <p className="mt-3 text-xs text-slate-500">Plan information checked November 11, 2026. Always review the vendor's current pricing and terms before making a purchase or moving an audience.</p>
      </footer>
    </main>
  )
}
