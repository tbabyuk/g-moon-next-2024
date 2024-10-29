import { AboutSection } from "./sections/AboutSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TeamSection } from "./sections/TeamSection";
import { PricingSection } from "./sections/PricingSection";
import { Hero } from "./components/Hero";
import { GallerySection } from "./sections/GallerySection";


export const metadata = {
  title: "Home | G Moon Wellness Centre",
  description: "Spa in Richmond Hill offering massages, body scrubs, table shower, hot stone therapy, and other services",
};


export default function Home() {

  return (
      <>
        <Hero />
        <main>
          <AboutSection />
          <GallerySection />
          <ServicesSection />
          <TeamSection />
          {/* <PricingSection /> */}
        </main>
      </>
  );
}
