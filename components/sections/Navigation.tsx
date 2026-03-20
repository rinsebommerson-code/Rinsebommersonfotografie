"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";

interface NavigationProps {
  /** Pass true when the nav sits over a dark hero section (default: true) */
  darkHero?: boolean;
}

const navLinks = [
  { label: "Werkwijze", href: "/#werkwijze" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Over mij", href: "/#over" },
  { label: "Investering", href: "/#investering" },
  { label: "Contact", href: "/#contact" },
];

export default function Navigation({ darkHero = true }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    // Set initial state immediately
    setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // When over a dark hero and not yet scrolled, use light colours
  const isLight = darkHero && !scrolled;

  const textColor = isLight ? "rgba(250,248,245,0.85)" : "var(--charcoal)";
  const textHoverColor = isLight ? "var(--cream)" : "var(--gold)";
  const burgerColor = isLight ? "var(--cream)" : "var(--charcoal)";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        paddingTop: scrolled ? "12px" : "24px",
        paddingBottom: scrolled ? "12px" : "24px",
        backgroundColor: scrolled ? "rgba(250,248,245,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="/" aria-label="Rinse Bommerson Fotografie — home">
          <Logo variant={isLight ? "light" : "dark"} showText={true} />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide transition-colors duration-300"
              style={{
                color: textColor,
                fontFamily: "var(--font-dm-sans)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = textHoverColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = textColor)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300"
            style={{
              backgroundColor: isLight ? "rgba(250,248,245,0.15)" : "var(--charcoal)",
              color: isLight ? "var(--cream)" : "var(--cream)",
              border: isLight ? "1px solid rgba(250,248,245,0.35)" : "1px solid transparent",
              fontFamily: "var(--font-dm-sans)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--gold)";
              e.currentTarget.style.borderColor = "var(--gold)";
              e.currentTarget.style.color = "var(--charcoal)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = isLight ? "rgba(250,248,245,0.15)" : "var(--charcoal)";
              e.currentTarget.style.borderColor = isLight ? "rgba(250,248,245,0.35)" : "transparent";
              e.currentTarget.style.color = "var(--cream)";
            }}
          >
            Beeldanalyse aanvragen
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
            style={{ backgroundColor: burgerColor }}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            style={{ backgroundColor: burgerColor }}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            style={{ backgroundColor: burgerColor }}
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
            <nav
              className="flex flex-col px-6 py-6 gap-5 border-t"
              style={{ borderColor: "var(--beige)" }}
            >
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
                href="/#contact"
                className="mt-2 px-5 py-3 text-sm font-medium text-center"
                style={{
                  backgroundColor: "var(--charcoal)",
                  color: "var(--cream)",
                  fontFamily: "var(--font-dm-sans)",
                }}
                onClick={() => setMenuOpen(false)}
              >
                Beeldanalyse aanvragen
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
