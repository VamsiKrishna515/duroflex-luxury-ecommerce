import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const categories = [
  {
    name: 'Firm',
    tagline: 'Maximum support. Spine-aligned.',
    color: '#2C2825',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Medium Firm',
    tagline: 'Balanced for most sleepers.',
    color: '#3D3530',
    image: 'https://images.unsplash.com/photo-1540518614846-7ede433c5163?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Medium',
    tagline: 'The universal comfort.',
    color: '#4A3E38',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Plush',
    tagline: 'Cloud-like softness.',
    color: '#554840',
    image: 'https://images.unsplash.com/photo-1582582621959-48d273528920?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Orthopaedic',
    tagline: 'Doctor-certified support.',
    color: '#1C1917',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Luxury',
    tagline: 'The pinnacle of sleep.',
    color: '#0D0B09',
    badge: 'PREMIUM',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80'
  }
];

export function HorizontalScrollCollection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 340 + 24; // card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="collections" className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#B58A61] uppercase block mb-4">
              FIND YOUR COMFORT
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">
              What kind of sleeper are you?
            </h2>
            <p className="text-lg text-stone-500">
              Discover your perfect firmness.
            </p>
          </div>
          
          <div className="flex space-x-3">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:border-[#B58A61] hover:text-[#B58A61] transition-colors"
              aria-label="Scroll left"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:border-[#B58A61] hover:text-[#B58A61] transition-colors"
              aria-label="Scroll right"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div 
        ref={scrollRef}
        data-cursor="drag"
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 sm:px-6 lg:px-8 pb-12 hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style dangerouslySetInnerHTML={{__html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}} />
        
        {categories.map((cat, idx) => (
          <div 
            key={idx}
            className="group relative flex-none w-[340px] h-[480px] snap-start overflow-hidden bg-stone-900"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${cat.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {cat.badge && (
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] tracking-wider uppercase px-3 py-1">
                {cat.badge}
              </div>
            )}

            <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end">
              <h3 className="text-2xl font-serif text-white mb-2">{cat.name}</h3>
              <p className="text-stone-300 text-sm mb-4">{cat.tagline}</p>
              
              <div className="overflow-hidden h-0 group-hover:h-6 transition-all duration-300 ease-out">
                <span className="text-[#B58A61] text-sm uppercase tracking-wider font-medium flex items-center">
                  Explore <ArrowRight size={14} className="ml-2" />
                </span>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#B58A61] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
