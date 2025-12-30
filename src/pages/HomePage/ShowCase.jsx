import React, { useState } from 'react'

const ShowCase = () => {
    // 1. DATASET
    const PROPERTIES = [
        { id: 1, title: "The Verdant Manor", price: "$2.4M", sqft: "4,500", location: "Lonavala, IN", tag: "Exclusive", beds: 4, baths: 5, img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" },
        { id: 2, title: "Ivory Coast Villa", price: "$1.8M", sqft: "3,200", location: "Alibaug, IN", tag: "New", beds: 3, baths: 3, img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" },
        { id: 3, title: "Sage Hill Estate", price: "$950K", sqft: "2,800", location: "Kodaikanal, IN", tag: "Eco", beds: 2, baths: 2, img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80" },
    ];

    // 2. STATES
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [favorites, setFavorites] = useState([]);

    // 3. HANDLERS
    const toggleFavorite = (id) => {
        setFavorites(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
    };

    const handleInquiry = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            setSelectedProperty(null);
            setIsSubmitted(false);
        }, 2000);
    };

    return (
        <section className="max-w-7xl mx-auto py-24 px-8 bg-[#FDFCF8]">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="space-y-2">
                    <p className="text-[#C5A358] text-xs font-bold uppercase tracking-[0.4em]">Curated Collection</p>
                    <h2 className="text-4xl md:text-5xl font-light text-[#1A2F23]">Available <span className="font-bold italic">Listings</span></h2>
                </div>

                <div className="flex bg-[#1A2F23]/5 p-1 rounded-full border border-[#1A2F23]/10">
                    <button className="px-6 py-2 bg-white rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">Grid View</button>
                    <button className="px-6 py-2 text-[10px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition">Map View</button>
                </div>
            </div>

            {/* Property Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {PROPERTIES.map(p => (
                    <div key={p.id} className="group flex flex-col">
                        
                        {/* Image Container */}
                        <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                            <img
                                src={p.img}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                alt={p.title}
                            />

                            {/* Tag Badge */}
                            <div className="absolute top-6 left-6 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-white">
                                {p.tag}
                            </div>

                            {/* Favorite Button */}
                            <button
                                onClick={() => toggleFavorite(p.id)}
                                className={`absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${favorites.includes(p.id) ? 'bg-red-500 text-white shadow-lg' : 'bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-red-500'}`}
                            >
                                {favorites.includes(p.id) ? '❤️' : '♡'}
                            </button>

                            {/* Stats Overlay */}
                            <div className="absolute inset-x-0 bottom-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-[#1A2F23]/90 via-[#1A2F23]/40 to-transparent">
                                <div className="flex justify-around text-white text-[10px] font-bold uppercase tracking-widest">
                                    <span>🛏 {p.beds} Beds</span>
                                    <span>🚿 {p.baths} Baths</span>
                                    <span>📐 {p.sqft} sqft</span>
                                </div>
                            </div>
                        </div>

                        {/* Text Content & Inquiry Trigger */}
                        <div className="px-2">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-medium text-[#1A2F23] group-hover:text-[#C5A358] transition-colors duration-300">
                                        {p.title}
                                    </h3>
                                    <p className="font-sans text-[11px] text-slate-400 font-bold uppercase tracking-widest mt-1">📍 {p.location}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[#C5A358] text-xl font-bold">{p.price}</p>
                                    <p className="text-[9px] text-slate-400 uppercase font-bold tracking-tighter">Guide Price</p>
                                </div>
                            </div>

                            {/* --- THE INQUIRY BUTTON --- */}
                            <button 
                                onClick={() => setSelectedProperty(p)}
                                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#1A2F23] hover:text-[#C5A358] transition-all group/btn"
                            >
                                Inquire Details 
                                <span className="transform transition-transform group-hover/btn:translate-x-1">→</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- INQUIRY MODAL --- */}
            {selectedProperty && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
                    <div className="absolute inset-0 bg-[#1A2F23]/40 backdrop-blur-sm" onClick={() => setSelectedProperty(null)}></div>
                    <div className="relative bg-[#FDFCF8] w-full max-w-lg rounded-[40px] p-10 shadow-2xl animate-in zoom-in duration-300">
                        {!isSubmitted ? (
                            <form onSubmit={handleInquiry} className="space-y-6">
                                <div className="mb-8">
                                    <p className="text-[#C5A358] text-[10px] font-black uppercase tracking-[0.3em] mb-2">Property Inquiry</p>
                                    <h3 className="text-3xl font-light text-[#1A2F23]">Interested in <br /><span className="font-bold">{selectedProperty.title}</span>?</h3>
                                </div>
                                <div className="space-y-4">
                                    <input required type="text" placeholder="Full Name" className="w-full bg-[#1A2F23]/5 border-b border-[#1A2F23]/10 p-4 outline-none focus:border-[#C5A358] transition-colors" />
                                    <input required type="email" placeholder="Email Address" className="w-full bg-[#1A2F23]/5 border-b border-[#1A2F23]/10 p-4 outline-none focus:border-[#C5A358] transition-colors" />
                                    <textarea placeholder="Message (Optional)" rows="3" className="w-full bg-[#1A2F23]/5 border-b border-[#1A2F23]/10 p-4 outline-none focus:border-[#C5A358] transition-colors resize-none"></textarea>
                                </div>
                                <button className="w-full bg-[#1A2F23] text-white py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-[#C5A358] transition-all shadow-xl shadow-[#1A2F23]/10">
                                    Send Inquiry
                                </button>
                            </form>
                        ) : (
                            <div className="text-center py-12 flex flex-col items-center">
                                <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center text-3xl mb-6">✓</div>
                                <h3 className="text-2xl font-bold text-[#1A2F23] mb-2">Inquiry Received</h3>
                                <p className="text-slate-500 text-sm">Our concierge team will reach out to you within 24 hours.</p>
                            </div>
                        )}
                        <button onClick={() => setSelectedProperty(null)} className="absolute top-8 right-8 text-xl text-[#1A2F23]/20 hover:text-[#1A2F23] transition-colors">✕</button>
                    </div>
                </div>
            )}
        </section>
    )
}

export default ShowCase