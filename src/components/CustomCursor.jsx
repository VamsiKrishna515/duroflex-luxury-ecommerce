import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, useReducedMotion } from 'framer-motion';

export function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const [cursorType, setCursorType] = useState('default');
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { stiffness: 80, damping: 15, mass: 1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    const moveMouse = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setCursorType(target.getAttribute('data-cursor'));
      } else {
        setCursorType('default');
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  if (isTouchDevice || prefersReducedMotion) return null;

  const variants = {
    default: {
      width: 28,
      height: 28,
      backgroundColor: 'transparent',
      border: '1px solid #C2A684',
      scale: isClicking ? 0.6 : 1,
      borderRadius: '50%',
      boxShadow: 'none',
      opacity: isVisible ? 1 : 0
    },
    view: {
      width: 64,
      height: 64,
      backgroundColor: 'transparent',
      border: '1px solid #C2A684',
      scale: isClicking ? 0.9 : 1,
      borderRadius: '50%',
      boxShadow: 'none',
      opacity: isVisible ? 1 : 0
    },
    drag: {
      width: 80,
      height: 40,
      backgroundColor: 'transparent',
      border: '1px solid #C2A684',
      scale: isClicking ? 0.9 : 1,
      borderRadius: '40px',
      boxShadow: 'none',
      opacity: isVisible ? 1 : 0
    },
    explore: {
      width: 72,
      height: 72,
      backgroundColor: 'transparent',
      border: '1px solid #C2A684',
      scale: isClicking ? 0.9 : 1,
      borderRadius: '50%',
      boxShadow: '0 0 15px 5px rgba(194, 166, 132, 0.4)',
      opacity: isVisible ? 1 : 0
    }
  };

  const textVariants = {
    default: { opacity: 0 },
    view: { opacity: 1 },
    drag: { opacity: 1 },
    explore: { opacity: 1 }
  };

  return (
    <div style={{ pointerEvents: 'none', zIndex: 99999, position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', display: isVisible ? 'block' : 'none' }}>
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center font-medium tracking-widest text-[10px] text-[#C2A684]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          pointerEvents: 'none',
        }}
        variants={variants}
        animate={cursorType}
        transition={{ type: 'spring', stiffness: 300, damping: 25, mass: 1 }}
      >
        <motion.span variants={textVariants} animate={cursorType} className="uppercase text-[#C2A684]">
          {cursorType !== 'default' ? cursorType : ''}
        </motion.span>
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-[#C2A684]"
        style={{
          x: cursorX,
          y: cursorY,
          width: 10,
          height: 10,
          translateX: '-50%',
          translateY: '-50%',
          pointerEvents: 'none',
          opacity: isVisible ? 1 : 0,
        }}
        animate={{ scale: isClicking ? 0.5 : 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </div>
  );
}
