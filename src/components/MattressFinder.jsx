import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS } from '../data/products';

const QUESTIONS = [
  {
    id: 1,
    title: 'Who is this mattress for?',
    options: [
      { label: 'Just Me', desc: 'Single sleeper', icon: '👤' },
      { label: 'My Partner & I', desc: 'Couples sharing a bed', icon: '👥' },
      { label: 'The Guest Room', desc: 'Occasional visitors', icon: '🛏️' },
      { label: 'My Child', desc: 'Growing bodies', icon: '🧸' }
    ]
  },
  {
    id: 2,
    title: 'How do you prefer to sleep?',
    options: [
      { label: 'Back', desc: 'Looking up', icon: '⬆️' },
      { label: 'Side', desc: 'Curled up', icon: '⬅️' },
      { label: 'Stomach', desc: 'Face down', icon: '⬇️' },
      { label: 'I Switch Constantly', desc: 'All over the place', icon: '🔄' }
    ]
  },
  {
    id: 3,
    title: 'What comfort feel do you prefer?',
    options: [
      { label: 'Plush Cloud', desc: 'Soft and enveloping', icon: '☁️' },
      { label: 'Medium Balanced', desc: 'Not too hard, not too soft', icon: '⚖️' },
      { label: 'Firm Supportive', desc: 'Solid feel', icon: '🧱' },
      { label: 'Extra Firm', desc: 'Maximum support', icon: '⬛' }
    ]
  },
  {
    id: 4,
    title: 'Do you sleep hot?',
    options: [
      { label: 'I sleep very hot', desc: 'Need active cooling', icon: '🔥' },
      { label: 'Slightly warm', desc: 'Breathable is good', icon: '🌡️' },
      { label: 'I sleep cool', desc: 'Cozy is fine', icon: '❄️' },
      { label: 'I don\'t know', desc: 'No strong preference', icon: '🤷' }
    ]
  },
  {
    id: 5,
    title: 'Do you have back or joint concerns?',
    options: [
      { label: 'Yes, doctor recommended ortho', desc: 'Strict orthopedic support', icon: '⚕️' },
      { label: 'Occasional discomfort', desc: 'Need pressure relief', icon: '🩹' },
      { label: 'No concerns', desc: 'Healthy and active', icon: '💪' }
    ]
  },
  {
    id: 6,
    title: 'What is your budget?',
    options: [
      { label: 'Under ₹20,000', desc: 'Value first', icon: '💰' },
      { label: '₹20,000–₹40,000', desc: 'Great quality, fair price', icon: '💵' },
      { label: '₹40,000–₹80,000', desc: 'Luxury comfort', icon: '💎' },
      { label: 'Premium (₹80,000+)', desc: 'The absolute best', icon: '👑' }
    ]
  }
];

