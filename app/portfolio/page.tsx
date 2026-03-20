import type { Metadata } from "next";
import PortfolioPage from "@/components/sections/PortfolioPage";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Portfolio | Rinse Bommerson Fotografie",
  description:
    "Bekijk het volledige portfolio van Rinse Bommerson Fotografie — personal brand, team en lifestyle fotografie voor ondernemers.",
};

export default function Portfolio() {
  return (
    <>
      <Navigation darkHero={false} />
      <main>
        <PortfolioPage />
      </main>
      <Footer />
    </>
  );
}
