"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-primary text-primary-foreground relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-primary-foreground/80 text-lg">
            Ready to start a conversation?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Phone</h3>
                <a
                  href="tel:+9779841220790"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  +977 984-1220790
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Email</h3>
                <a
                  href="mailto:loop@circularnepal.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  loop@circularnepal.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Location</h3>
                <p className="text-primary-foreground/80">
                  Lazimpath, Kathmandu
                </p>
              </div>
            </div>
          </motion.div>

          {/* Logo & tagline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <Image
              src={logo}
              alt="Circular Nepal"
              className="w-40 h-40 md:w-48 md:h-48 mx-auto md:ml-auto md:mr-0 mb-6 rounded-2xl shadow-2xl"
            />
            <p className="text-2xl font-semibold text-accent">
              Hope from the Top of the World
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
