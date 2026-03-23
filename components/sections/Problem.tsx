"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const painPoints = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 10l8 8M18 10l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Geen beelden die bij je niveau passen",
    body: "Je bent gegroeid — je tarieven, je klanten, je aanpak. Maar je foto's zijn nog van toen je net begon.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="1" y="6" width="26" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 6V4a5 5 0 0110 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="15" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Je weet niet wat je moet dragen, staan of uitstralen",
    body: "Styling, locatie, houding, licht — te veel keuzes. Je wil goede beelden maar weet niet hoe je dat aanpakt.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 2L4 8v12l10 6 10-6V8L14 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M14 2v18M4 8l10 6 10-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Een gewone fotoshoot voelt niet meer genoeg",
    body: "Twee uur in een studio, zeven dezelfde poses, losstaande bestanden. Jij hebt een compleet beeldsysteem nodig.",
  },
];

// Four editorial-style photos shown between headline and cards
const stripPhotos = [
  { aspect: "aspect-[2/3]", src: "/images/portfolio/Output/DSCF2062klein.jpg" },
  { aspect: "aspect-[3/4]", src: "/images/portfolio/Output/Maruschka Klein 5.jpg" },
  { aspect: "aspect-[2/3]", src: "/images/portfolio/portfolio-rinse/13-03-2021 - Beautyshoot Portfolio Senja En Olga1684Insta.jpg" },
  { aspect: "aspect-[3/4]", src: "/images/portfolio/batavia-1894/DSC03253Insta.jpg" },
];

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 md:py-36"
      style={{ backgroundColor: "var(--warm-white)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Opening headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          className="max-w-2xl mb-14"
        >
          <p
            className="text-xs font-medium tracking-[0.25em] uppercase mb-5"
            style={{ color: "var(--gold)", fontFamily: "var(--font-dm-sans)" }}
          >
            Herkenbaar?
          </p>
          <h2
            className="text-4xl md:text-5xl leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--charcoal)" }}
          >
            Je bent goed in wat je doet. Maar je foto&apos;s{" "}
            <em>vertellen dat verhaal nog niet.</em>
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--charcoal-light)", fontFamily: "var(--font-dm-sans)", opacity: 0.8 }}
          >
            Je omzet groeit, je klanten zijn tevreden, je expertise is er. Maar wie jou online
            tegenkomt, ziet dat nog niet.
          </p>
        </motion.div>

        {/* ── Photo strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-20"
        >
          {stripPhotos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 + i * 0.1 }}
              className={`w-full ${photo.aspect} relative overflow-hidden group`}
            >
              <Image
                src={photo.src}
                alt="Portfolio"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "rgba(184,146,106,0.08)" }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Pain point cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
              className="p-8 border"
              style={{ borderColor: "var(--beige)", backgroundColor: "var(--cream)" }}
            >
              <div className="mb-5" style={{ color: "var(--gold)" }}>{point.icon}</div>
              <h3
                className="text-xl mb-4 leading-snug"
                style={{ fontFamily: "var(--font-playfair)", color: "var(--charcoal)" }}
              >
                {point.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)", color: "var(--charcoal-light)", opacity: 0.8 }}
              >
                {point.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bridge quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center text-lg font-medium"
          style={{ fontFamily: "var(--font-playfair)", color: "var(--charcoal)", fontStyle: "italic" }}
        >
          &ldquo;Jij bent de expert. Wij zorgen dat dat ook{" "}
          <span style={{ color: "var(--gold)" }}>te zien</span> is.&rdquo;
        </motion.p>
      </div>
    </section>
  );
}
