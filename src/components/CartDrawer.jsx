import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, ShoppingBag, Trash2, Plus, Minus,
  ShieldCheck, Truck, RefreshCw, Tag, Lock, ArrowRight
} from "lucide-react";

export function CartDrawer({
  isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onCheckoutSuccess
}) {
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [promoError, setPromoError] = useState("");

  const PROMO_CODES = {
    "DUROFLEX10": { discount: 0.10, label: "10% Off Applied" },
    "LUXURY20": { discount: 0.20, label: "20% Off Applied" },
    "SLEEP15": { discount: 0.15, label: "15% Off Applied" },
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = appliedPromo ? subtotal * appliedPromo.discount : 0;
  const finalTotal = subtotal - discount;
  const totalQty = cartItems.reduce((a, b) => a + b.quantity, 0);
  const freeShippingAt = 25000;
  const remaining = Math.max(0, freeShippingAt - subtotal);
  const progress = Math.min(100, (subtotal / freeShippingAt) * 100);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    const upper = promoCode.trim().toUpperCase();
    if (PROMO_CODES[upper]) {
      setAppliedPromo(PROMO_CODES[upper]);
      setPromoError("");
    } else {
      setPromoError("Invalid code. Try DUROFLEX10, LUXURY20, or SLEEP15.");
      setAppliedPromo(null);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-[420px] bg-[#FBF9F5] flex flex-col shadow-2xl border-l border-black/8"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 bg-white border-b border-black/8">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-[#C2A684]" strokeWidth={1.5} />
                <div>
                  <span className="font-serif-luxury text-xl tracking-wider text-[#1C1917]">
                    YOUR BAG
                  </span>
                  <span className="text-[11px] text-[#6B6259] ml-2">
                    {totalQty} {totalQty === 1 ? "item" : "items"}
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-black/5 text-[#6B6259] hover:text-[#1C1917] transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress */}
            <div className="px-6 py-3 bg-[#F6F2EC] border-b border-black/5">
              {remaining === 0 ? (
                <p className="text-xs text-green-700 font-medium flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  Complimentary White-Glove Delivery unlocked!
                </p>
              ) : (
                <>
                  <p className="text-[11px] text-[#6B6259] mb-1.5">
                    Add <span className="font-semibold text-[#1C1917]">₹{remaining.toLocaleString("en-IN")}</span> more for free delivery
                  </p>
                  <div className="w-full h-1 bg-[#E8E0D5] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#C2A684] to-[#D4AF37]"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                  </div>
                </>
              )}
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <ShoppingBag className="w-16 h-16 text-[#C2A684] opacity-30 mb-5" strokeWidth={1} />
                  <p className="font-serif-luxury text-2xl text-[#1C1917] mb-2">Your bag is empty</p>
                  <p className="text-sm text-[#6B6259] max-w-xs leading-relaxed mb-6">
                    Discover our collection of orthopaedic mattresses and architectural bedroom furniture.
                  </p>
                  <button
                    onClick={onClose}
                    className="px-6 py-3 bg-[#1C1917] text-white text-xs uppercase tracking-widest hover:bg-[#C2A684] transition-colors"
                  >
                    Explore Collection
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <motion.div
                    key={`${item.id}-${item.selectedSize}`}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 40 }}
                    className="bg-white rounded-xs border border-black/6 p-4 flex gap-4 shadow-xs"
                  >
                    <div className="w-20 h-20 rounded-xs overflow-hidden bg-[#F4F1EA] shrink-0">
                      <img
                        src={item.image || (item.images && item.images[0])}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-[10px] text-[#C2A684] uppercase tracking-wider font-medium mb-0.5">
                            {item.subcategory || item.category}
                          </p>
                          <h4 className="font-serif-luxury text-base text-[#1C1917] leading-tight">
                            {item.name}
                          </h4>
                          {item.selectedSize && (
                            <p className="text-[11px] text-[#6B6259] mt-0.5">
                              Size: {item.selectedSize}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.id, item.selectedSize)}
                          className="text-[#6B6259] hover:text-red-500 p-1 -mr-1 transition-colors shrink-0"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-black/10 rounded-xs">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center hover:bg-black/5 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center hover:bg-black/5 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-serif-luxury text-base font-semibold text-[#1C1917]">
                          ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-black/8 bg-white p-6 space-y-4">
                {/* Promo Code */}
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <div className="flex-1 relative">
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#C2A684]" />
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => { setPromoCode(e.target.value); setPromoError(""); }}
                      placeholder="Promo code"
                      className="w-full pl-8 pr-3 py-2.5 text-xs border border-black/10 focus:border-[#C2A684] focus:outline-none bg-[#FBF9F5] uppercase tracking-wider"
                    />
                  </div>
                  <button type="submit" className="px-4 py-2.5 bg-[#1C1917] text-white text-xs uppercase tracking-widest hover:bg-[#C2A684] transition-colors">
                    Apply
                  </button>
                </form>
                {promoError && <p className="text-[11px] text-red-500">{promoError}</p>}
                {appliedPromo && (
                  <p className="text-[11px] text-green-700 font-medium flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> {appliedPromo.label}
                  </p>
                )}

                {/* Totals */}
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-[#6B6259]">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString("en-IN")}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-700">
                      <span>Discount</span>
                      <span>-₹{discount.toLocaleString("en-IN")}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-[#6B6259]">
                    <span>Delivery</span>
                    <span className="text-green-700 font-medium">{remaining === 0 ? "Free" : "Calculated at checkout"}</span>
                  </div>
                </div>

                <div className="flex justify-between items-baseline pt-3 border-t border-black/6">
                  <span className="text-xs uppercase tracking-widest text-[#6B6259]">Total</span>
                  <span className="font-serif-luxury text-2xl font-semibold text-[#1C1917]">
                    ₹{finalTotal.toLocaleString("en-IN")}
                  </span>
                </div>

                <button
                  onClick={onCheckoutSuccess}
                  className="w-full py-4 bg-[#1C1917] hover:bg-[#C2A684] text-white text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="grid grid-cols-3 gap-2 pt-1">
                  {[
                    { icon: Truck, label: "Free Delivery" },
                    { icon: ShieldCheck, label: "10-Yr Warranty" },
                    { icon: RefreshCw, label: "100-Night Trial" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex flex-col items-center gap-1 text-center">
                      <Icon className="w-4 h-4 text-[#C2A684]" strokeWidth={1.5} />
                      <span className="text-[9px] text-[#6B6259] leading-tight">{label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#6B6259]">
                  <Lock className="w-3 h-3" />
                  <span>256-bit SSL Encrypted Checkout</span>
                </div>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
