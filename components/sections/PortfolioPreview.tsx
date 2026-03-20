"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

type Category = "Alles" | "Personal Brand" | "Team" | "Lifestyle";

const CATEGORIES: Category[] = ["Alles", "Personal Brand", "Team", "Lifestyle"];

const allPhotos = [
  // Personal Brand — 8
  { id: 1,  cat: "Personal Brand", aspect: "aspect-[3/4]",  gradient: "linear-gradient(160deg, #2C2518 0%, #1A1512 100%)", glow: "42% 28%" },
  { id: 2,  cat: "Personal Brand", aspect: "aspect-[4/5]",  gradient: "linear-gradient(155deg, #382C1C 0%, #2A1E10 100%)", glow: "50% 32%" },
  { id: 3,  cat: "Personal Brand", aspect: "aspect-square", gradient: "linear-gradient(150deg, #241C14 0%, #181210 100%)", glow: "45% 25%" },
  { id: 4,  cat: "Personal Brand", aspect: "aspect-[3/4]",  gradient: "linear-gradient(165deg, #301E10 0%, #1C1408 100%)", glow: "38% 30%" },
  { id: 5,  cat: "Personal Brand", aspect: "aspect-[2/3]",  gradient: "linear-gradient(145deg, #3C2A18 0%, #2A1C0E 100%)", glow: "48% 22%" },
  { id: 6,  cat: "Personal Brand", aspect: "aspect-[4/3]",  gradient: "linear-gradient(160deg, #281C10 0%, #1C1208 100%)", glow: "44% 35%" },
  { id: 7,  cat: "Personal Brand", aspect: "aspect-[3/4]",  gradient: "linear-gradient(155deg, #342418 0%, #241810 100%)", glow: "40% 28%" },
  { id: 8,  cat: "Personal Brand", aspect: "aspect-square", gradient: "linear-gradient(150deg, #201810 0%, #140E08 100%)", glow: "52% 30%" },
  // Team — 7
  { id: 9,  cat: "Team", aspect: "aspect-[4/3]",  gradient: "linear-gradient(160deg, #1A2028 0%, #111820 100%)", glow: "48% 28%" },
  { id: 10, cat: "Team", aspect: "aspect-[3/4]",  gradient: "linear-gradient(155deg, #202830 0%, #141C24 100%)", glow: "45% 32%" },
  { id: 11, cat: "Team", aspect: "aspect-square", gradient: "linear-gradient(150deg, #161E26 0%, #0E161E 100%)", glow: "50% 25%" },
  { id: 12, cat: "Team", aspect: "aspect-[4/3]",  gradient: "linear-gradient(165deg, #1C2430 0%, #101820 100%)", glow: "42% 30%" },
  { id: 13, cat: "Team", aspect: "aspect-[3/4]",  gradient: "linear-gradient(145deg, #182028 0%, #0E1620 100%)", glow: "55% 28%" },
  { id: 14, cat: "Team", aspect: "aspect-[2/3]",  gradient: "linear-gradient(160deg, #1E2830 0%, #121E28 100%)", glow: "40% 22%" },
  { id: 15, cat: "Team", aspect: "aspect-[4/3]",  gradient: "linear-gradient(155deg, #141C24 0%, #0A121C 100%)", glow: "47% 35%" },
  // Lifestyle — 8
  { id: 16, cat: "Lifestyle", aspect: "aspect-[3/4]",  gradient: "linear-gradient(160deg, #201C10 0%, #141008 100%)", glow: "43% 28%" },
  { id: 17, cat: "Lifestyle", aspect: "aspect-[4/3]",  gradient: "linear-gradient(155deg, #2A2418 0%, #1C1810 100%)", glow: "50% 32%" },
  { id: 18, cat: "Lifestyle", aspect: "aspect-square", gradient: "linear-gradient(150deg, #281E0C 0%, #1A1408 100%)", glow: "46% 25%" },
  { id: 19, cat: "Lifestyle", aspect: "aspect-[3/4]",  gradient: "linear-gradient(165deg, #241A0A 0%, #181008 100%)", glow: "38% 30%" },
  { id: 20, cat: "Lifestyle", aspect: "aspect-[4/3]",  gradient: "linear-gradient(145deg, #2E2210 0%, #201808 100%)", glow: "53% 22%" },
  { id: 21, cat: "Lifestyle", aspect: "aspect-[2/3]",  gradient: "linear-gradient(160deg, #261C0E 0%, #1A120A 100%)", glow: "44% 35%" },
  { id: 22, cat: "Lifestyle", aspect: "aspect-[3/4]",  gradient: "linear-gradient(155deg, #2C200E 0%, #1E1608 100%)", glow: "48% 28%" },
  { id: 23, cat: "Lifestyle", aspect: "aspect-square", gradient: "linear-gradient(150deg, #221A0C 0%, #16100A 100%)", glow: "41% 30%" },
];

