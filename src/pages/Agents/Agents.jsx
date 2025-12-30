import React, { useState } from 'react';
import Header from '../Header';

const Agents = () => {
    const [hoveredAgent, setHoveredAgent] = useState(null);
    const [selectedAgent, setSelectedAgent] = useState(null);
      const [isSubmitted, setIsSubmitted] = useState(false);
 // 4. HANDLERS
  const handleInquiry = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setSelectedAgent(null);
      setIsSubmitted(false);
    }, 2000);
  };
  const AGENTS = [
    {
      id: 1,
      name: "Siddharth Malhotra",
      email: "s.malhotra@elysian.com",
      role: "Founder & Principal Architect",
      specialty: "Luxury Penthouses",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
      stats: { sold: 140, listings: 12 }
    },
    {
      id: 2,
      name: "Ananya Iyer",
      email: "ananya.i@elysian.com",
      role: "Senior Consultant",
      specialty: "Coastal Estates",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      stats: { sold: 85, listings: 15 }
    },
    {
      id: 3,
      name: "Vikram Rathore",
      email: "v.rathore@elysian.com",
      role: "Investment Strategist",
      specialty: "Commercial Land",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
      stats: { sold: 210, listings: 8 }
    }
  ];

    return (
        <div className="min-h-screen bg-[#FDFCF8] pt-32 pb-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">

              

                {/* --- Agents Grid --- */}
                <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
                    {AGENTS.map((agent) => (
                        <div
                            key={agent.id}
                            className="group flex flex-col items-center text-center"
                            onMouseEnter={() => setHoveredAgent(agent.id)}
                            onMouseLeave={() => setHoveredAgent(null)}
                        >
                            {/* Profile Image with Animated Border */}
                            <div className="relative w-64 h-64 md:w-full md:aspect-square mb-10 group-hover:-translate-y-2 transition-transform duration-500">
                                <div className={`absolute inset-0 rounded-full border border-[#C5A358]/30 scale-110 transition-transform duration-700 ${hoveredAgent === agent.id ? 'rotate-180' : ''}`}></div>

                                <div className="w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white">
                                    <img
                                        src={agent.img}
                                        alt={agent.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>

                                {/* Quick Action Button */}
                                <button onClick={() => setSelectedAgent(agent)} className="absolute bottom-0 right-0 bg-[#1A2F23] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    ✉
                                </button>
                            </div>

                            {/* Info */}
                            <h3 className="text-2xl font-medium text-[#1A2F23] mb-1">{agent.name}</h3>
                            <p className="text-[#C5A358] text-[10px] font-black uppercase tracking-[0.2em] mb-4">{agent.role}</p>

                            <div className="h-[1px] w-12 bg-[#1A2F23]/10 mb-6"></div>

                            <div className="grid grid-cols-2 gap-8 w-full max-w-[200px]">
                                <div>
                                    <p className="text-xl font-bold text-[#1A2F23]">{agent.stats.sold}</p>
                                    <p className="text-[8px] uppercase tracking-widest text-slate-400 font-bold">Deals Closed</p>
                                </div>
                                <div>
                                    <p className="text-xl font-bold text-[#1A2F23]">{agent.stats.listings}</p>
                                    <p className="text-[8px] uppercase tracking-widest text-slate-400 font-bold">Listings</p>
                                </div>
                            </div>

                            {/* Specialty Tag */}
                            <p className="mt-8 text-xs italic text-slate-500">Expertise: {agent.specialty}</p>
                        </div>
                    ))}
                </div>

                {/* --- Work With Us Section --- */}
                <div className="mt-32 p-12 md:p-20 bg-[#1A2F23] rounded-[60px] text-[#FDFCF8] flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-light mb-4 leading-tight">
                            Are you an experienced <br /> <span className="italic">Luxury Agent?</span>
                        </h2>
                        <p className="text-white/40 text-sm tracking-wide">Join our elite roster of architectural consultants.</p>
                    </div>
                    <button className="bg-[#C5A358] text-white px-12 py-5 rounded-full font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-[#1A2F23] transition-all active:scale-95">
                        Apply to Join
                    </button>
                </div>
                {/* --- INQUIRY MODAL --- */}
                {selectedAgent && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
                        <div className="absolute inset-0 bg-[#1A2F23]/40 backdrop-blur-sm" onClick={() => setSelectedAgent(null)}></div>
                        <div className="relative bg-[#FDFCF8] w-full max-w-lg rounded-[40px] p-10 shadow-2xl">
                            {!isSubmitted ? (
                                <form onSubmit={handleInquiry} className="space-y-6">
                                    <h3 className="text-2xl font-light mb-6">Inquire for <span className="font-bold">{selectedAgent.title}</span></h3>
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
                            <button onClick={() => setSelectedAgent(null)} className="absolute top-8 right-8 text-xl">✕</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Agents;