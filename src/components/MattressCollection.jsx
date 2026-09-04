import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, ShoppingBag, Eye, Heart, Check } from "lucide-react";
import { PRODUCTS } from "../data/products";

export function MattressCollection({
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  wishlistIds
}) {
  const mattresses = PRODUCTS.filter((p) => p.category === "mattresses");
  const featured = mattresses[0];
  const secondary = mattresses.slice(1);
  const [selectedSizeMap, setSelectedSizeMap] = useState({});

  const handleSizeChange = (productId, size) => {
    setSelectedSizeMap((prev) => ({ ...prev, [productId]: size }));
  };

  return (
    <section id="mattresses" className="py-28 md:py-40 px-6 md:px-12 bg-[#FBF9F5] border-b border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-black/10 pb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#C2A684] font-semibold mb-3 block">
              Orthopaedic & Luxury Sleep
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#121212]">
              FIND YOUR PERFECT SLEEP
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#666] font-light max-w-md mt-4 md:mt-0 leading-relaxed">
            Doctor recommended orthopaedic mattresses and natural latex suites designed to elevate spinal wellness and deep REM sleep.
          </p>
        </div>

        {/* 60/40 Asymmetric Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14">
          {/* FEATURED MATTRESS (7 COLUMNS / ~60%) */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 flex flex-col justify-between group cursor-pointer bg-white p-6 sm:p-8 rounded-xs shadow-sm hover:shadow-xl transition-all duration-500 border border-black/5"
            >
              <div className="relative h-[360px] sm:h-[460px] overflow-hidden mb-8 rounded-xs bg-[#F4F1EA]">
                <img
                  src={featured.image}
                  alt={featured.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <span className="absolute top-4 left-4 bg-[#121212] text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1 font-medium">
                  {featured.badge}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleWishlist(featured);
                  }}
                  className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-xs rounded-full text-[#121212] hover:text-[#C2A684] transition-colors"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      wishlistIds.includes(featured.id) ? "fill-[#C2A684] text-[#C2A684]" : ""
                    }`}
                  />
                </button>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-widest text-[#C2A684] font-medium">
                    {featured.subcategory} • {featured.firmness}
                  </span>
                  <div className="flex items-center space-x-1 text-xs text-[#555]">
                    <Star className="w-3.5 h-3.5 fill-[#C2A684] text-[#C2A684]" />
                    <span className="font-semibold">{featured.rating}</span>
                    <span>({featured.reviewsCount})</span>
                  </div>
                </div>

                <h3 className="font-serif-luxury text-3xl md:text-4xl text-[#121212] font-normal mb-3 group-hover:text-[#C2A684] transition-colors">
                  {featured.name}
                </h3>
                <p className="text-sm text-[#666] font-light mb-6 line-clamp-2 leading-relaxed">
                  {featured.description}
                </p>

                {/* Size Selector Dropdown */}
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <span className="text-xs text-[#888] uppercase tracking-wider">Size:</span>
                  <div className="flex flex-wrap gap-2">
                    {featured.sizes.slice(0, 4).map((size) => {
                      const isSelected =
                        (selectedSizeMap[featured.id] || featured.sizes[0]) === size;
                      return (
                        <button
                          key={size}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSizeChange(featured.id, size);
                          }}
                          className={`text-[11px] px-3 py-1 border transition-all ${
                            isSelected
                              ? "border-[#121212] bg-[#121212] text-white"
                              : "border-gray-200 text-[#555] hover:border-gray-400"
                          }`}
                        >
                          {size}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Price & Action Buttons */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-black/10 gap-4">
                  <div className="flex items-baseline space-x-3">
                    <span className="text-2xl md:text-3xl font-serif-luxury font-medium text-[#121212]">
                      ₹{featured.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      ₹{featured.originalPrice.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => onQuickView(featured)}
                      className="px-5 py-2.5 border border-black/20 hover:border-black text-xs uppercase tracking-wider font-medium text-[#121212] transition-colors flex items-center space-x-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>
                    <button
                      onClick={() =>
                        onAddToCart({
                          ...featured,
                          selectedSize: selectedSizeMap[featured.id] || featured.sizes[0]
                        })
                      }
                      className="px-6 py-2.5 bg-[#121212] hover:bg-[#C2A684] text-white text-xs uppercase tracking-wider font-medium transition-colors flex items-center space-x-2"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* SECONDARY MATTRESSES (5 COLUMNS / ~40%) */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            {secondary.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="group cursor-pointer bg-white p-6 rounded-xs shadow-sm hover:shadow-lg transition-all duration-500 border border-black/5 flex flex-col justify-between"
              >
                <div className="relative h-56 overflow-hidden mb-6 rounded-xs bg-[#F4F1EA]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <span className="absolute top-3 left-3 bg-[#C2A684] text-white text-[9px] tracking-[0.2em] uppercase px-2.5 py-0.5 font-medium">
                    {item.badge}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(item);
                    }}
                    className="absolute top-3 right-3 p-1.5 bg-white/90 backdrop-blur-xs rounded-full text-[#121212] hover:text-[#C2A684] transition-colors"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        wishlistIds.includes(item.id) ? "fill-[#C2A684] text-[#C2A684]" : ""
                      }`}
                    />
                  </button>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] uppercase tracking-wider text-[#888]">
                      {item.subcategory}
                    </span>
                    <span className="text-xs text-[#555] font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-[#C2A684] text-[#C2A684]" /> {item.rating}
                    </span>
                  </div>

                  <h4 className="font-serif-luxury text-2xl text-[#121212] font-normal mb-2 group-hover:text-[#C2A684] transition-colors">
                    {item.name}
                  </h4>

                  <p className="text-xs text-[#666] font-light mb-4 line-clamp-2">
                    {item.tagline}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-black/5">
                    <span className="text-xl font-serif-luxury text-[#121212]">
                      ₹{item.price.toLocaleString("en-IN")}
                    </span>
                    <button
                      onClick={() => onQuickView(item)}
                      className="text-xs uppercase tracking-widest text-[#C2A684] hover:text-[#121212] font-semibold transition-colors"
                    >
                      Explore →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
