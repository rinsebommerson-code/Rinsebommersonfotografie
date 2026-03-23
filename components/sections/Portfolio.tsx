"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

type Category = "Alles" | "Personal Brand" | "Team" | "Lifestyle";

const categories: Category[] = ["Alles", "Personal Brand", "Team", "Lifestyle"];

// Placeholder images with different aspect ratios and gradient backgrounds
const portfolioItems = [
  { id: 1, cat: "Personal Brand", aspect: "aspect-[3/4]", gradient: "linear-gradient(135deg, #2C2820 0%, #4A3828 100%)", label: "Personal Brand" },
  { id: 2, cat: "Team", aspect: "aspect-[4/3]", gradient: "linear-gradient(135deg, #1E2830 0%, #2A3C48 100%)", label: "Team shoot" },
  { id: 3, cat: "Lifestyle", aspect: "aspect-[3/4]", gradient: "linear-gradient(135deg, #282018 0%, #3C3020 100%)", label: "Lifestyle" },
  { id: 4, cat: "Personal Brand", aspect: "aspect-square", gradient: "linear-gradient(135deg, #201820 0%, #382838 100%)", label: "Personal Brand" },
  { id: 5, cat: "Lifestyle", aspect: "aspect-[4/3]", gradient: "linear-gradient(135deg, #182018 0%, #283828 100%)", label: "Lifestyle" },
  { id: 6, cat: "Team", aspect: "aspect-[3/4]", gradient: "linear-gradient(135deg, #201818 0%, #382020 100%)", label: "Team" },
  { id: 7, cat: "Personal Brand", aspect: "aspect-[4/3]", gradient: "linear-gradient(135deg, #2A2218 0%, #483C28 100%)", label: "Personal Brand" },
  { id: 8, cat: "Lifestyle", aspect: "aspect-square", gradient: "linear-gradient(135deg, #181820 0%, #282838 100%)", label: "Lifestyle" },
  { id: 9, cat: "Team", aspect: "aspect-[3/4]", gradient: "linear-gradient(135deg, #182018 0%, #304830 100%)", label: "Team" },
];

type PortfolioItem = (typeof portfolioItems)[number];

function Lightbox({ item, onClose }: { item: PortfolioItem; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
      style={{ backgroundColor: "rgba(26,21,18,0.92)" }}
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="relative w-full rounded-sm overflow-hidden"
          style={{
            background: item.gradient,
            aspectRatio: item.aspect === "aspect-square" ? "1 / 1" : item.aspect.replace("aspect-[", "").replace("]", "").replace("/", " / "),
            maxHeight: "80vh",
          }}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(184,146,106,0.4) 0%, transparent 60%)" }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 p-8"
            style={{ background: "linear-gradient(to top, rgba(26,21,18,0.8) 0%, transparent 60%)" }}
          >
            <span className="text-sm tracking-wider uppercase" style={{ color: "var(--cream)", fontFamily: "var(--font-dm-sans)" }}>
              {item.label}
            </span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200"
          style={{ backgroundColor: "var(--gold)", color: "var(--charcoal)" }}
          aria-label="Sluiten"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("Alles");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const filtered =
    activeCategory === "Alles"
      ? portfolioItems
      : portfolioItems.filter((item) => item.cat === activeCategory);

  return (
    <>
    <section
      ref={ref}
      id="portfolio"
      className="py-24 md:py-36"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <p
              className="text-xs font-medium tracking-[0.25em] uppercase mb-4"
              style={{ color: "var(--gold)", fontFamily: "var(--font-dm-sans)" }}
            >
              Portfolio
            </p>
            <h2
              className="text-4xl md:text-5xl leading-tight"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--charcoal)" }}
            >
              Elk beeld is gemaakt{" "}
              <em>met een doel.</em>
            </h2>
          </motion.div>

          {/* Filter buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 text-xs tracking-wide transition-all duration-200"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  backgroundColor: activeCategory === cat ? "var(--charcoal)" : "transparent",
                  color: activeCategory === cat ? "var(--cream)" : "var(--charcoal)",
                  border: `1px solid ${activeCategory === cat ? "var(--charcoal)" : "var(--beige)"}`,
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="break-inside-avoid group relative overflow-hidden cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div
                className={`w-full ${item.aspect}`}
                style={{ background: item.gradient }}
              >
                {/* Placeholder content suggesting a portrait */}
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to top, rgba(26,21,18,0.8) 0%, transparent 60%)" }}>
                  <span
                    className="text-xs tracking-wider uppercase"
                    style={{ color: "var(--cream)", fontFamily: "var(--font-dm-sans)" }}
                  >
                    {item.label}
                  </span>
                </div>
                {/* Subtle warm figure silhouette suggestion */}
                <div className="absolute inset-0 opacity-20"
                  style={{
                    background: `radial-gradient(ellipse at 50% 30%, rgba(184,146,106,0.4) 0%, transparent 60%)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA below grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p
            className="text-lg mb-6 italic"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--charcoal-light)" }}
          >
            Dit kan jouw merk zijn.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium tracking-wide transition-all duration-300"
            style={{
              backgroundColor: "var(--charcoal)",
              color: "var(--cream)",
              fontFamily: "var(--font-dm-sans)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--gold)"; e.currentTarget.style.color = "var(--charcoal)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--charcoal)"; e.currentTarget.style.color = "var(--cream)"; }}
          >
            Start jouw Full Imagery Plan
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>

    {selectedItem && (
      <Lightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
    )}
    </>
  );
}
