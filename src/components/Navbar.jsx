import React, { useState, useEffect } from "react";
import { Search, ShoppingBag, Heart, User, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onNavigateSection
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Mattresses", target: "mattresses" },
    { label: "Beds", target: "beds" },
    { label: "Furniture", target: "furniture" },
    { label: "Pillows", target: "pillows" },
    { label: "Bed & Bath", target: "bedding" },
    { label: "Sleep Tech", target: "technology" },
    { label: "Store Locator", target: "stores" }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "glass-panel py-4 shadow-sm text-[#121212]"
            : "bg-gradient-to-b from-black/40 via-black/20 to-transparent py-6 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left: Brand Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-baseline space-x-2 text-left group"
          >
            <span className="font-serif-luxury text-2xl md:text-3xl tracking-[0.25em] uppercase font-light">
              Duroflex
            </span>
            <span className="text-[9px] tracking-[0.3em] uppercase opacity-75 font-semibold text-[#C2A684]">
              Studio
            </span>
          </button>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => onNavigateSection?.(link.target)}
                className={`text-xs uppercase tracking-[0.2em] transition-colors relative py-1 hover:text-[#C2A684] ${
                  scrolled ? "text-[#333]" : "text-white/90"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right: Actions (Search, Account, Wishlist, Cart) */}
          <div className="flex items-center space-x-5 md:space-x-7">
            <button
              onClick={onOpenSearch}
              className="p-1 hover:text-[#C2A684] transition-colors"
              aria-label="Search Catalog"
            >
              <Search className="w-5 h-5 stroke-[1.5]" />
            </button>

            <button
              onClick={onOpenWishlist}
              className="p-1 hover:text-[#C2A684] transition-colors relative"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5 stroke-[1.5]" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-[#C2A684] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenCart}
              className="p-1 hover:text-[#C2A684] transition-colors relative"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-[#C2A684] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-1 hover:text-[#C2A684] transition-colors"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6 stroke-[1.5]" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 glass-dark text-white flex flex-col justify-between p-8"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <span className="font-serif-luxury text-2xl tracking-[0.2em]">DUROFLEX</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:text-[#C2A684]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col space-y-6 my-auto">
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1 }}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigateSection?.(link.target);
                  }}
                  className="text-left font-serif-luxury text-3xl tracking-wider text-white/90 hover:text-[#C2A684] transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            <div className="border-t border-white/10 pt-6 flex items-center justify-between text-xs tracking-widest text-white/60">
              <span>DUROFLEX LUXURY STORE</span>
              <span>© 2026</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
