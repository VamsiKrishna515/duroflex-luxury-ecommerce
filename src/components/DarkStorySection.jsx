import React from "react";
import { motion } from "framer-motion";

export function DarkStorySection() {
  const statements = [
    "Designed for targeted orthopaedic support.",
    "Built for weightless contouring comfort.",
    "Made for energizing, better mornings."
  ];

  return (
    <section className="py-32 md:py-48 px-6 md:px-12 bg-[#121110] text-white border-b border-white/10 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light uppercase tracking-tight mb-16 text-white"
        >
          A BETTER WAY <span className="italic font-normal text-[#C2A684]">TO SLEEP.</span>
        </motion.h2>

        {/* Progressive Statement Line Reveals */}
        <div className="flex flex-col space-y-8 md:space-y-12">
          {statements.map((stmt, idx) => (
            <motion.div
              key={stmt}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: idx * 0.2 }}
              className="flex items-center justify-center space-x-4"
            >
              <div className="hidden sm:block w-12 h-[1px] bg-[#C2A684]" />
              <p className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl text-white/80 font-light tracking-wide italic">
                "{stmt}"
              </p>
              <div className="hidden sm:block w-12 h-[1px] bg-[#C2A684]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
