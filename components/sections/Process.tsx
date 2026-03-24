"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Intake & Beeldanalyse",
    body: "Je vult het intakeformulier in met je huidige situatie, je doelen en je website/socials. Ik analyseer je merkpresentatie en koppel persoonlijk terug — zo starten we al met inzicht.",
    duration: "± 2 werkdagen",
  },
  {
    number: "02",
    title: "Conceptontwikkeling",
    body: "Op basis van jouw verhaal ontwikkelen we een volledig visueel concept. Sfeer, kleuren, verhalen — alles krijgt richting.",
    duration: "± 1 week",
  },
  {
    number: "03",
    title: "Voorbereiding",
    body: "Locatie geboekt, styling klaar, haar & make-up geregeld. Jij hoeft alleen maar te bevestigen en te verschijnen.",
    duration: "± 1-2 weken",
  },
  {
    number: "04",
    title: "Shootdag",
    body: "Een ontspannen, goed geregisseerde dag. Wij leiden, jij schittert. Het resultaat? Beelden die precies vertellen wat ze moeten vertellen.",
    duration: "Halve of hele dag",
  },
  {
    number: "05",
    title: "Levering",
    body: "Alle beelden professioneel nabewerkt en geleverd in meerdere formaten. Klaar voor direct gebruik op al je kanalen.",
    duration: "Binnen 2 weken",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="py-24 md:py-36 overflow-hidden"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-xl mb-16 md:mb-20"
        >
          <p
            className="text-xs font-medium tracking-[0.25em] uppercase mb-5"
            style={{ color: "var(--gold)", fontFamily: "var(--font-dm-sans)" }}
          >
            Hoe het werkt
          </p>
          <h2
            className="text-4xl md:text-5xl leading-tight"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--charcoal)" }}
          >
            Van visuele strategie{" "}
            <em>tot klaar voor gebruik</em>
          </h2>
        </motion.div>

        {/* Timeline — horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div
            className="hidden md:block absolute top-[52px] left-0 right-0 h-px"
            style={{ backgroundColor: "var(--beige)" }}
          />

          <div className="grid md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.12 }}
                className="relative flex md:flex-col gap-4 md:gap-0"
              >
                {/* Number bubble */}
                <div className="relative z-10 shrink-0 md:mb-8">
                  <div
                    className="w-[52px] h-[52px] rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-300"
                    style={{
                      backgroundColor: "var(--cream)",
                      color: "var(--charcoal)",
                      border: `2px solid var(--beige)`,
                      fontFamily: "var(--font-dm-sans)",
                    }}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Vertical line — mobile */}
                {i < steps.length - 1 && (
                  <div
                    className="md:hidden absolute left-[26px] top-[52px] bottom-0 w-px"
                    style={{ backgroundColor: "var(--beige)" }}
                  />
                )}

                {/* Content */}
                <div className="pt-0 md:pt-0">
                  <h3
                    className="text-lg mb-2"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      color: "var(--charcoal)",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-3"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      color: "var(--charcoal-light)",
                      opacity: 0.75,
                    }}
                  >
                    {step.body}
                  </p>
                  <span
                    className="text-xs tracking-wide px-2 py-1 inline-block"
                    style={{
                      backgroundColor: "var(--gold-pale)",
                      color: "var(--gold)",
                      fontFamily: "var(--font-dm-sans)",
                    }}
                  >
                    {step.duration}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-sm text-center"
          style={{
            color: "var(--charcoal-light)",
            opacity: 0.6,
            fontFamily: "var(--font-dm-sans)",
          }}
        >
          Gemiddeld zit je van eerste gesprek tot levering in 4–6 weken. Geen
          verrassingen, alles transparant.
        </motion.p>
      </div>
    </section>
  );
}
