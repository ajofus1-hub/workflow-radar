import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

const affiliateId = 'sa0286089660ebed8476e8d7899489bd8eb71bc507'
const allowedTrackingTags = new Set([
  'workflow-radar-systeme-affiliate-program-top',
  'workflow-radar-systeme-affiliate-program-bottom',
  'workflow-radar-systeme-free-plan-limits',
  'workflow-radar-systeme-free-plan-limits-bottom',
  'workflow-radar-systeme-pricing-quick',
  'workflow-radar-systeme-pricing-bottom',
  'workflow-radar-systeme-vs-brevo',
  'workflow-radar-systeme-vs-kit',
  'workflow-radar-systeme-vs-mailchimp',
  'workflow-radar-systeme-vs-mailerlite',
  'workflow-radar-creator-studio-cta',
])

export const Route = createFileRoute('/go/systeme/$tag')({
  head: () => ({
    meta: [
      { title: 'Opening Systeme.io | Workflow Radar' },
      { name: 'robots', content: 'noindex,nofollow' },
    ],
  }),
  component: SystemeAffiliateRedirectPage,
})

function SystemeAffiliateRedirectPage() {
  const { tag } = Route.useParams()
  const validTag = allowedTrackingTags.has(tag)
  const destination = validTag
    ? `https://systeme.io/pricing?sa=${affiliateId}&tk=${encodeURIComponent(tag)}`
    : 'https://systeme.io/pricing'

  useEffect(() => {
    if (validTag) window.location.replace(destination)
  }, [validTag, destination])

  return (
    <main className="mx-auto max-w-xl px-4 py-16 text-slate-900">
      <h1 className="mb-3 text-2xl font-bold">Opening Systeme.io</h1>
      {validTag ? (
        <>
          <p className="mb-5 leading-7 text-slate-600">You are leaving Workflow Radar. The destination is Systeme.io's official pricing page. Review the free plan and current terms before choosing a paid plan.</p>
          <a className="inline-flex rounded-lg bg-indigo-700 px-5 py-3 font-semibold text-white" href={destination} rel="sponsored nofollow noopener">Continue to Systeme.io</a>
        </>
      ) : (
        <>
          <p className="mb-5 leading-7 text-slate-600">This tracked link is not recognised. No affiliate tracking has been added.</p>
          <a className="font-semibold text-indigo-700 underline" href="/guides/systeme-io-pricing">Return to the independent pricing guide</a>
        </>
      )}
    </main>
  )
}
