import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CATEGORY_SCENES = [
  {
    number: "01",
    id: "mattresses",
    title: "MATTRESSES",
    tagline: "Doctor Recommended Orthopaedic Comfort",
    desc: "Engineered with 5-zone spinal alignment, cooling gel memory foam, and zero partner motion disturbance.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1800&q=85"
  },
  {
    number: "02",
    id: "beds",
    title: "BEDS",
    tagline: "Architectural Bedsteads & Solid Wood Frames",
    desc: "Handcrafted fluted velvet headboards and solid teak platform beds with integrated hydraulic storage.",
    image: "https://images.unsplash.com/photo-1540518614846-7ede433c5163?auto=format&fit=crop&w=1800&q=85"
  },
  {
    number: "03",
    id: "sofas",
    title: "SOFAS",
    tagline: "Curved Sculptural Lounging",
    desc: "Organic silhouette bouclé and velvet sofas built over kiln-dried hardwood skeletons.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1800&q=85"
  },
  {
    number: "04",
    id: "recliners",
    title: "RECLINERS",
    tagline: "Zero-Gravity Motorized Luxury",
    desc: "Top-grain Italian leather recliners with independent lumbar control and wireless device charging.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1800&q=85"
  },
  {
    number: "05",
    id: "pillows",
    title: "PILLOWS",
    tagline: "Ergonomic Cervical & Down Comfort",
    desc: "Contoured memory foam and natural latex pillows tailored to your exact neck curvature.",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1800&q=85"
  },
  {
    number: "06",
    id: "bedding",
    title: "BEDDING",
    tagline: "400 TC Organic Tencel Suites",
    desc: "Hotel-grade silky duvet covers, fitted sheets, and hypoallergenic temperature-regulating protectors.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1800&q=85"
  }
];

export function CategoryStory({ onSelectCategory }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeScene = CATEGORY_SCENES[activeIndex];

  return (
    <section className="relative bg-[#121110] text-white py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Tag */}
        <div className="mb-12 flex items-center justify-between border-b border-white/10 pb-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C2A684]">
            Sticky Story Showcase — Scene {activeScene.number}
          </span>
          <span className="text-xs text-white/40 uppercase tracking-widest hidden sm:inline">
            Interactive Camera Transition
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: Sticky Layered Image Transition Container (7 Columns) */}
          <div className="lg:col-span-7 relative h-[420px] sm:h-[520px] md:h-[620px] rounded-xs overflow-hidden shadow-2xl bg-black">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScene.id}
                initial={{ opacity: 0, scale: 1.08, clipPath: "inset(0 100% 0 0)" }}
                animate={{ opacity: 1, scale: 1.0, clipPath: "inset(0 0% 0 0)" }}
                exit={{ opacity: 0, scale: 1.03, clipPath: "inset(0 0 0 100%)" }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${activeScene.image}')` }}
              >
                {/* Gradient tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Overlaid details on bottom of image */}
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C2A684] mb-2 block">
                    {activeScene.tagline}
                  </span>
                  <h3 className="font-serif-luxury text-2xl md:text-4xl font-light mb-2">
                    {activeScene.title}
                  </h3>
                  <p className="text-sm text-white/70 font-light max-w-md hidden sm:block">
                    {activeScene.desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: Category Selector List (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {CATEGORY_SCENES.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveIndex(index);
                    onSelectCategory?.(item.id);
                  }}
                  className={`text-left group transition-all duration-500 p-4 border-b ${
                    isActive
                      ? "border-[#C2A684] bg-white/5 pl-6"
                      : "border-white/10 opacity-50 hover:opacity-90 hover:pl-2"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className={`text-xs font-mono tracking-widest ${isActive ? "text-[#C2A684]" : "text-white/60"}`}>
                        {item.number}
                      </span>
                      <span className={`font-serif-luxury text-2xl md:text-3xl tracking-wider uppercase ${isActive ? "text-white font-normal" : "text-white/80 font-light"}`}>
                        {item.title}
                      </span>
                    </div>
                    <ArrowUpRight
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isActive ? "text-[#C2A684] translate-x-1 -translate-y-1" : "text-white/40 group-hover:translate-x-1"
                      }`}
                    />
                  </div>

                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-3 text-xs md:text-sm text-white/70 font-light leading-relaxed pl-10"
                    >
                      {item.desc}
                    </motion.p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
