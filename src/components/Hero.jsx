import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Volume2, VolumeX } from 'lucide-react';

export function Hero({ onExplore, onOpenFinder }) {
  const [muted, setMuted] = useState(true);
  const [showMuteButton, setShowMuteButton] = useState(false);
  const [activeSection, setActiveSection] = useState('Mattresses');

  useEffect(() => {
    const timer = setTimeout(() => setShowMuteButton(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const sections = ['Mattresses', 'Beds', 'Sofas', 'Bedding', 'Technology'];

  const textVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.13,
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1]
      }
    })
  };

  return (
    <section className="relative w-full h-[100svh] overflow-hidden bg-black">
      {/* Background Video with slow zoom */}
      <motion.div 
        className="absolute inset-0 w-full h-full origin-center"
        initial={{ scale: 1.0 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      >
        <video
          src="https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-with-designer-furniture-41547-large.mp4"
          autoPlay
          muted={muted}
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

      {/* Top right mute button */}
      {showMuteButton && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setMuted(!muted)}
          className="absolute top-24 right-6 z-20 w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/40 transition-colors"
        >
          {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </motion.button>
      )}

      {/* Content */}
      <div className="absolute inset-0 max-w-7xl mx-auto px-6 flex flex-col justify-end pb-24 md:pb-32 z-10">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-[#D4AF37] text-xs font-semibold tracking-[0.3em] uppercase mb-4"
        >
          PREMIUM SLEEP · ARCHITECTURAL COMFORT
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-6 max-w-3xl"
        >
          THE ART OF<br/>BETTER SLEEP
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-white/80 text-lg md:text-xl max-w-lg mb-10 font-light"
        >
          Engineered comfort. Sculpted for your nights.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <button 
            onClick={onExplore}
            className="px-8 py-4 bg-[#D4AF37] text-white text-sm tracking-widest uppercase hover:bg-[#b8952c] transition-colors w-full sm:w-auto text-center"
          >
            Explore Mattresses
          </button>
          <button 
            onClick={onOpenFinder}
            className="px-8 py-4 border border-white/60 text-white text-sm tracking-widest uppercase hover:border-white hover:bg-white hover:text-black transition-colors w-full sm:w-auto text-center"
          >
            Find Your Comfort
          </button>
        </motion.div>
      </div>

      {/* Right side category nav (desktop) */}
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-6 z-20">
        {sections.map((section) => (
          <div 
            key={section} 
            className="group flex items-center justify-end gap-3 cursor-pointer"
            onClick={() => setActiveSection(section)}
          >
            <span className={`text-[10px] tracking-widest uppercase transition-opacity duration-300 ${activeSection === section ? 'opacity-100 text-white' : 'opacity-0 text-white/50 group-hover:opacity-100'}`}>
              {section}
            </span>
            <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${activeSection === section ? 'bg-[#D4AF37]' : 'bg-white/20 group-hover:bg-white/60'}`} />
          </div>
        ))}
      </div>

      {/* Bottom center scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none">
        <span className="text-white/50 text-[10px] tracking-widest uppercase">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/70"
        >
          <ChevronDown size={20} strokeWidth={1.5} />
        </motion.div>
      </div>
    </section>
  );
}
