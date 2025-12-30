import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // This prevents the page from scrolling when the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);
const navigate=useNavigate();
  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed w-full top-0 left-0 z-[100] bg-[#FDFCF8]/80 backdrop-blur-xl border-b border-[#1A2F23]/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 py-5">
          
          {/* Logo */}
          <div className="text-xl md:text-2xl font-bold tracking-[0.2em] text-[#1A2F23] z-[120]">
            ELYSIAN<span className="text-[#C5A358]">.</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.25em] text-[#1A2F23]/60">
          {[{name:'Home',link:"/"}, {name:'Agents',link:"/agents"}, {name:'Estates',link:"/collection"}].map((item, index) => ( 
            <button onClick={() => {navigate(item.link) }} key={index} href={item.link} className="relative group transition-colors hover:text-[#1A2F23]">
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C5A358] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Right Side / Hamburger */}
          <div className="flex items-center gap-6">
           

            {/* Hamburger Button - Force Z-Index higher */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-[120] relative"
              aria-label="Toggle Menu"
            >
              <span className={`w-6 h-0.5 bg-[#1A2F23] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-[#1A2F23] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-[#1A2F23] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* --- Mobile Overlay: Fixed to Screen --- */}
      <div 
        className={`fixed inset-0 w-full h-full bg-[#FDFCF8] z-[110] flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-10 text-center">
          {[{name:'Home',link:"/"}, {name:'Agents',link:"/agents"}, {name:'Estates',link:"/collection"}].map((item, index) => (
            <button
              key={item.name}
              
              onClick={() => {setIsOpen(false); navigate(item.link) }}
              className={`text-4xl font-light text-[#1A2F23] tracking-[0.2em] hover:italic transition-all duration-300 ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }} // Staggered entry
            >
              {item.name}
           </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default Header;