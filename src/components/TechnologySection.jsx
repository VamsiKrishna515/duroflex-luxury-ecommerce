import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TECH_FEATURES } from "../data/techFeatures";
import { ShieldCheck, Cpu, Wind, Award, Clock } from "lucide-react";

export function TechnologySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTech = TECH_FEATURES[activeIndex];

  const icons = [ShieldCheck, Cpu, Wind, Award, Clock];

  return (
    <section id="technology" className="py-28 md:py-40 px-6 md:px-12 bg-[#FBF9F5] border-b border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-black/10 pb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#C2A684] font-semibold mb-3 block">
              Scientific Innovation & Engineering
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#121212]">
              SLEEP TECHNOLOGY
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#666] font-light max-w-md mt-4 md:mt-0 leading-relaxed">
            Doctor recommended orthopaedic science, thermoregulating CoolGel™, and Swiss antimicrobial thread architecture.
          </p>
        </div>

        {/* Interactive 5-Feature Viewer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Interactive Feature Selector (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            {TECH_FEATURES.map((tech, idx) => {
              const isActive = idx === activeIndex;
              const IconComp = icons[idx] || ShieldCheck;
              return (
                <button
                  key={tech.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`text-left p-5 transition-all duration-500 rounded-xs border ${
                    isActive
                      ? "bg-[#121212] text-white border-[#121212] shadow-xl pl-6"
                      : "bg-white text-[#121212] border-black/10 hover:border-black/30 hover:pl-6"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className={`text-xs font-mono font-bold tracking-widest ${isActive ? "text-[#C2A684]" : "text-[#888]"}`}>
                        {tech.number}
                      </span>
                      <IconComp className={`w-5 h-5 ${isActive ? "text-[#C2A684]" : "text-[#555]"}`} />
                      <span className="font-serif-luxury text-xl md:text-2xl font-normal tracking-wide">
                        {tech.title}
                      </span>
                    </div>
                  </div>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-3 text-xs md:text-sm text-white/70 font-light leading-relaxed pl-10"
                    >
                      {tech.shortDesc}
                    </motion.p>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Feature Display & Material Photography (7 Columns) */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-xs border border-black/5 shadow-xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTech.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col space-y-6"
              >
                {/* Feature Image */}
                <div className="relative h-64 sm:h-80 rounded-xs overflow-hidden bg-[#F4F1EA]">
                  <img
                    src={activeTech.image}
                    alt={activeTech.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#121212] text-[#C2A684] font-mono text-xs px-3 py-1 uppercase tracking-widest">
                    Feature {activeTech.number} / 05
                  </div>
                </div>

                <div>
                  <h3 className="font-serif-luxury text-3xl md:text-4xl text-[#121212] font-normal mb-3">
                    {activeTech.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#555] font-light leading-relaxed mb-6">
                    {activeTech.fullDesc}
                  </p>

                  {/* Metrics Badges */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-black/10">
                    {activeTech.metrics.map((m) => (
                      <div key={m} className="bg-[#FBF9F5] p-3 border border-black/5 text-center">
                        <span className="text-xs font-semibold text-[#121212] block">
                          {m}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
