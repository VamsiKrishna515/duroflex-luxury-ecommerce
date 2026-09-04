import React, { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";

export function RoomTransformation() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0-100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section className="py-28 md:py-40 px-6 md:px-12 bg-[#121110] text-white border-b border-white/10 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C2A684] font-semibold mb-3 block">
            Interactive Room Transformation
          </span>
          <h2 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white mb-6">
            TRANSFORM YOUR SPACE
          </h2>
          <p className="text-base text-white/70 font-light leading-relaxed">
            Drag the handle horizontally to experience how Duroflex orthopaedic sleep systems and architectural bedsteads turn everyday bedrooms into luxury sanctuaries.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
          className="relative h-[400px] sm:h-[550px] md:h-[650px] w-full rounded-xs overflow-hidden shadow-2xl cursor-ew-resize border border-white/10"
        >
          {/* AFTER Image (Full background) */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=2400&q=90')`
            }}
          >
            <div className="absolute top-6 right-6 bg-[#C2A684] text-white text-xs font-mono tracking-widest uppercase px-4 py-2 shadow-lg">
              AFTER — DUROFLEX SUITE
            </div>
          </div>

          {/* BEFORE Image (Clipped overlay) */}
          <div
            className="absolute inset-0 bg-cover bg-center overflow-hidden"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1540518614846-7ede433c5163?auto=format&fit=crop&w=2400&q=90')`,
              clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
            }}
          >
            <div className="absolute top-6 left-6 bg-[#121212]/90 text-white text-xs font-mono tracking-widest uppercase px-4 py-2 shadow-lg">
              BEFORE — ORDINARY BEDROOM
            </div>
          </div>

          {/* Draggable Divider Line & Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-20 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white text-[#121212] flex items-center justify-center shadow-2xl border-2 border-[#C2A684]">
              <SlidersHorizontal className="w-5 h-5 stroke-[2]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
