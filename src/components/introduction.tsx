"use client";

import { useState } from "react";
import Image from "next/image";
import { SITE_CONTENT } from "@/data/content";
import { useLanguage } from "@/context/language-context";

export function Introduction() {
  const [imageError, setImageError] = useState(false);
  const { language } = useLanguage();
  const content = SITE_CONTENT[language];

  return (
    <section
      id="story"
      className="py-20 sm:py-28 pb-28 sm:pb-36 bg-[#FAF5ED] text-[#200C06] relative overflow-hidden border-b border-[#200C06]/10 cursor-spice-leaf"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header Line */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#200C06]/15">
          <div className="flex items-center gap-3">
            <span className="editorial-number text-3xl font-serif">01</span>
            <span className="h-4 w-[1px] bg-[#200C06]/20" />
            <span className="text-xs uppercase tracking-widest text-[#A04028] font-bold">
              {content.introduction.label}
            </span>
          </div>
          <span className="text-xs font-serif italic text-[#2F130B]/70">
            The Heritage of Slow-Cooked Minangkabau Cuisine
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-[#200C06] leading-tight">
              {content.introduction.title}
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[#2F130B]/90 font-light leading-relaxed">
              {content.introduction.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Refined Standalone Typographic Quote */}
            <div className="pt-6 border-l-4 border-[#A04028] pl-6 my-8 space-y-2 bg-[#FFFBF5]/80 p-5 rounded-r-md">
              <blockquote className="text-2xl sm:text-4xl font-serif italic text-[#A04028] font-semibold leading-tight">
                &ldquo;{content.introduction.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-2 pt-2">
                <span className="h-[1px] w-6 bg-[#C86D3B]" />
                <span className="text-xs uppercase tracking-widest text-[#C86D3B] font-mono font-medium">
                  Minangkabau Kitchen Heritage
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Editorial Photo Frame */}
          <div className="lg:col-span-5 space-y-4">
            <div className="artifact-panel p-4 rounded-sm bg-[#FFFBF5]">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-[#FAF5ED] border border-[#200C06]/10">
                {!imageError ? (
                  <Image
                    src={content.introduction.imagePath}
                    alt={content.introduction.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-[#2F130B] p-8 text-[#FAF5ED] flex flex-col justify-center text-center">
                    <span className="font-serif italic text-2xl text-[#E5A84B]">
                      Patience &amp; Wood Fire
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="text-center pt-2 space-y-1">
              <h3 className="font-serif italic text-xl text-[#200C06] font-bold">
                {content.introduction.bannerTitle}
              </h3>
              <span className="text-[10px] uppercase tracking-widest text-[#A04028] font-bold block">
                {content.introduction.bannerSubtitle}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
