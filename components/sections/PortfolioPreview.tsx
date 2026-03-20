"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const categories = [
  {
    slug: "personal-brand",
    label: "Personal Brand",
    description:
      "Beelden die jou als expert neerzetten. Zelfverzekerd, authentiek en on-brand.",
    photos: [
      { aspect: "aspect-[3/4]", gradient: "linear-gradient(160deg, #2C2518 0%, #1A1512 100%)" },
      { aspect: "aspect-[4/3]", gradient: "linear-gradient(160deg, #382C1C 0%, #2A1E10 100%)" },
      { aspect: "aspect-square", gradient: "linear-gradient(160deg, #241C14 0%, #181210 100%)" },
    ],
  },
  {
    slug: "team",
    label: "Team",
    description:
      "Jullie team als één sterk geheel. Professioneel, toegankelijk, herkenbaar.",
    photos: [
      { aspect: "aspect-[4/3]", gradient: "linear-gradient(160deg, #1A2028 0%, #111820 100%)" },
      { aspect: "aspect-[3/4]", gradient: "linear-gradient(160deg, #202830 0%, #141C24 100%)" },
      { aspect: "aspect-square", gradient: "linear-gradient(160deg, #161E26 0%, #0E161E 100%)" },
    ],
  },
  {
    slug: "lifestyle",
    label: "Lifestyle",
    description:
      "Jij in je element — op locatie, in beweging, in het echte leven.",
    photos: [
      { aspect: "aspect-[3/4]", gradient: "linear-gradient(160deg, #201C10 0%, #141008 100%)" },
      { aspect: "aspect-[4/3]", gradient: "linear-gradient(160deg, #2A2418 0%, #1C1810 100%)" },
      { aspect: "aspect-square", gradient: "linear-gradient(160deg, #281E0C 0%, #1A1408 100%)" },
    ],
  },
];

export default function PortfolioPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="portfolio"
      className="py-24 md:py-36"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-medium tracking-wide transition-colors duration-200 group"
              style={{ color: "var(--charcoal)", fontFamily: "var(--font-dm-sans)" }}
            >
              Bekijk het volledige portfolio
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Category columns */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + ci * 0.15 }}
              className="group"
            >
              {/* Category label */}
              <div className="flex items-center justify-between mb-4">
                <h3
                  className="text-lg"
                  style={{ fontFamily: "var(--font-playfair)", color: "var(--charcoal)" }}
                >
                  {cat.label}
                </h3>
                <Link
                  href={`/portfolio?cat=${cat.slug}`}
                  className="text-xs tracking-wide transition-colors duration-200 flex items-center gap-1"
                  style={{ color: "var(--gold)", fontFamily: "var(--font-dm-sans)" }}
                >
                  Alles
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* 3 photo thumbnails stacked */}
              <div className="space-y-2">
                {cat.photos.map((photo, pi) => (
                  <Link key={pi} href={`/portfolio?cat=${cat.slug}`} className="block overflow-hidden">
                    <div
                      className={`w-full ${photo.aspect} relative overflow-hidden transition-transform duration-500 group-hover:scale-[1.01]`}
                      style={{ background: photo.gradient }}
                    >
                      {/* Warm glow hint */}
                      <div
                        className="absolute inset-0 opacity-25"
                        style={{
                          background:
                            "radial-gradient(ellipse at 45% 30%, rgba(184,146,106,0.5) 0%, transparent 65%)",
                        }}
                      />
                      {/* Hover overlay */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(26,21,18,0.7) 0%, transparent 60%)",
                        }}
                      >
                        <span
                          className="text-xs tracking-wider uppercase"
                          style={{ color: "var(--cream)", fontFamily: "var(--font-dm-sans)" }}
                        >
                          {cat.label}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Category description */}
              <p
                className="mt-4 text-sm leading-relaxed"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  color: "var(--charcoal-light)",
                  opacity: 0.7,
                }}
              >
                {cat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 pt-12 border-t"
          style={{ borderColor: "var(--beige)" }}
        >
          <p
            className="text-lg italic text-center sm:text-left"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--charcoal-light)" }}
          >
            Dit kan jouw merk zijn.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium tracking-wide border transition-all duration-300"
              style={{
                borderColor: "var(--charcoal)",
                color: "var(--charcoal)",
                fontFamily: "var(--font-dm-sans)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--charcoal)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--cream)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--charcoal)";
              }}
            >
              Volledig portfolio bekijken
            </Link>
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
