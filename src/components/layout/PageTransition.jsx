import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const layers = [
  { z: 88, className: "bg-gradient-to-r from-gray-900 to-black dark:from-black dark:to-[#0A0A0A]" },
  { z: 89, className: "bg-gradient-to-r from-gray-200 to-gray-300 dark:from-[#1A1A1A] dark:to-[#0D0D0D]" },
  { z: 90, className: "bg-gradient-to-r from-green-600 to-emerald-600 dark:from-[#00FF6A] dark:to-emerald-500" },
];

const curtain = {
  initial: { x: "100%" },
  animate: (i) => ({
    x: ["100%", "0%", "0%", "-100%"],
    transition: { duration: 0.9, times: [0, 0.35, 0.6, 1], delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: { x: "-100%" },
};

const PageTransition = () => {
  const location = useLocation();
  const reducedMotion = useReducedMotion();
  const firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  if (reducedMotion || firstRender.current) return null;

  return (
    <AnimatePresence>
      <motion.div key={location.pathname} className="fixed inset-0 pointer-events-none">
        {layers.map((layer, i) => (
          <motion.div
            key={layer.z}
            custom={i}
            variants={curtain}
            initial="initial"
            animate="animate"
            className={`fixed inset-0 w-screen h-screen ${layer.className}`}
            style={{ zIndex: layer.z }}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
