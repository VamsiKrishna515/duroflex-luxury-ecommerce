import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero({ onExplore, onOpenFinder }) {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-end pb-20 md:pb-28">
      {/* Background Image with Slow Subtle Zoom Effect */}
      <motion.div
        initial={{ scale: 1.02 }}
        animate={{ scale: 1.08 }}
        transition={{
          duration: 12,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=2400&q=90')`
        }}
      />

      {/* Cinematic Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-white">
        <div className="max-w-2xl">
          {/* 1. Small Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center space-x-2 mb-4"
          >
            <Sparkles className="w-4 h-4 text-[#C2A684]" />
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#C2A684]">
              Architecture of Pure Comfort
            </span>
          </motion.div>

          {/* 2. Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.05] mb-6"
          >
            SLEEP BETTER. <br />
            <span className="italic font-normal text-[#E6D5C3]">LIVE BETTER.</span>
          </motion.h1>

          {/* 3. Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base md:text-lg text-white/80 font-light tracking-wide leading-relaxed max-w-lg mb-8"
          >
            Thoughtfully designed orthopaedic comfort and handcrafted furniture for every part of your modern sanctuary.
          </motion.p>

          {/* 4. CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5"
          >
            <button
              onClick={onExplore}
              className="group px-8 py-4 bg-[#C2A684] hover:bg-[#a88a68] text-white text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg shadow-black/20"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
            </button>

            <button
              onClick={onOpenFinder}
              className="px-8 py-4 border border-white/40 hover:border-white text-white hover:bg-white/10 text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 text-center backdrop-blur-xs"
            >
              Find Your Perfect Mattress
            </button>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 right-8 hidden md:flex items-center space-x-3 text-white/60 text-[10px] uppercase tracking-[0.25em]"
      >
        <span>Scroll to Experience</span>
        <div className="w-8 h-[1px] bg-white/40 animate-pulse" />
      </motion.div>
    </section>
  );
}
