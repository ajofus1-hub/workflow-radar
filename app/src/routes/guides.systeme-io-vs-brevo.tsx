import { createFileRoute } from '@tanstack/react-router'

const title = 'Systeme.io vs Brevo: Free Plan (2026)'
const description =
  'Compare Systeme.io and Brevo free plans: contacts, daily email limits, automation, funnels and the best fit for small businesses.'

export const Route = createFileRoute('/guides/systeme-io-vs-brevo')({
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
        href: 'https://workflow-radar-app.onrender.com/guides/systeme-io-vs-brevo',
      },
    ],
  }),
  component: SystemeVsBrevoPage,
})

function SystemeVsBrevoPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      <nav className="mb-8 text-sm text-slate-500" aria-label="Breadcrumb">
        <a className="hover:text-slate-900" href="/">Workflow Radar</a>
        <span className="mx-2">/</span>
        <a className="hover:text-slate-900" href="/guides/free-email-marketing-tools">Guides</a>
        <span className="mx-2">/</span>
        <span>Systeme.io vs Brevo</span>
      </nav>

      <header className="mb-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-indigo-700">Email marketing comparison · Updated November 11, 2026</p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Systeme.io vs Brevo: which free plan is better for a small business?</h1>
        <p className="text-lg leading-8 text-slate-600">
          Brevo lets you store a much larger contact list, but its free email sending is capped at 300 messages per day. Systeme.io has a smaller 2,000-contact allowance, yet includes unlimited email sending plus sales funnels and a course area. The right choice depends on whether you need a large address book or a complete path from subscriber to customer.
        </p>
      </header>

      <aside className="mb-8 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        <strong>Affiliate disclosure:</strong> This guide contains a tracked Systeme.io affiliate link. If you sign up through it, Workflow Radar may earn a commission at no extra cost to you. Brevo links are standard product links; we do not currently earn a commission from Brevo. Recommendations are based on published product limits, not commission rates.
      </aside>

      <section className="mb-10 rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-indigo-800">Quick verdict</p>
        <h2 className="mb-3 text-2xl font-bold">Choose Brevo for contact storage and multi-channel messaging. Choose Systeme.io for funnels and selling.</h2>
        <ul className="space-y-2 leading-7 text-slate-700">
          <li><strong>Choose Brevo</strong> if you need to keep a large CRM/contact database, send up to 300 emails a day, or use transactional email and multi-channel tools.</li>
          <li><strong>Choose Systeme.io</strong> if your main goal is to capture leads, send email, build sales funnels and sell a course or digital product from one account.</li>
          <li><strong>Do not compare contact limits alone.</strong> Brevo stores up to 100,000 contacts on Free, but only 300 emails can be sent per day and only 2,000 unique contacts can enter active automations.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-bold">Free-plan comparison</h2>
        <p className="mb-4 leading-7 text-slate-600">The figures below come from official vendor pricing and help pages checked on November 11, 2026. Limits can change, so confirm the current terms before moving an existing list.</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[660px] border-collapse text-left text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="p-4 font-semibold">Free-plan item</th>
                <th className="p-4 font-semibold">Systeme.io</th>
                <th className="p-4 font-semibold">Brevo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr><th className="p-4 font-medium">Price</th><td className="p-4">$0</td><td className="p-4">$0</td></tr>
              <tr><th className="p-4 font-medium">Contacts stored</th><td className="p-4">Up to 2,000</td><td className="p-4">Up to 100,000</td></tr>
              <tr><th className="p-4 font-medium">Email sending</th><td className="p-4">Unlimited email sends</td><td className="p-4">300 sends per day; unused sends do not roll over</td></tr>
              <tr><th className="p-4 font-medium">Automation</th><td className="p-4">1 automation rule and 1 workflow</td><td className="p-4">Multi-channel automation; up to 2,000 unique contacts can enter active automations</td></tr>
              <tr><th className="p-4 font-medium">Sales funnels</th><td className="p-4">3 funnels</td><td className="p-4">Free sales features; not a like-for-like funnel builder</td></tr>
              <tr><th className="p-4 font-medium">Courses</th><td className="p-4">1 course on Free</td><td className="p-4">No equivalent course-hosting allowance listed on Free</td></tr>
              <tr><th className="p-4 font-medium">Transactional email</th><td className="p-4">Email marketing and funnel follow-up</td><td className="p-4">Transactional email included</td></tr>
              <tr><th className="p-4 font-medium">Branding / users</th><td className="p-4">Check the current plan comparison for account-specific limits</td><td className="p-4">Brevo branding on free emails; 1 marketing seat</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs leading-5 text-slate-500">“Contacts stored” and “emails sent” measure different things. Brevo's 100,000-contact allowance does not mean you can email all 100,000 people on the same day for free.</p>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold">The Brevo 300-emails-per-day limit: what it means in practice</h2>
        <p className="mb-4 leading-7 text-slate-700">Brevo's Free plan can store up to 100,000 contacts, but the daily campaign limit is 300 email sends. If you have 3,000 subscribers and want to send the same newsletter to everyone, only 300 receive it on the scheduled day. You must manually requeue the remaining recipients on later days. Unused daily sends do not accumulate, and Brevo says you cannot schedule a campaign for the next day after the daily quota has already been reached.</p>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="mb-2 font-semibold">Simple example</p>
          <p className="leading-7 text-slate-700">A 3,000-person newsletter list needs at least 10 days of 300 sends to reach everyone on Brevo Free, assuming the daily quota is available each day and you manually requeue the campaign. For a time-sensitive launch, that delay may be unacceptable.</p>
        </div>
        <p className="mt-4 leading-7 text-slate-700">Brevo is still useful when the list is large but messages are sent to small segments or at a low daily volume. It is also more attractive if transactional messages, SMS add-ons or CRM features matter more than sending a full newsletter blast at once.</p>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold">Where Brevo is the better choice</h2>
        <ul className="mb-5 list-disc space-y-2 pl-6 leading-7 text-slate-700">
          <li>You want to store a large contact database without paying just for storage.</li>
          <li>You send fewer than 300 marketing emails on a typical day, or can work with small segments.</li>
          <li>You need transactional email as well as marketing campaigns.</li>
          <li>You want multi-channel marketing automation, while staying within the free plan's 2,000-unique-contact automation entry limit.</li>
          <li>You can accept the Brevo branding on free emails and a single marketing seat.</li>
        </ul>
        <a className="inline-flex items-center rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-800 transition hover:border-slate-500 hover:bg-slate-50" href="https://www.brevo.com/pricing/" target="_blank" rel="noopener noreferrer">
          Check Brevo's current plans <span className="ml-2" aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold">Where Systeme.io is the better choice</h2>
        <p className="mb-4 leading-7 text-slate-700">Systeme.io is designed around the sales journey, not just the contact database. Its Free plan lists 2,000 contacts, unlimited email sending, three sales funnels and one course. It also includes checkout-related features and a built-in way to connect lead capture with follow-up and an offer.</p>
        <ul className="mb-5 list-disc space-y-2 pl-6 leading-7 text-slate-700">
          <li>You want to sell a course, coaching offer or digital product.</li>
          <li>You need a landing page and funnel steps, not only a CRM contact record.</li>
          <li>You want unlimited email sends rather than a 300-per-day quota.</li>
          <li>Your list fits within 2,000 contacts and one basic automation rule/workflow is enough to start.</li>
        </ul>
        <a className="inline-flex items-center rounded-lg bg-indigo-700 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-indigo-800" href="/go/systeme/workflow-radar-systeme-vs-brevo" target="_blank" rel="sponsored nofollow noopener">
          Try Systeme.io free <span className="ml-2" aria-hidden="true">↗</span>
        </a>
        <p className="mt-2 text-xs text-slate-500">Tracked affiliate link · No extra cost to you. Systeme.io states that its Free plan does not require a credit card.</p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-bold">Which platform should you choose?</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-5">
            <h3 className="mb-2 text-lg font-bold">Pick Brevo if…</h3>
            <ul className="list-disc space-y-2 pl-5 leading-6 text-slate-700">
              <li>Your contact database is larger than 2,000.</li>
              <li>You send fewer than 300 emails on most days.</li>
              <li>Transactional email or CRM functions are important.</li>
              <li>You do not need an integrated course and sales-funnel stack.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 p-5">
            <h3 className="mb-2 text-lg font-bold">Pick Systeme.io if…</h3>
            <ul className="list-disc space-y-2 pl-5 leading-6 text-slate-700">
              <li>You have 2,000 contacts or fewer.</li>
              <li>You need to email your full list without a 300-per-day free cap.</li>
              <li>You sell courses, services or digital products.</li>
              <li>You want funnels and email in one platform.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10 rounded-xl bg-slate-50 p-6">
        <h2 className="mb-3 text-xl font-bold">Official sources checked</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
          <li><a className="text-indigo-700 underline" href="https://help.brevo.com/hc/en-us/articles/208589409-About-Brevo-s-pricing-plans" target="_blank" rel="noopener noreferrer">Brevo official pricing-plan guide</a> — 100,000 stored contacts, 300 daily sends and included Free features.</li>
          <li><a className="text-indigo-700 underline" href="https://help.brevo.com/hc/en-us/articles/208580669-FAQs-What-are-the-limits-of-the-Free-plan" target="_blank" rel="noopener noreferrer">Brevo Free-plan limits FAQ</a> — daily sending, requeueing, branding and the 2,000-contact automation entry limit.</li>
          <li><a className="text-indigo-700 underline" href="https://systeme.io/pricing" target="_blank" rel="noopener noreferrer">Systeme.io official pricing</a> — contact, funnel, email and course allowances.</li>
          <li><a className="text-indigo-700 underline" href="https://systeme.io/affiliate-program" target="_blank" rel="noopener noreferrer">Systeme.io official affiliate programme</a> — published commission and tracking terms.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-bold">Frequently asked questions</h2>
        <div className="space-y-3">
          <details className="rounded-lg border border-slate-200 p-4">
            <summary className="cursor-pointer font-semibold">Does Brevo really allow 100,000 contacts for free?</summary>
            <p className="mt-3 leading-7 text-slate-700">Yes. Brevo's official Free-plan documentation says you can store up to 100,000 contacts. That is a storage limit, not a daily sending allowance: the free plan is capped at 300 email sends per day.</p>
          </details>
          <details className="rounded-lg border border-slate-200 p-4">
            <summary className="cursor-pointer font-semibold">Can Brevo Free send a newsletter to more than 300 people?</summary>
            <p className="mt-3 leading-7 text-slate-700">You can include more than 300 contacts in a campaign, but only 300 receive it on the scheduled day. Brevo says you must manually requeue the remaining recipients over later days.</p>
          </details>
          <details className="rounded-lg border border-slate-200 p-4">
            <summary className="cursor-pointer font-semibold">Does Brevo Free include automation?</summary>
            <p className="mt-3 leading-7 text-slate-700">Yes. Brevo lists multi-channel marketing automation on Free, but only up to 2,000 unique contacts can enter active automations. This is separate from the 100,000-contact storage allowance.</p>
          </details>
          <details className="rounded-lg border border-slate-200 p-4">
            <summary className="cursor-pointer font-semibold">Is Systeme.io better than Brevo for selling a course?</summary>
            <p className="mt-3 leading-7 text-slate-700">Systeme.io is the more direct fit if you want course hosting, sales funnels and email follow-up in one account. Brevo is stronger as a contact, campaign and transactional-messaging platform.</p>
          </details>
        </div>
      </section>

      <footer className="border-t border-slate-200 pt-6 text-sm leading-6 text-slate-500">
        <p>Related reading: <a className="text-indigo-700 underline" href="/guides/free-email-marketing-tools">Best free email marketing tools</a>, <a className="text-indigo-700 underline" href="/guides/systeme-io-vs-kit">Systeme.io vs Kit</a>, <a className="text-indigo-700 underline" href="/guides/systeme-io-vs-mailerlite">Systeme.io vs MailerLite</a>, and the <a className="text-indigo-700 underline" href="/guides/systeme-io-free-plan-limits">Systeme.io Free plan limits guide</a>.</p>
        <p className="mt-2">Last checked November 11, 2026. Always verify limits on the official pricing pages before importing a list or launching a campaign.</p>
      <p className="mt-3"><a className="font-semibold text-indigo-700 underline" href="/guides/systeme-io-pricing">Compare Systeme.io pricing and all four plans</a>.</p>
      </footer>
    </main>
  )
}
