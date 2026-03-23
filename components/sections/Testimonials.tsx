"use client";

import Image from "next/image";
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
      "We liepen vast met ons team: niemand wou op de foto, niemand wist wat te dragen. Na het Full Imagery Plan hebben we eindelijk een consistente visuele identiteit die past bij wie we zijn.",
    name: "Sanne & Mark Visser",
    role: "Founders, Visser & Partners",
    metric: "Complete rebrand visuele identiteit",
    initials: "SV",
  },
];

// Five wide-format editorial photos shown as a strip above the testimonials
const photoStrip = [
  { aspect: "aspect-[4/5]", src: "/images/portfolio/Output/DSCF2142klein.jpg" },
  { aspect: "aspect-[3/4]", src: "/images/portfolio/Output/Male shoot klein 15.jpg" },
  { aspect: "aspect-[4/5]", src: "/images/portfolio/portfolio-rinse/17-04-2021 - Denise en Benthe Beauty shoot1079 1.jpg" },
  { aspect: "aspect-[3/4]", src: "/images/portfolio/batavia-1894/DSC03174Insta.jpg" },
  { aspect: "aspect-[4/5]", src: "/images/portfolio/Output/DSC07849.jpg" },
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
      {/* ── Full-bleed photo strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-20 px-6 max-w-7xl mx-auto"
      >
        <div className="flex gap-2 md:gap-3 items-end">
          {photoStrip.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.08 }}
              className={`flex-1 ${photo.aspect} relative overflow-hidden group min-w-0`}
            >
              <Image
                src={photo.src}
                alt="Portfolio"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "rgba(184,146,106,0.07)" }} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center max-w-xl mx-auto mb-14"
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

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
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

              <blockquote
                className="text-base leading-relaxed flex-1 mb-8"
                style={{ fontFamily: "var(--font-dm-sans)", color: "var(--charcoal)", opacity: 0.85 }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div
                className="text-xs font-medium tracking-wide py-2 px-3 mb-6 inline-block self-start"
                style={{ backgroundColor: "var(--gold-pale)", color: "var(--gold)", fontFamily: "var(--font-dm-sans)" }}
              >
                ✓ {t.metric}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "var(--beige)" }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium shrink-0"
                  style={{ backgroundColor: "var(--charcoal)", color: "var(--cream)", fontFamily: "var(--font-dm-sans)" }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-medium" style={{ color: "var(--charcoal)", fontFamily: "var(--font-dm-sans)" }}>
                    {t.name}
                  </div>
                  <div className="text-xs" style={{ color: "var(--charcoal-light)", opacity: 0.6, fontFamily: "var(--font-dm-sans)" }}>
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
