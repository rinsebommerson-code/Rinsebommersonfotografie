"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Strategiegesprek",
    subtitle: "Wat heb jij nodig?",
    body: "We starten met een diepgaand gesprek over jouw merk, doelen, doelgroep en wat voor beelden jij nodig hebt om die volgende stap te maken. Geen standaard vragenlijst — een echt strategisch gesprek.",
  },
  {
    number: "02",
    title: "Conceptontwikkeling",
    subtitle: "Het plan op papier",
    body: "Op basis van het gesprek werken we een volledig concept uit: welke beelden, welke sfeer, welke verhalen je foto's moeten vertellen. Je weet precies wat je krijgt — voor de shoot begint.",
  },
  {
    number: "03",
    title: "Styling, locatie & haar/make-up",
    subtitle: "Wij regelen alles",
    body: "Van de juiste locatie scouten tot styling-advies en een professionele haar & make-up artiest — wij coördineren alles. Jij hoeft alleen maar te verschijnen.",
  },
  {
    number: "04",
    title: "De shoot zelf",
    subtitle: "Jij in je element",
    body: "Een ontspannen, goed geregisseerde dag (of dagdeel) waar we werken volgens het plan. Je voelt je op je gemak, ziet er goed uit, en het resultaat spreekt voor zich.",
  },
  {
    number: "05",
    title: "Beeldredactie & levering",
    subtitle: "Klaar om te gebruiken",
    body: "Professionele nabewerking van alle geselecteerde beelden. Geleverd in meerdere formaten — klaar voor website, LinkedIn, social media en al je andere uitingen. Voor jaren.",
  },
];

const addons = [
  { label: "Locatie scouting", desc: "Op maat gezocht, niet willekeurig geboekt" },
  { label: "Styling advies", desc: "Wat je draagt bepaalt hoe je overkomt" },
  { label: "Haar & make-up", desc: "Professionele artiest erbij, geen gedoe" },
  { label: "Content strategie", desc: "Hoe je je beelden inzet na de shoot" },
  { label: "Extra shooting day", desc: "Voor uitgebreide projecten of teams" },
];

export default function Solution() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="werkwijze"
      className="py-24 md:py-36"
      style={{ backgroundColor: "var(--charcoal)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-medium tracking-[0.25em] uppercase mb-5"
            style={{ color: "var(--gold)", fontFamily: "var(--font-dm-sans)" }}
          >
            Het aanbod
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--cream)" }}
          >
            Het Full Imagery Plan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg leading-relaxed"
            style={{
              color: "rgba(250,248,245,0.7)",
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 300,
            }}
          >
            Dit is geen fotoshoot. Dit is een volledig visueel systeem — van
            strategie tot levering. Alles geregeld, niets overgelaten aan het
            toeval.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="space-y-px mb-20">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.1 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex gap-6 md:gap-12 p-6 md:p-8 border-b transition-colors duration-300"
              style={{
                borderColor: "rgba(250,248,245,0.1)",
              }}
            >
              <div
                className="text-4xl md:text-5xl font-light shrink-0 w-14 md:w-20 leading-none pt-1"
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: "rgba(184,146,106,0.3)",
                }}
              >
                {step.number}
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-3">
                  <h3
                    className="text-xl md:text-2xl"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      color: "var(--cream)",
                    }}
                  >
                    {step.title}
                  </h3>
                  <span
                    className="text-sm"
                    style={{
                      color: "var(--gold)",
                      fontFamily: "var(--font-dm-sans)",
                    }}
                  >
                    — {step.subtitle}
                  </span>
                </div>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    color: "rgba(250,248,245,0.65)",
                    fontFamily: "var(--font-dm-sans)",
                    fontWeight: 300,
                  }}
                >
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Addons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="p-8 md:p-12 border"
          style={{ borderColor: "rgba(184,146,106,0.3)", backgroundColor: "rgba(184,146,106,0.05)" }}
        >
          <h3
            className="text-2xl mb-2"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--cream)" }}
          >
            Uitbreidingen & add-ons
          </h3>
          <p
            className="text-sm mb-8"
            style={{ color: "rgba(250,248,245,0.6)", fontFamily: "var(--font-dm-sans)" }}
          >
            Standaard al veel inbegrepen — voor maatwerk voeg je toe wat bij
            jouw situatie past.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {addons.map((addon, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4"
                style={{ backgroundColor: "rgba(250,248,245,0.04)" }}
              >
                <div
                  className="mt-0.5 w-4 h-4 shrink-0 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--gold)" }}
                >
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1 4l2 2 4-4" stroke="var(--charcoal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div
                    className="text-sm font-medium"
                    style={{ color: "var(--cream)", fontFamily: "var(--font-dm-sans)" }}
                  >
                    {addon.label}
                  </div>
                  <div
                    className="text-xs mt-0.5"
                    style={{ color: "rgba(250,248,245,0.5)", fontFamily: "var(--font-dm-sans)" }}
                  >
                    {addon.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
