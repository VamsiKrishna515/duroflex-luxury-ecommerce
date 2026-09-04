import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Volume2, VolumeX, Sparkles, X } from "lucide-react";

export function Hero({ onExplore, onOpenFinder }) {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-end pb-20 md:pb-28 bg-[#0D0C0C]">
      {/* Background HD Ambient Video Reel */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover filter brightness-85 contrast-105 scale-105"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-with-designer-furniture-41547-large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Cinematic Gradient Tint Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0C] via-black/40 to-black/30" />
      </div>

      {/* Sound Mute / Unmute Toggle Button */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute top-28 right-8 z-30 p-3 bg-black/40 backdrop-blur-md border border-white/20 rounded-full text-white/80 hover:text-white hover:border-[#C2A684] transition-all"
        title={isMuted ? "Unmute Ambient Sound" : "Mute Sound"}
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#C2A684]" />}
      </button>

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-white">
        <div className="max-w-3xl">
          {/* 1. Small Architectural Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center space-x-2 mb-4"
          >
            <Sparkles className="w-4 h-4 text-[#C2A684]" />
            <span className="text-xs uppercase tracking-[0.35em] font-medium text-[#C2A684]">
              Living Lines — Architectural Sanctuary
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
            className="text-base md:text-lg text-white/85 font-light tracking-wide leading-relaxed max-w-xl mb-8"
          >
            Thoughtfully designed orthopaedic sleep technology and handcrafted furniture inspired by luxury interior architecture.
          </motion.p>

          {/* 4. Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5"
          >
            <button
              onClick={onExplore}
              className="group px-8 py-4 bg-[#C2A684] hover:bg-[#a88a68] text-white text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
            </button>

            <button
              onClick={() => setIsPlayingVideo(true)}
              className="px-6 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs uppercase tracking-[0.25em] font-medium transition-all flex items-center justify-center space-x-2"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Watch Film Reel</span>
            </button>

            <button
              onClick={onOpenFinder}
              className="px-6 py-4 border border-white/30 hover:border-white text-white hover:bg-white/10 text-xs uppercase tracking-[0.25em] font-medium transition-all text-center"
            >
              Sleep Quiz
            </button>
          </motion.div>
        </div>
      </div>

      {/* Full-Screen Brand Film Video Modal */}
      <AnimatePresence>
        {isPlayingVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-12"
          >
            <button
              onClick={() => setIsPlayingVideo(false)}
              className="absolute top-6 right-6 p-3 text-white/70 hover:text-white"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="w-full max-w-5xl aspect-video rounded-xs overflow-hidden shadow-2xl border border-white/20 relative">
              <iframe
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Duroflex Architectural Film"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
