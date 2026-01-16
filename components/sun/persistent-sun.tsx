"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const PersistentSun = () => {
  const { scrollYProgress } = useScroll();

  // Sun moves down slightly as you scroll
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [1, 0.8, 0.4]);

  return (
    <motion.div
      className="fixed top-20 right-10 md:right-20 lg:right-32 z-0 pointer-events-none"
      style={{ y, scale, opacity }}
    >
      {/* Outer glow */}
      <div className="absolute inset-0 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full bg-sun-glow/30 blur-3xl animate-pulse-glow" />

      {/* Main sun circle */}
      <div className="relative w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-sun to-sun-glow shadow-2xl" />
    </motion.div>
  );
};

export default PersistentSun;
