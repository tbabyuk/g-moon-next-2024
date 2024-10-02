import { ServicesSection } from "./sections/ServicesSection";
import { TeamSection } from "./sections/TeamSection";
import { PricingSection } from "./sections/PricingSection";
import { Hero } from "./components/Hero";



export default function Home() {

  return (
      <>
        <Hero />
        <main>
          <ServicesSection />
          <TeamSection />
          <PricingSection />
        </main>
      </>
  );
}
