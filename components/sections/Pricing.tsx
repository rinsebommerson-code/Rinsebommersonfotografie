"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const included = [
  "Uitgebreide intake & beeldanalyse",
  "Volledig conceptontwikkeling & moodboard",
  "Locatie scouting op maat",
  "Styling advies & begeleiding",
  "Professionele haar & make-up artiest",
  "Shootdag (halve of hele dag)",
  "30+ professioneel nabewerkte beelden",
  "Levering in meerdere formaten (web, print, social)",
  "Persoonlijk overdrachtsgesprek",
];

const packages = [
  {
    name: "Essentials",
    price: "€1.495",
    description: "Voor de ondernemer die wil starten met een sterke visuele basis.",
    features: [
      "Intake & Beeldanalyse",
      "Conceptontwikkeling",
      "Halve shootdag",
      "15 nabewerkte beelden",
      "Styling advies",
    ],
    cta: "Begin hier",
    highlight: false,
  },
  {
    name: "Full Imagery Plan",
    price: "€2.750",
    description: "Het complete pakket — van strategie tot een complete beeldbank die jaren meegaat.",
    features: [
      "Alles uit Essentials",
      "Hele shootdag",
      "30+ nabewerkte beelden",
      "Haar & make-up inbegrepen",
      "Locatie scouting",
      "Content strategie sessie",
    ],
    cta: "Dit wil ik",
    highlight: true,
  },
  {
    name: "Team & Brand",
    price: "Op aanvraag",
    description: "Voor teams van 2+ mensen of uitgebreide merkfotografie trajecten.",
    features: [
      "Alles uit Full Imagery Plan",
      "Meerdere gezichten / locaties",
      "Uitgebreide conceptontwikkeling",
      "Maatwerk tijdlijn",
      "Dedicated projectbegeleiding",
    ],
    cta: "Neem contact op",
    highlight: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="investering"
      className="py-24 md:py-36"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-4"
        >
          <p
            className="text-xs font-medium tracking-[0.25em] uppercase mb-5"
            style={{ color: "var(--gold)", fontFamily: "var(--font-dm-sans)" }}
          >
            Investering
          </p>
          <h2
            className="text-4xl md:text-5xl leading-tight mb-4"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--charcoal)" }}
          >
            Helder geprijsd,{" "}
            <em>geen verrassingen</em>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-base leading-relaxed mb-16 max-w-xl"
          style={{
            fontFamily: "var(--font-dm-sans)",
            color: "var(--charcoal-light)",
            opacity: 0.75,
          }}
        >
          Geen verborgen kosten. Wat je hieronder ziet is wat je betaalt — inclusief
          alle logistiek, haar & make-up, en professionele nabewerking.
        </motion.p>

        {/* Packages */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.15 }}
              className="relative flex flex-col p-8"
              style={{
                backgroundColor: pkg.highlight ? "var(--charcoal)" : "var(--warm-white)",
                border: `1px solid ${pkg.highlight ? "var(--gold)" : "var(--beige)"}`,
              }}
            >
              {pkg.highlight && (
                <div
                  className="absolute -top-3 left-8 px-3 py-1 text-xs font-medium tracking-wider"
                  style={{
                    backgroundColor: "var(--gold)",
                    color: "var(--charcoal)",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  MEEST GEKOZEN
                </div>
              )}

              <div className="mb-6">
                <h3
                  className="text-xl mb-2"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    color: pkg.highlight ? "var(--cream)" : "var(--charcoal)",
                  }}
                >
                  {pkg.name}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    color: pkg.highlight ? "rgba(250,248,245,0.65)" : "var(--charcoal-light)",
                    opacity: pkg.highlight ? 1 : 0.75,
                  }}
                >
                  {pkg.description}
                </p>
              </div>

              <div
                className="text-3xl md:text-4xl mb-6"
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: pkg.highlight ? "var(--gold)" : "var(--charcoal)",
                }}
              >
                {pkg.price}
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {pkg.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-3">
                    <div
                      className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: pkg.highlight ? "var(--gold)" : "var(--gold-pale)",
                      }}
                    >
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path
                          d="M1 4l2 2 4-4"
                          stroke={pkg.highlight ? "var(--charcoal)" : "var(--gold)"}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span
                      className="text-sm"
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        color: pkg.highlight ? "rgba(250,248,245,0.8)" : "var(--charcoal)",
                      }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="block text-center px-6 py-3.5 text-sm font-medium tracking-wide transition-all duration-300"
                style={{
                  backgroundColor: pkg.highlight ? "var(--gold)" : "transparent",
                  color: pkg.highlight ? "var(--charcoal)" : "var(--charcoal)",
                  border: `1px solid ${pkg.highlight ? "var(--gold)" : "var(--charcoal)"}`,
                  fontFamily: "var(--font-dm-sans)",
                }}
                onMouseEnter={(e) => {
                  if (!pkg.highlight) {
                    e.currentTarget.style.backgroundColor = "var(--charcoal)";
                    e.currentTarget.style.color = "var(--cream)";
                  } else {
                    e.currentTarget.style.backgroundColor = "var(--gold-light)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!pkg.highlight) {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "var(--charcoal)";
                  } else {
                    e.currentTarget.style.backgroundColor = "var(--gold)";
                  }
                }}
              >
                {pkg.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* What's always included */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="p-8 md:p-12"
          style={{ backgroundColor: "var(--gold-pale)" }}
        >
          <h3
            className="text-2xl mb-6"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--charcoal)" }}
          >
            Altijd inbegrepen in het Full Imagery Plan
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {included.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div
                  className="mt-0.5 w-4 h-4 shrink-0 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--gold)" }}
                >
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1 4l2 2 4-4" stroke="var(--charcoal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span
                  className="text-sm"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "var(--charcoal)" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
