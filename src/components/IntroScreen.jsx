import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function IntroScreen({ onComplete }) {
  const [stage, setStage] = useState(0);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem('duroflex_intro_shown')) {
      onComplete();
      setShouldRender(false);
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setTimeout(() => {
        finishIntro();
      }, 200);
      return;
    }

    const timers = [
      setTimeout(() => setStage(1), 600),
      setTimeout(() => setStage(2), 1400),
      setTimeout(() => setStage(3), 2200),
      setTimeout(() => setStage(4), 2900),
      setTimeout(() => {
        setStage(5);
        setTimeout(finishIntro, 500);
      }, 3400)
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const finishIntro = () => {
    sessionStorage.setItem('duroflex_intro_shown', 'true');
    setShouldRender(false);
    onComplete();
  };

  if (!shouldRender) return null;

  const wordmark = "DUROFLEX".split('');

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D0B09] overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        {/* Grain overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay" 
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
        ></div>

        {/* Video Background (Stage 1+) */}
        {stage >= 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 hidden md:block"
          >
            <video
              src="https://assets.mixkit.co/videos/preview/mixkit-interior-of-a-modern-living-room-41544-large.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
        
        {/* Mobile static fallback */}
        {stage >= 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 md:hidden bg-[#1A1816]"
          />
        )}

        <div className="relative z-10 flex flex-col items-center justify-center">
          {/* Gold line (Stage 2+) */}
          <div className="h-px mb-6 flex justify-center items-center">
            {stage >= 2 && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 120 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="h-[1px] bg-[#D4AF37]"
              />
            )}
          </div>

          {/* DUROFLEX Wordmark (Stage 3+) */}
          <div className="flex overflow-hidden h-12 md:h-16 mb-4">
            {stage >= 3 && wordmark.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.06, ease: [0.33, 1, 0.68, 1] }}
                className="text-white text-4xl md:text-6xl font-serif tracking-[0.2em] md:tracking-[0.3em] font-light"
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Short brand phrase (Stage 4+) */}
          <div className="h-6 overflow-hidden">
            {stage >= 4 && (
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-[#D4AF37] text-sm md:text-base tracking-widest font-light uppercase"
              >
                Designed for the way you dream.
              </motion.div>
            )}
          </div>
        </div>

        {/* Skip button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          onClick={finishIntro}
          className="absolute bottom-6 right-6 text-white/40 text-xs tracking-widest uppercase hover:text-white transition-colors z-50 cursor-pointer"
        >
          Skip Intro
        </motion.button>

        {/* White Flash (Stage 5) */}
        {stage >= 5 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-white z-50"
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
}
