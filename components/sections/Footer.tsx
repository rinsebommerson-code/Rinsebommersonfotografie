"use client";

import Logo from "@/components/Logo";

const navLinks = [
  { label: "Werkwijze", href: "#werkwijze" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Over mij", href: "#over" },
  { label: "Investering", href: "#investering" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--charcoal)" }}>
      {/* Top border */}
      <div className="h-px" style={{ backgroundColor: "rgba(250,248,245,0.08)" }} />

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Logo variant="light" className="mb-5" />
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{
                color: "rgba(250,248,245,0.5)",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              Strategische merkfotografie voor ondernemers die klaar zijn om
              zich te laten zien zoals ze werkelijk zijn.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="text-xs tracking-[0.2em] uppercase mb-6"
              style={{ color: "var(--gold)", fontFamily: "var(--font-dm-sans)" }}
            >
              Navigatie
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "rgba(250,248,245,0.55)", fontFamily: "var(--font-dm-sans)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "var(--gold)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(250,248,245,0.55)"; }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-xs tracking-[0.2em] uppercase mb-6"
              style={{ color: "var(--gold)", fontFamily: "var(--font-dm-sans)" }}
            >
              Contact
            </p>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@rinsebommersonfotografie.nl"
                  className="text-sm transition-colors duration-200"
                  style={{ color: "rgba(250,248,245,0.55)", fontFamily: "var(--font-dm-sans)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--gold)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(250,248,245,0.55)"; }}
                >
                  info@rinsebommersonfotografie.nl
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/rinsebommerson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors duration-200"
                  style={{ color: "rgba(250,248,245,0.55)", fontFamily: "var(--font-dm-sans)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--gold)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(250,248,245,0.55)"; }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                  @rinsebommerson
                </a>
              </li>
              <li>
                <span
                  className="text-sm"
                  style={{ color: "rgba(250,248,245,0.4)", fontFamily: "var(--font-dm-sans)" }}
                >
                  KVK: [00000000]
                </span>
              </li>
              <li>
                <span
                  className="text-sm"
                  style={{ color: "rgba(250,248,245,0.4)", fontFamily: "var(--font-dm-sans)" }}
                >
                  Nederland
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(250,248,245,0.08)" }}
        >
          <p
            className="text-xs"
            style={{ color: "rgba(250,248,245,0.3)", fontFamily: "var(--font-dm-sans)" }}
          >
            © {new Date().getFullYear()} Rinse Bommerson Fotografie · De Klantmakers · Alle rechten voorbehouden
          </p>
          <div className="flex gap-6">
            {["Privacybeleid", "Algemene voorwaarden"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs transition-colors duration-200"
                style={{ color: "rgba(250,248,245,0.3)", fontFamily: "var(--font-dm-sans)" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(250,248,245,0.6)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(250,248,245,0.3)"; }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
