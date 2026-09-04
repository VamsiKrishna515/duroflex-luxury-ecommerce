import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function IntroScreen({ onComplete }) {
  const [stage, setStage] = useState(0); // 0: logo reveal, 1: video ambient expansion, 2: complete

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 1200);
    const t2 = setTimeout(() => {
      setStage(2);
      onComplete?.();
    }, 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage < 2 && (
        <motion.div
          key="intro-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } }}
          onClick={() => {
            setStage(2);
            onComplete?.();
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D0C0C] overflow-hidden cursor-pointer selection:bg-transparent"
        >
          {/* HD Architectural Ambient Video Loop */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: stage >= 1 ? 0.6 : 0.2,
              scale: stage >= 1 ? 1.0 : 1.1
            }}
            transition={{ duration: 2.0, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 overflow-hidden"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover filter brightness-75 contrast-110"
            >
              <source
                src="https://assets.mixkit.co/videos/preview/mixkit-interior-of-a-modern-living-room-41544-large.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0C] via-black/40 to-[#0D0C0C]" />
          </motion.div>

          {/* Centered Film Title & Gold Line Reveal */}
          <div className="relative z-10 text-center px-6 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#C2A684] font-mono font-medium block mb-3">
                Cinematic Brand Film
              </span>
              <h1 className="font-serif-luxury text-5xl sm:text-7xl md:text-8xl tracking-[0.25em] text-white uppercase font-light drop-shadow-2xl">
                DUROFLEX
              </h1>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C2A684] to-transparent mx-auto my-6"
              />

              <p className="text-xs md:text-sm tracking-[0.35em] text-white/80 uppercase font-light">
                Architectural Sleep & Living
              </p>
            </motion.div>
          </div>

          {/* Bottom Skip Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center space-x-3 text-[10px] tracking-[0.3em] text-white/40 uppercase">
            <span className="w-2 h-2 rounded-full bg-[#C2A684] animate-ping" />
            <span>Click Anywhere to Skip Intro</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
