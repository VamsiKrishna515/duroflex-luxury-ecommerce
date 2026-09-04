import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Moon } from "lucide-react";

export function NighttimeHero({ onExplore }) {
  return (
    <section className="relative w-full py-40 md:py-56 bg-black text-white overflow-hidden">
      {/* Background Image with Slow Continuous Zoom */}
      <motion.div
        initial={{ scale: 1.0 }}
        whileInView={{ scale: 1.07 }}
        viewport={{ once: true }}
        transition={{ duration: 15, ease: "linear" }}
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2400&q=90')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Overlay Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center space-x-2 mb-6"
        >
          <Moon className="w-5 h-5 text-[#C2A684]" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#C2A684] font-semibold">
            Nighttime Sanctuary
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-serif-luxury text-5xl sm:text-7xl md:text-8xl font-light uppercase tracking-tight leading-[1.05] mb-6 text-white"
        >
          GOOD NIGHT. <br />
          <span className="italic font-normal text-[#E6D5C3]">BETTER MORNING.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-white/80 font-light tracking-wide max-w-xl mx-auto mb-10"
        >
          Make architectural comfort and doctor-recommended orthopaedic support part of every single day.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45 }}
          onClick={onExplore}
          className="group inline-flex items-center space-x-3 px-10 py-5 bg-[#C2A684] hover:bg-[#a88a68] text-white text-xs uppercase tracking-[0.3em] font-medium transition-all shadow-2xl"
        >
          <span>Explore Duroflex</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
        </motion.button>
      </div>
    </section>
  );
}
