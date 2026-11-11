import { createFileRoute } from '@tanstack/react-router'
import { useMemo, useState } from 'react'

const pageTitle = 'Free YouTube Creator Tools: Title Counter, Hashtags & UTM Builder'
const pageDescription =
  'Free browser-based YouTube and creator tools: title and description counters, hashtag cleaner, video description template and campaign UTM builder. No signup required.'

export const Route = createFileRoute('/tools/creator')({
  head: () => ({
    meta: [
      { title: pageTitle + ' | Workflow Radar' },
      { name: 'description', content: pageDescription },
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: pageDescription },
      { property: 'og:type', content: 'website' },
    ],
    links: [{ rel: 'canonical', href: 'https://workflow-radar-app.onrender.com/tools/creator' }],
  }),
  component: CreatorToolsPage,
})

function CreatorToolsPage() {
  const [videoTitle, setVideoTitle] = useState('')
  const [description, setDescription] = useState('')
  const [keywords, setKeywords] = useState('')
  const [topic, setTopic] = useState('')
  const [channel, setChannel] = useState('')
  const [campaign, setCampaign] = useState('')
  const [source, setSource] = useState('youtube')
  const [medium, setMedium] = useState('video')
  const [destination, setDestination] = useState('https://example.com/')
  const [notice, setNotice] = useState('')

  const tags = useMemo(() => {
    const unique = new Set(
      keywords
        .split(/[\s,;#]+/)
        .map((word) => word.trim().replace(/[^\p{L}\p{N}_]/gu, ''))
        .filter(Boolean)
        .map((word) => '#' + word),
    )
    return Array.from(unique).slice(0, 30).join(' ')
  }, [keywords])

  const utmUrl = useMemo(() => {
    try {
      const url = new URL(destination)
      if (!['http:', 'https:'].includes(url.protocol)) return ''
      if (campaign.trim()) url.searchParams.set('utm_campaign', campaign.trim().toLowerCase().replace(/\s+/g, '-'))
      if (source.trim()) url.searchParams.set('utm_source', source.trim().toLowerCase().replace(/\s+/g, '-'))
      if (medium.trim()) url.searchParams.set('utm_medium', medium.trim().toLowerCase().replace(/\s+/g, '-'))
      return url.toString()
    } catch {
      return ''
    }
  }, [destination, source, medium, campaign])

  const copy = async (value: string, label: string) => {
    if (!value) {
      setNotice('Complete the required fields first.')
      return
    }
    try {
      await navigator.clipboard.writeText(value)
      setNotice(label + ' copied.')
    } catch {
      setNotice('Clipboard access is unavailable. Select the result and copy it manually.')
    }
  }

  const descriptionTemplate = [
    videoTitle || '[Video title]',
    '',
    'In this video:',
    '[Add a short, accurate summary of what viewers will learn.]',
    '',
    '⏱ Chapters',
    '00:00 Introduction',
    '[00:00] [Chapter name]',
    '',
    '🔗 Useful links',
    '[Add only links you own or are authorised to share]',
    '',
    'About this channel',
    channel || '[Channel name]',
    '',
    'Disclosure: [Add an affiliate or sponsorship disclosure if this video contains paid promotion or affiliate links.]',
    '',
    '#YourTopic #YourChannel',
  ].join('\n')

  const topicIdeas = topic.trim()
    ? [
        'How to ' + topic.trim() + ' (Beginner Guide)',
        topic.trim() + ': 7 Mistakes to Avoid',
        'I Tried ' + topic.trim() + ' — Here Is What I Learned',
        topic.trim() + ' Explained in Plain English',
        'The Complete ' + topic.trim() + ' Checklist',
      ]
    : []

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      <nav className="mb-8 text-sm text-slate-500" aria-label="Breadcrumb">
        <a className="hover:text-slate-900" href="/">Workflow Radar</a>
        <span className="mx-2">/</span>
        <a className="hover:text-slate-900" href="/tools">Free tools</a>
        <span className="mx-2">/</span>
        <span>Creator Studio</span>
      </nav>

      <header className="mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-indigo-700">Free creator utilities · No signup</p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Creator Studio</h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-600">
          Prepare video metadata, organise hashtags and build trackable campaign links. These tools run in your browser; Workflow Radar does not receive your drafts or destination URLs.
        </p>
      </header>

      <section className="mb-8 rounded-2xl border border-slate-200 p-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-indigo-700">Tool 01 · Video metadata</p>
        <h2 className="mb-4 text-2xl font-bold">YouTube title & description counter</h2>
        <label htmlFor="video-title" className="mb-2 block text-sm font-semibold">Video title</label>
        <input id="video-title" value={videoTitle} onChange={(e) => setVideoTitle(e.target.value)} maxLength={200} placeholder="Write your video title" className="mb-2 w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-indigo-500" />
        <p className="mb-4 text-right text-xs text-slate-500">{videoTitle.length} characters · YouTube titles can be up to 100 characters</p>
        <label htmlFor="video-description" className="mb-2 block text-sm font-semibold">Video description</label>
        <textarea id="video-description" rows={7} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Paste your video description" className="w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-indigo-500" />
        <p className="mt-2 text-right text-xs text-slate-500">{description.length.toLocaleString()} characters</p>
      </section>

      <section className="mb-8 rounded-2xl border border-slate-200 p-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-indigo-700">Tool 02 · Hashtag organiser</p>
        <h2 className="mb-2 text-2xl font-bold">Clean and deduplicate hashtags</h2>
        <p className="mb-4 text-sm text-slate-600">Paste keywords, hashtags or comma-separated phrases. The tool removes duplicates and formats the first 30 tags. Review relevance before publishing.</p>
        <textarea rows={4} value={keywords} onChange={(e) => setKeywords(e.target.value)} placeholder="creator tips, youtube growth, #contentstrategy" className="w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-indigo-500" />
        <div className="mt-3 rounded-lg bg-slate-50 p-4">
          <p className="break-words text-sm leading-7">{tags || 'Your cleaned hashtags will appear here.'}</p>
          <div className="mt-3 flex justify-end">
            <button type="button" onClick={() => copy(tags, 'Hashtags')} className="rounded-lg border border-indigo-200 bg-white px-3 py-2 text-sm font-semibold text-indigo-700 hover:bg-indigo-50">Copy hashtags</button>
          </div>
        </div>
      </section>

      <section className="mb-8 rounded-2xl border border-slate-200 p-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-indigo-700">Tool 03 · Description template</p>
        <h2 className="mb-2 text-2xl font-bold">YouTube description starter</h2>
        <label htmlFor="channel-name" className="mb-2 block text-sm font-semibold">Channel name (optional)</label>
        <input id="channel-name" value={channel} onChange={(e) => setChannel(e.target.value)} placeholder="Your channel" className="mb-4 w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-indigo-500" />
        <pre className="overflow-x-auto whitespace-pre-wrap rounded-lg bg-slate-50 p-4 text-sm leading-6 text-slate-700">{descriptionTemplate}</pre>
        <div className="mt-3 flex justify-end">
          <button type="button" onClick={() => copy(descriptionTemplate, 'Description template')} className="rounded-lg border border-indigo-200 px-3 py-2 text-sm font-semibold text-indigo-700 hover:bg-indigo-50">Copy template</button>
        </div>
      </section>

      <section className="mb-8 rounded-2xl border border-slate-200 p-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-indigo-700">Tool 04 · Campaign tracking</p>
        <h2 className="mb-2 text-2xl font-bold">UTM link builder</h2>
        <p className="mb-4 text-sm text-slate-600">Create tagged links for Google Analytics campaign reporting. Use lowercase, descriptive values and keep naming consistent.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Destination URL" value={destination} onChange={setDestination} placeholder="https://yourwebsite.com/page" />
          <Field label="Campaign name" value={campaign} onChange={setCampaign} placeholder="november-launch" />
          <Field label="Traffic source" value={source} onChange={setSource} placeholder="youtube" />
          <Field label="Medium" value={medium} onChange={setMedium} placeholder="video" />
        </div>
        <div className="mt-4 rounded-lg bg-slate-50 p-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Generated URL</p>
          <output className="block break-all text-sm leading-6 text-slate-700">{utmUrl || 'Enter a valid http:// or https:// destination URL.'}</output>
          <div className="mt-3 flex justify-end">
            <button type="button" disabled={!utmUrl} onClick={() => copy(utmUrl, 'Campaign URL')} className="rounded-lg border border-indigo-200 bg-white px-3 py-2 text-sm font-semibold text-indigo-700 disabled:cursor-not-allowed disabled:opacity-50">Copy tracked link</button>
          </div>
        </div>
      </section>

      <section className="mb-8 rounded-2xl border border-slate-200 p-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-indigo-700">Tool 05 · Topic brainstorming</p>
        <h2 className="mb-2 text-2xl font-bold">Video title idea prompts</h2>
        <p className="mb-4 text-sm text-slate-600">Enter a topic to create five editable title starting points. These are templates, not performance predictions.</p>
        <Field label="Video topic" value={topic} onChange={setTopic} placeholder="e.g. beginner home gardening" />
        {topicIdeas.length > 0 && (
          <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-6 text-slate-700">
            {topicIdeas.map((idea) => <li key={idea}>{idea}</li>)}
          </ol>
        )}
        <div className="mt-4 flex justify-end">
          <button type="button" disabled={!topicIdeas.length} onClick={() => copy(topicIdeas.join('\n'), 'Title ideas')} className="rounded-lg border border-indigo-200 px-3 py-2 text-sm font-semibold text-indigo-700 disabled:opacity-50">Copy title ideas</button>
        </div>
      </section>

      <p aria-live="polite" className="min-h-6 text-sm text-indigo-800">{notice}</p>
      <p className="mt-3 text-xs leading-5 text-slate-500">Privacy: all transformations happen in this browser. Workflow Radar does not upload or store the content entered into these tools. Always verify titles, tags, disclosures and campaign destinations before publishing.</p>
      <p className="mt-6 text-sm text-slate-600">More utilities: <a className="font-semibold text-indigo-700 underline" href="/tools">Text Studio</a> · <a className="font-semibold text-indigo-700 underline" href="/guides/systeme-io-pricing">Email marketing software guide</a></p>
    </main>
  )
}

function Field({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (value: string) => void; placeholder: string }) {
  const id = label.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold">{label}</label>
      <input id={id} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-indigo-500" />
    </div>
  )
}
