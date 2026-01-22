"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import sectionCity from "@/assets/city.png";
import { ABOUT_SECTION } from "@/constants/about";

const AboutSection = () => {
  return (
    <section id="about" className="relative h-screen py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={sectionCity}
          alt="Kathmandu cityscape background"
          fill
          className="object-cover"
          sizes="100vw"
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex items-start justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 max-w-4xl mx-auto leading-tight">
            {ABOUT_SECTION.title}
            <span className="text-secondary">
              {ABOUT_SECTION.highlightedTextOne}
            </span>
            {ABOUT_SECTION.subTitle}
            <span className="text-secondary">
              {ABOUT_SECTION.highlightedTextTwo}
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-primary max-w-3xl mx-auto">
            {ABOUT_SECTION.description}
          </p>
        </motion.div>

        {/* Circular concept image */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <Image
            src={circularConcept}
            alt={ABOUT_SECTION.imageAlt}
            className="w-full h-auto rounded-2xl shadow-2xl"
            sizes="(min-width: 1024px) 768px, 100vw"
            placeholder="blur"
          />
        </motion.div> */}
      </div>
    </section>
  );
};

export default AboutSection;
