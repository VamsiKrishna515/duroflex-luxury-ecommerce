import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const FAQS = [
  {
    q: "How does the 100-Night In-Home Trial work?",
    a: "We believe it takes at least 3 to 4 weeks for your spinal posture to acclimate to targeted 5-zone orthopaedic support. Try any Duroflex mattress in your sanctuary for 100 nights. If you are not completely satisfied with your sleep, our concierge team will arrange a 100% full refund and free pickup."
  },
  {
    q: "What is White-Glove Home Delivery & Assembly?",
    a: "Every Duroflex order includes complimentary white-glove delivery. Our logistics team will unbox your mattress, set up your solid wood bedstead in your designated bedroom, carry away packaging materials, and leave your space pristine."
  },
  {
    q: "Can I order custom architectural dimensions for bespoke bed frames?",
    a: "Yes! If you have a custom circular, extra-long, or non-standard imported bed frame, click on any mattress and select 'Custom Architecture' size. Our master craftsmen can construct mattresses to any millimeter precision."
  },
  {
    q: "What makes Duropedic doctor recommended?",
    a: "Duropedic is India's only orthopaedic mattress range tested and endorsed by the National Health Academy doctors. Its 5-zone ergonomic contouring applies distinct counter-pressures to prevent spinal sag."
  },
  {
    q: "What warranty coverage is included?",
    a: "All Duroflex mattresses come with a 10-Year Manufacturer Warranty covering sag depth, foam resilience, and core structural integrity."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-28 md:py-40 px-6 md:px-12 bg-[#FBF9F5] border-b border-black/5">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-[#C2A684] mb-3">
            <HelpCircle className="w-4 h-4" />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#121212]">
            CLIENT CONCIERGE FAQ
          </h2>
        </div>

        {/* Accordion Items */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = idx === openIndex;
            return (
              <div
                key={faq.q}
                className={`border rounded-xs transition-all duration-300 ${
                  isOpen ? "bg-white border-[#C2A684] shadow-md" : "bg-white/60 border-black/10 hover:bg-white"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4"
                >
                  <span className="font-serif-luxury text-xl sm:text-2xl text-[#121212] font-normal">
                    {faq.q}
                  </span>
                  <div className={`p-1 rounded-full transition-transform ${isOpen ? "bg-[#C2A684] text-white" : "bg-black/5 text-[#121212]"}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pt-0 text-xs sm:text-sm text-[#555] font-light leading-relaxed border-t border-black/5 mt-2"
                    >
                      <p className="pt-4">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
