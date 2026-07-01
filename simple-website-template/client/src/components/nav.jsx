function Nav() {
    return (
         <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-black/20 backdrop-blur-lg border-b border-white/5">
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-400 font-['Outfit']">
          ASTRA<span className="text-white">CORE</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="nav-link">Overview</a>
          <a href="#" className="nav-link">Features</a>
          <a href="#" className="nav-link">API</a>
          <a href="#" className="nav-link">Docs</a>
        </div>
        <button className="px-5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-medium transition-all">
          Connect Dashboard
        </button>
      </nav>
    )
}

export default Nav