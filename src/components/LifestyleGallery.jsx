import React from "react";
import { motion } from "framer-motion";

const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1400&q=85",
    title: "Morning Sun in the Master Bedroom",
    span: "col-span-1 md:col-span-2 row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1540518614846-7ede433c5163?auto=format&fit=crop&w=1200&q=85",
    title: "Hand-Stitched Italian Velvet Headboard",
    span: "col-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85",
    title: "Natural Organic Latex Texture",
    span: "col-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    title: "Living Room Architecture",
    span: "col-span-1 md:col-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85",
    title: "Aniline Leather Texture & Craft",
    span: "col-span-1"
  }
];

export function LifestyleGallery() {
  return (
    <section className="py-28 md:py-40 px-6 md:px-12 bg-[#FBF9F5] border-b border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-black/10 pb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#C2A684] font-semibold mb-3 block">
              Editorial Lifestyle Lookbook
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#121212]">
              LIVING LINES GALLERY
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#666] font-light max-w-md mt-4 md:mt-0 leading-relaxed">
            A visual chronicle of modern Indian homes, natural material textures, and quiet interior elegance.
          </p>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={img.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className={`relative overflow-hidden rounded-xs group ${img.span} bg-[#F4F1EA] shadow-sm hover:shadow-xl transition-all duration-700`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="font-serif-luxury text-xl md:text-2xl text-white font-light tracking-wide">
                  {img.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
