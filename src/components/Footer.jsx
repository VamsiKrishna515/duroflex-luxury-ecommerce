import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

// Inline SVG social icons (no lucide dependency)
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

export function Footer({ onNavigateSection, onShowToast }) {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && onShowToast) {
      onShowToast(`Subscribed ${email} successfully!`);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#0D0B09] text-white pt-20 pb-8 px-4 sm:px-8 md:px-16 border-t border-stone-800">
      {/* Top Brand Statement */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="font-serif text-6xl md:text-8xl text-white mb-6 tracking-tight">
          SLEEP BEAUTIFULLY.
        </h2>
        <div className="w-24 h-px bg-[#C2A684] mx-auto mb-6"></div>
        <p className="text-stone-400 text-lg md:text-xl font-light tracking-wide">
          India's most trusted architectural sleep brand.
        </p>
      </div>

      {/* Trust Badges */}
      <div className="max-w-7xl mx-auto border-y border-stone-800 py-6 mb-16 overflow-hidden">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm md:text-base text-stone-300 font-medium tracking-wide">
          <div className="flex items-center space-x-2"><span>🏆</span><span>100-Night Trial</span></div>
          <div className="flex items-center space-x-2"><span>🚚</span><span>Free White-Glove Delivery</span></div>
          <div className="flex items-center space-x-2"><span>🛡️</span><span>10-Year Warranty</span></div>
          <div className="flex items-center space-x-2"><span>💳</span><span>EMI Available</span></div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        {/* Column 1: Brand & Social */}
        <div className="lg:col-span-1">
          <h3 className="text-2xl font-serif text-white tracking-widest mb-4">DUROFLEX</h3>
          <p className="text-stone-400 text-sm mb-6 leading-relaxed">
            Crafting the ultimate sleep experience through innovation, science, and luxurious comfort.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-stone-400 hover:text-[#C2A684] transition-colors"><InstagramIcon /></a>
            <a href="#" className="text-stone-400 hover:text-[#C2A684] transition-colors"><FacebookIcon /></a>
            <a href="#" className="text-stone-400 hover:text-[#C2A684] transition-colors"><YoutubeIcon /></a>
            <a href="#" className="text-stone-400 hover:text-[#C2A684] transition-colors"><LinkedinIcon /></a>
          </div>

        </div>

        {/* Column 2: EXPLORE */}
        <div>
          <h4 className="text-[#C2A684] text-xs font-bold uppercase tracking-widest mb-6">Explore</h4>
          <ul className="space-y-4">
            {['Mattresses', 'Beds', 'Furniture', 'Pillows', 'Bedding', 'Collections'].map((item) => (
              <li key={item}>
                <button onClick={() => onNavigateSection && onNavigateSection(item.toLowerCase())} className="text-stone-400 hover:text-white transition-colors text-sm">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: SUPPORT */}
        <div>
          <h4 className="text-[#C2A684] text-xs font-bold uppercase tracking-widest mb-6">Support</h4>
          <ul className="space-y-4">
            {['Contact', 'Track Order', 'Shipping', 'Returns', 'FAQs', 'Store Locator'].map((item) => (
              <li key={item}>
                <a href="#" className="text-stone-400 hover:text-white transition-colors text-sm">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: COMPANY */}
        <div>
          <h4 className="text-[#C2A684] text-xs font-bold uppercase tracking-widest mb-6">Company</h4>
          <ul className="space-y-4">
            {['Our Story', 'Technology', 'Careers', 'Press', 'Sustainability'].map((item) => (
              <li key={item}>
                <a href="#" className="text-stone-400 hover:text-white transition-colors text-sm">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 5: Newsletter */}
        <div className="lg:col-span-1">
          <h4 className="text-[#C2A684] text-xs font-bold uppercase tracking-widest mb-6">Stay Connected</h4>
          <p className="text-white text-lg font-serif mb-6">Sleep better. Stay inspired.</p>
          <form onSubmit={handleSubscribe} className="relative">
            <input 
              type="email" 
              placeholder="Email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-transparent border-b border-stone-600 py-3 pr-10 text-white placeholder-stone-500 focus:outline-none focus:border-[#C2A684] transition-colors"
            />
            <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-400 hover:text-[#C2A684] transition-colors">
              <ArrowRight size={20} />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 space-y-4 md:space-y-0">
        <p>© 2026 Duroflex Private Limited</p>
        <p className="flex items-center space-x-1"><span>Made in India</span> <span role="img" aria-label="India Flag">🇮🇳</span></p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Accessibility</a>
        </div>
      </div>
    </footer>
  );
}
