import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, RotateCcw, ShoppingBag } from "lucide-react";
import { PRODUCTS } from "../data/products";

const QUESTIONS = [
  {
    id: "position",
    question: "What is your primary sleeping position?",
    options: [
      { label: "Back Sleeper", desc: "Requires lumbar support & 5-zone spinal alignment" },
      { label: "Side Sleeper", desc: "Needs shoulder & hip pressure-point cushioning" },
      { label: "Stomach Sleeper", desc: "Requires firm core alignment to prevent back sag" },
      { label: "Combination Sleeper", desc: "Needs responsive motion adaptability" }
    ]
  },
  {
    id: "firmness",
    question: "What feel do you prefer when resting?",
    options: [
      { label: "Soft Plush", desc: "Cloud-like sink-in feeling with deep contouring" },
      { label: "Medium Firm", desc: "Balanced support with gentle surface cushioning" },
      { label: "Extra Firm", desc: "Maximum spinal rigidity & doctor-recommended support" }
    ]
  },
  {
    id: "temperature",
    question: "How do you feel temperature-wise at night?",
    options: [
      { label: "I Sleep Hot", desc: "Need active CoolGel™ thermoregulation mesh" },
      { label: "Neutral / Cozy", desc: "Standard breathable cotton & latex airflow" }
    ]
  },
  {
    id: "orthopaedic",
    question: "Do you experience chronic back or neck stiffness?",
    options: [
      { label: "Yes, Need Doctor Recommended Ortho", desc: "Duropedic 5-zone spinal alignment" },
      { label: "No, General Premium Comfort", desc: "Standard luxury posture support" }
    ]
  }
];

export function MattressFinder({ onAddToCart, onQuickView }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleSelectOption = (questionId, optionLabel) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionLabel }));
    if (currentStep < QUESTIONS.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
  };

  // Determine recommended mattress based on answers
  const recommendedMattress =
    answers.orthopaedic?.includes("Yes") || answers.position === "Back Sleeper"
      ? PRODUCTS[0] // Duropedic Wave Plus
      : answers.firmness === "Soft Plush" || answers.position === "Side Sleeper"
      ? PRODUCTS[1] // Balance Latex
      : PRODUCTS[2]; // Energise Spring

  return (
    <section id="finder" className="py-28 md:py-40 px-6 md:px-12 bg-[#121110] text-white border-b border-white/10 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C2A684] font-semibold mb-3 block">
            Interactive Sleep Algorithm
          </span>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white">
            WHAT DOES YOUR PERFECT SLEEP FEEL LIKE?
          </h2>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center space-x-3 mb-12 text-xs font-mono tracking-widest text-white/50">
          {[0, 1, 2, 3, 4].map((stepIdx) => {
            const isCurrent = stepIdx === currentStep;
            const isDone = stepIdx < currentStep;
            return (
              <React.Fragment key={stepIdx}>
                <span
                  className={`px-3 py-1 rounded-full transition-all ${
                    isCurrent
                      ? "bg-[#C2A684] text-white font-bold"
                      : isDone
                      ? "text-[#C2A684]"
                      : "text-white/30"
                  }`}
                >
                  {stepIdx === 4 ? "RESULT" : `0${stepIdx + 1}`}
                </span>
                {stepIdx < 4 && <span>→</span>}
              </React.Fragment>
            );
          })}
        </div>

        {/* Question Step Container */}
        <div className="bg-[#1A1918] p-8 md:p-12 rounded-xs border border-white/10 shadow-2xl min-h-[380px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {currentStep < QUESTIONS.length ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col justify-between h-full"
              >
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#C2A684] mb-2 block">
                    Question 0{currentStep + 1} of 04
                  </span>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-light mb-8">
                    {QUESTIONS[currentStep].question}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {QUESTIONS[currentStep].options.map((opt) => (
                      <button
                        key={opt.label}
                        onClick={() =>
                          handleSelectOption(QUESTIONS[currentStep].id, opt.label)
                        }
                        className="text-left p-5 border border-white/10 hover:border-[#C2A684] bg-white/5 hover:bg-white/10 transition-all rounded-xs group"
                      >
                        <span className="text-base font-medium text-white group-hover:text-[#C2A684] block mb-1">
                          {opt.label}
                        </span>
                        <span className="text-xs text-white/60 font-light block">
                          {opt.desc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-8 border-t border-white/10 mt-8">
                  {currentStep > 0 ? (
                    <button
                      onClick={() => setCurrentStep((prev) => prev - 1)}
                      className="text-xs uppercase tracking-widest text-white/60 hover:text-white"
                    >
                      ← Back
                    </button>
                  ) : <div />}
                  <span className="text-xs text-white/40 font-mono">
                    Select an option to proceed
                  </span>
                </div>
              </motion.div>
            ) : (
              /* RESULT SCREEN */
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center space-x-2 text-[#C2A684] mb-3">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-xs font-mono uppercase tracking-widest">
                      YOUR PERFECT MATCH FOUND
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-5 h-56 rounded-xs overflow-hidden bg-black">
                      <img
                        src={recommendedMattress.image}
                        alt={recommendedMattress.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="md:col-span-7">
                      <span className="text-xs uppercase tracking-widest text-[#C2A684] font-medium block mb-1">
                        {recommendedMattress.subcategory} • {recommendedMattress.firmness}
                      </span>
                      <h3 className="font-serif-luxury text-3xl text-white font-normal mb-3">
                        {recommendedMattress.name}
                      </h3>
                      <p className="text-xs text-white/70 font-light leading-relaxed mb-6">
                        {recommendedMattress.description}
                      </p>

                      <div className="flex items-baseline space-x-4 mb-6">
                        <span className="text-3xl font-serif-luxury text-[#C2A684]">
                          ₹{recommendedMattress.price.toLocaleString("en-IN")}
                        </span>
                        <span className="text-sm text-white/40 line-through">
                          ₹{recommendedMattress.originalPrice.toLocaleString("en-IN")}
                        </span>
                      </div>

                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => onAddToCart(recommendedMattress)}
                          className="px-6 py-3 bg-[#C2A684] hover:bg-[#a88a68] text-white text-xs uppercase tracking-widest font-medium transition-colors flex items-center space-x-2"
                        >
                          <ShoppingBag className="w-4 h-4" />
                          <span>Add Match to Cart</span>
                        </button>
                        <button
                          onClick={() => onQuickView(recommendedMattress)}
                          className="px-6 py-3 border border-white/20 hover:border-white text-white text-xs uppercase tracking-widest transition-colors"
                        >
                          Full Specs
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10 mt-8 flex justify-end">
                  <button
                    onClick={handleReset}
                    className="text-xs uppercase tracking-widest text-white/60 hover:text-[#C2A684] flex items-center space-x-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Retake Sleep Quiz</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
