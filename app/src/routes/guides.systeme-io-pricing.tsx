import { createFileRoute } from '@tanstack/react-router'

const title = 'Systeme.io Pricing 2026: Plans & Costs'
const description =
  "Compare Systeme.io's Free, Startup, Webinar and Unlimited plans. See current prices, key limits and which tier is worth paying for."

export const Route = createFileRoute('/guides/systeme-io-pricing')({
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
        href: 'https://workflow-radar-app.onrender.com/guides/systeme-io-pricing',
      },
    ],
  }),
  component: SystemePricingPage,
})

function SystemePricingPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      <nav className="mb-8 text-sm text-slate-500" aria-label="Breadcrumb">
        <a className="hover:text-slate-900" href="/">Workflow Radar</a>
        <span className="mx-2">/</span>
        <a className="hover:text-slate-900" href="/guides/free-email-marketing-tools">Guides</a>
        <span className="mx-2">/</span>
        <span>Systeme.io pricing</span>
      </nav>

      <header className="mb-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-indigo-700">Pricing and plan comparison · Updated November 11, 2026</p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Systeme.io pricing: which plan is worth paying for?</h1>
        <p className="text-lg leading-8 text-slate-600">
          Systeme.io has a permanent Free plan and three paid tiers: Startup, Webinar and Unlimited. The right choice depends less on the headline price and more on your contact count, number of funnels, automation needs and whether you run evergreen webinars.
        </p>
      </header>

      <aside className="mb-8 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        <strong>Affiliate disclosure:</strong> This page contains tracked Systeme.io affiliate links. If you create an account through one, Workflow Radar may earn a commission at no extra cost to you. We recommend the lowest plan that meets your requirements; commissions do not determine the recommendation.
      </aside>

      <section className="mb-10 rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-indigo-800">Quick answer</p>
        <h2 className="mb-3 text-2xl font-bold">Start with Free. Upgrade only when you hit a real limit.</h2>
        <ul className="space-y-2 leading-7 text-slate-700">
          <li><strong>Free ($0):</strong> best for testing and small projects with up to 2,000 contacts, three funnels and one automation rule.</li>
          <li><strong>Startup ($17/month):</strong> the practical upgrade when you need 5,000 contacts, 10 funnels or more automation capacity.</li>
          <li><strong>Webinar ($47/month):</strong> consider it when evergreen webinars are part of your sales process or you need 10,000 contacts and larger limits.</li>
          <li><strong>Unlimited ($97/month):</strong> for businesses that genuinely need unlimited contacts and core usage limits. It is unnecessary for most beginners.</li>
        </ul>
        <a className="mt-5 inline-flex items-center rounded-lg bg-indigo-700 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-indigo-800" href="/go/systeme/workflow-radar-systeme-pricing-quick" target="_blank" rel="sponsored nofollow noopener">
          Compare plans & start free
        </a>
        <p className="mt-2 text-xs text-slate-500">Tracked affiliate link · Check the billing selector and current terms before subscribing.</p>
      </section>

      <section className="mb-10">
        <p className="mb-6 text-sm leading-6 text-slate-600">Considering the referral side of the platform? Read our <a className="font-semibold text-indigo-700 underline" href="/guides/systeme-io-affiliate-program">Systeme.io affiliate program guide</a> for the published commission, tracking and payout conditions. Try our <a className="font-semibold text-indigo-700 underline" href="/tools">free online text and productivity tools</a>—no signup required.</p>

        <h2 className="mb-4 text-2xl font-bold">Systeme.io plans and prices</h2>
        <p className="mb-4 leading-7 text-slate-600">The amounts below are the monthly prices displayed on the official pricing page when checked on November 11, 2026. Annual billing may show discounted equivalent monthly prices. Currency, taxes and offers can vary by location and billing choice.</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[680px] border-collapse text-left text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="p-4 font-semibold">Plan</th>
                <th className="p-4 font-semibold">Monthly price</th>
                <th className="p-4 font-semibold">Contacts</th>
                <th className="p-4 font-semibold">Funnels</th>
                <th className="p-4 font-semibold">Automation rules</th>
                <th className="p-4 font-semibold">Best for</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr><th className="p-4 font-medium">Free</th><td className="p-4">$0</td><td className="p-4">2,000</td><td className="p-4">3</td><td className="p-4">1</td><td className="p-4">Testing and early-stage projects</td></tr>
              <tr><th className="p-4 font-medium">Startup</th><td className="p-4">$17</td><td className="p-4">5,000</td><td className="p-4">10</td><td className="p-4">10</td><td className="p-4">Growing small businesses</td></tr>
              <tr><th className="p-4 font-medium">Webinar</th><td className="p-4">$47</td><td className="p-4">10,000</td><td className="p-4">50</td><td className="p-4">100</td><td className="p-4">Webinar-led selling and larger teams</td></tr>
              <tr><th className="p-4 font-medium">Unlimited</th><td className="p-4">$97</td><td className="p-4">Unlimited</td><td className="p-4">Unlimited</td><td className="p-4">Unlimited</td><td className="p-4">High-volume businesses</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs leading-5 text-slate-500">All four plans list unlimited email sends and 0% platform transaction fees. Your payment processor may still charge its own processing fees. The full plan comparison includes additional limits for workflows, courses, domains, tags, CRM pipelines and funnel steps.</p>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold">What changes when you upgrade?</h2>
        <div className="space-y-4 leading-7 text-slate-700">
          <div><h3 className="font-semibold text-slate-900">Free to Startup</h3><p>Startup raises the contact allowance from 2,000 to 5,000, adds more funnels and automation rules, and increases allowances for workflows, campaigns, custom domains and courses. This is usually the first paid tier worth considering when the Free plan is genuinely constraining your work.</p></div>
          <div><h3 className="font-semibold text-slate-900">Startup to Webinar</h3><p>Webinar raises the contact limit to 10,000 and expands funnel and automation capacity. Its defining addition is evergreen webinar functionality. If you do not plan to run webinars, compare the other limits carefully before paying the extra monthly amount.</p></div>
          <div><h3 className="font-semibold text-slate-900">Webinar to Unlimited</h3><p>Unlimited removes the published caps on contacts, funnels, automation rules, custom domains and several other features. Choose it when your usage justifies it—not simply because it is the top tier.</p></div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold">Is Systeme.io Free really free?</h2>
        <p className="mb-4 leading-7 text-slate-700">The official pricing page lists the Free plan at $0 with no credit card required. It includes useful email, funnel, website and course features, but important limits still apply: 2,000 contacts, three funnels, one automation rule, one workflow, one email campaign and one custom domain.</p>
        <p className="mb-4 leading-7 text-slate-700">There is also a separate sales-revenue condition in the vendor's terms for Free accounts. Read the <a className="text-indigo-700 underline" href="/guides/systeme-io-free-plan-limits">full Free plan limits guide</a> before relying on the Free plan for an established business.</p>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold">How to choose without overpaying</h2>
        <ol className="list-decimal space-y-2 pl-6 leading-7 text-slate-700">
          <li>Start on Free and build a small test funnel before migrating a large list.</li>
          <li>Count active contacts and the number of funnels you actually need.</li>
          <li>Check whether you need more than one workflow or automation rule.</li>
          <li>Move to Webinar only if evergreen webinars or its higher limits solve a real business need.</li>
          <li>Review monthly and annual totals, tax treatment and cancellation terms on the vendor's checkout page.</li>
        </ol>
      </section>

      <section className="mb-10 rounded-2xl border border-slate-200 p-6">
        <h2 className="mb-3 text-2xl font-bold">Check the live price before you decide</h2>
        <p className="mb-4 leading-7 text-slate-700">Plan prices and feature caps can change. Confirm the current monthly or annual billing option directly with Systeme.io. If the Free plan already covers your needs, there is no reason to upgrade just because a paid plan is available.</p>
        <p className="mb-3 text-xs leading-5 text-slate-600"><strong>Affiliate disclosure:</strong> This is a tracked affiliate link. Workflow Radar may earn a commission if you sign up, at no extra cost to you.</p>
        <a className="inline-flex items-center rounded-lg bg-indigo-700 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-indigo-800" href="/go/systeme/workflow-radar-systeme-pricing-bottom" target="_blank" rel="sponsored nofollow noopener">
          View official pricing
        </a>
        <p className="mt-2 text-xs text-slate-500">Confirm the billing option and current terms on Systeme.io before subscribing.</p>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold">Official sources</h2>
        <ul className="list-disc space-y-2 pl-6 text-sm leading-6 text-slate-600">
          <li><a className="text-indigo-700 underline" href="https://systeme.io/pricing" target="_blank" rel="noopener noreferrer">Systeme.io official pricing and plan comparison</a> — current prices, contacts, funnels, automation and feature allowances.</li>
          <li><a className="text-indigo-700 underline" href="https://systeme.io/affiliate-program" target="_blank" rel="noopener noreferrer">Systeme.io affiliate programme</a> — commission and tracking information.</li>
          <li><a className="text-indigo-700 underline" href="https://help.systeme.io/article/162-how-the-systeme-io-affiliate-program-works" target="_blank" rel="noopener noreferrer">Affiliate programme help article</a> — payout requirements and affiliate-link formatting.</li>
        </ul>
      </section>

      <footer className="border-t border-slate-200 pt-6 text-sm leading-6 text-slate-600">
        <p>Related guides: <a className="text-indigo-700 underline" href="/guides/systeme-io-free-plan-limits">Free plan limits</a>, <a className="text-indigo-700 underline" href="/guides/systeme-io-vs-mailerlite">Systeme.io vs MailerLite</a>, <a className="text-indigo-700 underline" href="/guides/systeme-io-vs-brevo">Systeme.io vs Brevo</a>, <a className="text-indigo-700 underline" href="/guides/systeme-io-vs-kit">Systeme.io vs Kit</a> and <a className="text-indigo-700 underline" href="/guides/systeme-io-vs-mailchimp">Systeme.io vs Mailchimp</a>.</p>
        <p className="mt-3 text-xs text-slate-500">Pricing checked November 11, 2026. Confirm current prices and terms on the official site before purchasing.</p>
      </footer>
    </main>
  )
}
