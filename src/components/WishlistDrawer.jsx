import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, ShoppingBag, Trash2 } from "lucide-react";
import { PRODUCTS } from "../data/products";

export function WishlistDrawer({
  isOpen,
  onClose,
  wishlistIds,
  onRemoveWishlist,
  onAddToCart
}) {
  const wishlistProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs"
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-[#FBF9F5] text-[#121212] flex flex-col shadow-2xl border-l border-black/10"
          >
            <div className="p-6 border-b border-black/10 flex items-center justify-between bg-white">
              <div className="flex items-center space-x-3">
                <Heart className="w-5 h-5 text-[#C2A684] fill-[#C2A684]" />
                <span className="font-serif-luxury text-2xl tracking-wider text-[#121212]">
                  SAVED WISHLIST ({wishlistProducts.length})
                </span>
              </div>
              <button onClick={onClose} className="p-1 text-[#888] hover:text-[#121212]">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grow overflow-y-auto p-6 space-y-6">
              {wishlistProducts.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <Heart className="w-12 h-12 text-[#C2A684] opacity-40 mb-4 stroke-[1]" />
                  <span className="font-serif-luxury text-2xl text-[#121212] mb-2">
                    Your Wishlist is Empty
                  </span>
                  <p className="text-xs text-[#888] max-w-xs leading-relaxed">
                    Save your favorite mattresses, bedsteads, and curved sofas for future consideration.
                  </p>
                </div>
              ) : (
                wishlistProducts.map((item) => (
                  <div
                    key={item.id}
                    className="flex space-x-4 bg-white p-4 rounded-xs border border-black/5 shadow-xs"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-xs bg-[#F4F1EA]"
                    />
                    <div className="grow flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between">
                          <h4 className="font-serif-luxury text-lg text-[#121212] font-normal leading-snug">
                            {item.name}
                          </h4>
                          <button
                            onClick={() => onRemoveWishlist(item.id)}
                            className="text-gray-400 hover:text-red-500 p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="text-xs font-serif-luxury text-[#121212] block">
                          ₹{item.price.toLocaleString("en-IN")}
                        </span>
                      </div>

                      <button
                        onClick={() => {
                          onAddToCart(item);
                          onRemoveWishlist(item.id);
                        }}
                        className="mt-3 py-2 px-4 bg-[#121212] hover:bg-[#C2A684] text-white text-[11px] uppercase tracking-wider font-medium transition-colors flex items-center justify-center space-x-2"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Move to Bag</span>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
