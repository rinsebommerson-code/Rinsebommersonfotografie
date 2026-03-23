"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const forYou = [
  "Je draait €5K+ per maand en je wil doorgroeien naar het volgende niveau",
  "Je merkt dat je beeldmateriaal je groei remt — je ziet er kleiner uit dan je bent",
  "Je wil niet nadenken over styling, locatie of planning — dat regelen wij",
  "Je wil beelden die je nog jarenlang kunt inzetten, niet alleen deze week",
  "Je wil dat je online uitstraling eindelijk klopt met wie je werkelijk bent",
];

const notForYou =
  "Ben je op zoek naar goedkope productiefoto's zonder strategie? Dan zijn we waarschijnlijk niet de beste match.";

export default function Qualifier() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="voor-wie"
      className="py-24 md:py-36"
      style={{ backgroundColor: "var(--warm-white)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left — checklist */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          >
            <p
              className="text-xs font-medium tracking-[0.25em] uppercase mb-5"
              style={{ color: "var(--gold)", fontFamily: "var(--font-dm-sans)" }}
            >
              Voor wie is dit?
            </p>
            <h2
              className="text-3xl md:text-4xl leading-tight mb-10"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--charcoal)" }}
            >
              Dit is voor jou als&hellip;
            </h2>

            <ul className="space-y-5">
              {forYou.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div
                    className="mt-1 w-5 h-5 shrink-0 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--gold)" }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="var(--charcoal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p
                    className="text-base leading-relaxed"
                    style={{ fontFamily: "var(--font-dm-sans)", color: "var(--charcoal)" }}
                  >
                    {item}
                  </p>
                </motion.li>
              ))}
            </ul>

            {/* Not for you */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="mt-10 p-6 border-l-2"
              style={{ borderColor: "var(--soft-beige)", backgroundColor: "var(--cream)" }}
            >
              <p
                className="text-xs font-medium tracking-[0.2em] uppercase mb-3"
                style={{ color: "var(--charcoal-light)", fontFamily: "var(--font-dm-sans)", opacity: 0.6 }}
              >
                Dit is niet voor jou als&hellip;
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)", color: "var(--charcoal)", opacity: 0.7 }}
              >
                {notForYou}
              </p>
            </motion.div>
          </motion.div>

          {/* Right — photo with quote overlay */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
            className="relative"
          >
            {/* Tall portrait photo */}
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <Image
                src="/images/portfolio/Output/DSCF2167klein.jpg"
                alt="Portfolio portret"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Lower gradient for quote legibility */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(14,12,8,0.92) 0%, rgba(14,12,8,0.5) 35%, transparent 65%)",
                }}
              />

              {/* Quote overlay at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <div
                  className="text-3xl mb-3 leading-none"
                  style={{ color: "var(--gold)", fontFamily: "var(--font-playfair)" }}
                >
                  &ldquo;
                </div>
                <p
                  className="text-xl md:text-2xl leading-snug mb-5"
                  style={{ fontFamily: "var(--font-playfair)", color: "var(--cream)", fontStyle: "italic" }}
                >
                  Ik wist dat mijn tarieven omhoog konden — maar mijn beeldmateriaal
                  vertelde nog het oude verhaal.
                </p>
                <p
                  className="text-sm"
                  style={{ color: "var(--gold)", fontFamily: "var(--font-dm-sans)" }}
                >
                  — Ondernemer, na het Full Imagery Plan
                </p>
              </div>
            </div>

            {/* Small second photo, offset bottom-right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="absolute -bottom-6 -right-4 md:-right-8 w-36 md:w-44 aspect-square overflow-hidden border-4"
              style={{ borderColor: "var(--warm-white)" }}
            >
              <Image
                src="/images/portfolio/Output/rinse_bommerson 6.jpg"
                alt="Portfolio portret"
                fill
                className="object-cover"
                sizes="176px"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
