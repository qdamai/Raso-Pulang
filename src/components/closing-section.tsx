"use client";

import { SITE_CONTENT } from "@/data/content";
import { useLanguage } from "@/context/language-context";

export function ClosingSection() {
  const { language } = useLanguage();
  const content = SITE_CONTENT[language];

  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closingHeadline = {
    en: "Some journeys end at home. Others begin there.",
    id: "Sebagian perjalanan berakhir di rumah. Sebagian lagi bermula dari sana.",
  };

  return (
    <section className="py-24 sm:py-32 pb-28 sm:pb-36 bg-[#FFFBF5] text-[#200C06] relative overflow-hidden text-center border-t border-[#200C06]/15 font-sans">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <span className="text-xs uppercase font-bold tracking-widest text-[#A04028] px-3 py-1 bg-[#A04028]/10 rounded-full border border-[#A04028]/20">
          Minangkabau Kitchen Story
        </span>

        {/* Emotional Headline - Clean Serif Hierarchy */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-[#200C06] leading-tight max-w-3xl mx-auto">
          &ldquo;{closingHeadline[language]}&rdquo;
        </h2>

        {/* Distinct Script Signature */}
        <p className="font-serif italic text-2xl sm:text-3xl text-[#A04028] pt-2">
          &ldquo;{content.closing.scriptSignature}&rdquo;
        </p>

        {/* Paragraph */}
        <p className="text-base sm:text-lg text-[#2F130B]/85 font-light max-w-2xl mx-auto leading-relaxed">
          {content.closing.description}
        </p>

        {/* Return to top button */}
        <div className="pt-8">
          <button
            type="button"
            onClick={scrollToTop}
            className="px-8 py-3.5 text-xs font-bold tracking-widest uppercase bg-[#200C06] hover:bg-[#2F130B] text-[#FAF5ED] rounded-full transition-all duration-300 cursor-pointer border border-[#A04028]/40 shadow-lg hover:shadow-xl"
          >
            {content.closing.cta} &uarr;
          </button>
        </div>
      </div>
    </section>
  );
}
