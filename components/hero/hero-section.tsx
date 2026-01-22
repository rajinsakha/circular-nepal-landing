"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { HERO_SECTION } from "@/constants/hero";
import mountain from "@/assets/mountain.png";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pb-20">
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={mountain}
          alt="Himalayan mountain backdrop"
          fill
          className="object-cover "
          sizes="100vw"
          priority
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent" /> */}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-xs sm:text-sm md:text-base lg:text-lg text-secondary font-medium tracking-wide uppercase mb-4"
          >
            {HERO_SECTION.tagline}
          </motion.p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight ">
            {HERO_SECTION.title.primary + " "} {HERO_SECTION.title.accent}
            {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-sun">
              {HERO_SECTION.title.accent}
            </span> */}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto capitalize"
          >
            {HERO_SECTION.description.prefix}
            <span className="text-accent font-semibold">
              {HERO_SECTION.description.highlight}
            </span>
            {HERO_SECTION.description.suffix}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href={HERO_SECTION.cta.primary.href}
              className="py-3 px-6 text-sm sm:text-base bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto sm:min-w-[200px] flex items-center justify-center"
            >
              {HERO_SECTION.cta.primary.label}
            </Link>

            <Link
              href={HERO_SECTION.cta.secondary.href}
              className="py-3 px-6 text-sm sm:text-base border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/5 transition-all w-full sm:w-auto sm:min-w-[200px] flex items-center justify-center"
            >
              {HERO_SECTION.cta.secondary.label}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center"
        >
          <div className="w-1.5 h-3 bg-primary/60 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
