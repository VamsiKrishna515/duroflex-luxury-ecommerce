import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Star, ShoppingBag } from "lucide-react";
import { PRODUCTS } from "../data/products";

export function CompareModal({ isOpen, onClose, onAddToCart }) {
  if (!isOpen) return null;

  const compareItems = PRODUCTS.filter((p) => p.category === "mattresses");

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
          className="relative z-10 w-full max-w-5xl bg-[#FBF9F5] text-[#121212] rounded-xs shadow-2xl overflow-hidden border border-black/10 my-auto"
        >
          {/* Modal Header */}
          <div className="p-6 bg-[#121212] text-white flex items-center justify-between border-b border-white/10">
            <span className="font-serif-luxury text-2xl tracking-wider uppercase">
              MATTRESS SPECIFICATION COMPARISON
            </span>
            <button onClick={onClose} className="p-1 hover:text-[#C2A684]">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6 md:p-8 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-black/10">
                  <th className="p-4 text-xs font-mono uppercase tracking-widest text-gray-500 w-1/4">
                    Technical Attribute
                  </th>
                  {compareItems.map((item) => (
                    <th key={item.id} className="p-4 w-1/4 text-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover mx-auto rounded-xs mb-2"
                      />
                      <h4 className="font-serif-luxury text-xl font-normal text-[#121212]">
                        {item.name}
                      </h4>
                      <span className="text-xs font-serif-luxury text-[#C2A684] block font-semibold">
                        ₹{item.price.toLocaleString("en-IN")}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5 text-xs text-[#444]">
                <tr>
                  <td className="p-4 font-semibold text-[#121212]">Firmness Index</td>
                  {compareItems.map((item) => (
                    <td key={item.id} className="p-4 text-center">
                      {item.firmness}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#121212]">Spinal Alignment Support</td>
                  {compareItems.map((item) => (
                    <td key={item.id} className="p-4 text-center">
                      <span className="inline-flex items-center text-green-700 gap-1 font-medium">
                        <Check className="w-3.5 h-3.5" /> 5-Zone Contouring
                      </span>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#121212]">Thermoregulation Layer</td>
                  {compareItems.map((item) => (
                    <td key={item.id} className="p-4 text-center">
                      CoolGel™ Phase-Change Mesh
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#121212]">Motion Disturbance</td>
                  {compareItems.map((item) => (
                    <td key={item.id} className="p-4 text-center">
                      Zero Partner Motion Isolation
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#121212]">Doctor Recommendation</td>
                  {compareItems.map((item) => (
                    <td key={item.id} className="p-4 text-center">
                      <div className="flex items-center justify-center space-x-1">
                        <Star className="w-3.5 h-3.5 fill-[#C2A684] text-[#C2A684]" />
                        <span className="font-semibold">{item.rating} / 5.0</span>
                      </div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#121212]">Warranty Coverage</td>
                  {compareItems.map((item) => (
                    <td key={item.id} className="p-4 text-center font-semibold text-[#121212]">
                      10 Years Full Warranty
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#121212]">Action</td>
                  {compareItems.map((item) => (
                    <td key={item.id} className="p-4 text-center">
                      <button
                        onClick={() => {
                          onAddToCart(item);
                          onClose();
                        }}
                        className="px-4 py-2 bg-[#121212] hover:bg-[#C2A684] text-white text-[11px] uppercase tracking-wider font-medium transition-colors inline-flex items-center space-x-1.5"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Add to Bag</span>
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
