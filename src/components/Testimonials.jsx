import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Priya Menon',
    location: 'Bangalore',
    rating: 5,
    review: 'The Duropedic Wave Plus changed my life. After years of chronic back pain, I finally sleep through the night. The orthopedic support is unparalleled. I can\'t imagine sleeping on anything else.',
    product: 'Duropedic Wave Plus'
  },
  {
    id: 2,
    name: 'Arjun & Nandini Kapoor',
    location: 'Mumbai',
    rating: 5,
    review: 'We bought the Energise Pocket Spring for our master bedroom. Zero motion transfer is real — my husband can get up at 5am and I don\'t feel a thing. Best purchase we\'ve made for our home.',
    product: 'Energise Pocket Spring'
  },
  {
    id: 3,
    name: 'Dr. Raghunathan S.',
    location: 'Chennai',
    rating: 5,
    review: 'As an orthopaedic surgeon, I am extremely particular about mattress quality. Duroflex\'s engineering is impressive. I now recommend their range to patients with spinal concerns.',
    product: 'Balance Natural Latex'
  },
  {
    id: 4,
    name: 'Tara Sinha',
    location: 'Delhi',
    rating: 5,
    review: 'The Haven Velvet Bedstead completely transformed my bedroom. It feels like sleeping in a 5-star hotel every night. The quality and craftsmanship are remarkable.',
    product: 'The Haven Velvet Bedstead'
  },
  {
    id: 5,
    name: 'Vikram Nair',
    location: 'Kochi',
    rating: 5,
    review: 'Outstanding quality and delivery. The white-glove installation team was professional and courteous. My Comfortis Plush mattress arrived in perfect condition and feels incredible.',
    product: 'Comfortis Plush'
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setCardsToShow(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [isHovered]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < cardsToShow; i++) {
      items.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return items;
  };

  return (
    <section id="testimonials" className="py-24" style={{ backgroundColor: '#F6F2EC' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#A27B5C] font-semibold text-sm tracking-widest uppercase mb-4 block">
            Client Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
            Trusted by India's Best Sleepers.
          </h2>
          <p className="text-gray-600 text-lg">
            Real experiences. Honest reviews.
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex gap-6 overflow-hidden min-h-[400px]">
            <AnimatePresence mode="popLayout">
              {getVisibleTestimonials().map((testimonial, idx) => (
                <motion.div
                  key={`${testimonial.id}-${currentIndex}`}
                  layout
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-sm shadow-sm border border-black/5 p-8 flex flex-col flex-1"
                  style={{ minWidth: cardsToShow === 1 ? '100%' : 'calc(33.333% - 1rem)' }}
                >
                  <div className="flex space-x-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  
                  <p className="font-serif italic text-gray-800 text-lg lg:text-xl leading-relaxed flex-grow mb-8">
                    "{testimonial.review}"
                  </p>
                  
                  <div className="h-[1px] w-12 bg-gray-200 mb-6"></div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{testimonial.name}</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-stone-500 text-sm">{testimonial.location}</span>
                      <span className="bg-[#A27B5C]/10 text-[#A27B5C] text-xs font-semibold px-3 py-1 rounded-full">
                        {testimonial.product}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center mt-12 space-x-6">
            <button 
              onClick={handlePrev}
              className="p-2 text-gray-400 hover:text-[#A27B5C] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'bg-[#A27B5C] w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={handleNext}
              className="p-2 text-gray-400 hover:text-[#A27B5C] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
