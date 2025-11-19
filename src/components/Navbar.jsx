import { Menu } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 border border-white/10 px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-[0_0_25px_rgba(59,130,246,0.6)]"></div>
            <span className="text-white font-semibold tracking-tight">Beatbox Mix Lab</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
            <a href="#plans" className="text-slate-300 hover:text-white transition">Plans</a>
            <a href="#faq" className="text-slate-300 hover:text-white transition">FAQ</a>
          </nav>
          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-200 hover:bg-white/5">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
