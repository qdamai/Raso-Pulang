import { LanguageProvider } from "@/context/language-context";
import { ScrollProgress } from "@/components/scroll-progress";
import { KitchenAudio } from "@/components/kitchen-audio";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Introduction } from "@/components/introduction";
import { PhilosophyVarieties } from "@/components/philosophy-varieties";
import { Ingredients } from "@/components/ingredients";
import { CookingJourney } from "@/components/cooking-journey";
import { Memories } from "@/components/memories";
import { Gallery } from "@/components/gallery";
import { ClosingSection } from "@/components/closing-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <LanguageProvider>
      <ScrollProgress />
      <KitchenAudio />

      <div className="relative min-h-screen flex flex-col bg-[#FAF5ED] text-[#200C06] bg-paper-texture">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <Introduction />
          <PhilosophyVarieties />
          <Ingredients />
          <CookingJourney />
          <Memories />
          <Gallery />
          <ClosingSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
