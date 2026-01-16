"use client";
import { motion } from "framer-motion";
import circularConcept from "@/assets/circular-concept.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 max-w-4xl mx-auto leading-tight">
            We work at the intersection of communities, municipalities, and
            markets
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Designing systems that are practical, inclusive, and scalable.
          </p>
        </motion.div>

        {/* Circular concept image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <img
            src={circularConcept.src}
            alt="Circular Nepal concept - Collect, Recover, Reinvest, Create Value"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
