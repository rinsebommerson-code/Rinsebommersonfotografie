"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

// Three wide cinematic photos — full viewport width, edge to edge
const panels = [
  {
    gradient: "linear-gradient(160deg, #2C2518 0%, #1A1512 40%, #0E0C08 100%)",
    glow: "38% 28%",
    label: "Personal Brand",
    flex: "flex-[2]",
  },
  {
    gradient: "linear-gradient(155deg, #1E2830 0%, #0E1420 40%, #08101A 100%)",
    glow: "52% 32%",
    label: "Team",
    flex: "flex-[1]",
  },
  {
    gradient: "linear-gradient(160deg, #281E0A 0%, #1A1208 40%, #0E0C06 100%)",
    glow: "45% 25%",
    label: "Lifestyle",
    flex: "flex-[2]",
  },
];

export default function PhotoBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  // Subtle parallax on the whole strip
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={ref}
      className="overflow-hidden"
      style={{ backgroundColor: "var(--charcoal)" }}
    >
      {/* Top label bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7 }}
        className="flex items-center justify-center gap-4 py-6 px-6"
        style={{ borderBottom: "1px solid rgba(250,248,245,0.06)" }}
      >
        <div className="h-px flex-1 max-w-24" style={{ backgroundColor: "rgba(184,146,106,0.3)" }} />
        <p
          className="text-xs tracking-[0.3em] uppercase"
          style={{ color: "var(--gold)", fontFamily: "var(--font-dm-sans)" }}
        >
          Selectie uit het werk
        </p>
        <div className="h-px flex-1 max-w-24" style={{ backgroundColor: "rgba(184,146,106,0.3)" }} />
      </motion.div>

      {/* ── Three cinematic panels ── */}
      <motion.div
        style={{ y }}
        className="flex h-[480px] md:h-[600px] lg:h-[680px]"
      >
        {panels.map((panel, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.1, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
            className={`${panel.flex} relative overflow-hidden group cursor-pointer`}
            style={{ background: panel.gradient }}
          >
            {/* Portrait lighting simulation */}
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{
                background: `radial-gradient(ellipse at ${panel.glow}, rgba(184,146,106,0.4) 0%, transparent 65%)`,
              }}
            />
            {/* Hover: slightly brighten */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: "rgba(184,146,106,0.08)" }}
            />
            {/* Divider line between panels */}
            {i < panels.length - 1 && (
              <div
                className="absolute top-0 right-0 w-px h-full"
                style={{ backgroundColor: "rgba(250,248,245,0.06)" }}
              />
            )}
            {/* Category label — bottom of panel */}
            <div
              className="absolute bottom-0 left-0 right-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "linear-gradient(to top, rgba(14,12,8,0.8) 0%, transparent 60%)",
              }}
            >
              <span
                className="text-xs tracking-[0.2em] uppercase"
                style={{ color: "var(--cream)", fontFamily: "var(--font-dm-sans)" }}
              >
                {panel.label}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="flex items-center justify-center py-8 px-6"
        style={{ borderTop: "1px solid rgba(250,248,245,0.06)" }}
      >
        <a
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm tracking-wide transition-colors duration-200 group"
          style={{ color: "rgba(250,248,245,0.6)", fontFamily: "var(--font-dm-sans)" }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "var(--gold)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(250,248,245,0.6)"; }}
        >
          Bekijk het volledige portfolio
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
