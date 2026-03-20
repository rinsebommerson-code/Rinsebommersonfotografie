import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Portfolio from "@/components/sections/Portfolio";
import Qualifier from "@/components/sections/Qualifier";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Portfolio />
        <Qualifier />
        <Process />
        <Testimonials />
        <About />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
