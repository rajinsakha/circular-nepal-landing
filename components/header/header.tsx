"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { HEADER_CONTENT } from "@/constants/header";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = 80; // Approximate header height
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
      closeMobileMenu();
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-background/95 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 sm:gap-3">
            <Image
              src={logo}
              alt={HEADER_CONTENT.brand.logoAlt}
              className="w-10 h-10 sm:w-14 sm:h-14  object-contain"
            />
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-primary">
              {HEADER_CONTENT.brand.name}
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {HEADER_CONTENT.navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm lg:text-base text-primary/80 hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href={HEADER_CONTENT.cta.href}
              onClick={(e) => handleNavClick(e, HEADER_CONTENT.cta.href)}
              className="px-5 py-2 text-sm lg:text-base bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              {HEADER_CONTENT.cta.label}
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-primary p-2 relative z-50"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="w-6 h-6 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden absolute left-0 right-0 top-full bg-background/95 backdrop-blur-md border-t border-primary/10 shadow-lg"
            >
              <div className="container mx-auto px-4 sm:px-6 py-6 flex flex-col gap-4">
                {HEADER_CONTENT.navLinks.map((link, index) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.15 }}
                    className="text-lg sm:text-xl font-medium text-primary/80 hover:text-primary transition-colors py-2 border-b border-primary/10"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href={HEADER_CONTENT.cta.href}
                  onClick={(e) => handleNavClick(e, HEADER_CONTENT.cta.href)}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: HEADER_CONTENT.navLinks.length * 0.05,
                    duration: 0.15,
                  }}
                  className="mt-2 px-6 py-3 text-base sm:text-lg bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors text-center"
                >
                  {HEADER_CONTENT.cta.label}
                </motion.a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
