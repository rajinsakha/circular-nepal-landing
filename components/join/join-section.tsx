"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import city from "@/assets/city.png";
import { HILLS_SECTION } from "@/constants/hills";
import { JOIN_SECTION } from "@/constants/join";

const JoinSection = () => {
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
      id="join"
      className="relative min-h-screen flex items-start justify-center overflow-hidden py-12 sm:py-16"
    >
      {/* Mountain background image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: imageScale, opacity: imageOpacity }}
      >
        <Image
          src={city}
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
      <div className="relative z-10 w-full px-4 sm:px-6 max-w-7xl mx-auto py-8 sm:py-12">
        {/* Join Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary mb-4 sm:mb-6 px-2">
            {JOIN_SECTION.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary/80 max-w-3xl mx-auto px-2">
            {JOIN_SECTION.subtitle}
          </p>
        </motion.div>

        {/* Join Section Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto px-2 sm:px-0">
          {JOIN_SECTION.items.map((stakeholder, index) => (
            <motion.div
              key={stakeholder.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
              className="group relative bg-card/90 backdrop-blur-sm rounded-lg p-6 sm:p-8 shadow-xs hover:shadow-xl transition-all hover:-translate-y-2 border border-border/50 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stakeholder.color} opacity-0 group-hover:opacity-5 transition-opacity`}
              />

              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${stakeholder.color} rounded-xl flex items-center justify-center mb-4 sm:mb-6`}
              >
                <stakeholder.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary mb-2 sm:mb-3">
                {stakeholder.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-primary/80 leading-relaxed mb-4 sm:mb-6">
                {stakeholder.description}
              </p>
              <a
                href={JOIN_SECTION.cta.href}
                className="inline-flex items-center text-xs sm:text-sm md:text-base text-accent font-semibold hover:text-sun transition-colors"
              >
                {JOIN_SECTION.cta.label}
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
