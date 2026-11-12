import { createFileRoute } from '@tanstack/react-router'
import { useMemo, useState } from 'react'

const pageTitle = 'Free Small Business Tools: Pricing, Profit, Break-Even & CRM Cost Calculator'
const pageDescription =
  'Free small business calculators and templates. Compare per-user and flat-rate CRM costs, estimate selling price, gross profit and break-even units, and plan useful content. No signup required.'

export const Route = createFileRoute('/tools/business')({
  head: () => ({
    meta: [
      { title: pageTitle + ' | Workflow Radar' },
      { name: 'description', content: pageDescription },
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: pageDescription },
      { property: 'og:type', content: 'website' },
    ],
    links: [{ rel: 'canonical', href: 'https://workflow-radar-app.onrender.com/tools/business' }],
  }),
  component: BusinessToolsPage,
})

const money = (value: number) =>
  Number.isFinite(value)
    ? new Intl.NumberFormat(undefined, { maximumFractionDigits: 2 }).format(value)
    : '—'

function BusinessToolsPage() {
  const [cost, setCost] = useState('100')
  const [markup, setMarkup] = useState('50')
  const [fixed, setFixed] = useState('10000')
  const [unitCost, setUnitCost] = useState('100')
  const [selling, setSelling] = useState('250')
  const [business, setBusiness] = useState('My business')
  const [notice, setNotice] = useState('')
  const [crmSeatPrice, setCrmSeatPrice] = useState('')
  const [crmSeatAddon, setCrmSeatAddon] = useState('0')
  const [crmTeamSize, setCrmTeamSize] = useState('5')
  const [crmFlatPrice, setCrmFlatPrice] = useState('')
  const [crmFlatAddon, setCrmFlatAddon] = useState('0')
  const [crmTaxRate, setCrmTaxRate] = useState('')

  const price = useMemo(() => {
    const c = Number(cost)
    const m = Number(markup)
    if (!Number.isFinite(c) || !Number.isFinite(m) || c < 0 || m < 0) return null
    return c * (1 + m / 100)
  }, [cost, markup])

  const breakEven = useMemo(() => {
    const f = Number(fixed)
    const c = Number(unitCost)
    const s = Number(selling)
    if (![f, c, s].every(Number.isFinite) || f < 0 || c < 0 || s <= c) return null
    return Math.ceil(f / (s - c))
  }, [fixed, unitCost, selling])

  const grossMargin = useMemo(() => {
    const c = Number(unitCost)
    const s = Number(selling)
    if (![c, s].every(Number.isFinite) || s <= 0) return null
    return ((s - c) / s) * 100
  }, [unitCost, selling])

  const crmComparison = useMemo(() => {
    if ([crmSeatPrice, crmTeamSize, crmFlatPrice].some((value) => value.trim() === '')) return null

    const seatPrice = Number(crmSeatPrice)
    const seatAddon = Number(crmSeatAddon)
    const users = Number(crmTeamSize)
    const flatPrice = Number(crmFlatPrice)
    const flatAddon = Number(crmFlatAddon)
    const taxRate = crmTaxRate.trim() === '' ? null : Number(crmTaxRate)

    if (
      ![seatPrice, seatAddon, users, flatPrice, flatAddon].every(Number.isFinite) ||
      seatPrice < 0 ||
      seatAddon < 0 ||
      !Number.isInteger(users) ||
      users < 1 ||
      flatPrice < 0 ||
      flatAddon < 0 ||
      (taxRate !== null && (!Number.isFinite(taxRate) || taxRate < 0 || taxRate > 100))
    ) return null

    const perSeatUnit = seatPrice + seatAddon
    const perSeatMonthly = perSeatUnit * users
    const flatMonthly = flatPrice + flatAddon
    const difference = perSeatMonthly - flatMonthly
    const breakEvenUsers =
      flatMonthly === 0 ? 0 : perSeatUnit > 0 ? Math.ceil(flatMonthly / perSeatUnit) : null
    const taxFactor = taxRate === null ? null : 1 + taxRate / 100
    const verdict =
      Math.abs(difference) < 0.005
        ? 'Both options have the same estimated monthly cost at this team size.'
        : difference > 0
          ? `The flat-rate option is lower by ${money(difference)} per month at this team size.`
          : `The per-seat option is lower by ${money(-difference)} per month at this team size.`

    return {
      users,
      perSeatMonthly,
      flatMonthly,
      difference,
      breakEvenUsers,
      taxFactor,
      verdict,
    }
  }, [crmSeatPrice, crmSeatAddon, crmTeamSize, crmFlatPrice, crmFlatAddon, crmTaxRate])

  const calendar = [
    ['Monday', 'Educational tip', 'Answer one common customer question'],
    ['Tuesday', 'Behind the scenes', 'Show how a product or service is made'],
    ['Wednesday', 'Customer problem', 'Explain a problem and a practical solution'],
    ['Thursday', 'Product walkthrough', 'Demonstrate one useful feature or use case'],
    ['Friday', 'FAQ', 'Answer a real frequently asked question'],
    ['Saturday', 'Community', 'Ask a thoughtful question and invite responses'],
    ['Sunday', 'Weekly recap', 'Summarise the week and share one useful takeaway'],
  ]

  const calendarText = [
    'Day,Content type,Post idea',
    ...calendar.map((row) => row.map((cell) => '"' + cell.replace(/"/g, '""') + '"').join(',')),
  ].join('\n')

  const copy = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setNotice(label + ' copied.')
    } catch {
      setNotice('Clipboard access is unavailable. Select the result and copy it manually.')
    }
  }

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      <nav className="mb-8 text-sm text-slate-500" aria-label="Breadcrumb">
        <a className="hover:text-slate-900" href="/">Workflow Radar</a>
        <span className="mx-2">/</span>
        <a className="hover:text-slate-900" href="/tools">Free tools</a>
        <span className="mx-2">/</span>
        <span>Business Studio</span>
      </nav>

      <header className="mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-indigo-700">Free business utilities · No signup</p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Business Studio</h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-600">
          Make quick first-pass estimates for pricing, gross margin and break-even volume, then organise a week of useful content. Calculations happen locally in your browser.
        </p>
      </header>

      <section className="mb-8 rounded-2xl border border-slate-200 p-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-indigo-700">Tool 01 · Pricing calculator</p>
        <h2 className="mb-2 text-2xl font-bold">Suggested selling price from cost + markup</h2>
        <p className="mb-4 text-sm text-slate-600">Markup is calculated on cost, not as a percentage of the final selling price.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Unit cost" value={cost} onChange={setCost} />
          <Field label="Markup (%)" value={markup} onChange={setMarkup} />
        </div>
        <div className="mt-4 rounded-xl bg-indigo-50 p-5">
          <p className="text-sm font-medium text-indigo-900">Suggested price before tax, fees and overheads</p>
          <p className="mt-1 text-3xl font-bold text-indigo-950">{price === null ? 'Check your inputs' : money(price)}</p>
          {price !== null && <p className="mt-1 text-xs text-indigo-800">Gross profit per unit before other costs: {money(price - Number(cost))}</p>}
        </div>
      </section>

      <section className="mb-8 rounded-2xl border border-slate-200 p-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-indigo-700">Tool 02 · Break-even calculator</p>
        <h2 className="mb-2 text-2xl font-bold">How many units cover fixed costs?</h2>
        <p className="mb-4 text-sm text-slate-600">Break-even units = fixed costs ÷ (selling price per unit − variable cost per unit), rounded up.</p>
        <div className="grid gap-4 sm:grid-cols-3">
          <Field label="Fixed costs" value={fixed} onChange={setFixed} />
          <Field label="Variable cost / unit" value={unitCost} onChange={setUnitCost} />
          <Field label="Selling price / unit" value={selling} onChange={setSelling} />
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-slate-50 p-5">
            <p className="text-sm text-slate-600">Break-even sales volume</p>
            <p className="mt-1 text-3xl font-bold">{breakEven === null ? 'Check inputs' : breakEven.toLocaleString() + ' units'}</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-5">
            <p className="text-sm text-slate-600">Gross margin at this price</p>
            <p className="mt-1 text-3xl font-bold">{grossMargin === null ? '—' : grossMargin.toFixed(1) + '%'}</p>
          </div>
        </div>
      </section>

      <section className="mb-8 rounded-2xl border border-slate-200 p-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-indigo-700">Tool 03 · CRM pricing calculator</p>
        <h2 className="mb-2 text-2xl font-bold">Compare per-user and flat-rate CRM costs</h2>
        <p className="mb-4 text-sm leading-6 text-slate-600">
          Enter prices from the plans you are actually considering. Use the same currency and billing period for every amount. No vendor prices are pre-filled.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Field label="Per-seat monthly price" value={crmSeatPrice} onChange={setCrmSeatPrice} />
          <Field label="Per-seat add-ons / user / month" value={crmSeatAddon} onChange={setCrmSeatAddon} />
          <Field label="Team size (whole users)" value={crmTeamSize} onChange={setCrmTeamSize} min={1} step={1} />
          <Field label="Flat-plan monthly price" value={crmFlatPrice} onChange={setCrmFlatPrice} />
          <Field label="Flat-plan add-ons / month" value={crmFlatAddon} onChange={setCrmFlatAddon} />
          <Field label="Same tax rate for both (%) · optional" value={crmTaxRate} onChange={setCrmTaxRate} min={0} max={100} step="any" />
        </div>
        {crmComparison ? (
          <>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-700">Per-seat model · {crmComparison.users} users</p>
                <p className="mt-1 text-3xl font-bold">{money(crmComparison.perSeatMonthly)}</p>
                {crmComparison.taxFactor !== null && (
                  <p className="mt-2 text-sm text-slate-600">
                    Estimated with the same entered tax rate: {money(crmComparison.perSeatMonthly * crmComparison.taxFactor)}
                  </p>
                )}
              </div>
              <div className="rounded-xl bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-700">Flat-rate model</p>
                <p className="mt-1 text-3xl font-bold">{money(crmComparison.flatMonthly)}</p>
                {crmComparison.taxFactor !== null && (
                  <p className="mt-2 text-sm text-slate-600">
                    Estimated with the same entered tax rate: {money(crmComparison.flatMonthly * crmComparison.taxFactor)}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-3 rounded-xl bg-indigo-50 p-5" aria-live="polite">
              <p className="text-sm font-semibold text-indigo-900">Cost comparison at {crmComparison.users} users</p>
              <p className="mt-1 text-lg font-bold text-indigo-950">{crmComparison.verdict}</p>
              <p className="mt-3 text-sm text-indigo-900">
                {crmComparison.breakEvenUsers === null
                  ? 'There is no price crossover while the per-seat price and per-seat add-ons remain zero.'
                  : crmComparison.breakEvenUsers === 0
                    ? 'The flat-rate option has no monthly base cost in the values entered.'
                    : `The flat-rate option becomes no more expensive from ${crmComparison.breakEvenUsers} users, based on these inputs.`}
              </p>
              <button
                type="button"
                onClick={() => copy(
                  [
                    'CRM monthly cost comparison',
                    `Team size: ${crmComparison.users}`,
                    `Per-seat model: ${money(crmComparison.perSeatMonthly)}`,
                    `Flat-rate model: ${money(crmComparison.flatMonthly)}`,
                    crmComparison.verdict,
                    crmComparison.breakEvenUsers === null
                      ? 'No price crossover from the entered values.'
                      : `Flat-rate is no more expensive from ${crmComparison.breakEvenUsers} users.`,
                    crmComparison.taxFactor === null
                      ? 'Tax not included.'
                      : 'Same entered tax rate applied to both models as a simplified estimate.',
                  ].join('\n'),
                  'CRM comparison'
                )}
                className="mt-4 rounded-lg border border-indigo-200 px-3 py-2 text-sm font-semibold text-indigo-700 hover:bg-white"
              >
                Copy comparison
              </button>
            </div>
          </>
        ) : (
          <p className="mt-4 rounded-xl bg-amber-50 p-4 text-sm text-amber-900" aria-live="polite">
            Enter both monthly plan prices and a whole-number team size. Prices and add-ons must be non-negative; the optional shared tax rate must be between 0 and 100%.
          </p>
        )}
        <p className="mt-4 text-xs leading-5 text-slate-500">
          Calculations stay in this browser; entered prices and team size are not sent or stored. This compares price only. Check minimum seats, annual discounts, setup and usage fees, feature limits, mobile workflows, export rights and each vendor's actual invoice tax treatment before choosing. The optional tax estimate applies one identical rate to both models and is not a tax calculation.
        </p>
      </section>

      <section className="mb-8 rounded-2xl border border-slate-200 p-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-indigo-700">Tool 04 · Content calendar</p>
        <h2 className="mb-2 text-2xl font-bold">A simple seven-day content plan</h2>
        <p className="mb-4 text-sm text-slate-600">Use this as a starting point. Adapt it to your audience, product and actual capacity.</p>
        <label htmlFor="business-name" className="mb-2 block text-sm font-semibold">Business or brand name (optional)</label>
        <input id="business-name" value={business} onChange={(e) => setBusiness(e.target.value)} className="mb-4 w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-indigo-500" />
        <div className="overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead><tr className="border-b border-slate-200"><th className="py-2 pr-3">Day</th><th className="py-2 pr-3">Format</th><th className="py-2">Prompt</th></tr></thead>
            <tbody>{calendar.map((row) => <tr key={row[0]} className="border-b border-slate-100"><td className="py-3 pr-3 font-semibold">{row[0]}</td><td className="py-3 pr-3">{row[1]}</td><td className="py-3">{row[2]}</td></tr>)}</tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-end">
          <button type="button" onClick={() => copy('Content calendar — ' + business + '\n' + calendarText, 'Content calendar')} className="rounded-lg border border-indigo-200 px-3 py-2 text-sm font-semibold text-indigo-700 hover:bg-indigo-50">Copy calendar CSV</button>
        </div>
      </section>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <h2 className="mb-2 font-bold">Planning estimates, not financial advice</h2>
        <p className="text-sm leading-6 text-slate-700">These simplified calculators exclude tax, platform fees, refunds, discounts, shipping, labour, financing, seasonality and other costs unless you include them in your inputs. Validate assumptions with your own records before making pricing or investment decisions.</p>
      </section>
      <p aria-live="polite" className="mt-4 min-h-6 text-sm text-indigo-800">{notice}</p>
      <p className="mt-4 text-sm text-slate-600">More utilities: <a className="font-semibold text-indigo-700 underline" href="/tools">Text Studio</a> · <a className="font-semibold text-indigo-700 underline" href="/tools/creator">Creator Studio</a></p>
    </main>
  )
}

function Field({ label, value, onChange, min = 0, max, step = 'any' }: { label: string; value: string; onChange: (value: string) => void; min?: number; max?: number; step?: number | string }) {
  const id = label.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold">{label}</label>
      <input id={id} type="number" min={min} max={max} step={step} value={value} onChange={(e) => onChange(e.target.value)} className="w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-indigo-500" />
    </div>
  )
}
