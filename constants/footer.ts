import { Mail, MapPin, Phone } from "lucide-react";
import { SiGoogleanalytics, SiInstagram, SiLinkedin } from "react-icons/si";

export const FOOTER_CONTENT = {
  brand: {
    logoSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCEI_qfByV0Ig0cVQO7MZ1YMvuUzS80hjtSQyabEsn_NXB8K9QrIU7QZRxkHy3LgwwpB45OLk_DyODpjETe008_6qXeA3zAS1V0RII2APbvIFo2ZgYBQ7Kl7DC0BJQ1bVGVuDsk_N9d3vd5E06ZPRVpPKow9_CoKxr1vA7kcF3bYzSsafpbE42zZTDlbaML7qwJuulgGkrVIS9gDnA4i9xmj3Nr3qzWBcTmd8cOP2fU1X3BGji1cQhyZfiV_AQ4JIdxyzIDzT04UMU",
    logoAlt: "Circular Nepal Logo",
    name: "Circular",
    accent: "Nepal",
    description:
      "Transforming waste into dignity through inclusive, women-led circular systems in Nepal.",
  },
  navigation: {
    title: "Navigation",
    links: [
      { id: "about", label: "About Us", href: "#" },
      { id: "projects", label: "Projects", href: "#" },
      { id: "impact", label: "Impact", href: "#" },
      { id: "partners", label: "Partners", href: "#" },
    ],
  },
  contact: {
    title: "Contact Us",
    items: [
      {
        id: "phone",
        icon: Phone,
        label: "+977 984-1220790",
        href: "tel:+9779841220790",
      },
      {
        id: "email",
        icon: Mail,
        label: "loop@circularnepal.com",
        href: "mailto:loop@circularnepal.com",
        className: "break-all",
      },
      {
        id: "location",
        icon: MapPin,
        lines: ["Lazimpath,", "Kathmandu, Nepal"],
      },
    ],
  },
  connect: {
    title: "Connect",
    socials: [
      {
        id: "leaderboard",
        label: "Leaderboard",
        href: "#",
        icon: SiGoogleanalytics,
      },
      {
        id: "instagram",
        label: "Instagram",
        href: "#",
        icon: SiInstagram,
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        href: "#",
        icon: SiLinkedin,
      },
    ],
  },
  cta: {
    title: "Ready to contribute?",
    description: "Support our mission with a donation or partnership.",
    href: "#join-us",
    label: "Get Involved",
  },
  legal: {
    copyright:
      "© 2024 Circular Nepal. Registered NGO No. 1234/56. All rights reserved.",
    links: [
      { id: "privacy", label: "Privacy Policy", href: "#" },
      { id: "impact-report", label: "Impact Report", href: "#" },
    ],
  },
} as const;
