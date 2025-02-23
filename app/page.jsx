import { AboutSection } from "./sections/AboutSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TeamSection } from "./sections/TeamSection";
import { PricingSection } from "./sections/PricingSection";
import { ReviewsSection } from "./sections/ReviewsSection";
import { Hero } from "./components/Hero";
import { GallerySection } from "./sections/GallerySection";


export const metadata = {
  title: "Spa in Richmond Hill - G Moon Wellness Centre",
  description: "A wellness spa in Richmond Hill offering relaxing massages, rejuvenating body scrubs, combo treatments, and much more in ultimate relaxation and self-care.",
};


export default function Home() {

  return (
      <>
        <Hero />
        <main>
          <AboutSection />
          <ReviewsSection />
          <GallerySection />
          <ServicesSection />
          <TeamSection />
          {/* <PricingSection /> */}
        </main>
      </>
  );
}
