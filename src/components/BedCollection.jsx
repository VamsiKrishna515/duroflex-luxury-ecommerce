import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function BedCollection({ onExploreBeds }) {
  return (
    <section id="beds" className="relative w-full py-36 md:py-48 bg-black text-white overflow-hidden">
      {/* Background Image with Fixed/Parallax Feel */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60 bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1540518614846-7ede433c5163?auto=format&fit=crop&w=2400&q=90')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex items-center">
        <div className="max-w-xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.3em] text-[#C2A684] font-semibold mb-4 block"
          >
            Handcrafted Bedsteads
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-light tracking-tight uppercase leading-[1.08] mb-6 text-white"
          >
            THE BEDROOM, <br />
            <span className="italic font-normal text-[#E6D5C3]">REIMAGINED.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base md:text-lg text-white/80 font-light leading-relaxed mb-8"
          >
            Designed to turn your bedroom into a sanctuary you'll never want to leave. Solid teak timber frames clad in stain-resistant Italian velvets.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.45 }}
            onClick={onExploreBeds}
            className="group inline-flex items-center space-x-3 px-8 py-4 bg-[#C2A684] hover:bg-[#a88a68] text-white text-xs uppercase tracking-[0.25em] font-medium transition-all shadow-xl"
          >
            <span>Explore Beds</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
