import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function Footer({ onNavigateSection, onShowToast }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    onShowToast?.("Thank you for subscribing to Duroflex Studio journal.");
    setEmail("");
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="bg-[#0D0C0C] text-white pt-24 pb-12 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Top Newsletter Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C2A684] font-semibold mb-3 block">
              Duroflex Journal
            </span>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl text-white font-light">
              Sleep better. Stay inspired.
            </h3>
            <p className="text-xs sm:text-sm text-white/60 font-light mt-2 max-w-md">
              Receive quarterly design lookbooks, sleep science discoveries, and exclusive private showroom previews.
            </p>
          </div>

          <div className="lg:col-span-6">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="bg-white/5 border border-white/20 focus:border-[#C2A684] px-5 py-4 text-xs text-white placeholder:text-white/40 focus:outline-hidden grow transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-[#C2A684] hover:bg-[#a88a68] text-white text-xs uppercase tracking-[0.25em] font-medium transition-colors flex items-center justify-center space-x-2 shrink-0"
              >
                <span>{subscribed ? "Subscribed" : "Subscribe"}</span>
                {subscribed ? <Check className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </form>
          </div>
        </div>

        {/* Links Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 py-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <span className="font-serif-luxury text-3xl tracking-[0.2em] uppercase text-white block mb-4">
              DUROFLEX
            </span>
            <p className="text-xs text-white/50 font-light leading-relaxed max-w-xs">
              India's premier architectural sleep brand. Engineered for spinal wellness and luxury interior spaces since 1963.
            </p>
          </div>

          {/* SHOP */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#C2A684] mb-6">
              SHOP
            </h4>
            <ul className="space-y-3 text-xs text-white/70 font-light">
              <li>
                <button onClick={() => onNavigateSection("mattresses")} className="hover:text-white transition-colors">
                  Mattresses
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection("beds")} className="hover:text-white transition-colors">
                  Beds
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection("furniture")} className="hover:text-white transition-colors">
                  Furniture
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection("pillows")} className="hover:text-white transition-colors">
                  Pillows
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection("bedding")} className="hover:text-white transition-colors">
                  Bedding Suite
                </button>
              </li>
            </ul>
          </div>

          {/* HELP */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#C2A684] mb-6">
              HELP
            </h4>
            <ul className="space-y-3 text-xs text-white/70 font-light">
              <li><a href="#help" className="hover:text-white transition-colors">Contact Concierge</a></li>
              <li><a href="#help" className="hover:text-white transition-colors">Track Order</a></li>
              <li><a href="#help" className="hover:text-white transition-colors">White-Glove Shipping</a></li>
              <li><a href="#help" className="hover:text-white transition-colors">100-Night Trial Returns</a></li>
              <li><a href="#help" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* ABOUT */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#C2A684] mb-6">
              ABOUT
            </h4>
            <ul className="space-y-3 text-xs text-white/70 font-light">
              <li><a href="#about" className="hover:text-white transition-colors">Our Heritage</a></li>
              <li><button onClick={() => onNavigateSection("technology")} className="hover:text-white transition-colors">Doctor Ortho Tech</button></li>
              <li><button onClick={() => onNavigateSection("stores")} className="hover:text-white transition-colors">Experience Stores</button></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Architect Careers</a></li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#C2A684] mb-6">
              SOCIAL
            </h4>
            <ul className="space-y-3 text-xs text-white/70 font-light">
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">YouTube</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-white/40 font-light space-y-4 md:space-y-0">
          <div>
            © {new Date().getFullYear()} Duroflex Private Limited. All rights reserved. Designed for Luxury Architecture.
          </div>
          <div className="flex space-x-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#accessibility" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
