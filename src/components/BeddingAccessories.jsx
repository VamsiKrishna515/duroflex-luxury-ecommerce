import React from "react";
import { motion } from "framer-motion";
import { PRODUCTS } from "../data/products";
import { ShoppingBag, Eye } from "lucide-react";

export function BeddingAccessories({ onQuickView, onAddToCart }) {
  const beddingItems = PRODUCTS.filter(
    (p) => p.category === "pillows" || p.category === "bedding"
  );

  return (
    <section id="bedding" className="py-28 md:py-40 px-6 md:px-12 bg-[#F6F2EC] border-b border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-black/10 pb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#C2A684] font-semibold mb-3 block">
              Sanctuary Essentials
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#121212]">
              BEDDING & ACCESSORIES
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#666] font-light max-w-md mt-4 md:mt-0 leading-relaxed">
            400 TC organic Tencel lyocell sheets, cervical ergonomic pillows, and cloud-soft hypoallergenic duvets.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {beddingItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group bg-white p-6 sm:p-8 rounded-xs shadow-sm hover:shadow-xl transition-all duration-500 border border-black/5 flex flex-col justify-between"
            >
              <div className="relative h-72 sm:h-80 overflow-hidden mb-6 rounded-xs bg-[#F4F1EA]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <span className="absolute top-4 left-4 bg-[#C2A684] text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1 font-medium">
                  {item.badge}
                </span>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#888] font-medium mb-1 block">
                  {item.subcategory}
                </span>
                <h3 className="font-serif-luxury text-2xl md:text-3xl text-[#121212] font-normal mb-2 group-hover:text-[#C2A684] transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs md:text-sm text-[#666] font-light mb-6 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-black/10">
                  <span className="text-2xl font-serif-luxury text-[#121212]">
                    ₹{item.price.toLocaleString("en-IN")}
                  </span>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => onQuickView(item)}
                      className="px-4 py-2 border border-black/20 hover:border-black text-xs uppercase tracking-wider font-medium transition-colors"
                    >
                      Quick View
                    </button>
                    <button
                      onClick={() => onAddToCart(item)}
                      className="px-5 py-2 bg-[#121212] hover:bg-[#C2A684] text-white text-xs uppercase tracking-wider font-medium transition-colors flex items-center space-x-1.5"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
