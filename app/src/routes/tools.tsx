import { createFileRoute } from '@tanstack/react-router'
import { useMemo, useState } from 'react'

const title = 'Free Online Tools: Text Cleaner, Word Counter & Slug Generator'
const description =
  'Use Workflow Radar free online tools to count words, clean text, change case and create URL slugs. No signup, upload or payment required.'

export const Route = createFileRoute('/tools')({
  head: () => ({
    meta: [
      { title: title + ' | Workflow Radar' },
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
    ],
    links: [
      { rel: 'canonical', href: 'https://workflow-radar-app.onrender.com/tools' },
    ],
  }),
  component: ToolsPage,
})

function ToolsPage() {
  const [input, setInput] = useState('')
  const [notice, setNotice] = useState('')
  const stats = useMemo(() => {
    const words = input.trim() ? input.trim().split(/\s+/).length : 0
    return {
      words,
      characters: input.length,
      charactersNoSpaces: input.replace(/\s/g, '').length,
      lines: input ? input.split(/\r?\n/).length : 0,
      readingMinutes: words ? Math.max(1, Math.ceil(words / 200)) : 0,
    }
  }, [input])

  const apply = (value: string, message: string) => {
    setInput(value)
    setNotice(message)
  }

  const titleCase = (value: string) =>
    value.toLowerCase().replace(/(^|[.!?]\s+|\n)([a-z])/g, (_, prefix, letter) => prefix + letter.toUpperCase())

  const slug = input
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

  const copy = async (value: string, label: string) => {
    if (!value) {
      setNotice('Add some text first.')
      return
    }
    try {
      await navigator.clipboard.writeText(value)
      setNotice(label + ' copied to clipboard.')
    } catch {
      setNotice('Clipboard access was blocked by this browser. Select the result and copy it manually.')
    }
  }

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      <nav className="mb-8 text-sm text-slate-500" aria-label="Breadcrumb">
        <a className="hover:text-slate-900" href="/">Workflow Radar</a>
        <span className="mx-2">/</span>
        <span>Free tools</span>
      </nav>

      <header className="mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-indigo-700">Free online utilities · No signup</p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Small tools that save you time.</h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-600">
          Useful browser-based tools for writing, creators and everyday work. Your text stays in this browser; nothing is uploaded to Workflow Radar.
        </p>
      </header>

      <section className="mb-10 rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
        <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-indigo-800">Tool 01 · Text studio</p>
            <h2 className="text-2xl font-bold">Word counter & text cleaner</h2>
            <p className="mt-1 text-sm text-slate-600">Count, clean, format and prepare text instantly.</p>
          </div>
          <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-indigo-800">Free</span>
        </div>

        <label htmlFor="tool-text" className="mb-2 block text-sm font-semibold text-slate-700">Paste or type your text</label>
        <textarea
          id="tool-text"
          value={input}
          onChange={(event) => { setInput(event.target.value); setNotice('') }}
          placeholder="Start typing or paste text here…"
          rows={9}
          className="w-full rounded-xl border border-slate-300 bg-white p-4 text-base leading-7 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />

        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-5">
          <Stat label="Words" value={stats.words} />
          <Stat label="Characters" value={stats.characters} />
          <Stat label="No spaces" value={stats.charactersNoSpaces} />
          <Stat label="Lines" value={stats.lines} />
          <Stat label="Read time" value={stats.readingMinutes ? stats.readingMinutes + ' min' : '—'} />
        </div>

        <div className="mt-5">
          <p className="mb-2 text-sm font-semibold text-slate-700">Text actions</p>
          <div className="flex flex-wrap gap-2">
            <Action onClick={() => apply(input.toUpperCase(), 'Converted to uppercase.')}>UPPERCASE</Action>
            <Action onClick={() => apply(input.toLowerCase(), 'Converted to lowercase.')}>lowercase</Action>
            <Action onClick={() => apply(titleCase(input), 'Converted to sentence case.')}>Sentence case</Action>
            <Action onClick={() => apply(input.replace(/[ \t]+/g, ' ').replace(/\s*\n\s*/g, '\n').trim(), 'Extra spaces removed.')}>Clean spaces</Action>
            <Action onClick={() => apply(input.split(/\r?\n/).map((line) => line.trim()).filter(Boolean).join('\n'), 'Blank lines removed.')}>Remove blank lines</Action>
            <Action onClick={() => copy(input, 'Text')}>Copy text</Action>
            <Action onClick={() => { setInput(''); setNotice('Text cleared.') }}>Clear</Action>
          </div>
        </div>

        <div className="mt-5 rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="font-semibold">URL slug generator</h3>
              <p className="text-xs text-slate-500">Turn a title into a clean, web-friendly slug.</p>
            </div>
            <button type="button" onClick={() => copy(slug, 'Slug')} className="rounded-lg border border-indigo-200 px-3 py-2 text-sm font-semibold text-indigo-700 hover:bg-indigo-50">Copy slug</button>
          </div>
          <output className="mt-3 block min-h-11 break-all rounded-lg bg-slate-50 px-3 py-3 font-mono text-sm text-slate-700">{slug || 'Your slug will appear here'}</output>
        </div>
        <p aria-live="polite" className="mt-3 min-h-5 text-sm text-indigo-800">{notice}</p>
        <p className="mt-2 text-xs leading-5 text-slate-500">Privacy: processing happens locally in your browser. Do not paste passwords, payment details or other secrets into shared devices.</p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-bold">Explore more free tools</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <a href="/tools/creator" className="block rounded-xl border border-indigo-200 p-5 transition hover:bg-indigo-50"><p className="mb-2 text-xs font-semibold tracking-wide text-indigo-700">TOOL 02</p><h3 className="mb-2 text-lg font-bold text-slate-900">Creator Studio</h3><p className="text-sm leading-6 text-slate-600">YouTube title and description counters · Hashtag cleaner · UTM link builder · Description template</p><span className="mt-4 inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">Open free tools →</span></a>
          <ToolCard number="03" name="Document helpers" items="PDF planning checklist · File-size guide · Document naming helper" />
          <ToolCard number="04" name="Business templates" items="Simple budget sheet · Content calendar · Small-business tracker" />
          <ToolCard number="05" name="Automation library" items="Workflow checklists · Make and n8n starter recipes · Process maps" />
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 p-6">
        <h2 className="mb-2 text-xl font-bold">Why are these tools free?</h2>
        <p className="leading-7 text-slate-600">
          Workflow Radar is building a practical library of free utilities and optional low-cost digital resources. Core tools stay free. If we introduce paid downloads, the price and contents will be shown clearly before checkout—there is no payment or signup on this page.
        </p>
        <p className="mt-4 text-sm text-slate-600">
          Looking for marketing software? Read our <a className="font-semibold text-indigo-700 underline" href="/guides/systeme-io-pricing">independent Systeme.io pricing guide</a>.
        </p>
      </section>
    </main>
  )
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-1 text-lg font-bold tabular-nums text-slate-900">{value}</p>
    </div>
  )
}

function Action({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="rounded-lg border border-indigo-200 bg-white px-3 py-2 text-sm font-semibold text-indigo-800 transition hover:bg-indigo-50">
      {children}
    </button>
  )
}

function ToolCard({ number, name, items }: { number: string; name: string; items: string }) {
  return (
    <div className="rounded-xl border border-slate-200 p-5">
      <p className="mb-2 text-xs font-semibold tracking-wide text-indigo-700">TOOL {number}</p>
      <h3 className="mb-2 text-lg font-bold">{name}</h3>
      <p className="text-sm leading-6 text-slate-600">{items}</p>
      <span className="mt-4 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">Planned</span>
    </div>
  )
}
