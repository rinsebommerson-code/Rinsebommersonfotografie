"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

type Category = "Alles" | "Personal Brand" | "Team" | "Lifestyle";

const categories: Category[] = ["Alles", "Personal Brand", "Team", "Lifestyle"];

// Extended portfolio — replace gradient divs with real next/image when photos are available
const allPhotos = [
  // Personal Brand — 8 items
  { id: 1,  cat: "Personal Brand", aspect: "aspect-[3/4]",   gradient: "linear-gradient(160deg, #2C2518 0%, #1A1512 100%)" },
  { id: 2,  cat: "Personal Brand", aspect: "aspect-[4/5]",   gradient: "linear-gradient(155deg, #382C1C 0%, #2A1E10 100%)" },
  { id: 3,  cat: "Personal Brand", aspect: "aspect-square",  gradient: "linear-gradient(150deg, #241C14 0%, #181210 100%)" },
  { id: 4,  cat: "Personal Brand", aspect: "aspect-[3/4]",   gradient: "linear-gradient(165deg, #301E10 0%, #1C1408 100%)" },
  { id: 5,  cat: "Personal Brand", aspect: "aspect-[2/3]",   gradient: "linear-gradient(145deg, #3C2A18 0%, #2A1C0E 100%)" },
  { id: 6,  cat: "Personal Brand", aspect: "aspect-[4/3]",   gradient: "linear-gradient(160deg, #281C10 0%, #1C1208 100%)" },
  { id: 7,  cat: "Personal Brand", aspect: "aspect-[3/4]",   gradient: "linear-gradient(155deg, #342418 0%, #241810 100%)" },
  { id: 8,  cat: "Personal Brand", aspect: "aspect-square",  gradient: "linear-gradient(150deg, #201810 0%, #140E08 100%)" },
  // Team — 7 items
  { id: 9,  cat: "Team", aspect: "aspect-[4/3]",   gradient: "linear-gradient(160deg, #1A2028 0%, #111820 100%)" },
  { id: 10, cat: "Team", aspect: "aspect-[3/4]",   gradient: "linear-gradient(155deg, #202830 0%, #141C24 100%)" },
  { id: 11, cat: "Team", aspect: "aspect-square",  gradient: "linear-gradient(150deg, #161E26 0%, #0E161E 100%)" },
  { id: 12, cat: "Team", aspect: "aspect-[4/3]",   gradient: "linear-gradient(165deg, #1C2430 0%, #101820 100%)" },
  { id: 13, cat: "Team", aspect: "aspect-[3/4]",   gradient: "linear-gradient(145deg, #182028 0%, #0E1620 100%)" },
  { id: 14, cat: "Team", aspect: "aspect-[2/3]",   gradient: "linear-gradient(160deg, #1E2830 0%, #121E28 100%)" },
  { id: 15, cat: "Team", aspect: "aspect-[4/3]",   gradient: "linear-gradient(155deg, #141C24 0%, #0A121C 100%)" },
  // Lifestyle — 8 items
  { id: 16, cat: "Lifestyle", aspect: "aspect-[3/4]",   gradient: "linear-gradient(160deg, #201C10 0%, #141008 100%)" },
  { id: 17, cat: "Lifestyle", aspect: "aspect-[4/3]",   gradient: "linear-gradient(155deg, #2A2418 0%, #1C1810 100%)" },
  { id: 18, cat: "Lifestyle", aspect: "aspect-square",  gradient: "linear-gradient(150deg, #281E0C 0%, #1A1408 100%)" },
  { id: 19, cat: "Lifestyle", aspect: "aspect-[3/4]",   gradient: "linear-gradient(165deg, #241A0A 0%, #181008 100%)" },
  { id: 20, cat: "Lifestyle", aspect: "aspect-[4/3]",   gradient: "linear-gradient(145deg, #2E2210 0%, #201808 100%)" },
  { id: 21, cat: "Lifestyle", aspect: "aspect-[2/3]",   gradient: "linear-gradient(160deg, #261C0E 0%, #1A120A 100%)" },
  { id: 22, cat: "Lifestyle", aspect: "aspect-[3/4]",   gradient: "linear-gradient(155deg, #2C200E 0%, #1E1608 100%)" },
  { id: 23, cat: "Lifestyle", aspect: "aspect-square",  gradient: "linear-gradient(150deg, #221A0C 0%, #16100A 100%)" },
];

const catDescriptions: Record<string, string> = {
  "Personal Brand": "Beelden die jou als expert neerzetten. Zelfverzekerd, authentiek en on-brand.",
  Team: "Jullie team als één sterk geheel. Professioneel, toegankelijk, herkenbaar.",
  Lifestyle: "Jij in je element — op locatie, in beweging, in het echte leven.",
};

