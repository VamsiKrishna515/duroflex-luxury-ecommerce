import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Heart, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar({ cartCount = 0, wishlistCount = 0, onOpenCart, onOpenWishlist, onOpenSearch, onNavigateSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Mattresses', 'Beds', 'Furniture', 'Bedding', 'Collections', 'Our Story'];
  
  const textColor = scrolled ? 'text-gray-900' : 'text-white';
  const navBg = scrolled ? 'bg-[#FBF9F5]/92 backdrop-blur-xl border-b border-black/8 py-4' : 'bg-transparent py-6';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Left: Nav links (Desktop) */}
          <div className={`hidden lg:flex items-center space-x-8 ${textColor}`}>
            {navLinks.map((link) => (
              <div 
                key={link} 
                className="relative group cursor-pointer text-sm tracking-wide"
                onClick={() => onNavigateSection?.(link)}
              >
                <span>{link}</span>
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            ))}
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
            <span className={`font-serif text-2xl tracking-[0.25em] ${textColor} cursor-pointer`}>
              DUROFLEX
            </span>
          </div>

          {/* Right: Actions */}
          <div className={`hidden lg:flex items-center space-x-6 ${textColor}`}>
            <button className={`px-5 py-2 text-xs tracking-widest uppercase border rounded-full transition-colors ${scrolled ? 'border-gray-900 hover:bg-gray-900 hover:text-white' : 'border-white hover:bg-white hover:text-black'}`}>
              Find Your Mattress
            </button>
            <button onClick={onOpenSearch} className="hover:text-[#D4AF37] transition-colors"><Search size={18} /></button>
            <button onClick={onOpenWishlist} className="relative hover:text-[#D4AF37] transition-colors">
              <Heart size={18} />
              {wishlistCount > 0 && <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">{wishlistCount}</span>}
            </button>
            <button onClick={onOpenCart} className="relative hover:text-[#D4AF37] transition-colors">
              <ShoppingBag size={18} />
              {cartCount > 0 && <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">{cartCount}</span>}
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className={`lg:hidden flex items-center space-x-4 ${textColor}`}>
             <button onClick={onOpenCart} className="relative">
              <ShoppingBag size={20} />
              {cartCount > 0 && <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">{cartCount}</span>}
            </button>
            <button onClick={() => setMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-50 bg-[#0D0B09] text-white flex flex-col overflow-y-auto"
          >
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <span className="font-serif text-xl tracking-[0.2em]">DUROFLEX</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#D4AF37] transition-colors">
                <X size={28} />
              </button>
            </div>
            
            <div className="flex-1 p-6 flex flex-col justify-center space-y-6">
              {navLinks.map((link, idx) => (
                <motion.div 
                  key={link}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + idx * 0.05, duration: 0.4 }}
                  className="flex items-center space-x-4 cursor-pointer group"
                  onClick={() => {
                    onNavigateSection?.(link);
                    setMobileMenuOpen(false);
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 group-hover:bg-[#D4AF37]/20 transition-colors flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <img src={`https://images.unsplash.com/photo-1505693314120-0d443867891c?w=100&q=80`} alt={link} className="w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:opacity-100" />
                  </div>
                  <span className="font-serif text-4xl group-hover:text-[#D4AF37] transition-colors">{link}</span>
                </motion.div>
              ))}
            </div>

            <div className="p-6 flex justify-between items-center text-sm tracking-wider text-white/50 border-t border-white/10">
              <span className="cursor-pointer hover:text-white transition-colors">INSTAGRAM</span>
              <span className="cursor-pointer hover:text-white transition-colors">PINTEREST</span>
              <span className="cursor-pointer hover:text-white transition-colors">TWITTER</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
