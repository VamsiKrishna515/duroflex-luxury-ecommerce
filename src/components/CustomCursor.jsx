import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop with fine mouse pointer
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 pointer-events-none hidden md:block"
      animate={{
        x: position.x - 12,
        y: position.y - 12
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 350,
        mass: 0.2
      }}
    >
      <div className="w-6 h-6 rounded-full border border-[#C2A684]/60 bg-[#C2A684]/10 backdrop-blur-[1px]" />
    </motion.div>
  );
}
