import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import TheorySection from "@/components/TheorySection";
import PlaybookSection from "@/components/PlaybookSection";
import LessonsSection from "@/components/LessonsSection";
import ReflectionSection from "@/components/ReflectionSection";
import ConclusionSection from "@/components/ConclusionSection";
import AIUsageButton from "@/components/AIUsageButton";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "#0a0a0a" }}>
      <Header />
      <HeroSection />

      {/* Divider */}
      <div className="gold-divider" />

      <ProblemSection />
      <div className="gold-divider" />

      <TheorySection />
      <div className="gold-divider" />

      <PlaybookSection />
      <div className="gold-divider" />

      <LessonsSection />
      <div className="gold-divider" />

      <ReflectionSection />
      <div className="gold-divider" />

      <ConclusionSection />
      <AIUsageButton />
    </main>
  );
}
