import Image from "next/image";
import { ServicesSection } from "./sections/ServicesSection";
import { TeamSection } from "./sections/TeamSection";


export default function Home() {

  return (
    <main>
      <ServicesSection />
      <TeamSection />
    </main>
  );
}
