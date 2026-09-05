import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowUpRight, Clock, TrendingUp } from "lucide-react";
import { PRODUCTS } from "../data/products";

const POPULAR = ["Orthopaedic Mattress", "Natural Latex", "Queen Size", "Memory Foam", "Velvet Bedstead", "Pocket Spring"];
const CATEGORIES = [
  { label: "Mattresses", id: "mattresses", emoji: "🛏️" },
  { label: "Beds", id: "beds", emoji: "🪵" },
  { label: "Sofas", id: "furniture", emoji: "🛋️" },
  { label: "Pillows", id: "pillows", emoji: "☁️" },
  { label: "Bedding", id: "bedding", emoji: "🌿" },
];

export function SearchModal({ isOpen, onClose, onQuickView, onNavigateSection }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  const results = query.trim().length > 1
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          (p.description && p.description.toLowerCase().includes(query.toLowerCase())) ||
          (p.subcategory && p.subcategory.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  const handleClose = () => {
    setQuery("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-[#0D0B09]/95 backdrop-blur-md text-white flex flex-col"
          role="dialog"
          aria-label="Search"
        >
          {/* Header */}
          <div className="flex items-center gap-4 px-6 md:px-12 py-6 border-b border-white/10">
            <Search className="w-5 h-5 text-[#C2A684] shrink-0" strokeWidth={1.5} />
            <input
              ref={inputRef}
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search mattresses, beds, sofas, materials…"
              className="flex-1 bg-transparent font-serif-luxury text-2xl md:text-4xl text-white placeholder:text-white/30 focus:outline-none"
            />
            <button
              onClick={handleClose}
              className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors"
              aria-label="Close search"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-6 md:px-12 py-8">
            {/* No query — show suggestions */}
            {!query && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl">
                {/* Popular Searches */}
                <div>
                  <div className="flex items-center gap-2 text-[#C2A684] mb-4">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-[0.25em] font-semibold">Popular Searches</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {POPULAR.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setQuery(tag)}
                        className="px-4 py-2 bg-white/8 hover:bg-[#C2A684]/20 border border-white/10 hover:border-[#C2A684]/40 text-sm text-white/80 hover:text-white transition-all rounded-xs"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Shop By Category */}
                <div>
                  <div className="flex items-center gap-2 text-[#C2A684] mb-4">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-[0.25em] font-semibold">Browse Categories</span>
                  </div>
                  <div className="space-y-2">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          onNavigateSection?.(cat.id);
                          handleClose();
                        }}
                        className="w-full flex items-center justify-between px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/8 hover:border-white/20 transition-all group"
                      >
                        <span className="text-sm text-white/80 group-hover:text-white">
                          {cat.emoji} {cat.label}
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-[#C2A684] transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Results */}
            {query && (
              <div className="max-w-5xl">
                <p className="text-xs uppercase tracking-widest text-[#C2A684] mb-6">
                  {results.length === 0 ? "No results" : `${results.length} result${results.length > 1 ? "s" : ""}`} for "{query}"
                </p>

                {results.length === 0 ? (
                  <p className="text-white/40 text-lg font-serif-luxury italic">
                    Try searching 'Latex', 'Orthopaedic', or 'Queen'
                  </p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {results.map((item, i) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        onClick={() => { onQuickView(item); handleClose(); }}
                        className="flex items-center gap-4 p-4 bg-white/6 border border-white/10 hover:border-[#C2A684]/50 cursor-pointer group transition-all"
                      >
                        <div className="w-14 h-14 rounded-xs overflow-hidden shrink-0 bg-white/10">
                          <img
                            src={item.image || (item.images && item.images[0])}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] text-[#C2A684] uppercase tracking-wider mb-0.5">
                            {item.category}
                          </p>
                          <h4 className="font-serif-luxury text-base text-white group-hover:text-[#C2A684] transition-colors line-clamp-1">
                            {item.name}
                          </h4>
                          <p className="text-xs text-white/50 font-medium mt-0.5">
                            ₹{item.price.toLocaleString("en-IN")}
                          </p>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-[#C2A684] shrink-0 transition-colors" />
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
