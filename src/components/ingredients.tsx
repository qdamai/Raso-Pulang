"use client";

import { useState, KeyboardEvent } from "react";
import { SITE_CONTENT, Ingredient } from "@/data/content";
import { useLanguage } from "@/context/language-context";
import {
  playPoundingSound,
  playSimmerSound,
  playFireCrackleSound,
  stopSpatialSound,
} from "@/utils/spatial-audio";

export function Ingredients() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isFading, setIsFading] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [meatWeight, setMeatWeight] = useState<number>(1);
  const { language } = useLanguage();
  const content = SITE_CONTENT[language];

  const selectedIngredient: Ingredient =
    content.ingredients.items[selectedIndex] || content.ingredients.items[0];

  const handleSelect = (idx: number) => {
    if (idx === selectedIndex) return;
    setIsFading(true);

    if (!isAudioMuted) {
      if (idx === 0 || idx === 1) playSimmerSound();
      else if (idx === 2 || idx === 3) playPoundingSound();
      else playFireCrackleSound();
    }

    setTimeout(() => {
      setSelectedIndex(idx);
      setIsFading(false);
    }, 150);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      handleSelect((index + 1) % content.ingredients.items.length);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      handleSelect(
        (index - 1 + content.ingredients.items.length) % content.ingredients.items.length
      );
    }
  };

  return (
    <section
      id="ingredients"
      className="py-24 sm:py-36 pb-32 sm:pb-44 bg-[#FFFBF5] text-[#200C06] relative overflow-hidden border-b border-[#200C06]/15 font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Category Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#200C06]/15">
          <div className="flex items-center gap-3">
            <span className="editorial-number text-3xl font-serif text-[#A04028]">04</span>
            <span className="h-4 w-[1px] bg-[#200C06]/20" />
            <span className="text-xs uppercase tracking-widest text-[#A04028] font-bold">
              {content.ingredients.label} &bull; THE ALCHEMY OF SPICES
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Audio Switch */}
            <button
              type="button"
              onClick={() => {
                if (!isAudioMuted) stopSpatialSound();
                setIsAudioMuted(!isAudioMuted);
              }}
              className="px-3 py-1 rounded-full border border-[#A04028]/30 font-mono text-[10px] uppercase font-bold text-[#A04028] hover:bg-[#A04028] hover:text-[#FFFBF5] transition-all cursor-pointer"
            >
              {isAudioMuted ? "Audio Off" : "Spatial Audio On"}
            </button>
            <span className="text-xs font-serif italic text-[#2F130B]/70 hidden sm:inline">
              Aromatic Herbs, Coconut Reduction &amp; Natural Antiseptic Spices
            </span>
          </div>
        </div>

        {/* Dramatic Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-[#200C06] leading-tight">
            Layers of flavor, <span className="italic font-normal text-[#A04028]">made with time.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#2F130B]/85 font-light leading-relaxed max-w-2xl mx-auto">
            {content.ingredients.summary}
          </p>
        </div>

        {/* Interactive Selector & Mortar Laboratory Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Ingredient Buttons List */}
          <div
            className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-3"
            role="tablist"
            aria-label="Rendang Ingredients Selector"
          >
            {content.ingredients.items.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`tab-${item.id}`}
                  aria-selected={isSelected}
                  aria-controls={`panel-${item.id}`}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => handleSelect(idx)}
                  onMouseLeave={stopSpatialSound}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className={`w-full flex items-center justify-between px-6 py-4 text-left transition-all rounded-xl cursor-pointer border ${
                    isSelected
                      ? "bg-[#2F130B] text-[#FAF5ED] border-l-4 border-[#A04028] shadow-xl"
                      : "bg-[#FAF5ED] text-[#200C06]/70 hover:bg-[#FAF5ED]/80 hover:text-[#200C06] border-[#200C06]/15"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`editorial-number text-xl font-serif font-bold ${isSelected ? "text-[#E5A84B]" : "text-[#A04028]"}`}>
                      {item.number}
                    </span>
                    <span className="font-serif font-bold text-base">
                      {item.name}
                    </span>
                  </div>
                  <span className={`text-[10px] font-mono uppercase font-bold ${isSelected ? "text-[#E5A84B]" : "text-[#A04028]"}`}>
                    {item.role.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Mortar & Culinary Chemistry Display Panel */}
          <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between rounded-2xl border border-[#200C06]/15 bg-[#FAF5ED] text-[#200C06] shadow-2xl relative overflow-hidden">
            <div
              id={`panel-${selectedIngredient.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${selectedIngredient.id}`}
              className={`space-y-6 transition-opacity duration-200 ${
                isFading ? "opacity-0" : "opacity-100"
              }`}
            >
              {/* Top Header: Ingredient Name & Stamp Badge */}
              <div className="flex items-center justify-between border-b border-[#200C06]/15 pb-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#A04028] font-bold">
                    {selectedIngredient.role}
                  </span>
                  <h3 className="text-3xl sm:text-5xl font-serif font-bold text-[#200C06]">
                    {selectedIngredient.name}
                  </h3>
                </div>
                <div className="w-14 h-14 rounded-full bg-[#2F130B] text-[#FAF5ED] flex items-center justify-center font-mono font-bold text-lg shadow border border-[#E5A84B]/40">
                  {selectedIngredient.number}
                </div>
              </div>

              {/* Script Quote */}
              <p className="font-serif italic text-xl text-[#A04028]">
                &ldquo;{selectedIngredient.scriptNote}&rdquo;
              </p>

              {/* Main Description */}
              <p className="text-base text-[#2F130B]/90 font-light leading-relaxed">
                {selectedIngredient.description}
              </p>

              {/* Natural Antiseptic Protection Index */}
              <div className="p-5 rounded-xl border border-[#200C06]/15 bg-[#FFFBF5] space-y-3 shadow-inner">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="font-bold text-[#A04028] uppercase tracking-wider">
                    Natural Antiseptic Protection Index
                  </span>
                  <span className="font-extrabold text-[#A04028]">
                    {selectedIngredient.antisepticIndex}%
                  </span>
                </div>

                <div className="h-2 bg-[#200C06]/10 rounded-full overflow-hidden border border-[#200C06]/10">
                  <div
                    className="h-full bg-gradient-to-r from-[#C86D3B] to-[#A04028] transition-all duration-700 rounded-full"
                    style={{ width: `${selectedIngredient.antisepticIndex}%` }}
                  />
                </div>

                {/* Aroma Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {selectedIngredient.aromaNotes.map((note, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-[#200C06]/5 border border-[#200C06]/10 text-[10px] font-mono font-bold text-[#200C06]/80 uppercase tracking-wider"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Culinary Chemistry Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[#FFFBF5] border border-[#200C06]/15 space-y-1.5">
                  <span className="font-mono font-bold text-[#A04028] uppercase tracking-wider block">
                    Fungsi Utama Kuliner
                  </span>
                  <p className="text-[#2F130B]/90 leading-relaxed font-light">
                    {selectedIngredient.culinaryPurpose}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FFFBF5] border border-[#200C06]/15 space-y-1.5">
                  <span className="font-mono font-bold text-[#A04028] uppercase tracking-wider block">
                    Senyawa Senyawa Aktif
                  </span>
                  <p className="text-[#2F130B]/90 font-serif italic text-sm">
                    {selectedIngredient.activeCompound}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FFFBF5] border border-[#200C06]/15 space-y-1.5 sm:col-span-2">
                  <span className="font-mono font-bold text-[#A04028] uppercase tracking-wider block">
                    Mekanisme Pengawetan Alami
                  </span>
                  <p className="text-[#2F130B]/90 leading-relaxed font-light">
                    {selectedIngredient.preservationMechanism}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Footer Index */}
            <div className="mt-8 pt-4 border-t border-[#200C06]/15 flex items-center justify-between text-xs text-[#2F130B]/60 font-mono">
              <span className="font-serif italic text-[#A04028]">Takaran Tradisional: {selectedIngredient.proportionPerKg}</span>
              <span className="font-bold text-[#A04028]">
                {selectedIndex + 1} / {content.ingredients.items.length}
              </span>
            </div>
          </div>
        </div>

        {/* Practical Traditional Rendang Spice Proportion Calculator */}
        <div className="p-8 sm:p-10 rounded-2xl border border-[#200C06]/15 bg-[#2F130B] text-[#FAF5ED] space-y-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#FAF5ED]/15 pb-6">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#E5A84B] px-3 py-1 rounded-full border border-[#E5A84B]/30 bg-[#E5A84B]/10">
                PRACTICAL CULINARY TOOL
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#FAF5ED] mt-3">
                {language === "id"
                  ? "Kalkulator Takaran Rempah Rendang Tradisional"
                  : "Traditional Rendang Spice Proportion Calculator"}
              </h3>
              <p className="text-xs sm:text-sm text-[#FAF5ED]/70 font-light mt-1 max-w-2xl">
                {language === "id"
                  ? "Hitung takaran persisi bumbu halus dan kelapa untuk memasak Rendang autentik Minang berdasarkan berat daging."
                  : "Calculate exact authentic Minang spice and coconut milk proportions based on meat weight."}
              </p>
            </div>

            <div className="flex items-center gap-3 bg-[#1F070A] p-4 rounded-xl border border-[#E5A84B]/30 self-start sm:self-auto">
              <span className="text-xs font-mono font-bold text-[#E5A84B] uppercase tracking-wider">
                {language === "id" ? "Berat Daging:" : "Meat Weight:"}
              </span>
              <span className="text-2xl font-mono font-extrabold text-[#FAF5ED]">
                {meatWeight} kg
              </span>
            </div>
          </div>

          {/* Weight Slider */}
          <div className="space-y-3 max-w-xl">
            <div className="flex justify-between text-xs font-mono text-[#FAF5ED]/80">
              <span>1 kg (Rumah Tangga)</span>
              <span>5 kg (Perhelatan Adat)</span>
              <span>10 kg (Kuali Besar)</span>
            </div>
            <input
              type="range"
              min={1}
              max={10}
              step={1}
              value={meatWeight}
              onChange={(e) => setMeatWeight(Number(e.target.value))}
              className="w-full h-2 bg-[#1F070A] rounded-lg appearance-none cursor-pointer accent-[#E5A84B] border border-[#E5A84B]/30"
            />
          </div>

          {/* Calculated Proportions Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#1F070A] border border-[#E5A84B]/20 space-y-1 text-center">
              <span className="text-[10px] font-mono text-[#FAF5ED]/60 uppercase block">Daging Sapi</span>
              <span className="font-mono font-bold text-[#E5A84B] text-lg block">{meatWeight * 1.0} kg</span>
              <span className="text-[10px] text-[#FAF5ED]/60 font-serif italic">Paha / Gandik</span>
            </div>

            <div className="p-4 rounded-xl bg-[#1F070A] border border-[#E5A84B]/20 space-y-1 text-center">
              <span className="text-[10px] font-mono text-[#FAF5ED]/60 uppercase block">Kelapa Tua</span>
              <span className="font-mono font-bold text-[#E5A84B] text-lg block">{meatWeight * 3} Butir</span>
              <span className="text-[10px] text-[#FAF5ED]/60 font-serif italic">Perasan Kental</span>
            </div>

            <div className="p-4 rounded-xl bg-[#1F070A] border border-[#E5A84B]/20 space-y-1 text-center">
              <span className="text-[10px] font-mono text-[#FAF5ED]/60 uppercase block">Cabai Merah</span>
              <span className="font-mono font-bold text-[#E5A84B] text-lg block">{meatWeight * 250} g</span>
              <span className="text-[10px] text-[#FAF5ED]/60 font-serif italic">Cabai Giling Halus</span>
            </div>

            <div className="p-4 rounded-xl bg-[#1F070A] border border-[#E5A84B]/20 space-y-1 text-center">
              <span className="text-[10px] font-mono text-[#FAF5ED]/60 uppercase block">Lengkuas</span>
              <span className="font-mono font-bold text-[#E5A84B] text-lg block">{meatWeight * 100} g</span>
              <span className="text-[10px] text-[#FAF5ED]/60 font-serif italic">Geprek Memar</span>
            </div>

            <div className="p-4 rounded-xl bg-[#1F070A] border border-[#E5A84B]/20 space-y-1 text-center">
              <span className="text-[10px] font-mono text-[#FAF5ED]/60 uppercase block">Serai Wangi</span>
              <span className="font-mono font-bold text-[#E5A84B] text-lg block">{meatWeight * 3} Batang</span>
              <span className="text-[10px] text-[#FAF5ED]/60 font-serif italic">Simpulkan Whole</span>
            </div>

            <div className="p-4 rounded-xl bg-[#1F070A] border border-[#E5A84B]/20 space-y-1 text-center">
              <span className="text-[10px] font-mono text-[#FAF5ED]/60 uppercase block">Daun Jeruk</span>
              <span className="font-mono font-bold text-[#E5A84B] text-lg block">{meatWeight * 5} Lembar</span>
              <span className="text-[10px] text-[#FAF5ED]/60 font-serif italic">Sobek Urat Daun</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
