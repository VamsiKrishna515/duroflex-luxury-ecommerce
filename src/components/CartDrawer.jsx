import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, Plus, Minus, ShoppingBag, ShieldCheck, ArrowRight } from "lucide-react";

export function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckoutSuccess
}) {
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const freeShippingThreshold = 25000;
  const progressPercent = Math.min(
    100,
    (subtotal / freeShippingThreshold) * 100
  );

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.toUpperCase() === "DUROFLEX10") {
      setDiscount(0.1);
    } else if (promoCode.toUpperCase() === "LUXURY20") {
      setDiscount(0.2);
    } else {
      alert("Invalid promo code. Try DUROFLEX10 or LUXURY20");
    }
  };

  const finalTotal = subtotal * (1 - discount);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-[#FBF9F5] text-[#121212] flex flex-col shadow-2xl border-l border-black/10"
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-black/10 flex items-center justify-between bg-white">
              <div className="flex items-center space-x-3">
                <ShoppingBag className="w-5 h-5 text-[#C2A684]" />
                <span className="font-serif-luxury text-2xl tracking-wider text-[#121212]">
                  YOUR SHOPPING BAG ({cartItems.reduce((a, b) => a + b.quantity, 0)})
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1 text-[#888] hover:text-[#121212] transition-colors"
                aria-label="Close Cart"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Free Shipping Progress */}
            <div className="bg-[#F4F1EA] p-4 border-b border-black/5 text-xs">
              {subtotal >= freeShippingThreshold ? (
                <div className="flex items-center space-x-2 text-[#C2A684] font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  <span>You have unlocked complimentary White-Glove Home Delivery!</span>
                </div>
              ) : (
                <div>
                  <span className="text-[#555]">
                    Add ₹{(freeShippingThreshold - subtotal).toLocaleString("en-IN")} more for complimentary White-Glove Delivery.
                  </span>
                  <div className="w-full h-1.5 bg-gray-200 rounded-full mt-2 overflow-hidden">
                    <div
                      className="h-full bg-[#C2A684] transition-all duration-500"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Cart Items List */}
            <div className="grow overflow-y-auto p-6 space-y-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <ShoppingBag className="w-12 h-12 text-[#C2A684] opacity-40 mb-4 stroke-[1]" />
                  <span className="font-serif-luxury text-2xl text-[#121212] mb-2">
                    Your bag is empty
                  </span>
                  <p className="text-xs text-[#888] max-w-xs leading-relaxed mb-6">
                    Discover doctor-recommended mattresses, handcrafted bedsteads, and curved sofas.
                  </p>
                  <button
                    onClick={onClose}
                    className="px-6 py-3 bg-[#121212] text-white text-xs uppercase tracking-widest hover:bg-[#C2A684] transition-colors"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={`${item.id}-${item.selectedSize}`}
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
                            onClick={() => onRemoveItem(item.id, item.selectedSize)}
                            className="text-gray-400 hover:text-red-500 p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="text-[11px] text-[#888] block">
                          Size: {item.selectedSize || "Standard"}
                        </span>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-black/10 rounded-xs">
                          <button
                            onClick={() =>
                              onUpdateQuantity(
                                item.id,
                                item.selectedSize,
                                item.quantity - 1
                              )
                            }
                            className="p-1 hover:bg-gray-100 text-xs"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-3 text-xs font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              onUpdateQuantity(
                                item.id,
                                item.selectedSize,
                                item.quantity + 1
                              )
                            }
                            className="p-1 hover:bg-gray-100 text-xs"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <span className="font-serif-luxury text-base text-[#121212]">
                          ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Cart Footer & Checkout */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-black/10 bg-white space-y-4">
                {/* Promo Code Input */}
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Promo code (DUROFLEX10)"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="grow px-3 py-2 text-xs border border-black/10 uppercase focus:outline-hidden focus:border-[#C2A684]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-black/5 hover:bg-black/10 text-xs font-medium uppercase tracking-wider text-[#121212]"
                  >
                    Apply
                  </button>
                </form>

                {discount > 0 && (
                  <div className="flex justify-between text-xs text-[#C2A684]">
                    <span>Discount ({(discount * 100).toFixed(0)}%)</span>
                    <span>-₹{(subtotal * discount).toLocaleString("en-IN")}</span>
                  </div>
                )}

                <div className="flex justify-between items-baseline pt-2 border-t border-black/5">
                  <span className="text-xs uppercase tracking-widest text-[#888]">
                    Estimated Total
                  </span>
                  <span className="font-serif-luxury text-3xl text-[#121212] font-semibold">
                    ₹{finalTotal.toLocaleString("en-IN")}
                  </span>
                </div>

                <button
                  onClick={() => {
                    setIsCheckingOut(true);
                    setTimeout(() => {
                      setIsCheckingOut(false);
                      onCheckoutSuccess?.();
                      onClose();
                    }, 1200);
                  }}
                  disabled={isCheckingOut}
                  className="w-full py-4 bg-[#121212] hover:bg-[#C2A684] text-white text-xs uppercase tracking-[0.25em] font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <span>{isCheckingOut ? "Processing..." : "Proceed to Checkout"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
