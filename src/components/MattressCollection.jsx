import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS, MATTRESSES } from '../data/products';

export function MattressCollection({ onQuickView, onAddToCart, onToggleWishlist, wishlistIds }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Orthopaedic', 'Latex', 'Spring', 'Memory Foam'];
  
  const filteredMattresses = activeFilter === 'All' 
    ? MATTRESSES 
    : MATTRESSES.filter(m => m.subcategory === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="mattresses" className="py-24" style={{ backgroundColor: '#FBF9F5' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#A27B5C] font-semibold text-sm tracking-widest uppercase mb-4 block">
            The Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
            Mattresses for Every Dream
          </h2>
          <div className="w-16 h-[1px] bg-[#A27B5C] mx-auto mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter 
                    ? 'bg-[#A27B5C] text-white' 
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-[#A27B5C] hover:text-[#A27B5C]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredMattresses.map((product, index) => {
            const isFeatured = index === 0;
            const isWishlisted = wishlistIds?.includes(product.id);
            
            return (
              <motion.div 
                key={product.id}
                variants={itemVariants}
                className={`group flex flex-col ${isFeatured ? 'md:col-span-2 md:flex-row' : ''}`}
              >
                <div className={`relative overflow-hidden ${isFeatured ? 'md:w-1/2' : 'w-full'} aspect-[3/4]`}>
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {product.images[1] && (
                    <img 
                      src={product.images[1]} 
                      alt={`${product.name} lifestyle`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
                    />
                  )}
                  
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8 translate-y-4 group-hover:translate-y-0">
                    <button 
                      onClick={() => onQuickView(product)}
                      className="bg-white text-gray-900 px-8 py-3 text-sm font-semibold tracking-wider uppercase hover:bg-[#A27B5C] hover:text-white transition-colors"
                    >
                      Quick View
                    </button>
                  </div>
                </div>

                <div className={`pt-6 ${isFeatured ? 'md:pt-0 md:pl-10 md:w-1/2 md:flex md:flex-col md:justify-center' : ''}`}>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[#A27B5C] text-xs font-semibold tracking-widest uppercase">
                      {product.subcategory}
                    </span>
                    {product.firmness && (
                      <span className="bg-stone-200 text-stone-700 text-[10px] uppercase font-bold px-2 py-1 rounded-sm">
                        {product.firmness}
                      </span>
                    )}
                  </div>
                  
                  <h3 className={`font-serif text-gray-900 mb-2 ${isFeatured ? 'text-3xl' : 'text-xl'}`}>
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xs">⭐</span>
                    ))}
                    <span className="text-xs text-gray-500 ml-2">(124)</span>
                  </div>

                  <div className="flex items-center space-x-3 mb-6">
                    <span className="text-lg font-bold text-gray-900">₹{product.price.toLocaleString('en-IN')}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                    )}
                  </div>

                  <div className="flex items-center space-x-4 mt-auto">
                    <button 
                      onClick={() => onAddToCart(product)}
                      className="flex-1 bg-gray-900 text-white py-3 text-sm font-semibold uppercase tracking-wider hover:bg-[#A27B5C] transition-colors translate-y-2 opacity-100 md:opacity-0 md:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 duration-300"
                    >
                      Add to Cart
                    </button>
                    <button 
                      onClick={() => onToggleWishlist(product.id)}
                      className="p-3 border border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-500 transition-colors"
                    >
                      <svg 
                        className={`w-6 h-6 transition-all duration-300 ${isWishlisted ? 'fill-red-500 text-red-500 scale-110' : 'fill-transparent'}`} 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-16 text-center">
          <button className="inline-block border-b-2 border-[#A27B5C] pb-1 text-[#A27B5C] font-semibold tracking-wider uppercase hover:text-gray-900 hover:border-gray-900 transition-colors">
            View All Mattresses
          </button>
        </div>
      </div>
    </section>
  );
}
