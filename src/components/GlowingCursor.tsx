import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function GlowingCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const targetElement = e.target as HTMLElement;
      setIsPointer(
        targetElement.tagName === 'A' ||
        targetElement.tagName === 'BUTTON' ||
        window.getComputedStyle(targetElement).cursor === 'pointer'
      );
    };
    window.addEventListener('mousemove', handleMouseMove);
    const handleMouseOut = () => {
       setPosition({ x: -100, y: -100 });
    };
    document.addEventListener('mouseout', handleMouseOut);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const cursorVariants = {
    default: {
      scale: 1,
      opacity: 0.7,
      rotate: 0,
      transition: { type: 'spring', stiffness: 800, damping: 30 }
    },
    pointer: {
      scale: 1.3,
      opacity: 0.9,
      rotate: 0,
      transition: { type: 'spring', stiffness: 600, damping: 20 }
    }
  };

  const cursorSize = 28;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
         x: position.x - cursorSize / 2,
         y: position.y - cursorSize / 2,
         width: `${cursorSize}px`,
         height: `${cursorSize}px`,
      }}
      variants={cursorVariants}
      animate={isPointer ? "pointer" : "default"}
    >
       <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         className="w-full h-full stroke-current text-emerald-300"
         fill="none"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
       >
         <polyline points="9 6 15 12 9 18"></polyline>
         <line x1="9" y1="21" x2="17"y2="21"></line>
       </svg>
    </motion.div>
  );
}