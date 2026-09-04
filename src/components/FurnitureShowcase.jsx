import React from "react";
import { motion } from "framer-motion";
import { PRODUCTS } from "../data/products";
import { ArrowUpRight, ShoppingBag, Eye } from "lucide-react";

export function FurnitureShowcase({ onQuickView, onAddToCart }) {
  const furnitureItems = PRODUCTS.filter(
    (p) => p.category === "furniture" || p.category === "beds"
  );

  return (
    <section id="furniture" className="py-28 md:py-40 px-6 md:px-12 bg-[#FBF9F5] border-b border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-black/10 pb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#C2A684] font-semibold mb-3 block">
              Architectural Living & Furniture
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#121212]">
              FURNITURE & LIVING
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#666] font-light max-w-md mt-4 md:mt-0 leading-relaxed">
            Sculptural sofas, zero-gravity motorized recliners, and handcrafted wooden furniture designed for modern sanctuary living.
          </p>
        </div>

        {/* Asymmetric Composition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {furnitureItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group cursor-pointer bg-white p-6 rounded-xs shadow-sm hover:shadow-xl transition-all duration-500 border border-black/5 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Floating Number */}
                <div className="relative h-72 overflow-hidden mb-6 rounded-xs bg-[#F4F1EA]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <span className="absolute top-4 left-4 text-3xl font-serif-luxury italic text-white/90 drop-shadow-md">
                    0{idx + 1}
                  </span>
                  <span className="absolute top-4 right-4 bg-[#121212]/80 backdrop-blur-xs text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1 font-medium">
                    {item.badge}
                  </span>
                </div>

                <span className="text-xs uppercase tracking-widest text-[#C2A684] font-semibold mb-1 block">
                  {item.subcategory}
                </span>

                <h3 className="font-serif-luxury text-2xl md:text-3xl text-[#121212] font-normal mb-2 group-hover:text-[#C2A684] transition-colors">
                  {item.name}
                </h3>

                <p className="text-xs text-[#666] font-light mb-6 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Price & Action Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-black/10">
                <span className="text-2xl font-serif-luxury text-[#121212]">
                  ₹{item.price.toLocaleString("en-IN")}
                </span>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onQuickView(item)}
                    className="p-2 border border-black/10 hover:border-black rounded-xs transition-colors"
                    title="Quick View"
                  >
                    <Eye className="w-4 h-4 text-[#121212]" />
                  </button>
                  <button
                    onClick={() => onAddToCart(item)}
                    className="px-4 py-2 bg-[#121212] hover:bg-[#C2A684] text-white text-xs uppercase tracking-wider transition-colors flex items-center space-x-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Cart</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
