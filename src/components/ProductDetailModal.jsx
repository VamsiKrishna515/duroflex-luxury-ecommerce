import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, ShoppingBag, Heart, ShieldCheck, Truck, RefreshCw, Check } from "lucide-react";

export function ProductDetailModal({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted
}) {
  if (!product) return null;

  const [activeImg, setActiveImg] = useState(product.image);
  const [selectedSize, setSelectedSize] = useState(
    product.sizes ? product.sizes[0] : "Standard"
  );
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart({ ...product, selectedSize });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-4xl bg-[#FBF9F5] text-[#121212] rounded-xs shadow-2xl overflow-hidden border border-black/10 my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-white/80 backdrop-blur-xs rounded-full hover:bg-white transition-colors"
          >
            <X className="w-6 h-6 text-[#121212]" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
            {/* LEFT: Image Gallery (6 Columns) */}
            <div className="md:col-span-6 bg-[#F4F1EA] p-6 md:p-8 flex flex-col justify-between">
              <div className="relative h-72 md:h-96 rounded-xs overflow-hidden mb-4 bg-black/5">
                <img
                  src={activeImg}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <span className="absolute top-4 left-4 bg-[#121212] text-white text-[10px] tracking-widest uppercase px-3 py-1 font-medium">
                  {product.badge || product.category}
                </span>
              </div>

              {/* Gallery Thumbnails */}
              {product.gallery && product.gallery.length > 1 && (
                <div className="flex space-x-3 overflow-x-auto pb-2">
                  {product.gallery.map((imgUrl, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(imgUrl)}
                      className={`w-16 h-16 shrink-0 rounded-xs overflow-hidden border-2 transition-all ${
                        activeImg === imgUrl
                          ? "border-[#C2A684] scale-105"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img src={imgUrl} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT: Product Details & Purchase Actions (6 Columns) */}
            <div className="md:col-span-6 p-6 md:p-8 bg-white flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-widest text-[#C2A684] font-semibold">
                    {product.subcategory || product.category}
                  </span>
                  <div className="flex items-center space-x-1 text-xs text-[#555]">
                    <Star className="w-4 h-4 fill-[#C2A684] text-[#C2A684]" />
                    <span className="font-semibold">{product.rating}</span>
                    <span>({product.reviewsCount} reviews)</span>
                  </div>
                </div>

                <h2 className="font-serif-luxury text-3xl md:text-4xl text-[#121212] font-normal mb-3">
                  {product.name}
                </h2>

                <p className="text-xs md:text-sm text-[#666] font-light leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline space-x-3 mb-6 p-4 bg-[#FBF9F5] border border-black/5">
                  <span className="text-3xl font-serif-luxury font-semibold text-[#121212]">
                    ₹{product.price.toLocaleString("en-IN")}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      ₹{product.originalPrice.toLocaleString("en-IN")}
                    </span>
                  )}
                  <span className="text-xs text-green-700 font-medium ml-auto">
                    Inclusive of all taxes
                  </span>
                </div>

                {/* Firmness indicator if applicable */}
                {product.firmness && (
                  <div className="mb-6">
                    <span className="text-xs text-[#888] uppercase tracking-wider block mb-1">
                      Firmness Index: <strong className="text-[#121212]">{product.firmness}</strong>
                    </span>
                  </div>
                )}

                {/* Size Selector */}
                {product.sizes && (
                  <div className="mb-6">
                    <span className="text-xs text-[#888] uppercase tracking-wider block mb-2">
                      Select Architectural Size:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((sz) => (
                        <button
                          key={sz}
                          onClick={() => setSelectedSize(sz)}
                          className={`text-xs px-3.5 py-2 border transition-all ${
                            selectedSize === sz
                              ? "border-[#121212] bg-[#121212] text-white font-medium"
                              : "border-gray-200 text-[#555] hover:border-gray-400"
                          }`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Feature Bullet Points */}
                {product.features && (
                  <div className="mb-6 space-y-1.5 border-t border-black/5 pt-4">
                    {product.features.map((f) => (
                      <div key={f} className="flex items-center space-x-2 text-xs text-[#555]">
                        <Check className="w-3.5 h-3.5 text-[#C2A684]" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Actions Footer */}
              <div className="space-y-3 pt-6 border-t border-black/10">
                <div className="flex space-x-3">
                  <button
                    onClick={handleAdd}
                    className="grow py-4 bg-[#121212] hover:bg-[#C2A684] text-white text-xs uppercase tracking-[0.25em] font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>{added ? "Added to Cart ✓" : "Add to Shopping Bag"}</span>
                  </button>

                  <button
                    onClick={() => onToggleWishlist(product)}
                    className="p-4 border border-black/20 hover:border-black text-[#121212] hover:text-[#C2A684] transition-colors"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        isWishlisted ? "fill-[#C2A684] text-[#C2A684]" : ""
                      }`}
                    />
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-2 text-[10px] text-center text-[#777] pt-2">
                  <div className="flex items-center justify-center space-x-1">
                    <Truck className="w-3.5 h-3.5 text-[#C2A684]" />
                    <span>Free Home Delivery</span>
                  </div>
                  <div className="flex items-center justify-center space-x-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C2A684]" />
                    <span>10-Yr Warranty</span>
                  </div>
                  <div className="flex items-center justify-center space-x-1">
                    <RefreshCw className="w-3.5 h-3.5 text-[#C2A684]" />
                    <span>100-Night Trial</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