function PortfolioContent() {
  const searchParams = useSearchParams();
  const catParam = searchParams.get("cat");

  const initialCat: Category = (() => {
    if (catParam === "personal-brand") return "Personal Brand";
    if (catParam === "team") return "Team";
    if (catParam === "lifestyle") return "Lifestyle";
    return "Alles";
  })();

  const [activeCategory, setActiveCategory] = useState<Category>(initialCat);

  useEffect(() => {
    const c = searchParams.get("cat");
    if (c === "personal-brand") setActiveCategory("Personal Brand");
    else if (c === "team") setActiveCategory("Team");
    else if (c === "lifestyle") setActiveCategory("Lifestyle");
    else setActiveCategory("Alles");
  }, [searchParams]);

  const filtered =
    activeCategory === "Alles"
      ? allPhotos
      : allPhotos.filter((p) => p.cat === activeCategory);

  return (
    <div>
      {/* Page hero */}
      <div
        className="pt-36 pb-16 md:pt-44 md:pb-20 px-6"
        style={{ backgroundColor: "var(--warm-white)" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <Link
              href="/"
              className="text-xs tracking-wide transition-colors duration-200"
              style={{ color: "var(--charcoal-light)", fontFamily: "var(--font-dm-sans)", opacity: 0.6 }}
            >
              Home
            </Link>
            <span style={{ color: "var(--soft-beige)" }}>→</span>
            <span
              className="text-xs tracking-wide"
              style={{ color: "var(--gold)", fontFamily: "var(--font-dm-sans)" }}
            >
              Portfolio
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <p
                className="text-xs font-medium tracking-[0.25em] uppercase mb-4"
                style={{ color: "var(--gold)", fontFamily: "var(--font-dm-sans)" }}
              >
                Volledig portfolio
              </p>
              <h1
                className="text-5xl md:text-6xl leading-tight"
                style={{ fontFamily: "var(--font-playfair)", color: "var(--charcoal)" }}
              >
                Het werk
              </h1>
              {activeCategory !== "Alles" && (
                <p
                  className="mt-4 text-base"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    color: "var(--charcoal-light)",
                    opacity: 0.75,
                  }}
                >
                  {catDescriptions[activeCategory]}
                </p>
              )}
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
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
                    <span
                      className="ml-2 text-xs"
                      style={{
                        opacity: activeCategory === cat ? 0.6 : 0.4,
                      }}
                    >
                      ({allPhotos.filter((p) => p.cat === cat).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Full grid */}
      <div
        className="py-12 md:py-16 px-6"
        style={{ backgroundColor: "var(--cream)" }}
      >
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 space-y-3"
            >
              {filtered.map((photo, i) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.04 }}
                  className="break-inside-avoid group relative overflow-hidden cursor-pointer"
                >
                  <div
                    className={`w-full ${photo.aspect} relative overflow-hidden`}
                    style={{ background: photo.gradient }}
                  >
                    {/* Warm glow */}
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        background:
                          "radial-gradient(ellipse at 45% 30%, rgba(184,146,106,0.6) 0%, transparent 65%)",
                      }}
                    />
                    {/* Hover overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(26,21,18,0.75) 0%, transparent 55%)",
                      }}
                    >
                      <div>
                        <span
                          className="text-xs tracking-wider uppercase block"
                          style={{ color: "var(--cream)", fontFamily: "var(--font-dm-sans)" }}
                        >
                          {photo.cat}
                        </span>
                      </div>
                    </div>
                    {/* Subtle scale on hover */}
                    <div
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                      style={{ background: photo.gradient }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Count + CTA */}
          <div
            className="mt-14 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 border-t"
            style={{ borderColor: "var(--beige)" }}
          >
            <p
              className="text-sm"
              style={{
                color: "var(--charcoal-light)",
                opacity: 0.55,
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              {filtered.length} beelden weergegeven
              {activeCategory !== "Alles" && ` in ${activeCategory}`}
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300"
              style={{
                backgroundColor: "var(--gold)",
                color: "var(--charcoal)",
                fontFamily: "var(--font-dm-sans)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--gold-light)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--gold)"; }}
            >
              Start jouw Full Imagery Plan
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioPageWrapper() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "var(--cream)" }}>
        <div className="text-sm" style={{ color: "var(--charcoal-light)", fontFamily: "var(--font-dm-sans)", opacity: 0.5 }}>
          Laden…
        </div>
      </div>
    }>
      <PortfolioContent />
    </Suspense>
  );
}
