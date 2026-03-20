"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote:
      "Voor het Full Imagery Plan had ik foto's die ik bijna schaamde om te delen. Nu gebruik ik ze overal — op mijn website, LinkedIn, in offertes. Binnen een week had ik 3 nieuwe aanvragen die verwezen naar 'hoe professioneel ik eruitzag'.",
    name: "Laura van den Berg",
    role: "Business Coach & Trainer",
    metric: "3 nieuwe aanvragen binnen 1 week",
    initials: "LB",
  },
  {
    quote:
      "Ik dacht altijd dat ik 'niet van foto's was'. Na dit traject begrijp ik dat dat komt doordat ik nooit goede foto's hád. Rinse maakt het zo ontspannen en professioneel tegelijk — het resultaat overtreft alles wat ik had verwacht.",
    name: "Daan Hoekstra",
    role: "Strategisch Adviseur | Scale-up",
    metric: "Tarieven verhoogd na nieuwe beeldbank",
    initials: "DH",
  },
  {
    quote:
      "We liepen vast met ons team: niemand wou op de foto, niemand wist wat te dragen, en de beelden die we hadden zagen er niet professioneel uit. Na het Full Imagery Plan hebben we eindelijk een consistente visuele identiteit die past bij wie we zijn.",
    name: "Sanne & Mark Visser",
    role: "Founders, Visser & Partners",
    metric: "Complete rebrand visuele identiteit",
    initials: "SV",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="py-24 md:py-36"
      style={{ backgroundColor: "var(--warm-white)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <p
            className="text-xs font-medium tracking-[0.25em] uppercase mb-5"
            style={{ color: "var(--gold)", fontFamily: "var(--font-dm-sans)" }}
          >
            Wat klanten zeggen
          </p>
          <h2
            className="text-4xl md:text-5xl leading-tight"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--charcoal)" }}
          >
            Resultaten die{" "}
            <em>voor zich spreken</em>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.15 }}
              className="flex flex-col p-8"
              style={{ backgroundColor: "var(--cream)" }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} width="14" height="14" viewBox="0 0 14 14" fill="var(--gold)">
                    <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7L7 1z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className="text-base leading-relaxed flex-1 mb-8"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  color: "var(--charcoal)",
                  opacity: 0.85,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Metric */}
              <div
                className="text-xs font-medium tracking-wide py-2 px-3 mb-6 inline-block self-start"
                style={{
                  backgroundColor: "var(--gold-pale)",
                  color: "var(--gold)",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                ✓ {t.metric}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "var(--beige)" }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium shrink-0"
                  style={{
                    backgroundColor: "var(--charcoal)",
                    color: "var(--cream)",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    className="text-sm font-medium"
                    style={{ color: "var(--charcoal)", fontFamily: "var(--font-dm-sans)" }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "var(--charcoal-light)", opacity: 0.6, fontFamily: "var(--font-dm-sans)" }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
