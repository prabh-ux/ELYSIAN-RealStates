import React from 'react'

const Hero = () => {
  return (
    <header className="relative pt-20 pb-12 lg:pt-32 lg:pb-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background Decorative Element (Soft Glow) */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A358]/5 blur-[100px] -z-10 rounded-full"></div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* --- Left Column: Content --- */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A2F23]/5 rounded-full mb-6">
             <span className="w-2 h-2 bg-[#C5A358] rounded-full animate-pulse"></span>
             <span className="text-[#C5A358] text-[10px] font-bold uppercase tracking-[0.3em]">
               Premium Real Estate
             </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-medium leading-[1.1] lg:leading-[0.95] mb-8 text-[#1A2F23]">
            Elevated <br />Living <span className="italic font-light">Spaces.</span>
          </h1>
          
          <p className="font-sans text-slate-500 text-base md:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed mb-10">
            A curated selection of architectural masterpieces designed for those who appreciate the finer details in life.
          </p>
          
          {/* Responsive Search bar */}
          <div className="relative group max-w-lg mx-auto lg:mx-0">
            <div className="flex flex-col sm:flex-row bg-white shadow-2xl shadow-[#1A2F23]/10 rounded-2xl sm:rounded-full p-2 border border-[#1A2F23]/5 transition-all group-focus-within:border-[#C5A358]/40">
              <input 
                type="text" 
                placeholder="Locate your estate..." 
                className="bg-transparent flex-grow px-6 py-4 sm:py-0 font-sans text-sm outline-none text-[#1A2F23]" 
              />
              <button className="bg-[#1A2F23] hover:bg-[#2a4535] text-white px-8 py-4 sm:py-3 rounded-xl sm:rounded-full font-bold text-xs uppercase tracking-[0.2em] transition-all active:scale-95 shadow-lg shadow-[#1A2F23]/20">
                Explore
              </button>
            </div>
          </div>

          {/* Trust Indicators (Social Proof) */}
          <div className="mt-10 flex items-center justify-center lg:justify-start gap-4">
            <div className="flex -space-x-3">
              {[1,2,3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#FDFCF8] bg-slate-200"></div>
              ))}
            </div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Join <span className="text-[#1A2F23]">500+</span> happy homeowners
            </p>
          </div>
        </div>
        
        {/* --- Right Column: Visuals --- */}
        <div className="order-1 lg:order-2 relative group">
          {/* Floating Experience Badge */}
          <div className="absolute -top-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl hidden sm:block border border-[#1A2F23]/5">
            <p className="text-[#C5A358] text-xl font-bold">4.9</p>
            <p className="text-[8px] font-black uppercase tracking-tighter text-slate-400">Average Rating</p>
          </div>

          {/* Main Image with Responsive Sizing */}
          <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[30px] sm:rounded-[50px] overflow-hidden shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02]">
            <img 
              src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80" 
              className="w-full h-full object-cover" 
              alt="Luxury Estate" 
            />
            
            {/* Glassmorphism Label */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 bg-[#FDFCF8]/80 backdrop-blur-md p-6 rounded-[25px] border border-white/50">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[#C5A358] text-[10px] font-black uppercase tracking-[0.2em] mb-1">In Focus</p>
                  <p className="text-xl font-bold text-[#1A2F23]">The Glass House</p>
                </div>
                <div className="h-10 w-10 bg-[#1A2F23] rounded-full flex items-center justify-center text-white">
                  →
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Scroll Hint (Desktop only) */}
      <div className="hidden lg:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-30">
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#1A2F23] to-transparent"></div>
        <span className="text-[8px] font-bold uppercase tracking-[0.4em] rotate-90 mt-4 text-[#1A2F23]">Scroll</span>
      </div>
    </header>
  )
}

export default Hero