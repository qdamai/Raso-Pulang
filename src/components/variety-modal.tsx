"use client";

import { useEffect } from "react";
import { RendangVariety } from "@/data/content";

interface VarietyModalProps {
  variety: RendangVariety | null;
  onClose: () => void;
}

export function VarietyModal({ variety, onClose }: VarietyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (variety) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [variety, onClose]);

  if (!variety) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md font-sans text-[#FAF5ED] animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-variety-title"
    >
      <div
        className="bg-[#1C070A] border-2 border-[#E5A84B]/40 rounded-2xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl relative space-y-6 overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Badge & Close Button */}
        <div className="flex items-center justify-between border-b border-[#E5A84B]/20 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#E5A84B] px-3 py-1 rounded-full border border-[#E5A84B]/40 bg-[#E5A84B]/10">
              {variety.tag}
            </span>
            <span className="text-xs font-serif italic text-[#FAF5ED]/70">
              {variety.origin}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="w-9 h-9 rounded-full border border-[#E5A84B]/30 flex items-center justify-center text-[#E5A84B] hover:bg-[#E5A84B] hover:text-[#1C070A] transition-all cursor-pointer font-bold text-lg"
          >
            &times;
          </button>
        </div>

        {/* Variety Title */}
        <div className="space-y-2">
          <h3 id="modal-variety-title" className="text-3xl sm:text-5xl font-serif font-extrabold text-[#FAF5ED]">
            {variety.name}
          </h3>
          <p className="text-sm sm:text-base text-[#FAF5ED]/85 font-light leading-relaxed">
            {variety.description}
          </p>
        </div>

        {/* Flavor Gauges */}
        <div className="p-5 rounded-xl border border-[#E5A84B]/20 bg-[#290B0F] space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E5A84B] block border-b border-[#E5A84B]/15 pb-2">
            Flavor &amp; Texture Metrics
          </span>

          <div className="space-y-3 text-xs sm:text-sm">
            {/* Spice Gauge */}
            <div className="space-y-1">
              <div className="flex justify-between font-mono">
                <span>Tingkat Kepedasan</span>
                <span className="text-[#E5A84B] font-bold">{variety.flavorProfile.spiceLevel} / 5</span>
              </div>
              <div className="h-2 bg-[#1C070A] rounded-full overflow-hidden border border-[#E5A84B]/20">
                <div
                  className="h-full bg-gradient-to-r from-amber-600 to-red-500 rounded-full"
                  style={{ width: `${(variety.flavorProfile.spiceLevel / 5) * 100}%` }}
                />
              </div>
            </div>

            {/* Richness Gauge */}
            <div className="space-y-1">
              <div className="flex justify-between font-mono">
                <span>Kekayaan Santan &amp; Gurih</span>
                <span className="text-[#E5A84B] font-bold">{variety.flavorProfile.richness} / 5</span>
              </div>
              <div className="h-2 bg-[#1C070A] rounded-full overflow-hidden border border-[#E5A84B]/20">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-[#E5A84B] rounded-full"
                  style={{ width: `${(variety.flavorProfile.richness / 5) * 100}%` }}
                />
              </div>
            </div>

            {/* Crunchiness Gauge */}
            <div className="space-y-1">
              <div className="flex justify-between font-mono">
                <span>Tekstur &amp; Kerenyahan</span>
                <span className="text-[#E5A84B] font-bold">{variety.flavorProfile.crunchiness} / 5</span>
              </div>
              <div className="h-2 bg-[#1C070A] rounded-full overflow-hidden border border-[#E5A84B]/20">
                <div
                  className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"
                  style={{ width: `${(variety.flavorProfile.crunchiness / 5) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Pairing & Secret Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-lg bg-[#290B0F] border border-[#E5A84B]/20 space-y-2">
            <span className="font-mono font-bold text-[#E5A84B] uppercase tracking-wider block">
              Saran Paduan Hidangan
            </span>
            <p className="text-[#FAF5ED]/85 leading-relaxed font-serif italic text-sm">
              {variety.pairingSuggestion}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-[#290B0F] border border-[#E5A84B]/20 space-y-2">
            <span className="font-mono font-bold text-[#E5A84B] uppercase tracking-wider block">
              Rahasia Tradisi Kuliner
            </span>
            <p className="text-[#FAF5ED]/85 leading-relaxed font-light text-xs">
              {variety.cookingSecret}
            </p>
          </div>
        </div>

        {/* Fun Fact Footer */}
        <div className="p-4 rounded-lg bg-[#FAF5ED]/5 border-l-4 border-l-[#E5A84B] text-xs text-[#FAF5ED]/80 font-serif italic">
          &ldquo;{variety.funFact}&rdquo;
        </div>
      </div>
    </div>
  );
}
