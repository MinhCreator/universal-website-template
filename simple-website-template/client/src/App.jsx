import React, { useState, useEffect } from 'react'
import Nav from './components/nav'
function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then(res => res.json())
      .then(json => {
        setData(json)
        setLoading(false)
      })
      .catch(err => {
        console.error("Backend fetch failed:", err)
        setLoading(false)
      })
  }, [])

  return (
    <div className="min-h-screen selection:bg-indigo-500/30">
      {/* Navbar */}
     <Nav />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-8 animate-pulse">
            ✨ v1.0.0 Now Available
          </div>
          <h1 className="text-5xl md:text-8xl mb-8 leading-tight">
            The Next Evolution of <br />
            <span className="text-gradient">Full-Stack Scale.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Experience lightning-fast performance with Vite, seamless backend integration with Express, 
            and pixel-perfect styling with Tailwind CSS. Ready for production right out of the box.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn-primary">Start Building Now</button>
            <button className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-full font-semibold border border-white/10 transition-all">
              View Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid from Backend */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl mb-4">Core Infrastructure</h2>
            <p className="text-slate-400">Data dynamically fetched from your Express instance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loading ? (
               [1, 2, 3].map(i => (
                <div key={i} className="glass-card p-8 h-64 animate-pulse">
                  <div className="w-12 h-12 bg-white/10 rounded-lg mb-6"></div>
                  <div className="h-6 bg-white/10 rounded w-1/2 mb-4"></div>
                  <div className="h-4 bg-white/10 rounded w-full mb-2"></div>
                  <div className="h-4 bg-white/10 rounded w-2/3"></div>
                </div>
              ))
            ) : (
              data?.features?.map((feature) => (
                <div key={feature.id} className="glass-card p-8 hover:bg-white/[0.07] transition-all hover:scale-[1.02] cursor-default group">
                  <div className="w-12 h-12 bg-indigo-500/20 flex items-center justify-center rounded-xl mb-6 group-hover:bg-indigo-500/30 transition-colors">
                    <div className="w-6 h-6 bg-indigo-400 rounded-md"></div>
                  </div>
                  <h3 className="text-xl mb-4">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Backend Status Section */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto glass-card p-1">
          <div className="bg-[#030712] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl mb-2">Backend Connection Status</h3>
              <p className="text-slate-400">
                {data ? `Connected to ${data.message}` : "Attempting to reach backend on port 5000..."}
              </p>
            </div>
            <div className={`px-6 py-2 rounded-full font-bold text-sm ${data?.status === 'Healthy' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
              ● {data?.status || 'OFFLINE'}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center text-slate-500 text-sm">
        <p>© 2026 AstraCore Technologies. Built with modern efficiency.</p>
      </footer>
    </div>
  )
}

export default App
