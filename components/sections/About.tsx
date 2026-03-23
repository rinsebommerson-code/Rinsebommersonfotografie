"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="over"
      className="py-24 md:py-36"
      style={{ backgroundColor: "var(--charcoal)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Portrait photo */}
            <div className="aspect-[3/4] w-full relative overflow-hidden">
              <Image
                src="/images/portfolio/Output/Rinse_bommerson 10.jpg"
                alt="Rinse Bommerson – merkfotograaf"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-1/4"
                style={{
                  background: "linear-gradient(to top, rgba(26,21,18,0.5) 0%, transparent 100%)",
                }}
              />
            </div>

            {/* Accent frame */}
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 border hidden md:block"
              style={{ borderColor: "rgba(184,146,106,0.3)" }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="text-xs font-medium tracking-[0.25em] uppercase mb-5"
              style={{ color: "var(--gold)", fontFamily: "var(--font-dm-sans)" }}
            >
              Over de fotograaf
            </p>
            <h2
              className="text-3xl md:text-4xl leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--cream)" }}
            >
              Ik fotografeer niet wat je doet.{" "}
              <em>Ik fotografeer wie je bent.</em>
            </h2>

            <div
              className="space-y-5 text-base leading-relaxed"
              style={{
                color: "rgba(250,248,245,0.75)",
                fontFamily: "var(--font-dm-sans)",
                fontWeight: 300,
              }}
            >
              <p>
                Ik ben Rinse Bommerson — merkfotograaf gespecialiseerd in het
                visueel vertalen van jouw expertise. Ik werk uitsluitend met
                zelfstandige ondernemers en kleine teams die klaar zijn om de
                volgende stap te zetten.
              </p>
              <p>
                Ik heb honderden ondernemers geholpen hun visuele identiteit te
                professionaliseren. Niet met generieke studioshoot, maar met
                doordachte beelden die iets zeggen over wie jij bent en wat jij
                je klanten biedt.
              </p>
              <p>
                Mijn aanpak is strategisch en persoonlijk. Ik leer jou kennen
                voor ik ook maar één knop druk. Want de beste foto is niet de
                mooiste — het is de foto die de juiste mensen aantrekt.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div
                className="h-px flex-1 max-w-[80px]"
                style={{ backgroundColor: "rgba(184,146,106,0.4)" }}
              />
              <div>
                <p
                  className="text-lg"
                  style={{ fontFamily: "var(--font-playfair)", color: "var(--cream)", fontStyle: "italic" }}
                >
                  Rinse Bommerson
                </p>
                <p
                  className="text-xs tracking-wider uppercase mt-1"
                  style={{ color: "var(--gold)", fontFamily: "var(--font-dm-sans)" }}
                >
                  Merkfotograaf · Nederland
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
