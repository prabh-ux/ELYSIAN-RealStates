import React, { useState } from 'react'

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInquiry = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            setIsModalOpen(false);
            setIsSubmitted(false);
        }, 2000);
    };

    return (
        <section className="bg-[#1A2F23] py-32 px-8 text-center text-[#FDFCF8] relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#C5A358]/10 blur-[120px] rounded-full -z-10"></div>

            <div className="max-w-4xl mx-auto">
                <p className="text-[#C5A358] text-[10px] font-black uppercase tracking-[0.5em] mb-6">Final Step</p>
                <h3 className="text-4xl md:text-6xl font-light mb-12 leading-tight">
                    Start your <span className="italic font-bold">new journey</span> with a personal consultation.
                </h3>
                
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#C5A358] text-[#FDFCF8] px-14 py-5 rounded-full font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-[#FDFCF8] hover:text-[#1A2F23] transition-all duration-500 shadow-xl shadow-black/20"
                >
                    Schedule Call
                </button>
            </div>

            {/* --- GENERAL INQUIRY MODAL --- */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-[#1A2F23]/60 backdrop-blur-md transition-opacity"
                        onClick={() => setIsModalOpen(false)}
                    ></div>

                    {/* Modal Content */}
                    <div className="relative bg-[#FDFCF8] w-full max-w-lg rounded-[50px] p-10 md:p-14 shadow-2xl text-[#1A2F23] text-left">
                        {!isSubmitted ? (
                            <>
                                <div className="mb-10">
                                    <h4 className="text-3xl font-light mb-2">Private <span className="font-bold italic text-[#C5A358]">Consultation</span></h4>
                                    <p className="text-slate-400 text-xs font-medium tracking-wide">Enter your details and a concierge will reach out shortly.</p>
                                </div>

                                <form onSubmit={handleInquiry} className="space-y-6">
                                    <div className="space-y-4">
                                        <input 
                                            required 
                                            type="text" 
                                            placeholder="Full Name" 
                                            className="w-full bg-[#1A2F23]/5 border-b border-[#1A2F23]/10 p-4 outline-none focus:border-[#C5A358] transition-all text-sm font-sans" 
                                        />
                                        <input 
                                            required 
                                            type="email" 
                                            placeholder="Email Address" 
                                            className="w-full bg-[#1A2F23]/5 border-b border-[#1A2F23]/10 p-4 outline-none focus:border-[#C5A358] transition-all text-sm font-sans" 
                                        />
                                        <select className="w-full bg-[#1A2F23]/5 border-b border-[#1A2F23]/10 p-4 outline-none focus:border-[#C5A358] transition-all text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                            <option>Consultation Type</option>
                                            <option>Property Buying</option>
                                            <option>Selling Estate</option>
                                            <option>Investment Advice</option>
                                        </select>
                                    </div>
                                    
                                    <button className="w-full bg-[#1A2F23] text-[#FDFCF8] py-5 rounded-2xl font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-[#C5A358] transition-all duration-300">
                                        Submit Request
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="py-16 text-center">
                                <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 text-4xl shadow-inner">
                                    ✓
                                </div>
                                <h4 className="text-2xl font-bold mb-3 tracking-tight">Request Confirmed</h4>
                                <p className="text-slate-400 text-sm">We have received your request for a private consultation.</p>
                            </div>
                        )}

                        {/* Close Button */}
                        <button 
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-10 right-10 w-10 h-10 flex items-center justify-center rounded-full bg-[#1A2F23]/5 hover:bg-[#1A2F23] hover:text-[#FDFCF8] transition-all"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Footer