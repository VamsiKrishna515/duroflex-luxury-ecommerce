import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, Star, ShoppingBag, Heart, ShieldCheck, Truck, RefreshCw,
  Check, ChevronLeft, ChevronRight, ZoomIn, Award, Leaf
} from "lucide-react";

export function ProductDetailModal({
  product, onClose, onAddToCart, onToggleWishlist, isWishlisted
}) {
  const [activeImg, setActiveImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState(
    product?.sizes ? product.sizes[0] : "Standard"
  );
  const [added, setAdded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  if (!product) return null;

  const images = product.images || (product.image ? [product.image] : []);
  const currentImg = images[activeImg] || product.image;

  const handleAdd = () => {
    onAddToCart({ ...product, selectedSize });
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "materials", label: "Materials" },
    { id: "specs", label: "Specifications" },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 24 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-5xl bg-[#FBF9F5] text-[#1C1917] shadow-2xl overflow-hidden border border-black/8 my-auto"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-sm"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-[#1C1917]" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 max-h-[88vh] overflow-y-auto">
            {/* LEFT: Gallery */}
            <div className="bg-[#F4F1EA] p-6 md:p-8 flex flex-col gap-4">
              {/* Main Image */}
              <div className="relative aspect-[4/3] md:aspect-square overflow-hidden rounded-xs bg-[#E8E0D5] group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImg}
                    src={currentImg}
                    alt={product.name}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-[#1C1917] text-white text-[10px] tracking-widest uppercase px-3 py-1 font-medium">
                    {product.badge}
                  </span>
                )}
                {/* Nav arrows */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={() => setActiveImg(Math.max(0, activeImg - 1))}
                      disabled={activeImg === 0}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-30"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setActiveImg(Math.min(images.length - 1, activeImg + 1))}
                      disabled={activeImg === images.length - 1}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-30"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className={`w-16 h-16 shrink-0 rounded-xs overflow-hidden border-2 transition-all ${
                        i === activeImg ? "border-[#C2A684] scale-105" : "border-transparent opacity-60 hover:opacity-90"
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-2 mt-auto">
                {[
                  { icon: RefreshCw, text: product.trialPeriod || "100-Night Trial" },
                  { icon: ShieldCheck, text: product.warranty || "10-Year Warranty" },
                  { icon: Truck, text: "Free Home Delivery" },
                  { icon: Award, text: "Doctor Endorsed" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 bg-white/60 rounded-xs p-2">
                    <Icon className="w-4 h-4 text-[#C2A684] shrink-0" strokeWidth={1.5} />
                    <span className="text-[10px] text-[#6B6259] leading-tight">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Product Info */}
            <div className="bg-white p-6 md:p-8 flex flex-col">
              {/* Category + Rating */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C2A684] font-semibold">
                  {product.subcategory || product.category}
                </span>
                <div className="flex items-center gap-1 text-xs text-[#6B6259]">
                  <Star className="w-3.5 h-3.5 fill-[#C2A684] text-[#C2A684]" />
                  <span className="font-semibold text-[#1C1917]">{product.rating}</span>
                  <span>({product.reviewsCount} reviews)</span>
                </div>
              </div>

              <h2 className="font-serif-luxury text-3xl md:text-4xl text-[#1C1917] font-normal mb-1">
                {product.name}
              </h2>

              {product.tagline && (
                <p className="text-sm text-[#6B6259] italic mb-4">{product.tagline}</p>
              )}

              {/* Price */}
              <div className="flex items-baseline gap-3 py-4 px-4 bg-[#F6F2EC] border border-black/5 mb-5">
                <span className="font-serif-luxury text-3xl font-semibold text-[#1C1917]">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-[#6B6259] line-through">
                    ₹{product.originalPrice.toLocaleString("en-IN")}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="ml-auto text-xs font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded">
                    Save ₹{(product.originalPrice - product.price).toLocaleString("en-IN")}
                  </span>
                )}
              </div>

              {/* Tabs */}
              <div className="flex gap-0 border-b border-black/8 mb-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2.5 text-xs uppercase tracking-wider font-medium border-b-2 transition-all -mb-px ${
                      activeTab === tab.id
                        ? "border-[#C2A684] text-[#1C1917]"
                        : "border-transparent text-[#6B6259] hover:text-[#1C1917]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="flex-1 overflow-y-auto mb-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    {activeTab === "overview" && (
                      <div className="space-y-4">
                        <p className="text-sm text-[#6B6259] leading-relaxed">
                          {product.description}
                        </p>
                        {product.features && (
                          <div className="space-y-2">
                            {product.features.map((f) => (
                              <div key={f} className="flex items-start gap-2 text-xs text-[#555]">
                                <Check className="w-3.5 h-3.5 text-[#C2A684] mt-0.5 shrink-0" />
                                <span>{f}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        {product.suitableFor && (
                          <div>
                            <p className="text-[10px] uppercase tracking-wider text-[#6B6259] mb-1.5">Best For</p>
                            <div className="flex flex-wrap gap-1.5">
                              {product.suitableFor.map((s) => (
                                <span key={s} className="text-[10px] px-2.5 py-1 bg-[#F6F2EC] border border-black/6 text-[#555]">
                                  {s}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {activeTab === "materials" && (
                      <div className="space-y-3">
                        {(product.materials || ["Premium Memory Foam", "Organic Cotton Cover", "High-Density Support Core"]).map((m) => (
                          <div key={m} className="flex items-center gap-3 p-3 bg-[#F6F2EC] border border-black/5">
                            <Leaf className="w-4 h-4 text-[#C2A684] shrink-0" strokeWidth={1.5} />
                            <span className="text-sm text-[#555]">{m}</span>
                          </div>
                        ))}
                        {product.technologies && (
                          <div className="mt-4">
                            <p className="text-[10px] uppercase tracking-wider text-[#6B6259] mb-2">Technologies</p>
                            {product.technologies.map((t) => (
                              <div key={t} className="flex items-center gap-3 p-3 bg-white border border-black/5 mb-1.5">
                                <ShieldCheck className="w-4 h-4 text-[#C2A684] shrink-0" strokeWidth={1.5} />
                                <span className="text-sm text-[#555]">{t}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {activeTab === "specs" && (
                      <div className="space-y-2 text-xs">
                        {[
                          ["Firmness", product.firmness || "Medium Firm"],
                          ["Trial Period", product.trialPeriod || "100 Nights"],
                          ["Warranty", product.warranty || "10 Years"],
                          ["Category", product.category],
                          ...(product.dimensions ? [
                            ["Thickness", product.dimensions.thickness],
                            ["Weight", product.dimensions.weight],
                          ] : []),
                        ].map(([key, val]) => val && (
                          <div key={key} className="flex justify-between py-2.5 border-b border-black/5">
                            <span className="text-[#6B6259]">{key}</span>
                            <span className="font-medium text-[#1C1917]">{val}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Firmness + Size */}
              {product.firmness && (
                <div className="mb-4">
                  <p className="text-[10px] uppercase tracking-wider text-[#6B6259] mb-1">
                    Firmness: <span className="font-semibold text-[#1C1917]">{product.firmness}</span>
                  </p>
                </div>
              )}

              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-5">
                  <p className="text-[10px] uppercase tracking-wider text-[#6B6259] mb-2">Select Size</p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setSelectedSize(sz)}
                        className={`text-xs px-3.5 py-2 border transition-all font-medium ${
                          selectedSize === sz
                            ? "border-[#1C1917] bg-[#1C1917] text-white"
                            : "border-[#E8E0D5] text-[#6B6259] hover:border-[#1C1917] hover:text-[#1C1917]"
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 mt-auto">
                <motion.button
                  onClick={handleAdd}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 py-4 bg-[#1C1917] hover:bg-[#C2A684] text-white text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center gap-2.5"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{added ? "Added to Bag ✓" : "Add to Bag"}</span>
                </motion.button>

                <motion.button
                  onClick={() => onToggleWishlist(product)}
                  whileTap={{ scale: 0.95 }}
                  className={`p-4 border transition-all duration-300 ${
                    isWishlisted
                      ? "border-[#C2A684] bg-[#C2A684] text-white"
                      : "border-[#E8E0D5] text-[#6B6259] hover:border-[#C2A684] hover:text-[#C2A684]"
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? "fill-white" : ""}`} strokeWidth={1.5} />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
