import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";

export const FOOTER_CONTENT = {
  brand: {
    logoSrc: logo,
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
        id: "facebook",
        label: "Facebook",
        href: "#",
        icon: SiFacebook,
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
    copyright: "Circular Nepal. All rights reserved.",
    links: [
      { id: "privacy", label: "Privacy Policy", href: "#" },
      { id: "impact-report", label: "Impact Report", href: "#" },
    ],
  },
} as const;
