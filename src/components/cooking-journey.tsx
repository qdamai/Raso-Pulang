"use client";

import { useState } from "react";
import Image from "next/image";
import { SITE_CONTENT } from "@/data/content";
import { useLanguage } from "@/context/language-context";
import {
  playPoundingSound,
  playFireCrackleSound,
  playSimmerSound,
  stopSpatialSound,
} from "@/utils/spatial-audio";
import { Clock, Flame, Volume2, Leaf, UtensilsCrossed } from "lucide-react";

export function CookingJourney() {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [imageError, setImageError] = useState<Record<number, boolean>>({});
  const { language } = useLanguage();
  const content = SITE_CONTENT[language];

  // Stage visuals, SVG icons & spatial soundscape mappings (No emojis)
  const stageMetadata = [
    {
      image: "/images/gallery/rendang-2.jpg",
      timeText: "01:00 Hours",
      temp: "85°C",
      iconComponent: <Leaf className="w-5 h-5 text-[#E5A84B]" />,
      phaseName: { en: "Phase 1: Gulai", id: "Fase 1: Gulai" },
      sound: playSimmerSound,
      badgeColor: "border-[#E5A84B]/40 text-[#E5A84B]",
    },
    {
      image: "/images/gallery/rendang-3.jpg",
      timeText: "02:30 Hours",
      temp: "98°C",
      iconComponent: <Flame className="w-5 h-5 text-[#C86D3B]" />,
      phaseName: { en: "Phase 2: Gulai Kental", id: "Fase 2: Gulai Kental" },
      sound: playFireCrackleSound,
      badgeColor: "border-[#C86D3B]/40 text-[#C86D3B]",
    },
    {
      image: "/images/intro-kitchen.jpg",
      timeText: "04:00 Hours",
      temp: "108°C",
      iconComponent: <UtensilsCrossed className="w-5 h-5 text-[#A04028]" />,
      phaseName: { en: "Phase 3: Kalio", id: "Fase 3: Kalio" },
      sound: playFireCrackleSound,
      badgeColor: "border-[#A04028]/40 text-[#FAF5ED]",
    },
    {
      image: "/images/gallery/rendang-1.jpg",
      timeText: "05:00+ Hours",
      temp: "115°C",
      iconComponent: <Flame className="w-5 h-5 text-[#E5A84B]" />,
      phaseName: { en: "Phase 4: Rendang Daging", id: "Fase 4: Rendang Daging" },
      sound: playPoundingSound,
      badgeColor: "border-[#E5A84B] text-[#E5A84B]",
    },
  ];

  const handleStageHover = (idx: number) => {
    setActiveStage(idx);
    const meta = stageMetadata[idx];
    if (meta && meta.sound) {
      meta.sound();
    }
  };

  return (
    <section
      id="journey"
      className="py-24 sm:py-36 pb-32 sm:pb-44 bg-wine-menu text-[#FAF5ED] relative overflow-hidden border-b border-[#E5A84B]/20 cursor-spice-lemongrass"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Category Header with Dramatic Script Flourish */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E5A84B]/20">
          <div className="flex items-center gap-3">
            <span className="editorial-number text-3xl font-serif !text-[#E5A84B]">05</span>
            <span className="h-4 w-[1px] bg-[#E5A84B]/30" />
            <span className="text-xs uppercase tracking-widest text-[#E5A84B] font-bold">
              {content.cookingJourney.label} &bull; EDITORIAL TIMELINE
            </span>
          </div>
          <span className="text-xs font-serif italic text-[#FAF5ED]/70">
            The Art of <span className="font-serif italic text-base text-[#E5A84B]">Slow Caramelization</span> &amp; Patience
          </span>
        </div>

        {/* Section Dramatic Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-[#FAF5ED] leading-[1.08]">
            Nothing meaningful is <span className="italic font-normal text-[#E5A84B]">rushed.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#FAF5ED]/80 font-light leading-relaxed max-w-2xl mx-auto">
            {content.cookingJourney.intro} Hover over timeline nodes to hear the spatial soundscape of the kitchen.
          </p>
        </div>

        {/* Asymmetrical Vertical Editorial Timeline (Solid colors, No gradients) */}
        <div className="relative pt-12 pb-12">
          {/* Central Vertical Hairline (Solid line, No gradient) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-[#E5A84B]/30 hidden md:block" />

          <div className="space-y-20 md:space-y-28">
            {content.cookingJourney.stages.map((stage, idx) => {
              const isEven = idx % 2 === 0;
              const isSelected = idx === activeStage;
              const meta = stageMetadata[idx];

              return (
                <div
                  key={stage.step}
                  onMouseEnter={() => handleStageHover(idx)}
                  onMouseLeave={stopSpatialSound}
                  onClick={() => handleStageHover(idx)}
                  className={`relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center cursor-pointer transition-all duration-500 ${
                    isSelected ? "opacity-100" : "opacity-75 hover:opacity-100"
                  }`}
                >
                  {/* Central Timeline SVG Node (Desktop Only) */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center gap-1">
                    <div
                      className={`w-11 h-11 rounded-full bg-[#1A0507] border-2 flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? "border-[#E5A84B] text-[#E5A84B] scale-125 shadow-lg shadow-[#E5A84B]/20"
                          : "border-[#E5A84B]/40 text-[#FAF5ED]/60"
                      }`}
                    >
                      {meta.iconComponent}
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#E5A84B] uppercase bg-[#1A0507] px-2 py-0.5 rounded border border-[#E5A84B]/30">
                      {meta.timeText}
                    </span>
                  </div>

                  {/* Left Column: Photo if Even, Text if Odd */}
                  <div className={`md:col-span-6 ${isEven ? "md:text-right" : "md:order-2 md:text-left"} space-y-4`}>
                    {isEven ? (
                      /* Photo Frame on Left */
                      <div className="relative aspect-[4/3] w-full max-w-lg mx-auto md:ml-auto overflow-hidden rounded border border-[#E5A84B]/30 shadow-2xl group">
                        {!imageError[idx] ? (
                          <Image
                            src={meta.image}
                            alt={stage.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            onError={() => setImageError((prev) => ({ ...prev, [idx]: true }))}
                          />
                        ) : (
                          <div className="w-full h-full bg-[#2F130B] p-6 flex flex-col items-center justify-center text-center">
                            <span className="font-serif italic text-xl text-[#E5A84B]">
                              {stage.title}
                            </span>
                          </div>
                        )}
                        <div className="absolute bottom-0 left-0 right-0 bg-[#1A0507]/90 p-3 border-t border-[#E5A84B]/20 flex items-center justify-between text-[10px] font-mono text-[#FAF5ED]/90">
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3 h-3 text-[#E5A84B]" />
                            {meta.timeText}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Flame className="w-3 h-3 text-[#E5A84B]" />
                            {meta.temp}
                          </span>
                        </div>
                      </div>
                    ) : (
                      /* Text Block on Left */
                      <div className="space-y-4 max-w-lg mx-auto md:mr-auto">
                        <div className="flex items-center gap-3 md:justify-start justify-between border-b border-[#E5A84B]/20 pb-3">
                          <span className="editorial-number text-4xl font-serif !text-[#E5A84B]">
                            {stage.number}
                          </span>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#E5A84B]">
                            {meta.phaseName[language]}
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#FAF5ED] leading-tight">
                          {stage.title}
                        </h3>

                        <p className="font-serif italic text-base text-[#E5A84B]">
                          &ldquo;{stage.description}&rdquo;
                        </p>

                        <p className="text-sm text-[#FAF5ED]/85 leading-relaxed font-light">
                          {stage.detail}
                        </p>

                        <div className="pt-2 border-t border-[#E5A84B]/15 text-[10px] font-mono text-[#FAF5ED]/60 uppercase flex items-center justify-between">
                          <span>{stage.stampText}</span>
                          <span className="text-[#E5A84B] flex items-center gap-1">
                            Hover for Soundscape <Volume2 className="w-3.5 h-3.5 text-[#E5A84B]" />
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Text if Even, Photo if Odd */}
                  <div className={`md:col-span-6 ${isEven ? "md:text-left" : "md:order-1 md:text-right"} space-y-4`}>
                    {isEven ? (
                      /* Text Block on Right */
                      <div className="space-y-4 max-w-lg mx-auto md:ml-auto">
                        <div className="flex items-center gap-3 border-b border-[#E5A84B]/20 pb-3">
                          <span className="editorial-number text-4xl font-serif !text-[#E5A84B]">
                            {stage.number}
                          </span>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#E5A84B]">
                            {meta.phaseName[language]}
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#FAF5ED] leading-tight">
                          {stage.title}
                        </h3>

                        <p className="font-serif italic text-base text-[#E5A84B]">
                          &ldquo;{stage.description}&rdquo;
                        </p>

                        <p className="text-sm text-[#FAF5ED]/85 leading-relaxed font-light">
                          {stage.detail}
                        </p>

                        <div className="pt-2 border-t border-[#E5A84B]/15 text-[10px] font-mono text-[#FAF5ED]/60 uppercase flex items-center justify-between">
                          <span>{stage.stampText}</span>
                          <span className="text-[#E5A84B] flex items-center gap-1">
                            Hover for Soundscape <Volume2 className="w-3.5 h-3.5 text-[#E5A84B]" />
                          </span>
                        </div>
                      </div>
                    ) : (
                      /* Photo Frame on Right */
                      <div className="relative aspect-[4/3] w-full max-w-lg mx-auto md:mr-auto overflow-hidden rounded border border-[#E5A84B]/30 shadow-2xl group">
                        {!imageError[idx] ? (
                          <Image
                            src={meta.image}
                            alt={stage.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            onError={() => setImageError((prev) => ({ ...prev, [idx]: true }))}
                          />
                        ) : (
                          <div className="w-full h-full bg-[#2F130B] p-6 flex flex-col items-center justify-center text-center">
                            <span className="font-serif italic text-xl text-[#E5A84B]">
                              {stage.title}
                            </span>
                          </div>
                        )}
                        <div className="absolute bottom-0 left-0 right-0 bg-[#1A0507]/90 p-3 border-t border-[#E5A84B]/20 flex items-center justify-between text-[10px] font-mono text-[#FAF5ED]/90">
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3 h-3 text-[#E5A84B]" />
                            {meta.timeText}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Flame className="w-3 h-3 text-[#E5A84B]" />
                            {meta.temp}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Time Manipulation Ellipse Pill Navigation */}
        <div className="pt-8 border-t border-[#E5A84B]/20 text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E5A84B]/70 block">
            MANIPULATE COOKING TIME &bull; SELECT STAGE TO PREVIEW
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {stageMetadata.map((meta, idx) => (
              <button
                key={meta.timeText}
                type="button"
                onClick={() => handleStageHover(idx)}
                className={`pill-ellipse cursor-pointer ${
                  idx === activeStage
                    ? "bg-[#E5A84B] text-[#1A0507] font-bold border-[#E5A84B]"
                    : "text-[#FAF5ED]/80 hover:text-[#E5A84B]"
                }`}
              >
                {meta.timeText} ({content.cookingJourney.stages[idx]?.step})
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
