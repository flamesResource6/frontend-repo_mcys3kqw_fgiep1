function Plan({ name, price, badge, features, cta, highlight }) {
  return (
    <div className={`relative rounded-2xl border p-6 ${highlight ? 'border-cyan-400/40 bg-cyan-400/5 shadow-[0_0_40px_-10px_rgba(34,211,238,0.6)]' : 'border-white/10 bg-white/5'}`}>
      {badge && (
        <div className="absolute -top-3 right-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-3 py-1 text-xs font-medium text-white shadow">
          {badge}
        </div>
      )}
      <h3 className="text-white text-lg font-semibold">{name}</h3>
      <div className="mt-2 flex items-end gap-1">
        <span className="text-4xl font-extrabold text-white">{price}</span>
        <span className="text-slate-300">/ project</span>
      </div>
      <ul className="mt-6 space-y-3 text-sm text-slate-200">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a href="#contact" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 font-medium transition ${highlight ? 'bg-gradient-to-br from-blue-500 to-cyan-400 text-white' : 'border border-white/10 bg-white/5 text-white/90 hover:bg-white/10'}`}>
        {cta}
      </a>
    </div>
  )
}

function Pricing() {
  const plans = [
    {
      name: 'Solo',
      price: '$79',
      badge: '',
      cta: 'Get Solo',
      features: [
        '1 wildcard track mixed + mastered',
        '2 minor revisions',
        'Loudness optimized for YouTube',
        'Delivery in 72 hours'
      ]
    },
    {
      name: 'Pro',
      price: '$149',
      badge: 'Most popular',
      cta: 'Go Pro',
      highlight: true,
      features: [
        'Up to 3 tracks or versions',
        'Unlimited revisions for 7 days',
        'Detailed feedback and performance notes',
        '24–48h turnaround',
        'Competition‑spec master (LUFS/TP)'
      ]
    },
    {
      name: 'Studio',
      price: '$299',
      badge: '',
      cta: 'Book Studio',
      features: [
        'Full production polish',
        'Advanced noise cleanup and timing',
        'Stem delivery and alt masters',
        'Priority rush within 24h'
      ]
    }
  ]

  return (
    <section id="plans" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Plans for every project</h2>
          <p className="mt-3 text-slate-300">Pick the level of detail that fits your wildcard goals.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <Plan key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