export function MattressFinder({ onAddToCart, onQuickView }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [direction, setDirection] = useState(1);

  const handleOptionClick = (optionLabel) => {
    setAnswers({ ...answers, [currentStep]: optionLabel });
    setDirection(1);
    setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
    }, 300);
  };

  const handleBack = () => {
    setDirection(-1);
    setCurrentStep((prev) => Math.max(0, prev - 1));
  };

  const handleRetake = () => {
    setDirection(-1);
    setCurrentStep(0);
    setAnswers({});
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  // Mock recommendation logic using imported PRODUCTS
  const recommendations = PRODUCTS && PRODUCTS.length >= 2 ? PRODUCTS.slice(0, 2) : [
    {
      id: 'r1',
      name: 'Duropedic Luxury',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80',
      price: 45000,
      firmness: 'Firm Supportive',
      matchReason: 'Matches your need for orthopedic back support and side sleeping.'
    },
    {
      id: 'r2',
      name: 'Naturals Latex',
      image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&q=80',
      price: 65000,
      firmness: 'Medium Balanced',
      matchReason: 'Perfect for couples needing balanced cooling and comfort.'
    }
  ];

  return (
    <section className="relative min-h-[90vh] bg-[#1C1917] text-white flex flex-col justify-center py-20 px-4 sm:px-8 md:px-16 overflow-hidden">
      {/* Subtle Grain Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif text-[#C2A684] mb-4">WHAT DOES YOUR PERFECT SLEEP FEEL LIKE?</h2>
          <p className="text-stone-400 font-light tracking-wide uppercase text-sm">Concierge Sleep Assessment</p>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center items-center space-x-2 md:space-x-4 mb-16">
          {QUESTIONS.map((q, idx) => (
            <div key={q.id} className="flex items-center">
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs transition-colors duration-300 ${
                  currentStep > idx ? 'bg-[#C2A684] text-[#1C1917]' : currentStep === idx ? 'border border-[#C2A684] text-[#C2A684]' : 'text-stone-600'
                }`}
              >
                0{q.id}
              </div>
              {idx < QUESTIONS.length - 1 && (
                <div className={`w-4 md:w-12 h-px mx-2 transition-colors duration-300 ${currentStep > idx ? 'bg-[#C2A684]' : 'bg-stone-800'}`}></div>
              )}
            </div>
          ))}
          <div className="flex items-center ml-2">
            <div className={`w-4 md:w-12 h-px mx-2 transition-colors duration-300 ${currentStep >= QUESTIONS.length ? 'bg-[#C2A684]' : 'bg-stone-800'}`}></div>
            <span className={`text-xs font-medium tracking-wider transition-colors duration-300 ${currentStep >= QUESTIONS.length ? 'text-[#C2A684]' : 'text-stone-600'}`}>RESULT</span>
          </div>
        </div>

        <div className="relative min-h-[400px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            {currentStep < QUESTIONS.length ? (
              <motion.div
                key={currentStep}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                className="w-full absolute inset-0 flex flex-col items-center"
              >
                <div className="w-full max-w-4xl">
                  <div className="flex justify-between items-center mb-8">
                    {currentStep > 0 ? (
                      <button onClick={handleBack} className="text-stone-400 hover:text-[#C2A684] transition-colors flex items-center space-x-2 text-sm uppercase tracking-wider">
                        <span>← Back</span>
                      </button>
                    ) : <div></div>}
                    <span className="text-stone-500 text-sm">Step {currentStep + 1} of {QUESTIONS.length}</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-4xl font-serif text-white mb-10 text-center">{QUESTIONS[currentStep].title}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {QUESTIONS[currentStep].options.map((option) => (
                      <button
                        key={option.label}
                        onClick={() => handleOptionClick(option.label)}
                        className={`p-6 text-left border rounded-lg transition-all duration-300 hover:scale-[1.02] ${
                          answers[currentStep] === option.label ? 'border-[#C2A684] bg-[#2A2522]' : 'border-stone-800 hover:border-stone-600 bg-stone-900/50'
                        }`}
                      >
                        <div className="flex items-start space-x-4">
                          <span className="text-3xl">{option.icon}</span>
                          <div>
                            <h4 className="text-lg font-medium text-white mb-1">{option.label}</h4>
                            <p className="text-stone-400 text-sm">{option.desc}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ x: { type: "spring", stiffness: 300, damping: 30 } }}
                className="w-full absolute inset-0 flex flex-col items-center overflow-y-auto pb-10"
              >
                <h3 className="text-3xl md:text-4xl font-serif text-[#C2A684] mb-8 text-center">Your Perfect Match</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
                  {recommendations.map((prod) => (
                    <div key={prod.id} className="bg-stone-900 border border-stone-800 rounded-lg overflow-hidden group hover:border-[#C2A684] transition-colors duration-500">
                      <div className="h-64 overflow-hidden relative">
                        <img src={prod.image} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute top-4 right-4 bg-[#C2A684] text-[#1C1917] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">98% Match</div>
                      </div>
                      <div className="p-8">
                        <h4 className="text-2xl font-serif text-white mb-2">{prod.name}</h4>
                        <p className="text-sm text-[#C2A684] mb-4 uppercase tracking-wider">{prod.firmness || 'Medium Firm'}</p>
                        <p className="text-stone-300 mb-6 line-clamp-2">{prod.matchReason || 'Matches your profile.'}</p>
                        <div className="flex justify-between items-center mb-6">
                          <span className="text-xl font-medium text-white">₹{prod.price?.toLocaleString()}</span>
                        </div>
                        <div className="flex space-x-4">
                          <button onClick={() => onAddToCart && onAddToCart(prod)} className="flex-1 bg-white text-[#1C1917] py-3 text-sm font-semibold uppercase tracking-wider hover:bg-[#C2A684] transition-colors">
                            Add to Cart
                          </button>
                          <button onClick={() => onQuickView && onQuickView(prod)} className="flex-1 border border-stone-600 text-white py-3 text-sm font-semibold uppercase tracking-wider hover:border-white transition-colors">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button onClick={handleRetake} className="mt-12 text-stone-400 hover:text-white uppercase text-sm tracking-wider underline underline-offset-4 transition-colors">
                  Retake Quiz
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
