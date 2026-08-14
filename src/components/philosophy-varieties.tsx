"use client";

import { useState } from "react";
import { SITE_CONTENT, RendangVariety } from "@/data/content";
import { useLanguage } from "@/context/language-context";
import { NiniakMamakSearch } from "@/components/niniak-mamak-search";
import { RendangMatcher } from "@/components/rendang-matcher";
import { VarietyModal } from "@/components/variety-modal";

export function PhilosophyVarieties() {
  const { language } = useLanguage();
  const content = SITE_CONTENT[language];

  // Section 03 Interactive States
  const [activeRegion, setActiveRegion] = useState<string>("all");
  const [selectedModalVariety, setSelectedModalVariety] = useState<RendangVariety | null>(null);
  const [activeLegacyTab, setActiveLegacyTab] = useState<"global" | "humanitarian">("global");

  const regions = [
    { id: "all", label: language === "id" ? "Semua Region" : "All Regions" },
    { id: "tanah-datar", label: "Luhak Tanah Datar" },
    { id: "agam", label: "Luhak Agam" },
    { id: "limapuluh-kota", label: "Luhak Limapuluh Kota" },
    { id: "pesisir", label: "Rantau & Pesisir" },
  ];

  const filteredVarieties =
    activeRegion === "all"
      ? content.varieties.items
      : content.varieties.items.filter((item) => item.regionCategory === activeRegion);

  return (
    <div className="space-y-0 font-sans">
      {/* 1. Cultural Philosophy Section (Numbered 02) */}
      <section
        id="philosophy"
        className="py-24 sm:py-32 pb-28 sm:pb-36 bg-[#FAF5ED] text-[#200C06] relative overflow-hidden border-b border-[#200C06]/15"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          {/* Distinct Category Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#200C06]/15">
            <div className="flex items-center gap-3">
              <span className="editorial-number text-3xl font-serif">02</span>
              <span className="h-4 w-[1px] bg-[#200C06]/20" />
              <span className="text-xs uppercase tracking-widest text-[#A04028] font-bold">
                {content.philosophy.label} &bull; FOUR SACRED PILLARS
              </span>
            </div>
            <span className="text-xs font-serif italic text-[#2F130B]/70">
              Minangkabau Social Structure &amp; Culinary Philosophy
            </span>
          </div>

          {/* Dramatic Title Header */}
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h2 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-[#200C06] leading-tight">
              Four Pillars of <span className="italic font-normal text-[#A04028]">Consensus.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#2F130B]/85 font-light leading-relaxed max-w-2xl mx-auto">
              {content.philosophy.intro}
            </p>
          </div>

          {/* 4 Pillars - Horizontal Accordion Cards */}
          <div className="accordion-container">
            {content.philosophy.symbols.map((symbol, idx) => {
              return (
                <div
                  key={symbol.id}
                  className="accordion-card p-6 border border-[#200C06]/15 rounded-xl flex flex-col justify-between bg-[#FAF5ED] hover:bg-[#200C06] hover:border-[#E5A84B]/40 group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  {/* Top Header: Pillar Number & Role Tag */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-[#200C06]/10 group-hover:border-[#E5A84B]/20 pb-3 transition-colors">
                      <span className="editorial-number text-3xl font-serif text-[#A04028] group-hover:text-[#E5A84B] transition-colors">
                        0{idx + 1}
                      </span>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-[#A04028]/30 text-[#A04028] group-hover:border-[#E5A84B]/40 group-hover:text-[#E5A84B] group-hover:bg-[#E5A84B]/10 transition-all whitespace-nowrap">
                        {symbol.symbolizes}
                      </span>
                    </div>

                    {/* Main Title & Subtitle */}
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#2F130B]/60 group-hover:text-[#FAF5ED]/60 font-bold block transition-colors">
                        {symbol.roleTitle}
                      </span>
                      <h3 className="text-3xl font-serif font-bold text-[#200C06] group-hover:text-[#FAF5ED] transition-colors">
                        {symbol.minangName}
                      </h3>
                      <span className="text-xs text-[#A04028] group-hover:text-[#E5A84B] italic font-serif block transition-colors">
                        ({symbol.translatedName})
                      </span>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-xs sm:text-sm text-[#2F130B]/90 group-hover:text-[#FAF5ED]/90 leading-relaxed font-light transition-all duration-500">
                      {symbol.description}
                    </p>
                  </div>

                  {/* Bottom Footer Stamp */}
                  <div className="pt-4 border-t border-[#200C06]/10 group-hover:border-[#E5A84B]/20 text-[10px] font-mono uppercase font-bold text-[#C86D3B] group-hover:text-[#E5A84B] flex items-center justify-between transition-colors mt-4">
                    <span>Pillar 0{idx + 1}</span>
                    <span className="font-serif italic text-xs text-[#A04028] group-hover:text-[#E5A84B] transition-colors">
                      Minang Artefact
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Niniak Mamak Knowledge System Search */}
          <div className="pt-8">
            <NiniakMamakSearch />
          </div>
        </div>
      </section>

      {/* 2. Varieties & Global Honors Section (Numbered 03) */}
      <section
        id="varieties"
        className="py-24 sm:py-32 pb-28 sm:pb-36 bg-wine-menu text-[#FAF5ED] relative overflow-hidden border-t border-b border-[#E5A84B]/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          {/* Section Category Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E5A84B]/20">
            <div className="flex items-center gap-3">
              <span className="editorial-number text-3xl font-serif !text-[#E5A84B]">03</span>
              <span className="h-4 w-[1px] bg-[#E5A84B]/30" />
              <span className="text-xs uppercase tracking-widest text-[#E5A84B] font-bold">
                {content.varieties.label} &bull; HERITAGE &amp; VARIATIONS
              </span>
            </div>
            <span className="text-xs font-serif italic text-[#FAF5ED]/70">
              Regional Variations &amp; Global Culinary Legacy
            </span>
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-[#FAF5ED] leading-tight">
              Rendang of the <span className="italic font-normal text-[#E5A84B]">Luhak Nan Tigo.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#FAF5ED]/80 font-light leading-relaxed">
              {content.varieties.intro}
            </p>
          </div>

          {/* Interactive Legacy Feature Tabs (Global Honor vs Disaster Relief) */}
          <div className="space-y-6">
            <div className="flex justify-center border-b border-[#E5A84B]/20 gap-2 sm:gap-6 pb-4">
              <button
                type="button"
                onClick={() => setActiveLegacyTab("global")}
                className={`px-5 py-2.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                  activeLegacyTab === "global"
                    ? "bg-[#E5A84B] text-[#1F070A] border-[#E5A84B] shadow-lg"
                    : "bg-[#1F070A]/60 text-[#FAF5ED]/70 border-[#E5A84B]/20 hover:text-[#FAF5ED] hover:border-[#E5A84B]/40"
                }`}
              >
                Global &amp; National Recognition
              </button>
              <button
                type="button"
                onClick={() => setActiveLegacyTab("humanitarian")}
                className={`px-5 py-2.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                  activeLegacyTab === "humanitarian"
                    ? "bg-[#E5A84B] text-[#1F070A] border-[#E5A84B] shadow-lg"
                    : "bg-[#1F070A]/60 text-[#FAF5ED]/70 border-[#E5A84B]/20 hover:text-[#FAF5ED] hover:border-[#E5A84B]/40"
                }`}
              >
                Humanitarian Heritage
              </button>
            </div>

            <div className="p-8 border border-[#E5A84B]/25 rounded-2xl bg-[#1F070A]/90 backdrop-blur-md space-y-4 shadow-xl transition-all duration-300">
              {activeLegacyTab === "global" ? (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between border-b border-[#E5A84B]/20 pb-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E5A84B]">
                      CNN WORLD&apos;S 50 BEST FOODS &bull; NO. 11
                    </span>
                    <span className="text-xs font-serif italic text-[#FAF5ED]/60">
                      Jakarta &bull; Amsterdam &bull; London &bull; New York
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#FAF5ED]">
                    {content.varieties.nationalHonorTitle}
                  </h3>
                  <p className="text-sm sm:text-base text-[#FAF5ED]/85 leading-relaxed font-light">
                    {content.varieties.nationalHonorText}
                  </p>
                </div>
              ) : (
                <div className="space-y-4 animate-fadeIn border-l-4 border-l-[#E5A84B] pl-4 sm:pl-6">
                  <div className="flex items-center justify-between border-b border-[#E5A84B]/20 pb-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E5A84B]">
                      TRADISI MASYARAKAT MINANG &bull; GAWAT DARURAT BENCANA
                    </span>
                    <span className="text-xs font-serif italic text-[#FAF5ED]/60">
                      Tahan 3-4 Bulan Tanpa Bahan Pengawet
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#FAF5ED]">
                    {content.varieties.disasterReliefTitle}
                  </h3>
                  <p className="text-sm sm:text-base text-[#FAF5ED]/85 leading-relaxed font-light">
                    {content.varieties.disasterReliefText}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Interactive Luhak Nan Tigo Regional Filter Bar */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-[#E5A84B]/20">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#FAF5ED]">
                Regional Varieties ({filteredVarieties.length})
              </h3>

              <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Luhak Region Filter">
                {regions.map((reg) => (
                  <button
                    key={reg.id}
                    type="button"
                    role="tab"
                    aria-selected={activeRegion === reg.id}
                    onClick={() => setActiveRegion(reg.id)}
                    className={`px-4 py-1.5 rounded-full font-mono text-xs font-semibold transition-all cursor-pointer border ${
                      activeRegion === reg.id
                        ? "bg-[#E5A84B] text-[#1F070A] border-[#E5A84B] shadow"
                        : "bg-[#1F070A]/50 text-[#FAF5ED]/80 border-[#E5A84B]/20 hover:border-[#E5A84B]/40 hover:text-[#FAF5ED]"
                    }`}
                  >
                    <span>{reg.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Rendang Regional Varieties - Editorial Text Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredVarieties.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedModalVariety(item)}
                  className="p-6 text-[#FAF5ED] space-y-4 border border-[#E5A84B]/20 rounded-xl bg-[#1F070A]/60 hover:bg-[#25090C] hover:border-[#E5A84B]/60 transition-all duration-300 cursor-pointer group shadow-md hover:shadow-2xl flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-[#E5A84B]/15 pb-2">
                      <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-[#E5A84B] group-hover:underline">
                        {item.tag}
                      </span>
                      <span className="text-xs font-serif italic text-[#FAF5ED]/70">
                        {item.origin}
                      </span>
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-[#FAF5ED] group-hover:text-[#E5A84B] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#FAF5ED]/80 leading-relaxed font-light">
                      {item.description}
                    </p>

                    {/* Quick Flavor Meter Badges */}
                    <div className="pt-2 flex items-center gap-4 text-[10px] font-mono text-[#FAF5ED]/60 border-t border-[#E5A84B]/10">
                      <span>Pedas: {item.flavorProfile.spiceLevel}/5</span>
                      <span>Santan: {item.flavorProfile.richness}/5</span>
                      <span>Tekstur: {item.flavorProfile.crunchiness}/5</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#E5A84B]/15 flex items-center justify-between text-xs font-mono font-bold text-[#E5A84B] group-hover:text-[#FAF5ED] transition-colors">
                    <span>Inspect Variety</span>
                    <span className="font-serif italic text-xs text-[#E5A84B]/70 group-hover:text-[#FAF5ED]">Detail</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Rendang Matcher Mini-Quiz */}
          <div className="pt-12">
            <RendangMatcher onSelectVariety={(v) => setSelectedModalVariety(v)} />
          </div>
        </div>
      </section>

      {/* Variety Detail Modal Dialog */}
      <VarietyModal
        variety={selectedModalVariety}
        onClose={() => setSelectedModalVariety(null)}
      />
    </div>
  );
}
