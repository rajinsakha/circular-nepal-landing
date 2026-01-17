import { Building2, Factory, Heart } from "lucide-react";

export const JOIN_SECTION = {
  title: "Join Us",
  subtitle:
    "Together, we can build circular systems that create lasting impact.",
  items: [
    {
      id: "municipalities",
      icon: Building2,
      title: "Municipalities",
      description:
        "Pilot ward-level circular systems with reporting and citizen engagement.",
      color: "from-sun to-accent",
    },
    {
      id: "companies",
      icon: Factory,
      title: "Companies & Brands",
      description: "Test EPR, traceability, and circular supply chain models.",
      color: "from-sun to-accent",
    },
    {
      id: "donors",
      icon: Heart,
      title: "Donors & Foundations",
      description:
        "Support programs tied to measurable outcomes and system change.",
      color: "from-sun to-accent",
    },
  ],
  cta: {
    label: "Get in touch",
    href: "#contact",
  },
} as const;
