"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    website: "",
    socials: "",
    now: "",
    goal: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Beeldanalyse aanvraag — ${formData.name} · ${formData.business}`);
    const body = encodeURIComponent(
      [
        `Naam: ${formData.name}`,
        `Bedrijfsnaam: ${formData.business}`,
        `E-mail: ${formData.email}`,
        `Telefoon: ${formData.phone}`,
        `Website: ${formData.website}`,
        `Socials: ${formData.socials}`,
        ``,
        `Waar sta je nu?`,
        formData.now,
        ``,
        `Waar wil je naartoe?`,
        formData.goal,
      ].join("\n")
    );
    window.location.href = `mailto:info@rinsebommersonfotografie.nl?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const field = (color = "rgba(250,248,245,0.2)") => ({
    borderBottom: `1px solid ${color}`,
    color: "var(--cream)",
    fontFamily: "var(--font-dm-sans)",
  });

  return (
    <section
      ref={ref}
      id="contact"
      className="py-24 md:py-36"
      style={{ backgroundColor: "var(--charcoal)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* ── Left — what this is ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p
              className="text-xs font-medium tracking-[0.25em] uppercase mb-5"
              style={{ color: "var(--gold)", fontFamily: "var(--font-dm-sans)" }}
            >
              Gratis Beeldanalyse
            </p>
            <h2
              className="text-4xl md:text-5xl leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--cream)" }}
            >
              Ik kijk naar wat je nu uitstraalt.{" "}
              <em>Eerlijk en zonder verplichtingen.</em>
            </h2>
            <p
              className="text-lg leading-relaxed mb-10"
              style={{ color: "rgba(250,248,245,0.7)", fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}
            >
              Vul het formulier in — inclusief je website en socials. Ik bekijk je huidige
              visuele aanwezigheid, beoordeel waar de kloof zit tussen hoe je overkomt en
              wie je werkelijk bent, en koppel persoonlijk terug of en hoe ik je verder
              kan helpen.
            </p>

            {/* How it works */}
            <div className="space-y-6 mb-10">
              {[
                {
                  step: "01",
                  title: "Jij vult het formulier in",
                  body: "Vertel waar je nu staat, waar je naartoe wil, en deel je website en socials.",
                },
                {
                  step: "02",
                  title: "Ik analyseer jouw merkpresentatie",
                  body: "Ik bekijk je website, socials en huidige beeldmateriaal vanuit mijn marketingachtergrond.",
                },
                {
                  step: "03",
                  title: "Persoonlijke terugkoppeling",
                  body: "Je ontvangt mijn eerlijke analyse — en of het Full Imagery Plan de juiste stap is.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-5">
                  <div
                    className="text-xl font-light shrink-0 w-8 leading-none pt-0.5"
                    style={{ fontFamily: "var(--font-playfair)", color: "rgba(184,146,106,0.4)" }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <p
                      className="text-sm font-medium mb-1"
                      style={{ color: "var(--cream)", fontFamily: "var(--font-dm-sans)" }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(250,248,245,0.55)", fontFamily: "var(--font-dm-sans)" }}
                    >
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust signals */}
            <div className="space-y-3 pt-8 border-t" style={{ borderColor: "rgba(250,248,245,0.08)" }}>
              {[
                "100% vrijblijvend — geen verkooppraatje",
                "Reactie binnen 2 werkdagen",
                "Beschikbaar voor heel Nederland",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 shrink-0 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(184,146,106,0.2)" }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--gold)" }} />
                  </div>
                  <span className="text-sm" style={{ color: "rgba(250,248,245,0.55)", fontFamily: "var(--font-dm-sans)" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right — form ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {submitted ? (
              <div
                className="p-10 text-center"
                style={{ backgroundColor: "rgba(184,146,106,0.08)", border: "1px solid rgba(184,146,106,0.3)" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "var(--gold)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10l4 4 8-8" stroke="var(--charcoal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-2xl mb-3" style={{ fontFamily: "var(--font-playfair)", color: "var(--cream)" }}>
                  Aanvraag ontvangen!
                </h3>
                <p className="text-sm" style={{ color: "rgba(250,248,245,0.65)", fontFamily: "var(--font-dm-sans)" }}>
                  Ik bekijk je website en socials en kom binnen 2 werkdagen persoonlijk bij je terug.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 p-8 md:p-10"
                style={{ backgroundColor: "rgba(250,248,245,0.04)", border: "1px solid rgba(250,248,245,0.08)" }}
              >
                {/* Name + Business */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs tracking-wider uppercase" style={{ color: "rgba(250,248,245,0.5)", fontFamily: "var(--font-dm-sans)" }}>
                      Naam *
                    </Label>
                    <Input
                      id="name" required value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-0 border-b rounded-none bg-transparent text-sm px-0 focus-visible:ring-0"
                      style={field()} placeholder="Voor- en achternaam"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="business" className="text-xs tracking-wider uppercase" style={{ color: "rgba(250,248,245,0.5)", fontFamily: "var(--font-dm-sans)" }}>
                      Bedrijfsnaam *
                    </Label>
                    <Input
                      id="business" required value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="border-0 border-b rounded-none bg-transparent text-sm px-0 focus-visible:ring-0"
                      style={field()} placeholder="Jouw bedrijfsnaam"
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs tracking-wider uppercase" style={{ color: "rgba(250,248,245,0.5)", fontFamily: "var(--font-dm-sans)" }}>
                      E-mail *
                    </Label>
                    <Input
                      id="email" type="email" required value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-0 border-b rounded-none bg-transparent text-sm px-0 focus-visible:ring-0"
                      style={field()} placeholder="jouw@email.nl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-xs tracking-wider uppercase" style={{ color: "rgba(250,248,245,0.5)", fontFamily: "var(--font-dm-sans)" }}>
                      Telefoon
                    </Label>
                    <Input
                      id="phone" type="tel" value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="border-0 border-b rounded-none bg-transparent text-sm px-0 focus-visible:ring-0"
                      style={field()} placeholder="+31 6 …"
                    />
                  </div>
                </div>

                {/* Website */}
                <div className="space-y-2">
                  <Label htmlFor="website" className="text-xs tracking-wider uppercase" style={{ color: "rgba(250,248,245,0.5)", fontFamily: "var(--font-dm-sans)" }}>
                    Website *
                  </Label>
                  <Input
                    id="website" type="url" required value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="border-0 border-b rounded-none bg-transparent text-sm px-0 focus-visible:ring-0"
                    style={field()} placeholder="https://jouwwebsite.nl"
                  />
                </div>

                {/* Socials */}
                <div className="space-y-2">
                  <Label htmlFor="socials" className="text-xs tracking-wider uppercase" style={{ color: "rgba(250,248,245,0.5)", fontFamily: "var(--font-dm-sans)" }}>
                    Instagram / LinkedIn
                  </Label>
                  <Input
                    id="socials" value={formData.socials}
                    onChange={(e) => setFormData({ ...formData, socials: e.target.value })}
                    className="border-0 border-b rounded-none bg-transparent text-sm px-0 focus-visible:ring-0"
                    style={field()} placeholder="@jouwhandle of linkedin.com/in/…"
                  />
                </div>

                {/* Divider */}
                <div className="h-px" style={{ backgroundColor: "rgba(250,248,245,0.06)" }} />

                {/* Where are you now */}
                <div className="space-y-2">
                  <Label htmlFor="now" className="text-xs tracking-wider uppercase" style={{ color: "rgba(250,248,245,0.5)", fontFamily: "var(--font-dm-sans)" }}>
                    Waar sta je nu? *
                  </Label>
                  <Textarea
                    id="now" required value={formData.now}
                    onChange={(e) => setFormData({ ...formData, now: e.target.value })}
                    rows={3}
                    className="border-0 border-b rounded-none bg-transparent text-sm px-0 resize-none focus-visible:ring-0"
                    style={field()}
                    placeholder="Omschrijf je huidige merkpresentatie — wat heb je al, wat mist er, hoe voel je je erbij?"
                  />
                </div>

                {/* Where do you want to go */}
                <div className="space-y-2">
                  <Label htmlFor="goal" className="text-xs tracking-wider uppercase" style={{ color: "rgba(250,248,245,0.5)", fontFamily: "var(--font-dm-sans)" }}>
                    Waar wil je naartoe? *
                  </Label>
                  <Textarea
                    id="goal" required value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    rows={3}
                    className="border-0 border-b rounded-none bg-transparent text-sm px-0 resize-none focus-visible:ring-0"
                    style={field()}
                    placeholder="Wat moet jouw beeldmateriaal voor je doen? Welk gevoel, welk niveau, welke klanten wil je aantrekken?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-sm font-medium tracking-wide transition-all duration-300"
                  style={{ backgroundColor: "var(--gold)", color: "var(--charcoal)", fontFamily: "var(--font-dm-sans)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--gold-light)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--gold)"; }}
                >
                  Stuur mijn aanvraag in →
                </button>

                <p className="text-xs text-center" style={{ color: "rgba(250,248,245,0.35)", fontFamily: "var(--font-dm-sans)" }}>
                  Ik behandel je gegevens vertrouwelijk en neem binnen 2 werkdagen contact op.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
