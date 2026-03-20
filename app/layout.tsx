import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rinse Bommerson Fotografie | Full Imagery Plan voor Ondernemers",
  description:
    "Professionele visuele merkfotografie voor zelfstandige ondernemers die groeien naar €10K+ per maand. Strategische beelden die jouw expertise uitstralen.",
  keywords:
    "fotograaf, merkfotografie, personal branding, ondernemer, Nederland, Full Imagery Plan",
  openGraph: {
    title: "Rinse Bommerson Fotografie | Full Imagery Plan voor Ondernemers",
    description:
      "Stop met er kleiner uitzien dan je bent. Beelden die jouw niveau weerspiegelen.",
    type: "website",
    locale: "nl_NL",
    siteName: "Rinse Bommerson Fotografie",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rinse Bommerson Fotografie",
    description: "Full Imagery Plan — strategische merkfotografie voor groeiende ondernemers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="h-full antialiased">
      <head>
        {/* Google Fonts — loaded via link for build-time independence */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{ backgroundColor: "var(--cream)", color: "var(--charcoal)" }}
      >
        {children}
      </body>
    </html>
  );
}
