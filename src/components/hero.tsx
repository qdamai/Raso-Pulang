"use client";

import { useState } from "react";
import Image from "next/image";
import { SITE_CONTENT } from "@/data/content";
import { useLanguage } from "@/context/language-context";

export function Hero() {
  const [imageError, setImageError] = useState(false);
  const { language } = useLanguage();
  const content = SITE_CONTENT[language];

  const bannerImagePath = content.hero.bannerImagePath || content.hero.imagePath;

  const previewCards = [
    {
      number: "01",
      title: "Hand-Pounded Spices",
      caption: "Granite mortar pestle grinding fresh chilies, galangal, lemongrass, and turmeric root.",
    },
    {
      number: "02",
      title: "Pure Coconut Reduction",
      caption: "Freshly pressed coconut cream simmering down into rich caramelized oils.",
    },
    {
      number: "03",
      title: "Wood-Fired Hearth",
      caption: "Four to five hours of slow wood-fire heat turning beef into dark mahogany rendang.",
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#FAF5ED] text-[#200C06] pt-28 pb-20 overflow-hidden border-b border-[#200C06]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Big Flowing Calligraphic Headline */}
        <div className="text-center space-y-2 pt-4">
          <span className="font-serif italic text-3xl sm:text-5xl text-[#A04028] font-normal tracking-wide block">
            it&apos;s the most
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-extrabold text-[#200C06] tracking-tight leading-none">
            Wonderful <span className="font-serif italic font-normal text-[#C86D3B]">flavour</span> of home
          </h1>
        </div>

        {/* Top Editorial Meta Line */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-b border-[#200C06]/15 py-3 text-xs sm:text-sm font-serif italic text-[#2F130B]/80">
          <span>From the Kitchens of Minangkabau, West Sumatra</span>
          <span>Slow-cooked with patience &amp; heritage</span>
        </div>

        {/* Centered Main Hero Photography Frame */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full border border-[#200C06]/20 bg-[#FFFBF5] overflow-hidden shadow-md rounded-sm">
          {!imageError ? (
            <Image
              src={bannerImagePath}
              alt={content.hero.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-[#2F130B] text-[#FAF5ED] p-12 flex flex-col justify-center items-center text-center">
              <span className="font-serif italic text-4xl text-[#E5A84B] mb-2">
                Mahogany Rendang Daging
              </span>
              <p className="text-sm font-sans text-[#FAF5ED]/80 max-w-lg">
                Slow-cooked Minangkabau masterpiece simmered over wood-fire hearth.
              </p>
            </div>
          )}
        </div>

        {/* 3-Column Horizontal Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {previewCards.map((card) => (
            <div
              key={card.number}
              className="border border-[#200C06]/15 p-6 bg-[#FFFBF5] space-y-2 text-center"
            >
              <span className="editorial-number text-2xl sm:text-3xl block">
                {card.number}
              </span>
              <h3 className="font-serif font-bold text-lg text-[#200C06]">
                {card.title}
              </h3>
              <p className="text-xs font-sans text-[#2F130B]/80 leading-relaxed font-light">
                {card.caption}
              </p>
            </div>
          ))}
        </div>

        {/* Color Palette Swatches at Bottom */}
        <div className="flex items-center justify-center gap-2 pt-4">
          <div className="w-6 h-6 rounded border border-[#200C06]/20 bg-[#FAF5ED]" title="Coconut Cream" />
          <div className="w-6 h-6 rounded border border-[#200C06]/20 bg-[#C86D3B]" title="Burnt Spice" />
          <div className="w-6 h-6 rounded border border-[#200C06]/20 bg-[#A04028]" title="Terracotta" />
          <div className="w-6 h-6 rounded border border-[#200C06]/20 bg-[#2F130B]" title="Dark Cocoa" />
          <div className="w-6 h-6 rounded border border-[#200C06]/20 bg-[#200C06]" title="Deep Brown" />
        </div>

      </div>
    </section>
  );
}
