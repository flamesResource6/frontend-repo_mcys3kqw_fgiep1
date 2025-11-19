import { Settings, Waveform, Rocket, Shield, SlidersHorizontal, Mic } from 'lucide-react'

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-gradient-to-br from-blue-500/30 to-cyan-400/30 p-2 ring-1 ring-white/10">
          <Icon className="text-cyan-300" size={20} />
        </div>
        <h3 className="text-white font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-slate-300/90">{desc}</p>
    </div>
  )
}

function Features() {
  const items = [
    { icon: Mic, title: 'Voice‑first Processing', desc: 'Transient‑safe compression and de‑essing tuned for human beatbox dynamics.' },
    { icon: Waveform, title: 'Sub‑Bass Management', desc: 'Clean low‑end with dynamic EQ and multi‑band control for kick and throat bass.' },
    { icon: SlidersHorizontal, title: 'Stereo Imaging', desc: 'Wideners and psychoacoustics that keep mono‑compatibility for stage.' },
    { icon: Settings, title: 'Artifact Cleanup', desc: 'Click removal, breath editing, noise gating, and precise timing alignment.' },
    { icon: Shield, title: 'Loudness Targeting', desc: 'Masters delivered to contest spec: LUFS, true‑peak, and headroom optimized.' },
    { icon: Rocket, title: 'Express Delivery', desc: 'Standard 72h turnaround, 24h rush available on Pro and Studio.' },
  ]

  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Engineered for wildcards</h2>
          <p className="mt-3 text-slate-300">Everything you need to make your one‑take shine on any judging panel.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((i) => (
            <Feature key={i.title} {...i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
