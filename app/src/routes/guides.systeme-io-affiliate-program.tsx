import { createFileRoute } from '@tanstack/react-router'

const title = 'Systeme.io Affiliate Program: Commission, Tracking & Payouts (2026)'
const description =
  'A practical guide to the Systeme.io affiliate program: 60% commissions, lifetime referral attribution, payout rules, tracking links and what affiliates should verify.'

const affiliateUrlTop = 'https://systeme.io/?sa=sa0286089660ebed8476e8d7899489bd8eb71bc507&tk=workflow-radar-systeme-affiliate-program-top'
const affiliateUrlBottom = 'https://systeme.io/?sa=sa0286089660ebed8476e8d7899489bd8eb71bc507&tk=workflow-radar-systeme-affiliate-program-bottom'

export const Route = createFileRoute('/guides/systeme-io-affiliate-program')({
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
        href: 'https://workflow-radar-app.onrender.com/guides/systeme-io-affiliate-program',
      },
    ],
  }),
  component: SystemeAffiliateProgramPage,
})

function SystemeAffiliateProgramPage() {
  const faq = [
    {
      '@type': 'Question',
      name: 'How much does the Systeme.io affiliate program pay?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Systeme.io states that affiliates earn 60% of eligible sales of its subscriptions and courses. The commission base can be lower when VAT applies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to buy a Systeme.io subscription to become an affiliate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Systeme.io says you can join for free. Signing up gives you an affiliate ID and access to the affiliate dashboard.',
      },
    },
    {
      '@type': 'Question',
      name: 'When are affiliate commissions paid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Systeme.io says commissions are processed on the 10th of each month when profile information is complete, the commission balance exceeds $30, and the minimum 30-day holding period has passed. Payments may take 30 to 60 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does referral attribution last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Systeme.io says a person who creates a free account through your affiliate link is tied to your referral for life. Its help centre notes that the browser cookie itself expires after one year.',
      },
    },
  ]

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
              '@id': 'https://workflow-radar-app.onrender.com/guides/systeme-io-affiliate-program',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faq,
          }),
        }}
      />

      <nav className="mb-8 text-sm text-slate-500" aria-label="Breadcrumb">
        <a className="hover:text-slate-900" href="/">Workflow Radar</a>
        <span className="mx-2">/</span>
        <a className="hover:text-slate-900" href="/guides/free-email-marketing-tools">Guides</a>
        <span className="mx-2">/</span>
        <span>Systeme.io affiliate program</span>
      </nav>

      <header className="mb-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-indigo-700">Affiliate programme guide · Checked November 11, 2026</p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Systeme.io affiliate program: how the 60% commission and payouts work</h1>
        <p className="text-lg leading-8 text-slate-600">
          Systeme.io publishes a 60% commission rate on eligible sales of its subscriptions and courses. This guide explains the tracking, payout conditions and practical limitations before you decide whether the programme fits your audience.
        </p>
      </header>

      <aside className="mb-8 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        <strong>Affiliate disclosure:</strong> Workflow Radar participates in the Systeme.io affiliate programme. Links on this page are tracked; if you create an account through one and later make an eligible purchase, we may earn a commission at no extra cost to you. This commercial relationship does not change the terms or our advice to compare options.
      </aside>

      <section className="mb-10 rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-indigo-800">Quick answer</p>
        <h2 className="mb-3 text-2xl font-bold">The headline offer is 60% lifetime commission—but a free signup is not a paid commission.</h2>
        <ul className="space-y-2 leading-7 text-slate-700">
          <li><strong>Commission:</strong> 60% of eligible sales of Systeme.io subscriptions and courses, according to its help centre.</li>
          <li><strong>Referral attribution:</strong> a referred person who opens a free account through your link is tied to your affiliate ID for life; the browser cookie itself is stated to expire after one year.</li>
          <li><strong>Joining:</strong> free; Systeme.io says signing up provides an affiliate ID and dashboard access.</li>
          <li><strong>Payout threshold:</strong> more than $30 in commissions, complete profile information and a minimum 30-day holding period.</li>
        </ul>
        <a className="mt-5 inline-flex items-center rounded-lg bg-indigo-700 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-indigo-800" import { createFileRoute } from '@tanstack/react-router'

