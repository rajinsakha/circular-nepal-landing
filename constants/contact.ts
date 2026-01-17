import { Mail, MapPin, Phone } from "lucide-react";

export const CONTACT_SECTION = {
  title: "Contact Us",
  subtitle: "Ready to start a conversation?",
  items: [
    {
      id: "phone",
      icon: Phone,
      title: "Phone",
      value: "+977 984-1220790",
      href: "tel:+9779841220790",
    },
    {
      id: "email",
      icon: Mail,
      title: "Email",
      value: "loop@circularnepal.com",
      href: "mailto:loop@circularnepal.com",
    },
    {
      id: "location",
      icon: MapPin,
      title: "Location",
      value: "Lazimpath, Kathmandu",
    },
  ],
  logoAlt: "Circular Nepal",
  tagline: "Hope from the Top of the World",
} as const;
