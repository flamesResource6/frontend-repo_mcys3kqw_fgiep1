import { useEffect, useState } from 'react'

function ClientSpline({ scene }) {
  const [SplineComp, setSplineComp] = useState(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let mounted = true
    // Dynamically import only on client to avoid SSR/HMR edge cases
    import('@splinetool/react-spline')
      .then((mod) => {
        if (mounted) setSplineComp(() => mod.default)
      })
      .catch(() => {
        if (mounted) setFailed(true)
      })
    return () => {
      mounted = false
    }
  }, [])

  if (failed) {
    return (
      <div className="h-full w-full grid place-items-center text-slate-300/80">
        3D preview unavailable on this device
      </div>
    )
  }

  if (!SplineComp) {
    return (
      <div className="h-full w-full grid place-items-center text-slate-300/60">
        Loading 3D…
      </div>
    )
  }

  return <SplineComp scene={scene} style={{ width: '100%', height: '100%' }} />
}

function Hero() {
  return (
    <section className="relative pt-28 overflow-hidden" id="hero">
      <div className="absolute inset-0 opacity-25">
        <div className="absolute -top-40 -right-20 h-96 w-96 rounded-full bg-blue-500 blur-3xl" />
        <div className="absolute top-40 -left-10 h-96 w-96 rounded-full bg-cyan-400 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-200/90">
              Specialized for wildcard beatboxers
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Sculpt your wildcard into a competition‑ready mix
            </h1>
            <p className="mt-5 text-slate-300 text-lg">
              Precision audio mixing tailored for human voice, percussive textures, and sub‑bass control. Upload your stems and we take it to stage level.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#plans" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 px-5 py-3 font-medium text-white shadow-[0_10px_30px_-10px_rgba(56,189,248,0.6)] hover:opacity-90 transition">
                Choose your plan
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/90 hover:bg-white/10 transition">
                See features
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-300/80">
              <div>24–72h turnaround</div>
              <div className="h-1 w-1 rounded-full bg-slate-500" />
              <div>Unlimited revisions on Pro</div>
              <div className="h-1 w-1 rounded-full bg-slate-500" />
              <div>ISRC‑ready masters</div>
            </div>
          </div>
          <div className="relative h-[520px] md:h-[620px] lg:h-[700px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 bg-slate-900/40">
              <ClientSpline scene="https://prod.spline.design/4JFCLsE5jz72cZzw/scene.splinecode" />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
