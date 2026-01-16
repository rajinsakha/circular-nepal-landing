"use client";
import { motion } from "framer-motion";
import { Building2, Factory, Heart } from "lucide-react";

const stakeholders = [
  {
    icon: Building2,
    title: "Municipalities",
    description:
      "Pilot ward-level circular systems with reporting and citizen engagement.",
    color: "from-sun to-accent",
  },
  {
    icon: Factory,
    title: "Companies & Brands",
    description: "Test EPR, traceability, and circular supply chain models.",
    color: "from-sun to-accent",
  },
  {
    icon: Heart,
    title: "Donors & Foundations",
    description:
      "Support programs tied to measurable outcomes and system change.",
    color: "from-sun to-accent",
  },
];

const JoinSection = () => {
  return (
    <section id="join" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Join Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Together, we can build circular systems that create lasting impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stakeholders.map((stakeholder, index) => (
            <motion.div
              key={stakeholder.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-card rounded-lg p-8 shadow-xs hover:shadow-lg transition-all hover:-translate-y-2 border border-border/50 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stakeholder.color} opacity-0 group-hover:opacity-5 transition-opacity`}
              />

              <div
                className={`w-14 h-14 bg-gradient-to-br ${stakeholder.color} rounded-xl flex items-center justify-center mb-6`}
              >
                <stakeholder.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {stakeholder.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {stakeholder.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center text-accent font-semibold hover:text-sun transition-colors"
              >
                Get in touch
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
