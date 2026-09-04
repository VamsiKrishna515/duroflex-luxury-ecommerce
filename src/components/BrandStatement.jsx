import React from "react";
import { motion } from "framer-motion";

export function BrandStatement() {
  return (
    <section className="relative py-32 md:py-44 px-6 md:px-12 bg-[#FBF9F5] text-[#121212] overflow-hidden border-b border-black/5">
      <div className="max-w-5xl mx-auto text-center">
        {/* Subtitle tag */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.35em] text-[#C2A684] font-semibold mb-6 block"
        >
          Philosophy & Heritage
        </motion.span>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight uppercase leading-[1.08] mb-10 text-[#121212]"
        >
          COMFORT, <span className="italic font-normal text-[#9A7B56]">REIMAGINED.</span>
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-20 h-[1px] bg-[#C2A684] mx-auto mb-10"
        />

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-lg md:text-2xl text-[#555] font-light max-w-3xl mx-auto leading-relaxed tracking-wide"
        >
          From restful nights to beautifully designed spaces, Duroflex brings thoughtful orthopaedic engineering and luxury aesthetics into everyday Indian living.
        </motion.p>
      </div>
    </section>
  );
}
