import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS_DATA = [
  {
    quote: "The difference is something you feel every morning. My chronic lumbar pain cleared up within the first week on the Duropedic Wave Plus.",
    name: "Dr. Vikramaditya Sharma",
    location: "Bandra West, Mumbai",
    product: "Duropedic Wave Plus King",
    rating: 5
  },
  {
    quote: "Entering our bedroom now feels like stepping into a 5-star Kyoto boutique hotel. The Haven bedstead craftsmanship is flawless.",
    name: "Ananya & Rohan Mehta",
    location: "Indiranagar, Bengaluru",
    product: "The Haven Velvet Bedstead",
    rating: 5
  },
  {
    quote: "Zero partner motion disturbance is real. My husband turns during sleep and I don't feel a single vibration on the Balance Latex.",
    name: "Kavita Reddy",
    location: "Jubilee Hills, Hyderabad",
    product: "Balance Natural Latex Mattress",
    rating: 5
  }
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const current = TESTIMONIALS_DATA[active];

  return (
    <section className="py-32 md:py-44 px-6 md:px-12 bg-[#F6F2EC] border-b border-black/5 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative">
        <span className="text-xs uppercase tracking-[0.35em] text-[#C2A684] font-semibold mb-8 block">
          Client Stories & Reviews
        </span>

        <div className="min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C2A684] text-[#C2A684]" />
                ))}
              </div>

              <blockquote className="font-serif-luxury text-2xl sm:text-4xl md:text-5xl font-light text-[#121212] leading-tight mb-8 italic">
                "{current.quote}"
              </blockquote>

              <div>
                <span className="text-base font-semibold text-[#121212] block">
                  {current.name}
                </span>
                <span className="text-xs text-[#888] uppercase tracking-wider">
                  {current.location} • Verified Buyer of {current.product}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimal Indicators */}
        <div className="flex items-center justify-center space-x-4 mt-12">
          <button
            onClick={() =>
              setActive((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1))
            }
            className="p-2 border border-black/10 hover:border-black rounded-full transition-colors"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-4 h-4 text-[#121212]" />
          </button>
          <div className="flex space-x-2">
            {TESTIMONIALS_DATA.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 transition-all duration-300 ${
                  i === active ? "w-8 bg-[#C2A684]" : "w-2 bg-black/20"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() =>
              setActive((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1))
            }
            className="p-2 border border-black/10 hover:border-black rounded-full transition-colors"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-4 h-4 text-[#121212]" />
          </button>
        </div>
      </div>
    </section>
  );
}
