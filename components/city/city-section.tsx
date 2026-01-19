"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import mountainSunBg from "@/assets/section_hills.jpg";
import { MOUNTAIN_SECTION } from "@/constants/mountain";

const CitySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.5, 1, 1, 0.5],
  );

  return (
    <section
      ref={sectionRef}
      id="mountain-vision"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Mountain background image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: imageScale, opacity: imageOpacity }}
      >
        <Image
          src={mountainSunBg}
          alt={MOUNTAIN_SECTION.imageAlt}
          fill
          className="object-cover object-top"
          sizes="100vw"
          placeholder="blur"
          priority={false}
        />
        {/* Gradient overlay for text readability */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" /> */}
      </motion.div>

      {/* Content overlay */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          {MOUNTAIN_SECTION.title}{" "}
          <span className="text-sun">{MOUNTAIN_SECTION.highlight}</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white/90 drop-shadow-md">
          {MOUNTAIN_SECTION.description}
        </p>
      </motion.div>

      {/* Sun target marker - invisible, used for sun animation alignment */}
      <div
        id={MOUNTAIN_SECTION.sunTargetId}
        className="absolute top-[15%] left-1/2 -translate-x-1/2 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 pointer-events-none"
      />
    </section>
  );
};

export default CitySection;
