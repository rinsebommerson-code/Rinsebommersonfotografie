"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

type Category = "Alles" | "Personal Brand" | "Team" | "Lifestyle";

const CATEGORIES: Category[] = ["Alles", "Personal Brand", "Team", "Lifestyle"];

const allPhotos = [
  // Personal Brand — 18
  { id: 1,  cat: "Personal Brand", aspect: "aspect-[3/4]",  src: "/images/portfolio/Output/Rinse_bommerson Groot 2.jpg" },
  { id: 2,  cat: "Personal Brand", aspect: "aspect-[4/5]",  src: "/images/portfolio/Output/Rinse_bommerson Groot 14.jpg" },
  { id: 3,  cat: "Personal Brand", aspect: "aspect-square", src: "/images/portfolio/Output/Rinse_bommerson Groot 15.jpg" },
  { id: 4,  cat: "Personal Brand", aspect: "aspect-[3/4]",  src: "/images/portfolio/Output/Bert PNG bijgesneden.jpg" },
  { id: 5,  cat: "Personal Brand", aspect: "aspect-[2/3]",  src: "/images/portfolio/Output/10-04-2021 - Jonah - Book-king.nl0797.jpg" },
  { id: 6,  cat: "Personal Brand", aspect: "aspect-[4/3]",  src: "/images/portfolio/Output/Male shoot klein 13.jpg" },
  { id: 7,  cat: "Personal Brand", aspect: "aspect-[3/4]",  src: "/images/portfolio/Output/Maruschka Klein 2.jpg" },
  { id: 8,  cat: "Personal Brand", aspect: "aspect-square", src: "/images/portfolio/portfolio-rinse/13-03-2021 - Beautyshoot Portfolio Senja En Olga0078Insta.jpg" },
  { id: 9,  cat: "Personal Brand", aspect: "aspect-[4/5]",  src: "/images/portfolio/Output/Rinse_bommerson Groot 28.jpg" },
  { id: 10, cat: "Personal Brand", aspect: "aspect-[3/4]",  src: "/images/portfolio/Output/Rinse_bommerson 8.jpg" },
  { id: 11, cat: "Personal Brand", aspect: "aspect-[2/3]",  src: "/images/portfolio/Output/Rinse_bommerson 12 2.jpg" },
  { id: 12, cat: "Personal Brand", aspect: "aspect-square", src: "/images/portfolio/Output/rinse_bommerson 12.jpg" },
  { id: 13, cat: "Personal Brand", aspect: "aspect-[3/4]",  src: "/images/portfolio/Output/Maruschka Klein 13.jpg" },
  { id: 14, cat: "Personal Brand", aspect: "aspect-[4/5]",  src: "/images/portfolio/portfolio-rinse/13-03-2021 - Beautyshoot Portfolio Senja En Olga1547Insta.jpg" },
  { id: 15, cat: "Personal Brand", aspect: "aspect-[3/4]",  src: "/images/portfolio/portfolio-rinse/13-03-2021 - Beautyshoot Portfolio Senja En Olga0283Insta.jpg" },
  { id: 16, cat: "Personal Brand", aspect: "aspect-[4/3]",  src: "/images/portfolio/Output/Male shoot klein 17.jpg" },
  { id: 17, cat: "Personal Brand", aspect: "aspect-[3/4]",  src: "/images/portfolio/Output/DSC07849.jpg" },
  { id: 18, cat: "Personal Brand", aspect: "aspect-square", src: "/images/portfolio/portfolio-rinse/13-03-2021 - Beautyshoot Portfolio Senja En Olga0121Insta.jpg" },
  // Team — 14
  { id: 19, cat: "Team", aspect: "aspect-[4/3]",  src: "/images/portfolio/Output/28-11-2020 - Holly Steel1061 Klein.jpg" },
  { id: 20, cat: "Team", aspect: "aspect-[3/4]",  src: "/images/portfolio/Output/28-11-2020 - Holly Steel1079 Klein.jpg" },
  { id: 21, cat: "Team", aspect: "aspect-[4/3]",  src: "/images/portfolio/Output/28-11-2020 - Holly Steel2154 Klein.jpg" },
  { id: 22, cat: "Team", aspect: "aspect-[3/4]",  src: "/images/portfolio/Output/PresidentialsAmsterdam2020web 38.jpg" },
  { id: 23, cat: "Team", aspect: "aspect-[4/3]",  src: "/images/portfolio/Output/PresidentialsAmsterdam2020web 41.jpg" },
  { id: 24, cat: "Team", aspect: "aspect-[2/3]",  src: "/images/portfolio/portfolio-rinse/17-04-2021 - Denise en Benthe Beauty shoot0984.jpg" },
  { id: 25, cat: "Team", aspect: "aspect-[3/4]",  src: "/images/portfolio/portfolio-rinse/19-04-2021 - Fashion shoot Marlies & Britt0833.jpg" },
  { id: 26, cat: "Team", aspect: "aspect-[4/3]",  src: "/images/portfolio/Output/22-11-20201081 1 Klein.jpg" },
  { id: 27, cat: "Team", aspect: "aspect-square", src: "/images/portfolio/Output/Mars & Rinse Version 2 3.jpg" },
  { id: 28, cat: "Team", aspect: "aspect-[4/3]",  src: "/images/portfolio/Output/Familie Bommerson & Aanhang shoot 27.jpg" },
  { id: 29, cat: "Team", aspect: "aspect-[3/4]",  src: "/images/portfolio/portfolio-rinse/17-04-2021 - Denise en Benthe Beauty shoot1421.jpg" },
  { id: 30, cat: "Team", aspect: "aspect-[4/5]",  src: "/images/portfolio/portfolio-rinse/17-04-2021 - Denise en Benthe Beauty shoot2112.jpg" },
  { id: 31, cat: "Team", aspect: "aspect-[3/4]",  src: "/images/portfolio/portfolio-rinse/19-04-2021 - Fashion shoot Marlies & Britt1274 1.jpg" },
  { id: 32, cat: "Team", aspect: "aspect-[4/5]",  src: "/images/portfolio/portfolio-rinse/17-04-2021 - Denise en Benthe Beauty shoot1007.jpg" },
  // Lifestyle — 18
  { id: 33, cat: "Lifestyle", aspect: "aspect-[3/4]",  src: "/images/portfolio/batavia-1894/DSC03125Insta.jpg" },
  { id: 34, cat: "Lifestyle", aspect: "aspect-[4/3]",  src: "/images/portfolio/batavia-1894/DSC03388Insta.jpg" },
  { id: 35, cat: "Lifestyle", aspect: "aspect-square", src: "/images/portfolio/batavia-1894/DSC03486Insta.jpg" },
  { id: 36, cat: "Lifestyle", aspect: "aspect-[3/4]",  src: "/images/portfolio/batavia-1894/DSC03652Insta.jpg" },
  { id: 37, cat: "Lifestyle", aspect: "aspect-[4/3]",  src: "/images/portfolio/Output/Daphne Rose Kaarsen.jpg" },
  { id: 38, cat: "Lifestyle", aspect: "aspect-[2/3]",  src: "/images/portfolio/Output/Belle 3.jpg" },
  { id: 39, cat: "Lifestyle", aspect: "aspect-[4/3]",  src: "/images/portfolio/Output/Oogduyne 23.jpg" },
  { id: 40, cat: "Lifestyle", aspect: "aspect-[3/4]",  src: "/images/portfolio/Output/Lis Salsa 59.jpg" },
  { id: 41, cat: "Lifestyle", aspect: "aspect-[4/5]",  src: "/images/portfolio/batavia-1894/DSC03174Insta.jpg" },
  { id: 42, cat: "Lifestyle", aspect: "aspect-[3/4]",  src: "/images/portfolio/batavia-1894/DSC03253Insta.jpg" },
  { id: 43, cat: "Lifestyle", aspect: "aspect-[4/3]",  src: "/images/portfolio/batavia-1894/DSC03209Insta.jpg" },
  { id: 44, cat: "Lifestyle", aspect: "aspect-square", src: "/images/portfolio/batavia-1894/DSC03337Insta.jpg" },
  { id: 45, cat: "Lifestyle", aspect: "aspect-[3/4]",  src: "/images/portfolio/batavia-1894/DSC03574Insta.jpg" },
  { id: 46, cat: "Lifestyle", aspect: "aspect-[4/3]",  src: "/images/portfolio/batavia-1894/DSC03682Insta.jpg" },
  { id: 47, cat: "Lifestyle", aspect: "aspect-[3/4]",  src: "/images/portfolio/batavia-1894/DSC03741Insta.jpg" },
  { id: 48, cat: "Lifestyle", aspect: "aspect-[4/5]",  src: "/images/portfolio/Output/Oogduyne 42.jpg" },
  { id: 49, cat: "Lifestyle", aspect: "aspect-[3/4]",  src: "/images/portfolio/portfolio-rinse/_DSC2525zwart wit web jpeg.jpg" },
  { id: 50, cat: "Lifestyle", aspect: "aspect-[4/5]",  src: "/images/portfolio/portfolio-rinse/_DSC2559zwart wit web jpeg.jpg" },
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
                  >
                    {/* Actual photo */}
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                      <Image
                        src={photo.src}
                        alt={photo.cat}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      />
                    </div>
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
