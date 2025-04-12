import Image from "next/image";
import HeroSection from "./components/HeroSection";
import LegalSection from "./components/LegalSection";
import FeatureSection from "./components/FeatureSection";
import FaqSection from "./components/FaqSection";
import NewsSection from "./components/NewsSection";

export default function Home() {
  return (
    <main className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <HeroSection />

      <LegalSection />

      <div className="container mx-auto px-5 sm:px-20">
        <FeatureSection
          title="Покупайте в несколько кликов."
          description="Паспорт и селфи — всё, что нужно для регистрации"
          imageSrc="/ident.png"
          imageAlt="Easy registration process"
        />

        <FeatureSection
          title="Переводите деньги прямо на банковскую карту."
          description="Больше не нужно думать о зачислениях, ордерах, выводе и прочих биржевых сложностях"
          imageSrc="/mob.png"
          imageAlt="Bank card transfers"
          reversed={true}
        />

        <FeatureSection
          title="Получайте мгновенную помощь от службы поддержки."
          description="Мы всегда на связи"
          imageSrc="/message.png"
          imageAlt="Customer support"
        />
      </div>

      <FaqSection />

      <NewsSection />
    </main>
  );
}
