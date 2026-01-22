"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import hills from "@/assets/hills.png";
import { ABOUT_SECTION } from "@/constants/about";
import { APPROACH_SECTION } from "@/constants/approach";

const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen py-12 sm:py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={hills}
          alt="Kathmandu cityscape background"
          fill
          className="object-cover"
          sizes="100vw"
          placeholder="blur"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background/40" /> */}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-start justify-center min-h-full py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16 w-full"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary mb-4 sm:mb-6 max-w-4xl mx-auto leading-tight px-2">
            {ABOUT_SECTION.title}
            <span className="text-secondary">
              {ABOUT_SECTION.highlightedTextOne}
            </span>
            {ABOUT_SECTION.subTitle}
            <span className="text-secondary">
              {ABOUT_SECTION.highlightedTextTwo}
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary max-w-3xl mx-auto px-2">
            {ABOUT_SECTION.description}
          </p>
        </motion.div>


        {/* Approach Section Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto w-full px-2 sm:px-0">
          {APPROACH_SECTION.items.map((approach, index) => (
            <motion.div
              key={approach.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
              className="group relative bg-card/90 backdrop-blur-sm rounded-lg p-6 sm:p-8 shadow-xs hover:shadow-xl transition-all hover:-translate-y-2 border border-border/50 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-sun opacity-0 group-hover:opacity-5 transition-opacity" />

              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-accent to-sun rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <approach.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary mb-2 sm:mb-3">
                {approach.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-primary/80 leading-relaxed">
                {approach.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>


    </section>
  );
};

export default AboutSection;
