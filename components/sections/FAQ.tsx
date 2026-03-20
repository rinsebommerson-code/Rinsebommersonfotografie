"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Wat is een Full Imagery Plan precies?",
    a: "Een Full Imagery Plan is een complete aanpak waarbij we samen jouw visuele merkidentiteit opbouwen. Het begint met een gratis beeldanalyse van je huidige presentatie en eindigt met een complete beeldbank die je jarenlang kunt inzetten. Het is geen losse fotoshoot — het is een systeem.",
  },
  {
    q: "Is haar en make-up inbegrepen?",
    a: "Ja, bij het Full Imagery Plan is een professionele haar & make-up artiest inbegrepen. Zo hoef jij nergens over na te denken en zie je er op de foto precies zo uit als jij wil. Bij het Essentials pakket is dit optioneel bij te boeken.",
  },
  {
    q: "Hoe lang duurt een shoot?",
    a: "Een halve shootdag duurt doorgaans 3–4 uur, een hele dag 6–8 uur. Inclusief omkleedpauzes, locatiewisselingen en kleine breaks. We plannen altijd ruim genoeg in zodat het ontspannen aanvoelt — geen gejaagd tempo.",
  },
  {
    q: "Hoeveel beelden krijg ik?",
    a: "Bij het Essentials pakket ontvang je minimaal 15 professioneel nabewerkte beelden. Bij het Full Imagery Plan zijn dat 30+ beelden in meerdere formaten — klaar voor website, social media, print en al je andere uitingen.",
  },
  {
    q: "Wat als ik niet weet wat ik wil?",
    a: "Dan beginnen we daar. Het intakeformulier helpt je juist om dat scherp te krijgen. Vul in wat je kunt — ik analyseer je huidige presentatie en koppel terug wat ik zie en wat er mogelijk is. Na de beeldanalyse is het plaatje voor jou en voor mij helder.",
  },
  {
    q: "Wanneer zijn de beelden klaar?",
    a: "Na de shootdag ontvang je binnen 14 werkdagen je definitieve beeldset. Bij grote projecten of team-shoots kan dit licht afwijken — dit communiceren we altijd vooraf.",
  },
  {
    q: "Ik ben niet zo van foto's — is dit dan iets voor mij?",
    a: "Absoluut. De meeste klanten zeggen dit voor de shoot — en zijn na afloop volledig om. Onze aanpak is erop gericht jou op je gemak te laten voelen. We regisseren subtiel, geven duidelijke aanwijzingen en creëren een relaxte sfeer. Foto's voor mensen die eigenlijk niet van foto's houden — dat is ons specialisme.",
  },
];

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border"
      style={{
        borderColor: "var(--beige)",
        backgroundColor: "var(--cream)",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
      >
        <span
          className="text-base"
          style={{
            fontFamily: "var(--font-playfair)",
            color: "var(--charcoal)",
          }}
        >
          {faq.q}
        </span>
        <span
          className="shrink-0 mt-1 w-5 h-5 rounded-full flex items-center justify-center transition-transform duration-300"
          style={{
            backgroundColor: open ? "var(--gold)" : "var(--beige)",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 2v6M2 5h6" stroke={open ? "var(--charcoal)" : "var(--charcoal)"} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key={`faq-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p
              className="px-6 pb-5 text-sm leading-relaxed"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "var(--charcoal-light)",
                opacity: 0.85,
              }}
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="faq"
      className="py-24 md:py-36"
      style={{ backgroundColor: "var(--warm-white)" }}
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p
            className="text-xs font-medium tracking-[0.25em] uppercase mb-5"
            style={{ color: "var(--gold)", fontFamily: "var(--font-dm-sans)" }}
          >
            Veelgestelde vragen
          </p>
          <h2
            className="text-4xl md:text-5xl leading-tight"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--charcoal)" }}
          >
            Antwoord op jouw{" "}
            <em>vragen</em>
          </h2>
        </motion.div>

        {/* FAQ items */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-2"
        >
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </motion.div>

        {/* Still questions */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 text-sm text-center"
          style={{
            color: "var(--charcoal-light)",
            fontFamily: "var(--font-dm-sans)",
            opacity: 0.7,
          }}
        >
          Staat jouw vraag er niet bij?{" "}
          <a
            href="#contact"
            className="underline transition-colors"
            style={{ color: "var(--gold)" }}
          >
            Stuur een berichtje
          </a>{" "}
          — ik reageer altijd persoonlijk.
        </motion.p>
      </div>
    </section>
  );
}
