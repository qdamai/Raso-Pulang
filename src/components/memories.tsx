"use client";

import { useState } from "react";
import { SITE_CONTENT, Memory } from "@/data/content";
import { useLanguage } from "@/context/language-context";

export function Memories() {
  const [showExtra, setShowExtra] = useState(false);
  const { language } = useLanguage();
  const content = SITE_CONTENT[language];

  return (
    <section
      id="memories"
      className="py-24 sm:py-36 pb-32 sm:pb-44 bg-[#FAF5ED] text-[#200C06] relative overflow-hidden border-b border-[#200C06]/15 font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header Line */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#200C06]/15">
          <div className="flex items-center gap-3">
            <span className="editorial-number text-3xl font-serif">06</span>
            <span className="h-4 w-[1px] bg-[#200C06]/20" />
            <span className="text-xs uppercase tracking-widest text-[#A04028] font-bold">
              {content.memories.label} &bull; MERANTAU &amp; HOME
            </span>
          </div>
          <span className="text-xs font-serif italic text-[#2F130B]/70">
            Stories of <span className="font-serif italic text-base text-[#A04028]">Merantau</span> &amp; Home Comfort
          </span>
        </div>

        {/* Dramatic Section Title */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-[#200C06] leading-tight">
            What does home <span className="italic font-normal text-[#A04028]">taste like to you?</span>
          </h2>
          <p className="text-base sm:text-lg text-[#2F130B]/85 font-light leading-relaxed max-w-2xl mx-auto">
            {content.memories.intro}
          </p>
        </div>

        {/* Breathable Editorial Story Spreads (Hairline Dividers) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Card 1: Main Story Spread */}
          <div className="md:col-span-7 p-8 sm:p-10 text-[#200C06] flex flex-col justify-between space-y-6 border border-[#200C06]/15 bg-[#FFFBF5] rounded border-l-4 border-l-[#A04028] shadow-lg">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-[#200C06]/10 pb-4">
                <span className="text-xs font-mono uppercase font-bold text-[#A04028] tracking-widest px-3 py-1 bg-[#A04028]/10 rounded-full border border-[#A04028]/20">
                  {content.memories.cards[0].postmarkLocation}
                </span>
                <span className="font-serif italic text-sm text-[#C86D3B]">
                  {content.memories.cards[0].handwrittenDate}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#200C06] leading-tight">
                {content.memories.cards[0].title}
              </h3>

              <p className="font-serif italic text-xl text-[#A04028] leading-snug">
                &ldquo;{content.memories.cards[0].snippet}&rdquo;
              </p>

              <p className="text-base text-[#2F130B]/90 font-light leading-relaxed pt-2">
                {content.memories.cards[0].fullStory}
              </p>
            </div>

            <div className="pt-4 border-t border-[#200C06]/10 text-xs font-mono text-[#2F130B]/70 uppercase font-bold tracking-wider flex items-center justify-between">
              <span>{content.memories.cards[0].authorTag}</span>
              <span className="font-serif italic text-xs text-[#A04028]">
                Merantau Legacy
              </span>
            </div>
          </div>

          {/* Cards 2 & 3 Side Column */}
          <div className="md:col-span-5 flex flex-col space-y-6">
            {content.memories.cards.slice(1).map((card) => (
              <div
                key={card.id}
                className="p-7 bg-[#FFFBF5] text-[#200C06] space-y-4 rounded border border-[#200C06]/15 shadow-md"
              >
                <div className="flex items-center justify-between border-b border-[#200C06]/10 pb-3">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#A04028] tracking-widest px-2.5 py-0.5 bg-[#A04028]/10 rounded">
                    {card.postmarkLocation}
                  </span>
                  <span className="font-serif italic text-xs text-[#C86D3B]">
                    {card.handwrittenDate}
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-[#200C06]">
                  {card.title}
                </h3>
                <p className="font-serif italic text-base text-[#A04028] leading-snug">
                  &ldquo;{card.snippet}&rdquo;
                </p>
                <p className="text-xs sm:text-sm text-[#2F130B]/85 leading-relaxed font-light">
                  {card.fullStory}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamically Revealed Extra Stories */}
        {showExtra && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 animate-in fade-in duration-300">
            {content.memories.extraMemories.map((mem: Memory) => (
              <div
                key={mem.id}
                className="p-8 bg-[#2A080C] text-[#FAF5ED] space-y-4 rounded border border-[#E5A84B]/30 shadow-xl"
              >
                <div className="flex items-center justify-between border-b border-[#E5A84B]/20 pb-3 text-xs font-mono">
                  <span className="uppercase font-bold text-[#E5A84B] tracking-wider">
                    {mem.postmarkLocation}
                  </span>
                  <span className="font-serif italic text-[#FAF5ED]/70">
                    {mem.handwrittenDate}
                  </span>
                </div>
                <h3 className="text-3xl font-serif font-bold text-[#FAF5ED]">
                  {mem.title}
                </h3>
                <p className="font-serif italic text-lg text-[#E5A84B]">
                  &ldquo;{mem.snippet}&rdquo;
                </p>
                <p className="text-xs sm:text-sm text-[#FAF5ED]/85 leading-relaxed font-light">
                  {mem.fullStory}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Interactive Ellipse Pill Button */}
        <div className="text-center pt-4">
          <button
            type="button"
            onClick={() => setShowExtra(!showExtra)}
            className="px-8 py-3.5 text-xs font-mono font-bold uppercase tracking-widest bg-[#A04028] hover:bg-[#9C2A1B] text-[#FAF5ED] rounded-full transition-all duration-300 cursor-pointer border border-[#E5A84B]/40 shadow-md hover:shadow-lg"
            aria-expanded={showExtra}
          >
            {showExtra ? "Close Memories" : "Open More Memories"}
          </button>
        </div>
      </div>
    </section>
  );
}
