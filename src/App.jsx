import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* decorative grid */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <Pricing />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10 py-10 text-center text-slate-400">
        <p>© {new Date().getFullYear()} Beatbox Mix Lab. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
