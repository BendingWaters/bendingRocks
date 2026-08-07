import { CallToAction } from "@/sections/call-to-action";
import { Capabilities } from "@/sections/capabilities";
import { Contact } from "@/sections/contact";
import { Gallery } from "@/sections/gallery";
import { HeroSection } from "@/sections/hero-sections";
import { Process } from "@/sections/process";
import { Stats } from "@/sections/stats";
import { Testimonials } from "@/sections/testimonials";
import { WhyChooseUs } from "@/sections/why-choose-us";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Stats />
      <Gallery />
      <Capabilities />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <CallToAction />
      <Contact />
    </main>
  );
}
