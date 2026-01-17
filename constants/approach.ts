import { BarChart3, Settings, Users } from "lucide-react";

export const APPROACH_SECTION = {
  title: "Our Approach",
  subtitle: "What makes us different",
  items: [
    {
      id: "systems",
      icon: Settings,
      title: "Systems over slogans",
      description:
        "We focus on operating models that work on the ground — not pilots that end in reports.",
    },
    {
      id: "people",
      icon: Users,
      title: "People at the center",
      description:
        "Women, informal workers, and communities are partners in the system, not beneficiaries.",
    },
    {
      id: "data",
      icon: BarChart3,
      title: "Proof through data",
      description:
        "We measure flows, outcomes, and value creation — and publish progress transparently.",
    },
  ],
} as const;
