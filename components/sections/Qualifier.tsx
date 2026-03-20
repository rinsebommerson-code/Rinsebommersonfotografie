"use client";

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
          {/* Left column — FOR YOU */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
                      <path
                        d="M2 5l2 2 4-4"
                        stroke="var(--charcoal)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p
                    className="text-base leading-relaxed"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      color: "var(--charcoal)",
                    }}
                  >
                    {item}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right column — visual + not for you */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-8"
          >
            {/* Decorative quote card */}
            <div
              className="p-10 md:p-12"
              style={{
                backgroundColor: "var(--charcoal)",
              }}
            >
              <div
                className="text-5xl mb-6 leading-none"
                style={{ color: "var(--gold)", fontFamily: "var(--font-playfair)" }}
              >
                &ldquo;
              </div>
              <p
                className="text-2xl md:text-3xl leading-snug mb-6"
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: "var(--cream)",
                  fontStyle: "italic",
                }}
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

            {/* Not for you */}
            <div
              className="p-6 border-l-2"
              style={{
                borderColor: "var(--soft-beige)",
                backgroundColor: "var(--cream)",
              }}
            >
              <p
                className="text-xs font-medium tracking-[0.2em] uppercase mb-3"
                style={{ color: "var(--charcoal-light)", fontFamily: "var(--font-dm-sans)", opacity: 0.6 }}
              >
                Dit is niet voor jou als&hellip;
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  color: "var(--charcoal)",
                  opacity: 0.7,
                }}
              >
                {notForYou}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
