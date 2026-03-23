"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-end overflow-hidden"
      style={{ backgroundColor: "var(--charcoal)" }}
    >
      {/* Hero background image — gekleurd, gespiegeld, koppen onder de nav */}
      <div className="absolute left-0 right-0 z-0" style={{ top: "0", bottom: "0" }}>
        <Image
          src="/images/portfolio/Output/Rinse_bommerson Groot 14.jpg"
          alt="Rinse Bommerson Fotografie – merkfotograaf"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "72% 0%", transform: "scaleX(-1)" }}
        />
        {/* Top gradient — bedekt gezicht achter nav, versmelt met charcoal achtergrond */}
        <div
          className="absolute top-0 left-0 right-0"
          style={{
            height: "140px",
            background: "linear-gradient(to bottom, rgba(26,21,18,1) 0%, rgba(26,21,18,0.85) 55%, transparent 100%)",
          }}
        />
        {/* Left-to-right gradient: opaque on text side, open on person side */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(26,21,18,1) 0%, rgba(26,21,18,0.95) 30%, rgba(26,21,18,0.5) 52%, rgba(26,21,18,0.05) 72%, transparent 100%)",
          }}
        />
        {/* Bottom grounding gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(26,21,18,0.85) 0%, rgba(26,21,18,0.2) 20%, transparent 40%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-24 pt-40 md:pb-32 md:pt-48">
        <div className="max-w-3xl">
          {/* Tag line */}
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-xs font-medium tracking-[0.25em] uppercase mb-6"
            style={{ color: "var(--gold)", fontFamily: "var(--font-dm-sans)" }}
          >
            Full Imagery Plan · Visuele merkfotografie
          </motion.p>

          {/* Main headline */}
          <motion.h1
            custom={0.15}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6"
            style={{
              color: "var(--cream)",
              fontFamily: "var(--font-playfair)",
              fontWeight: 400,
            }}
          >
            Laat een{" "}
            <span style={{ color: "var(--gold-light)", fontStyle: "italic" }}>onvergetelijke</span>{" "}
            indruk achter bij je{" "}
            <span style={{ color: "var(--gold-light)", fontStyle: "italic" }}>droomklant</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            custom={0.3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
            style={{
              color: "rgba(250,248,245,0.75)",
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 300,
            }}
          >
            Je reis als ondernemer heeft je laten groeien tot wie je nu bent. Het wordt tijd dat jouw foto&apos;s dat ook gaan laten zien.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={0.45}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide transition-all duration-300 group"
              style={{
                backgroundColor: "var(--gold)",
                color: "var(--charcoal)",
                fontFamily: "var(--font-dm-sans)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--gold-light)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--gold)";
              }}
            >
              Vraag je gratis beeldanalyse aan
              <svg
                className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide border transition-all duration-300"
              style={{
                borderColor: "rgba(250,248,245,0.3)",
                color: "var(--cream)",
                fontFamily: "var(--font-dm-sans)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--gold)";
                e.currentTarget.style.color = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(250,248,245,0.3)";
                e.currentTarget.style.color = "var(--cream)";
              }}
            >
              Bekijk het werk
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          custom={0.8}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="absolute bottom-8 right-6 md:right-12 flex flex-col items-center gap-2"
        >
          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{
              color: "rgba(250,248,245,0.4)",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-10"
            style={{ backgroundColor: "rgba(250,248,245,0.3)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
