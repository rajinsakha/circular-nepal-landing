"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import hills from "@/assets/section_hills.jpeg";
import { HILLS_SECTION } from "@/constants/hills";

const HillsSection = () => {
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
      className="relative h-screen flex items-start justify-center overflow-hidden py-16"
    >
      {/* Mountain background image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: imageScale, opacity: imageOpacity }}
      >
        <Image
          src={hills}
          alt={HILLS_SECTION.imageAlt}
          fill
          className="object-cover"
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
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary mb-6 ">
          {HILLS_SECTION.title}{" "}
          <span className="text-secondary">{HILLS_SECTION.highlight} </span>
          {HILLS_SECTION.subtitle}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-primary ">
          {HILLS_SECTION.description}
        </p>
      </motion.div>
    </section>
  );
};

export default HillsSection;
