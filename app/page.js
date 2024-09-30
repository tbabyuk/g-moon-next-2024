import Image from "next/image";
import { ServicesSection } from "./sections/ServicesSection";
import { TeamSection } from "./sections/TeamSection";
import { PricingSection } from "./sections/PricingSection";

export default function Home() {

  return (
    <main>
      <ServicesSection />
      <TeamSection />
      <PricingSection />
    </main>
  );
}
