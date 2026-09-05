import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const STATS = [
  { number: "60+", label: "Years of Excellence" },
  { number: "1M+", label: "Happy Sleepers" },
  { number: "25+", label: "Sleep Technologies" },
];

export function BrandStatement() {
  return (
    <section className="bg-[#FBF9F5] border-y border-[#E8E0D5] py-20 md:py-28 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-center">

          {/* Left Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#C2A684]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C2A684] font-semibold">
                Est. 1963 · India
              </span>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-px h-20 bg-gradient-to-b from-[#C2A684] to-transparent mt-1 shrink-0" />
              <p className="text-sm text-[#6B6259] leading-relaxed">
                For over six decades, Duroflex has been crafting mattresses that change the way India sleeps. Born in Bangalore. Built for the world.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs font-semibold text-[#1C1917]">4.8/5</span>
              <span className="text-xs text-[#6B6259]">from 50,000+ Reviews</span>
            </div>
          </motion.div>

          {/* Center Column (Dominant) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="text-center md:border-x border-[#E8E0D5] md:px-8"
          >
            <motion.div variants={fadeUp} className="overflow-hidden">
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1C1917] font-light leading-[1.05] mb-2">
                The art of
              </h2>
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1C1917] font-light leading-[1.05]">
                sleeping well<span className="text-[#C2A684]">.</span>
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} className="my-6 flex items-center justify-center gap-4">
              <div className="h-px flex-1 bg-[#E8E0D5]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#C2A684]" />
              <div className="h-px flex-1 bg-[#E8E0D5]" />
            </motion.div>

            <motion.p variants={fadeUp} className="text-sm text-[#6B6259] italic leading-relaxed max-w-xs mx-auto">
              "We believe great sleep is not a luxury — it is a right. Every Duroflex product is a commitment to that belief."
            </motion.p>
          </motion.div>

          {/* Right Column (Stats) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeRight}
            className="space-y-8"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                className="flex items-baseline gap-4"
              >
                <span className="font-serif text-4xl md:text-5xl text-[#C2A684] font-light leading-none">
                  {stat.number}
                </span>
                <div className="flex flex-col">
                  <div className="w-6 h-px bg-[#E8E0D5] mb-1.5" />
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#6B6259] font-medium leading-tight">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
