"use client";
import { motion } from "framer-motion";
import { APPROACH_SECTION } from "@/constants/approach";

const ApproachSection = () => {
  return (
    <section id="approach" className="py-24 bg-primary/5 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
            {APPROACH_SECTION.title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            {APPROACH_SECTION.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {APPROACH_SECTION.items.map((approach, index) => (
            <motion.div
              key={approach.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card rounded-lg p-8  hover:shadow-xl transition-all hover:-translate-y-2 border border-border/50"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-accent to-sun rounded-xl flex items-center justify-center mb-6">
                <approach.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-3">
                {approach.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {approach.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
