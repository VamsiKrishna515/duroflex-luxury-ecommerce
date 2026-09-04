import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function IntroScreen({ onComplete }) {
  const [stage, setStage] = useState(0); // 0: logo, 1: bg transition, 2: complete

  useEffect(() => {
    // Stage 0 -> Stage 1 after 1000ms
    const t1 = setTimeout(() => {
      setStage(1);
    }, 1000);

    // Stage 1 -> Complete after 2200ms
    const t2 = setTimeout(() => {
      setStage(2);
      onComplete?.();
    }, 2400);

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
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          onClick={() => {
            setStage(2);
            onComplete?.();
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#FBF9F5] overflow-hidden cursor-pointer selection:bg-transparent"
        >
          {/* Background image transition */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{
              opacity: stage >= 1 ? 0.35 : 0,
              scale: stage >= 1 ? 1.0 : 1.05
            }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=2000&q=85')`
            }}
          />

          {/* Centered Logo & Subtitle */}
          <div className="relative z-10 text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: stage === 0 ? 1 : 0.8, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="font-serif-luxury text-5xl md:text-7xl lg:text-8xl tracking-[0.2em] text-[#121212] uppercase font-light">
                Duroflex
              </h1>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-24 h-[1px] bg-[#C2A684] mx-auto my-4"
              />
              <p className="text-xs md:text-sm tracking-[0.35em] text-[#666059] uppercase font-medium">
                Luxury Architectural Comfort
              </p>
            </motion.div>
          </div>

          <div className="absolute bottom-8 text-[10px] tracking-[0.2em] text-[#888] uppercase">
            Click to Skip Intro
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