const title = 'Systeme.io Affiliate Program: Commission, Tracking & Payouts (2026)'
const description =
  'A practical guide to the Systeme.io affiliate program: 60% commissions, lifetime referral attribution, payout rules, tracking links and what affiliates should verify.'

const affiliateUrlTop = 'https://systeme.io/?sa=sa0286089660ebed8476e8d7899489bd8eb71bc507&tk=workflow-radar-systeme-affiliate-program-top'
const affiliateUrlBottom = 'https://systeme.io/?sa=sa0286089660ebed8476e8d7899489bd8eb71bc507&tk=workflow-radar-systeme-affiliate-program-bottom'

export const Route = createFileRoute('/guides/systeme-io-affiliate-program')({
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
        href: 'https://workflow-radar-app.onrender.com/guides/systeme-io-affiliate-program',
      },
    ],
  }),
  component: SystemeAffiliateProgramPage,
})

function SystemeAffiliateProgramPage() {
  const faq = [
    {
      '@type': 'Question',
      name: 'How much does the Systeme.io affiliate program pay?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Systeme.io states that affiliates earn 60% of eligible sales of its subscriptions and courses. The commission base can be lower when VAT applies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to buy a Systeme.io subscription to become an affiliate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Systeme.io says you can join for free. Signing up gives you an affiliate ID and access to the affiliate dashboard.',
      },
    },
    {
      '@type': 'Question',
      name: 'When are affiliate commissions paid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Systeme.io says commissions are processed on the 10th of each month when profile information is complete, the commission balance exceeds $30, and the minimum 30-day holding period has passed. Payments may take 30 to 60 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does referral attribution last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Systeme.io says a person who creates a free account through your affiliate link is tied to your referral for life. Its help centre notes that the browser cookie itself expires after one year.',
      },
    },
  ]

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
              '@id': 'https://workflow-radar-app.onrender.com/guides/systeme-io-affiliate-program',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faq,
          }),
        }}
      />

      <nav className="mb-8 text-sm text-slate-500" aria-label="Breadcrumb">
        <a className="hover:text-slate-900" href="/">Workflow Radar</a>
        <span className="mx-2">/</span>
        <a className="hover:text-slate-900" href="/guides/free-email-marketing-tools">Guides</a>
        <span className="mx-2">/</span>
        <span>Systeme.io affiliate program</span>
      </nav>

      <header className="mb-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-indigo-700">Affiliate programme guide · Checked November 11, 2026</p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Systeme.io affiliate program: how the 60% commission and payouts work</h1>
        <p className="text-lg leading-8 text-slate-600">
          Systeme.io publishes a 60% commission rate on eligible sales of its subscriptions and courses. This guide explains the tracking, payout conditions and practical limitations before you decide whether the programme fits your audience.
        </p>
      </header>

      <aside className="mb-8 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        <strong>Affiliate disclosure:</strong> Workflow Radar participates in the Systeme.io affiliate programme. Links on this page are tracked; if you create an account through one and later make an eligible purchase, we may earn a commission at no extra cost to you. This commercial relationship does not change the terms or our advice to compare options.
      </aside>

      <section className="mb-10 rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-indigo-800">Quick answer</p>
        <h2 className="mb-3 text-2xl font-bold">The headline offer is 60% lifetime commission—but a free signup is not a paid commission.</h2>
        <ul className="space-y-2 leading-7 text-slate-700">
          <li><strong>Commission:</strong> 60% of eligible sales of Systeme.io subscriptions and courses, according to its help centre.</li>
          <li><strong>Referral attribution:</strong> a referred person who opens a free account through your link is tied to your affiliate ID for life; the browser cookie itself is stated to expire after one year.</li>
          <li><strong>Joining:</strong> free; Systeme.io says signing up provides an affiliate ID and dashboard access.</li>
          <li><strong>Payout threshold:</strong> more than $30 in commissions, complete profile information and a minimum 30-day holding period.</li>
        </ul>
        <a className="mt-5 inline-flex items-center rounded-lg bg-indigo-700 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-indigo-800" href={affiliateUrlTop} target="_blank" rel="sponsored nofollow noopener">
          Visit Systeme.io and sign up free <span className="ml-2" aria-hidden="true">↗</span>
        </a>
        <p className="mt-2 text-xs text-slate-500">Tracked affiliate link · A free account does not itself generate a commission. An eligible purchase is required.</p>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold">How the commission works</h2>
        <p className="mb-4 leading-7 text-slate-700">
          Systeme.io's official help centre says affiliates earn 60% of the amount of eligible sales of Systeme.io and its courses. The programme is described as lifetime: when someone creates a free account through your link, the referral is attached to your affiliate ID and later eligible purchases can be credited to you.
        </p>
        <p className="mb-4 leading-7 text-slate-700">
          The commission is not always 60% of the sticker price. Systeme.io says VAT is deducted first where applicable, then the 60% rate is applied to the remaining amount. The final commission can therefore vary by buyer location and tax treatment.
        </p>
        <div className="rounded-xl border border-slate-200 p-5">
          <h3 className="mb-2 font-semibold">What this means in practice</h3>
          <p className="leading-7 text-slate-700">A free-plan signup is a referral, not an earned commission. Revenue is generated only when the referred customer makes an eligible purchase. A visitor may sign up today and upgrade later, so track signups, paid referrals and cleared commissions as separate milestones.</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold">Referral tracking: the important details</h2>
        <ul className="list-disc space-y-3 pl-6 leading-7 text-slate-700">
          <li>Use the Systeme.io domain without <code>www</code> in the affiliate URL. The vendor warns that adding <code>www</code> can prevent tracking from working correctly.</li>
          <li>The referral is linked when a person creates a free account through the affiliate link. Systeme.io says this association remains for life, while the browser cookie itself lasts one year.</li>
          <li>There is an important exception: if the referred person later uses another affiliate's link on a payment page to complete a purchase, that other affiliate may receive that sale.</li>
          <li>Keep your own tracking tags in the URL so you can distinguish which page or placement generated a referral.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold">Payout rules and timing</h2>
        <p className="mb-4 leading-7 text-slate-700">Systeme.io lists PayPal and bank transfer as payout methods. Its help centre says commissions are processed on the 10th of each month when all of these conditions are met:</p>
        <ul className="list-disc space-y-2 pl-6 leading-7 text-slate-700">
          <li>Your profile information is complete so invoices can be generated.</li>
          <li>Your commission balance exceeds $30.</li>
          <li>The minimum 30-day holding period has passed.</li>
        </ul>
        <p className="mt-4 leading-7 text-slate-700">The vendor says payment typically occurs within 30 to 60 days when the conditions are met. Check the affiliate dashboard for your own balance, payment method and current status; this guide cannot confirm an individual account's payout setup.</p>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold">Who should consider promoting it?</h2>
        <div className="space-y-4 leading-7 text-slate-700">
          <div>
            <h3 className="font-semibold text-slate-900">A reasonable fit</h3>
            <p>Creators, newsletter writers, course builders and small-business educators whose audience is actively comparing email marketing, landing pages, funnels or online-course tools.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Probably not a fit</h3>
            <p>Audiences with no need for marketing software, or promoters who would rely on generic mass links instead of useful explanations and genuine product fit. The commission rate alone is not a traffic strategy.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold">How to start without overpromising</h2>
        <ol className="list-decimal space-y-3 pl-6 leading-7 text-slate-700">
          <li>Read the current official affiliate terms and pricing before sharing a link.</li>
          <li>Explain a real use case and show the limits of the free plan as well as paid features.</li>
          <li>Disclose the affiliate relationship beside the link, not only in a footer.</li>
          <li>Use a unique tracking tag for each content placement and review the affiliate dashboard for confirmed results.</li>
          <li>Do not promise income, guaranteed sales or instant payouts. A referral may never become a paying customer.</li>
        </ol>
      </section>

      <section className="mb-10 rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
        <h2 className="mb-3 text-2xl font-bold">Compare the actual plans before signing up</h2>
        <p className="mb-4 leading-7 text-slate-700">The affiliate programme is only one part of the decision. Check whether the product itself fits your requirements and whether the free plan is enough.</p>
        <p className="mb-4 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-950"><strong>Affiliate disclosure:</strong> The “Visit Systeme.io” button below is a tracked affiliate link. If you create an account through it and later make an eligible purchase, Workflow Radar may earn a commission at no extra cost to you.</p>
        <div className="flex flex-wrap gap-3">
          <a className="inline-flex items-center rounded-lg bg-indigo-700 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-indigo-800" href={affiliateUrlBottom} target="_blank" rel="sponsored nofollow noopener">Visit Systeme.io <span className="ml-2" aria-hidden="true">↗</span></a>
          <a className="inline-flex items-center rounded-lg border border-indigo-300 px-5 py-3 font-semibold text-indigo-800 transition hover:bg-indigo-100" href="/guides/systeme-io-pricing">Compare plans</a>
          <a className="inline-flex items-center rounded-lg border border-indigo-300 px-5 py-3 font-semibold text-indigo-800 transition hover:bg-indigo-100" href="/guides/systeme-io-free-plan-limits">See free-plan limits</a>
        </div>
        <p className="mt-3 text-xs text-slate-500">The other two buttons open Workflow Radar comparison guides.</p>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold">Frequently asked questions</h2>
        <div className="space-y-5 leading-7 text-slate-700">
          <div><h3 className="font-semibold text-slate-900">Do I need to pay for Systeme.io to become an affiliate?</h3><p>No. The vendor says the programme is free and a subscription is not required.</p></div>
          <div><h3 className="font-semibold text-slate-900">Does a free referral earn commission?</h3><p>Not by itself. The referred person must make an eligible purchase before a commission is generated.</p></div>
          <div><h3 className="font-semibold text-slate-900">Is the commission always 60% of the displayed price?</h3><p>No. Systeme.io says VAT is deducted first where applicable, and the 60% rate is applied to the remaining amount.</p></div>
          <div><h3 className="font-semibold text-slate-900">Can I use my own affiliate link to buy?</h3><p>No. Systeme.io says self-referrals are not allowed.</p></div>
        </div>
      </section>

      <section className="border-t border-slate-200 pt-6">
        <h2 className="mb-3 text-lg font-semibold">Official sources and verification</h2>
        <ul className="list-disc space-y-2 pl-6 text-sm leading-6 text-slate-600">
          <li><a className="text-indigo-700 underline" href="https://systeme.io/affiliate-program" target="_blank" rel="noopener noreferrer">Systeme.io affiliate programme</a> — commission offer and current sign-up information.</li>
          <li><a className="text-indigo-700 underline" href="https://help.systeme.io/article/162-how-the-systeme-io-affiliate-program-works" target="_blank" rel="noopener noreferrer">Systeme.io affiliate programme help article</a> — attribution, tracking, VAT and payout conditions.</li>
        </ul>
        <p className="mt-4 text-xs leading-5 text-slate-500">Terms can change. This page reflects the official material checked on November 11, 2026; confirm current terms in the vendor's dashboard before relying on them.</p>
      </section>
    </main>
  )
}
