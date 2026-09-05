import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LAYERS = [
  {
    id: 1,
    name: "COOLING TENCEL COVER",
    color: "#C2A684",
    height: "h-10",
    description: "Soft, breathable, moisture-wicking fabric that stays cool all night.",
    benefits: [
      "Temperature-regulating microfibre weave",
      "Ultra-soft 400TC feel",
      "Removable & machine-washable",
    ],
  },
  {
    id: 2,
    name: "COMFORT FOAM LAYER",
    color: "#A08060",
    height: "h-12",
    description: "Adaptive open-cell memory foam that relieves pressure point by point.",
    benefits: [
      "Contours to body shape dynamically",
      "Reduces shoulder & hip pressure",
      "Open-cell for enhanced airflow",
    ],
  },
  {
    id: 3,
    name: "Q-GEL COOLING LAYER",
    color: "#6B94A8",
    height: "h-10",
    description: "Phase-change gel technology that absorbs and dissipates heat instantly.",
    benefits: [
      "Maintains 2°C cooler sleep surface",
      "Reduces night sweating",
      "Works all night, every night",
    ],
  },
  {
    id: 4,
    name: "POCKET SPRING CORE",
    color: "#888888",
    height: "h-16",
    description: "2000+ individually wrapped pocket springs that respond to every movement.",
    benefits: [
      "Zero motion transfer between sleepers",
      "Zoned support for head, shoulder & hip",
      "Durable 10+ year spring integrity",
    ],
  },
  {
    id: 5,
    name: "HD SUPPORT BASE",
    color: "#4A3E38",
    height: "h-10",
    description: "High-density foundation providing lifelong structural integrity.",
    benefits: [
      "Prevents sagging over time",
      "Ensures uniform weight distribution",
      "100% recyclable foam",
    ],
  },
];

const TECH_CARDS = [
  { emoji: "🌡️", title: "Cooling Technology", desc: "Smart temperature regulation keeps your sleep surface 2° cooler all night long." },
  { emoji: "🔄", title: "Motion Isolation", desc: "Individually wrapped springs absorb movement so your partner's restlessness stays their problem." },
  { emoji: "🦴", title: "Orthopaedic Support", desc: "5-zone pressure mapping aligns your spine and eliminates morning stiffness." },
  { emoji: "🌿", title: "Eco-Friendly", desc: "Sustainably sourced materials. CertiPUR-US® certified. Better for you and the planet." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function TechnologySection() {
  const [activeLayer, setActiveLayer] = useState(0);
  const layer = LAYERS[activeLayer];

  return (
    <section id="technology" className="bg-[#0D0B09] text-white py-24 md:py-32 px-4 sm:px-8 md:px-16 overflow-hidden relative">
      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p variants={fadeUp} className="text-[#C2A684] text-xs uppercase tracking-[0.35em] mb-4">
            Science of Sleep
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-6xl font-light mb-4">
            Built for How You Sleep.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-stone-400 text-lg">
            Every layer engineered with purpose.
          </motion.p>
        </motion.div>

        {/* Interactive Layer Viewer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left: Layer Stack */}
          <div className="flex flex-col justify-center gap-1">
            {LAYERS.map((l, i) => (
              <motion.div
                key={l.id}
                onHoverStart={() => setActiveLayer(i)}
                onClick={() => setActiveLayer(i)}
                animate={{ opacity: activeLayer === i ? 1 : 0.35 }}
                transition={{ duration: 0.3 }}
                className={`relative cursor-pointer flex items-center gap-4 px-6 py-4 border-l-2 transition-all duration-300 ${
                  activeLayer === i ? "border-[#C2A684] bg-white/5" : "border-white/10 hover:border-white/30"
                }`}
              >
                <div
                  className={`shrink-0 w-8 ${l.height}`}
                  style={{ backgroundColor: l.color, opacity: 0.9 }}
                />
                <span className={`text-xs uppercase tracking-widest font-medium ${
                  activeLayer === i ? "text-[#C2A684]" : "text-stone-400"
                }`}>
                  {l.name}
                </span>
                {activeLayer === i && (
                  <motion.div
                    layoutId="layerIndicator"
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-[#C2A684]"
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Right: Layer Detail */}
          <div className="flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLayer}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#C2A684] mb-3">
                    Layer {activeLayer + 1} of {LAYERS.length}
                  </p>
                  <h3 className="font-serif text-3xl md:text-4xl text-white mb-4">
                    {layer.name}
                  </h3>
                  <p className="text-stone-300 text-lg leading-relaxed mb-6">
                    {layer.description}
                  </p>
                  <div className="space-y-3">
                    {layer.benefits.map((b) => (
                      <div key={b} className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-[#C2A684] mt-2.5 shrink-0" />
                        <span className="text-stone-400 text-sm">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-white/8">
                  <span className="text-xs text-[#C2A684] uppercase tracking-wider underline underline-offset-4 cursor-pointer hover:text-white transition-colors">
                    Learn More About This Technology
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Technology Cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {TECH_CARDS.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              className="bg-white/5 border border-white/10 hover:border-[#C2A684] hover:bg-white/8 transition-all duration-300 p-6 cursor-default"
            >
              <div className="text-3xl mb-4">{card.emoji}</div>
              <h4 className="font-serif text-lg text-white mb-2">{card.title}</h4>
              <p className="text-stone-400 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
