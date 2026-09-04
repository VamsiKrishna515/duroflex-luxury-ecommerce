import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 glass-dark text-white px-6 py-3.5 rounded-full shadow-2xl flex items-center space-x-3 border border-white/20"
      >
        <CheckCircle2 className="w-4 h-4 text-[#C2A684]" />
        <span className="text-xs font-medium tracking-wide">{message}</span>
      </motion.div>
    </AnimatePresence>
  );
}
