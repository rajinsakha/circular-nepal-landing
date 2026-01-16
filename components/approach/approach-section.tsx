"use client";
import { motion } from "framer-motion";
import { Settings, Users, BarChart3 } from "lucide-react";

const approaches = [
  {
    icon: Settings,
    title: "Systems over slogans",
    description:
      "We focus on operating models that work on the ground — not pilots that end in reports.",
  },
  {
    icon: Users,
    title: "People at the center",
    description:
      "Women, informal workers, and communities are partners in the system, not beneficiaries.",
  },
  {
    icon: BarChart3,
    title: "Proof through data",
    description:
      "We measure flows, outcomes, and value creation — and publish progress transparently.",
  },
];

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
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Approach
          </h2>
          <p className="text-lg text-muted-foreground">
            What makes us different
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card rounded-lg p-8  hover:shadow-xl transition-all hover:-translate-y-2 border border-border/50"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-accent to-sun rounded-xl flex items-center justify-center mb-6">
                <approach.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {approach.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
