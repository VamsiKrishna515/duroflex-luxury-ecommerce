import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ShieldCheck, CreditCard, QrCode, Building2, Truck, Lock, ArrowRight } from "lucide-react";

export function CheckoutModal({ isOpen, onClose, cartItems, totalAmount, onOrderComplete }) {
  if (!isOpen) return null;

  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Confirmation
  const [formData, setFormData] = useState({
    fullName: "Vamsi Krishna",
    email: "vamsi.krishna@example.com",
    phone: "+91 98765 43210",
    pincode: "400050",
    address: "Flat 402, Signature Towers, Linking Road",
    city: "Mumbai",
    state: "Maharashtra",
    paymentMethod: "upi"
  });

  const [orderId, setOrderId] = useState("");

  const handlePincodeChange = (pin) => {
    setFormData((prev) => ({ ...prev, pincode: pin }));
    if (pin === "400050" || pin.startsWith("40")) {
      setFormData((prev) => ({ ...prev, city: "Mumbai", state: "Maharashtra" }));
    } else if (pin.startsWith("56")) {
      setFormData((prev) => ({ ...prev, city: "Bengaluru", state: "Karnataka" }));
    } else if (pin.startsWith("11")) {
      setFormData((prev) => ({ ...prev, city: "New Delhi", state: "Delhi" }));
    }
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const newId = "DF-2026-" + Math.floor(100000 + Math.random() * 900000);
    setOrderId(newId);
    setStep(3);
    onOrderComplete?.();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-3xl bg-[#FBF9F5] text-[#121212] rounded-xs shadow-2xl overflow-hidden border border-black/10 my-auto"
        >
          {/* Header */}
          <div className="p-6 bg-[#121212] text-white flex items-center justify-between border-b border-white/10">
            <div className="flex items-center space-x-3">
              <ShieldCheck className="w-5 h-5 text-[#C2A684]" />
              <span className="font-serif-luxury text-2xl tracking-wider uppercase">
                DUROFLEX CHECKOUT CONCIERGE
              </span>
            </div>
            <button onClick={onClose} className="p-1 hover:text-[#C2A684]">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Checkout Steps Progress */}
          <div className="flex items-center justify-between px-8 py-3 bg-[#F4F1EA] border-b border-black/5 text-xs font-mono">
            <span className={step >= 1 ? "text-[#C2A684] font-bold" : "text-gray-400"}>
              01 SHIPPING ADDRESS
            </span>
            <span>→</span>
            <span className={step >= 2 ? "text-[#C2A684] font-bold" : "text-gray-400"}>
              02 PAYMENT METHOD
            </span>
            <span>→</span>
            <span className={step === 3 ? "text-[#C2A684] font-bold" : "text-gray-400"}>
              03 CONFIRMATION
            </span>
          </div>

          {/* Form Content */}
          <div className="p-8">
            {step === 1 && (
              <form onSubmit={() => setStep(2)} className="space-y-4">
                <h3 className="font-serif-luxury text-2xl text-[#121212] mb-4">
                  White-Glove Shipping Address
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#666] block mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 text-xs bg-white border border-black/10 focus:border-[#C2A684] focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#666] block mb-1">
                      Mobile Phone (For Order Tracking)
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 text-xs bg-white border border-black/10 focus:border-[#C2A684] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#666] block mb-1">
                      Pincode
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={6}
                      value={formData.pincode}
                      onChange={(e) => handlePincodeChange(e.target.value)}
                      className="w-full px-4 py-3 text-xs bg-white border border-black/10 focus:border-[#C2A684] focus:outline-hidden font-mono font-bold"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#666] block mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 text-xs bg-white border border-black/10 focus:border-[#C2A684] focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#666] block mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-4 py-3 text-xs bg-white border border-black/10 focus:border-[#C2A684] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#666] block mb-1">
                    Street Address & House / Suite Number
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 text-xs bg-white border border-black/10 focus:border-[#C2A684] focus:outline-hidden"
                  />
                </div>

                <div className="pt-6 border-t border-black/10 flex items-center justify-between">
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Truck className="w-4 h-4 text-[#C2A684]" /> Free White-Glove Installation Included
                  </span>
                  <button
                    type="submit"
                    className="px-8 py-4 bg-[#121212] hover:bg-[#C2A684] text-white text-xs uppercase tracking-[0.25em] font-medium transition-colors flex items-center space-x-2"
                  >
                    <span>Continue to Payment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={handlePlaceOrder} className="space-y-6">
                <h3 className="font-serif-luxury text-2xl text-[#121212]">
                  Select Payment Method
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label
                    className={`p-4 border rounded-xs cursor-pointer flex items-center space-x-3 transition-all ${
                      formData.paymentMethod === "upi"
                        ? "border-[#C2A684] bg-white shadow-md"
                        : "border-black/10 bg-white/60"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={formData.paymentMethod === "upi"}
                      onChange={() => setFormData({ ...formData, paymentMethod: "upi" })}
                      className="accent-[#C2A684]"
                    />
                    <QrCode className="w-5 h-5 text-[#C2A684]" />
                    <div>
                      <span className="text-xs font-semibold block">Instant UPI / QR Code</span>
                      <span className="text-[10px] text-gray-500">Google Pay, PhonePe, Paytm</span>
                    </div>
                  </label>

                  <label
                    className={`p-4 border rounded-xs cursor-pointer flex items-center space-x-3 transition-all ${
                      formData.paymentMethod === "card"
                        ? "border-[#C2A684] bg-white shadow-md"
                        : "border-black/10 bg-white/60"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={formData.paymentMethod === "card"}
                      onChange={() => setFormData({ ...formData, paymentMethod: "card" })}
                      className="accent-[#C2A684]"
                    />
                    <CreditCard className="w-5 h-5 text-[#C2A684]" />
                    <div>
                      <span className="text-xs font-semibold block">Credit / Debit Card</span>
                      <span className="text-[10px] text-gray-500">Visa, Mastercard, Amex, RuPay</span>
                    </div>
                  </label>

                  <label
                    className={`p-4 border rounded-xs cursor-pointer flex items-center space-x-3 transition-all ${
                      formData.paymentMethod === "netbanking"
                        ? "border-[#C2A684] bg-white shadow-md"
                        : "border-black/10 bg-white/60"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={formData.paymentMethod === "netbanking"}
                      onChange={() => setFormData({ ...formData, paymentMethod: "netbanking" })}
                      className="accent-[#C2A684]"
                    />
                    <Building2 className="w-5 h-5 text-[#C2A684]" />
                    <div>
                      <span className="text-xs font-semibold block">Net Banking</span>
                      <span className="text-[10px] text-gray-500">HDFC, ICICI, SBI, Axis</span>
                    </div>
                  </label>

                  <label
                    className={`p-4 border rounded-xs cursor-pointer flex items-center space-x-3 transition-all ${
                      formData.paymentMethod === "cod"
                        ? "border-[#C2A684] bg-white shadow-md"
                        : "border-black/10 bg-white/60"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={formData.paymentMethod === "cod"}
                      onChange={() => setFormData({ ...formData, paymentMethod: "cod" })}
                      className="accent-[#C2A684]"
                    />
                    <Truck className="w-5 h-5 text-[#C2A684]" />
                    <div>
                      <span className="text-xs font-semibold block">Pay on Delivery</span>
                      <span className="text-[10px] text-gray-500">Pay after home setup</span>
                    </div>
                  </label>
                </div>

                <div className="p-4 bg-[#F4F1EA] border border-black/5 flex justify-between items-center text-xs">
                  <div>
                    <span className="text-gray-500 block">Total Payable Amount</span>
                    <span className="font-serif-luxury text-2xl font-semibold text-[#121212]">
                      ₹{totalAmount.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <span className="text-[11px] text-green-700 font-medium flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5" /> 256-Bit Encrypted Secure Checkout
                  </span>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-black/10">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs uppercase tracking-widest text-gray-500 hover:text-black"
                  >
                    ← Back to Address
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-4 bg-[#121212] hover:bg-[#C2A684] text-white text-xs uppercase tracking-[0.25em] font-medium transition-colors flex items-center space-x-2 shadow-xl"
                  >
                    <span>Place Order & Complete</span>
                    <CheckCircle2 className="w-4 h-4 text-[#C2A684]" />
                  </button>
                </div>
              </form>
            )}

            {step === 3 && (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-[#C2A684] text-white flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <span className="text-xs uppercase tracking-[0.3em] text-[#C2A684] font-semibold block mb-2">
                  Order Confirmed
                </span>
                <h3 className="font-serif-luxury text-4xl text-[#121212] font-normal mb-2">
                  THANK YOU, {formData.fullName.toUpperCase()}!
                </h3>
                <p className="text-xs text-gray-600 mb-6">
                  Your order reference is <strong className="font-mono text-black">{orderId}</strong>. A receipt confirmation SMS has been dispatched to {formData.phone}.
                </p>

                <div className="bg-white p-6 rounded-xs border border-black/10 text-left max-w-lg mx-auto mb-8 shadow-xs text-xs space-y-2">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-500">Shipping Address:</span>
                    <span className="font-medium text-right">{formData.address}, {formData.city} ({formData.pincode})</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-500">Payment Status:</span>
                    <span className="font-semibold text-green-700">Verified & Approved</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-gray-500">Estimated White-Glove Delivery:</span>
                    <span className="font-semibold text-[#121212]">Within 3 Business Days</span>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="px-8 py-4 bg-[#121212] hover:bg-[#C2A684] text-white text-xs uppercase tracking-[0.25em] font-medium transition-colors"
                >
                  Return to Sanctuary Catalog
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
