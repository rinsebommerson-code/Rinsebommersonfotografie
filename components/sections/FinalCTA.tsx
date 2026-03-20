"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const revenueOptions = [
  "€0 – €2.500 / maand",
  "€2.500 – €5.000 / maand",
  "€5.000 – €10.000 / maand",
  "€10.000+ / maand",
];

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    revenue: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Strategiegesprek aanvraag — ${formData.name}`);
    const body = encodeURIComponent(
      `Naam: ${formData.name}\nEmail: ${formData.email}\nBedrijf/rol: ${formData.business}\nOmzet: ${formData.revenue}\n\n${formData.message}`
    );
    window.location.href = `mailto:info@rinsebommersonfotografie.nl?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="py-24 md:py-36"
      style={{ backgroundColor: "var(--charcoal)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left — headline */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p
              className="text-xs font-medium tracking-[0.25em] uppercase mb-5"
              style={{ color: "var(--gold)", fontFamily: "var(--font-dm-sans)" }}
            >
              Klaar voor de volgende stap?
            </p>
            <h2
              className="text-4xl md:text-5xl leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--cream)" }}
            >
              Klaar om jezelf te laten zien{" "}
              <em>zoals je echt bent?</em>
            </h2>
            <p
              className="text-lg leading-relaxed mb-10"
              style={{
                color: "rgba(250,248,245,0.7)",
                fontFamily: "var(--font-dm-sans)",
                fontWeight: 300,
              }}
            >
              Plan een gratis strategiegesprek van 30 minuten. Geen verplichtingen,
              geen verkooppraatje — gewoon een eerlijk gesprek over wat jij nodig
              hebt en of wij de juiste match zijn.
            </p>

            {/* Trust signals */}
            <div className="space-y-4">
              {[
                "100% vrijblijvend — geen verplichting na het gesprek",
                "Antwoord binnen 24 uur op werkdagen",
                "Beschikbaar voor heel Nederland",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 shrink-0 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(184,146,106,0.3)" }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "var(--gold)" }}
                    />
                  </div>
                  <span
                    className="text-sm"
                    style={{ color: "rgba(250,248,245,0.65)", fontFamily: "var(--font-dm-sans)" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {submitted ? (
              <div
                className="p-10 text-center"
                style={{ backgroundColor: "rgba(184,146,106,0.1)", border: "1px solid rgba(184,146,106,0.3)" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "var(--gold)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10l4 4 8-8" stroke="var(--charcoal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3
                  className="text-2xl mb-3"
                  style={{ fontFamily: "var(--font-playfair)", color: "var(--cream)" }}
                >
                  Je aanvraag is verstuurd!
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "rgba(250,248,245,0.65)", fontFamily: "var(--font-dm-sans)" }}
                >
                  Ik neem binnen 24 uur persoonlijk contact met je op.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 p-8 md:p-10"
                style={{ backgroundColor: "rgba(250,248,245,0.04)", border: "1px solid rgba(250,248,245,0.1)" }}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-xs tracking-wider uppercase"
                      style={{ color: "rgba(250,248,245,0.6)", fontFamily: "var(--font-dm-sans)" }}
                    >
                      Naam *
                    </Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-0 border-b rounded-none bg-transparent text-sm px-0 focus-visible:ring-0"
                      style={{
                        borderBottom: "1px solid rgba(250,248,245,0.2)",
                        color: "var(--cream)",
                        fontFamily: "var(--font-dm-sans)",
                      }}
                      placeholder="Jouw naam"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-xs tracking-wider uppercase"
                      style={{ color: "rgba(250,248,245,0.6)", fontFamily: "var(--font-dm-sans)" }}
                    >
                      E-mail *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-0 border-b rounded-none bg-transparent text-sm px-0 focus-visible:ring-0"
                      style={{
                        borderBottom: "1px solid rgba(250,248,245,0.2)",
                        color: "var(--cream)",
                        fontFamily: "var(--font-dm-sans)",
                      }}
                      placeholder="jouw@email.nl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="business"
                    className="text-xs tracking-wider uppercase"
                    style={{ color: "rgba(250,248,245,0.6)", fontFamily: "var(--font-dm-sans)" }}
                  >
                    Bedrijf / rol *
                  </Label>
                  <Input
                    id="business"
                    required
                    value={formData.business}
                    onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                    className="border-0 border-b rounded-none bg-transparent text-sm px-0 focus-visible:ring-0"
                    style={{
                      borderBottom: "1px solid rgba(250,248,245,0.2)",
                      color: "var(--cream)",
                      fontFamily: "var(--font-dm-sans)",
                    }}
                    placeholder="Bijv. coach, founder, consultant…"
                  />
                </div>

                <div className="space-y-2">
                  <p
                    className="text-xs tracking-wider uppercase"
                    style={{ color: "rgba(250,248,245,0.6)", fontFamily: "var(--font-dm-sans)" }}
                  >
                    Maandelijkse omzet
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {revenueOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFormData({ ...formData, revenue: opt })}
                        className="text-xs py-2 px-3 text-left transition-all duration-200"
                        style={{
                          border: `1px solid ${formData.revenue === opt ? "var(--gold)" : "rgba(250,248,245,0.15)"}`,
                          color: formData.revenue === opt ? "var(--gold)" : "rgba(250,248,245,0.5)",
                          backgroundColor: formData.revenue === opt ? "rgba(184,146,106,0.1)" : "transparent",
                          fontFamily: "var(--font-dm-sans)",
                        }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-xs tracking-wider uppercase"
                    style={{ color: "rgba(250,248,245,0.6)", fontFamily: "var(--font-dm-sans)" }}
                  >
                    Wat speelt er bij jou?
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="border-0 border-b rounded-none bg-transparent text-sm px-0 resize-none focus-visible:ring-0"
                    style={{
                      borderBottom: "1px solid rgba(250,248,245,0.2)",
                      color: "var(--cream)",
                      fontFamily: "var(--font-dm-sans)",
                    }}
                    placeholder="Vertel kort wat je situatie is en wat je wil bereiken…"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-sm font-medium tracking-wide transition-all duration-300"
                  style={{
                    backgroundColor: "var(--gold)",
                    color: "var(--charcoal)",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--gold-light)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--gold)"; }}
                >
                  Plan je gratis strategiegesprek →
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
