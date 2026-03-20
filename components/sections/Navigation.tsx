"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";

const navLinks = [
  { label: "Werkwijze", href: "#werkwijze" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Over mij", href: "#over" },
  { label: "Investering", href: "#investering" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-cream/95 backdrop-blur-sm shadow-sm"
          : "py-6 bg-transparent"
      }`}
      style={scrolled ? { backgroundColor: "rgba(250,248,245,0.96)" } : {}}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" aria-label="Rinse Bommerson Fotografie — home">
          <Logo variant="dark" showText={true} />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide transition-colors duration-200"
              style={{
                color: "var(--charcoal)",
                fontFamily: "var(--font-dm-sans)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--charcoal)")}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300"
            style={{
              backgroundColor: "var(--charcoal)",
              color: "var(--cream)",
              fontFamily: "var(--font-dm-sans)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--gold)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--charcoal)";
            }}
          >
            Strategiegesprek
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu openen"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            style={{ backgroundColor: "var(--charcoal)" }}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            style={{ backgroundColor: "var(--charcoal)" }}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            style={{ backgroundColor: "var(--charcoal)" }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: "var(--cream)" }}
          >
            <nav className="flex flex-col px-6 py-6 gap-5 border-t" style={{ borderColor: "var(--beige)" }}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base"
                  style={{ color: "var(--charcoal)", fontFamily: "var(--font-dm-sans)" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 px-5 py-3 text-sm font-medium text-center"
                style={{
                  backgroundColor: "var(--charcoal)",
                  color: "var(--cream)",
                  fontFamily: "var(--font-dm-sans)",
                }}
                onClick={() => setMenuOpen(false)}
              >
                Strategiegesprek aanvragen
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
