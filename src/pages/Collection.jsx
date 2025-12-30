import React, { useState, useMemo, useEffect } from 'react';
import Header from './Header';

const Collection = () => {
  // 1. DATASET
  const PROPERTIES = [
    { id: 1, title: "The Verdant Manor", price: 2400000, location: "Lonavala", tag: "Exclusive", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", type: "Villa" },
    { id: 2, title: "Ivory Coast Villa", price: 1800000, location: "Alibaug", tag: "New", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80", type: "Villa" },
    { id: 3, title: "Sage Hill Estate", price: 950000, location: "Kodaikanal", tag: "Eco", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80", type: "Estate" },
    { id: 4, title: "The Glass House", price: 3200000, location: "Mumbai", tag: "Modern", img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80", type: "Penthouse" },
    { id: 5, title: "Cedar Woods", price: 1250000, location: "Manali", tag: "Cozy", img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80", type: "Estate" },
    { id: 6, title: "Marble Arch", price: 4100000, location: "Delhi", tag: "Royal", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80", type: "Penthouse" },
  ];

  // 2. STATES
  const [activeType, setActiveType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [maxPrice, setMaxPrice] = useState(5000000);
  const [sortBy, setSortBy] = useState('default');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 3. FILTER & SORT LOGIC
  const filteredResults = useMemo(() => {
    let result = PROPERTIES.filter((p) => {
      const matchesType = activeType === 'All' || p.type === activeType;
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = p.price <= maxPrice;
      return matchesType && matchesSearch && matchesPrice;
    });

    if (sortBy === 'low') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'high') result.sort((a, b) => b.price - a.price);
    
    return result;
  }, [activeType, searchQuery, maxPrice, sortBy]);

  // 4. HANDLERS
  const handleInquiry = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setSelectedProperty(null);
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#FDFCF8] pt-32 pb-20 px-6 md:px-12">
        
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER & SEARCH --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div>
            <h1 className="text-5xl md:text-7xl font-light text-[#1A2F23]">Our <span className="font-bold italic text-[#C5A358]">Estates</span></h1>
            <p className="text-slate-400 mt-4 uppercase tracking-[0.2em] text-[10px] font-bold">Showing {filteredResults.length} properties</p>
          </div>
          
          <div className="w-full md:w-96 bg-white border border-[#1A2F23]/10 rounded-full px-6 py-3 flex items-center shadow-sm">
            <span className="mr-3 opacity-30">🔍</span>
            <input 
              type="text" 
              placeholder="Search by name or location..."
              className="bg-transparent outline-none w-full text-sm font-sans"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* --- SIDEBAR FILTERS --- */}
          <aside className="w-full lg:w-64 space-y-12">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C5A358] mb-6">Category</h3>
              <div className="flex flex-wrap lg:flex-col gap-3">
                {['All', 'Villa', 'Estate', 'Penthouse'].map(type => (
                  <button 
                    key={type}
                    onClick={() => setActiveType(type)}
                    className={`text-left text-xs font-bold transition-all px-4 py-2 lg:p-0 rounded-full lg:rounded-none border lg:border-none ${activeType === type ? 'text-[#1A2F23] bg-[#1A2F23]/5 lg:bg-transparent lg:translate-x-2' : 'text-slate-400 border-transparent hover:text-[#1A2F23]'}`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-[#1A2F23]/5">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C5A358] mb-6">Budget: <span className="text-[#1A2F23] ml-2">${(maxPrice / 1000000).toFixed(1)}M</span></h3>
              <input 
                type="range" min="500000" max="5000000" step="100000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                className="w-full h-1 bg-[#1A2F23]/10 rounded-lg appearance-none cursor-pointer accent-[#1A2F23]" 
              />
            </div>

            <div className="pt-8 border-t border-[#1A2F23]/5">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C5A358] mb-4">Sort By</h3>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-white border border-[#1A2F23]/10 p-3 rounded-xl text-[10px] font-bold uppercase tracking-widest outline-none"
              >
                <option value="default">Default</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
              </select>
            </div>
          </aside>

          {/* --- PROPERTY GRID --- */}
          <div className="flex-1">
            {filteredResults.length > 0 ? (
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-16">
                {filteredResults.map(p => (
                  <div key={p.id} className="group cursor-pointer" onClick={() => setSelectedProperty(p)}>
                    <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden mb-6 shadow-xl">
                      <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[2px]" />
                      <div className="absolute inset-0 bg-[#1A2F23]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <button className="translate-y-10 group-hover:translate-y-0 transition-all duration-500 bg-[#FDFCF8] text-[#1A2F23] px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">Inquire Now</button>
                      </div>
                      <div className="absolute top-6 left-6 bg-[#FDFCF8]/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-black uppercase text-[#1A2F23]">{p.tag}</div>
                    </div>
                    <div className="flex justify-between items-start px-2">
                      <div>
                        <h4 className="text-2xl font-medium text-[#1A2F23] mb-1 group-hover:text-[#C5A358] transition-colors">{p.title}</h4>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">📍 {p.location}</p>
                      </div>
                      <p className="text-[#C5A358] text-xl font-bold font-sans">${(p.price / 1000000).toFixed(1)}M</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-64 flex items-center justify-center border-2 border-dashed border-[#1A2F23]/10 rounded-[40px] text-slate-400 italic">No matches found.</div>
            )}
          </div>
        </div>
      </div>

      {/* --- INQUIRY MODAL --- */}
      {selectedProperty && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-[#1A2F23]/40 backdrop-blur-sm" onClick={() => setSelectedProperty(null)}></div>
          <div className="relative bg-[#FDFCF8] w-full max-w-lg rounded-[40px] p-10 shadow-2xl">
            {!isSubmitted ? (
              <form onSubmit={handleInquiry} className="space-y-6">
                <h3 className="text-2xl font-light mb-6">Inquire for <span className="font-bold">{selectedProperty.title}</span></h3>
                <input required type="text" placeholder="Your Name" className="w-full bg-[#1A2F23]/5 border-b p-4 outline-none" />
                <input required type="email" placeholder="Your Email" className="w-full bg-[#1A2F23]/5 border-b p-4 outline-none" />
                <button className="w-full bg-[#1A2F23] text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-[#C5A358]">Send Message</button>
              </form>
            ) : (
              <div className="text-center py-10">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-xl font-bold">Inquiry Sent Successfully</h3>
              </div>
            )}
            <button onClick={() => setSelectedProperty(null)} className="absolute top-8 right-8 text-xl">✕</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Collection;