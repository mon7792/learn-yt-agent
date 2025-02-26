import { Feature } from "@/components/structure/Feature";
import { Hero } from "@/components/structure/Hero";
import { Pricing } from "@/components/structure/Pricing";
import { Footer } from "@/components/structure/Footer";

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
     <br />
     <br />
      {/* hero section */}
      <Hero />

      {/* features section */}
      <Feature />

      {/* pricing section */}
      <Pricing />

      {/* footer section */}
      <Footer />
    </main>
  );
}