// How many photos to show in collapsed state
const COLLAPSED_COUNT = 9;

const catDescriptions: Record<string, string> = {
  "Personal Brand": "Beelden die jou als expert neerzetten. Zelfverzekerd, authentiek en on-brand.",
  Team: "Jullie team als één sterk geheel. Professioneel, toegankelijk, herkenbaar.",
  Lifestyle: "Jij in je element — op locatie, in beweging, in het echte leven.",
};

export default function PortfolioPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [activeCategory, setActiveCategory] = useState<Category>("Alles");
  const [expanded, setExpanded] = useState(false);

  const filtered =
    activeCategory === "Alles"
      ? allPhotos
      : allPhotos.filter((p) => p.cat === activeCategory);

  const visible = expanded ? filtered : filtered.slice(0, COLLAPSED_COUNT);
  const hasMore = filtered.length > COLLAPSED_COUNT;

  // Collapse back to top of section when collapsing
  function handleCollapse() {
    setExpanded(false);
    const el = document.getElementById("portfolio");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section
      ref={ref}
      id="portfolio"
      className="py-24 md:py-36"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
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
            {activeCategory !== "Alles" && (
              <p
                className="mt-4 text-base"
                style={{ fontFamily: "var(--font-dm-sans)", color: "var(--charcoal-light)", opacity: 0.75 }}
              >
                {catDescriptions[activeCategory]}
              </p>
            )}
          </motion.div>

          {/* Category filter tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setExpanded(false); }}
                className="px-5 py-2.5 text-sm tracking-wide transition-all duration-200"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  backgroundColor: activeCategory === cat ? "var(--charcoal)" : "transparent",
                  color: activeCategory === cat ? "var(--cream)" : "var(--charcoal)",
                  border: `1px solid ${activeCategory === cat ? "var(--charcoal)" : "var(--beige)"}`,
                }}
              >
                {cat}
                {cat !== "Alles" && (
                  <span className="ml-2 text-xs" style={{ opacity: activeCategory === cat ? 0.6 : 0.4 }}>
                    ({allPhotos.filter((p) => p.cat === cat).length})
                  </span>
                )}
              </button>
            ))}
          </motion.div>
        </div>

        {/* ── Masonry grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 space-y-3"
          >
            <AnimatePresence>
              {visible.map((photo, i) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="break-inside-avoid group relative overflow-hidden cursor-pointer"
                >
                  <div
                    className={`w-full ${photo.aspect} relative overflow-hidden`}
                    style={{ background: photo.gradient }}
                  >
                    <div
                      className="absolute inset-0 opacity-25"
                      style={{
                        background: `radial-gradient(ellipse at ${photo.glow}, rgba(184,146,106,0.55) 0%, transparent 65%)`,
                      }}
                    />
                    {/* Hover overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4"
                      style={{
                        background: "linear-gradient(to top, rgba(26,21,18,0.75) 0%, transparent 55%)",
                      }}
                    >
                      <span
                        className="text-xs tracking-wider uppercase"
                        style={{ color: "var(--cream)", fontFamily: "var(--font-dm-sans)" }}
                      >
                        {photo.cat}
                      </span>
                    </div>
                    {/* Scale on hover */}
                    <div
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                      style={{ background: photo.gradient }}
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>

        {/* ── Expand / collapse toggle ── */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex justify-center"
          >
            <button
              onClick={expanded ? handleCollapse : () => setExpanded(true)}
              className="inline-flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-wide border transition-all duration-300 group"
              style={{
                borderColor: "var(--charcoal)",
                color: "var(--charcoal)",
                fontFamily: "var(--font-dm-sans)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "var(--charcoal)";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--cream)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--charcoal)";
              }}
            >
              {expanded ? (
                <>
                  Minder tonen
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                  </svg>
                </>
              ) : (
                <>
                  Toon alle {filtered.length} foto&apos;s
                  <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </>
              )}
            </button>
          </motion.div>
        )}

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 pt-12 border-t"
          style={{ borderColor: "var(--beige)" }}
        >
          <p
            className="text-lg italic text-center sm:text-left"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--charcoal-light)" }}
          >
            Dit kan jouw merk zijn.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300"
            style={{
              backgroundColor: "var(--gold)",
              color: "var(--charcoal)",
              fontFamily: "var(--font-dm-sans)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--gold-light)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--gold)"; }}
          >
            Start jouw Full Imagery Plan
          </a>
        </motion.div>
      </div>
    </section>
  );
}
