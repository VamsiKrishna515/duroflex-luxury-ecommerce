import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "../data/products";

export function SearchModal({ isOpen, onClose, onQuickView }) {
  const [query, setQuery] = useState("");

  const popularTags = [
    "Orthopaedic Mattress",
    "Natural Latex",
    "Velvet Bedstead",
    "Bouclé Sofa",
    "Zero-Gravity Recliner",
    "Tencel Duvet"
  ];

  const results = query.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 glass-dark text-white p-6 md:p-12 overflow-y-auto flex flex-col justify-between"
        >
          <div className="max-w-4xl mx-auto w-full">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-10">
              <span className="font-serif-luxury text-2xl tracking-[0.2em]">
                DUROFLEX CATALOG SEARCH
              </span>
              <button
                onClick={onClose}
                className="p-2 hover:text-[#C2A684] transition-colors"
                aria-label="Close Search"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Search Bar Input */}
            <div className="relative mb-10">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 text-[#C2A684]" />
              <input
                type="text"
                autoFocus
                placeholder="Search mattresses, beds, sofas, or technologies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent border-b-2 border-white/20 focus:border-[#C2A684] pl-12 pr-4 py-4 font-serif-luxury text-2xl md:text-4xl text-white placeholder:text-white/30 focus:outline-hidden transition-colors"
              />
            </div>

            {/* Recommended Tags */}
            {!query && (
              <div className="mb-12">
                <span className="text-xs uppercase tracking-widest text-[#C2A684] font-semibold mb-4 block">
                  Popular Searches
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {popularTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-4 py-2 bg-white/5 hover:bg-[#C2A684] text-white text-xs tracking-wider rounded-xs border border-white/10 transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Search Results */}
            {query && (
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C2A684] font-semibold mb-6 block">
                  Search Results ({results.length})
                </span>
                {results.length === 0 ? (
                  <p className="text-white/50 text-sm italic py-8">
                    No products matched "{query}". Try searching for 'Latex' or 'Orthopaedic'.
                  </p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {results.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => {
                          onQuickView(item);
                          onClose();
                        }}
                        className="p-4 bg-white/5 border border-white/10 hover:border-[#C2A684] cursor-pointer rounded-xs flex items-center space-x-4 transition-colors group"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-xs"
                        />
                        <div className="grow">
                          <span className="text-[10px] text-[#C2A684] uppercase tracking-widest block">
                            {item.category}
                          </span>
                          <h4 className="font-serif-luxury text-xl text-white group-hover:text-[#C2A684] transition-colors">
                            {item.name}
                          </h4>
                          <span className="text-xs text-white/70">
                            ₹{item.price.toLocaleString("en-IN")}
                          </span>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#C2A684]" />
                      </div>
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
