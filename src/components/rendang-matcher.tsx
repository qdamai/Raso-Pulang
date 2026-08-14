"use client";

import { useState } from "react";
import { SITE_CONTENT, RendangVariety } from "@/data/content";
import { useLanguage } from "@/context/language-context";

interface RendangMatcherProps {
  onSelectVariety: (variety: RendangVariety) => void;
}

export function RendangMatcher({ onSelectVariety }: RendangMatcherProps) {
  const { language } = useLanguage();
  const content = SITE_CONTENT[language];
  const quiz = content.rendangQuiz;
  const varieties = content.varieties.items;

  const [currentStep, setCurrentStep] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [recommendedVariety, setRecommendedVariety] = useState<RendangVariety | null>(null);

  const handleOptionSelect = (category: string) => {
    const updated = [...selectedCategories, category];
    setSelectedCategories(updated);

    if (currentStep < quiz.questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Tally category selections to find top match
      const counts: Record<string, number> = {};
      updated.forEach((cat) => {
        counts[cat] = (counts[cat] || 0) + 1;
      });

      let winner = updated[0];
      let maxCount = 0;
      Object.entries(counts).forEach(([cat, cnt]) => {
        if (cnt > maxCount) {
          maxCount = cnt;
          winner = cat;
        }
      });

      const match = varieties.find((v) => v.regionCategory === winner) || varieties[0];
      setRecommendedVariety(match);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setSelectedCategories([]);
    setRecommendedVariety(null);
  };

  return (
    <div className="bg-[#190608] border border-[#E5A84B]/30 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden text-[#FAF5ED] font-sans">
      {/* Header Tag */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5A84B]/20 pb-6 mb-8 relative z-10">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#E5A84B] px-3 py-1 rounded-full border border-[#E5A84B]/40 bg-[#E5A84B]/10">
            {quiz.badge}
          </span>
          <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#FAF5ED] mt-3">
            {quiz.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#FAF5ED]/70 font-light mt-1 max-w-xl">
            {quiz.subtitle}
          </p>
        </div>

        {recommendedVariety && (
          <button
            type="button"
            onClick={handleRestart}
            className="text-xs font-mono font-bold uppercase tracking-wider text-[#E5A84B] hover:text-[#FAF5ED] border border-[#E5A84B]/40 hover:border-[#E5A84B] px-4 py-2 rounded-full transition-all self-start sm:self-auto cursor-pointer"
          >
            {quiz.restartText}
          </button>
        )}
      </div>

      {/* Quiz Body */}
      {!recommendedVariety ? (
        <div className="space-y-8 relative z-10">
          {/* Progress Bar */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#E5A84B]">
              0{currentStep + 1} / 0{quiz.questions.length}
            </span>
            <div className="flex-1 h-1.5 bg-[#FAF5ED]/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#C86D3B] to-[#E5A84B] transition-all duration-500"
                style={{
                  width: `${((currentStep + 1) / quiz.questions.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Current Question */}
          <div className="space-y-6">
            <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#FAF5ED]">
              {quiz.questions[currentStep].question}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quiz.questions[currentStep].options.map((opt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleOptionSelect(opt.category)}
                  className="p-5 text-left rounded-xl border border-[#E5A84B]/20 bg-[#25090C] hover:bg-[#E5A84B] hover:text-[#190608] hover:border-[#E5A84B] group transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer flex flex-col justify-between space-y-3"
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-[#E5A84B]/30 group-hover:border-[#190608]/40 group-hover:bg-[#190608]/10 text-[#E5A84B] group-hover:text-[#190608]">
                      Option 0{idx + 1}
                    </span>
                    <span className="text-xs font-mono font-bold group-hover:translate-x-1 transition-transform">
                      Select
                    </span>
                  </div>
                  <span className="font-serif font-semibold text-sm sm:text-base leading-relaxed">
                    {opt.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Match Result Screen */
        <div className="relative z-10 space-y-6 animate-fadeIn">
          <div className="p-6 sm:p-8 rounded-2xl border-2 border-[#E5A84B] bg-[#25090C] space-y-6 text-center sm:text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-[#E5A84B] text-[#190608] font-mono text-[10px] font-extrabold uppercase tracking-widest rounded-bl-xl shadow">
              RECOMMENDED MATCH
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-[#E5A84B] uppercase tracking-widest block">
                {recommendedVariety.origin} &bull; {recommendedVariety.tag}
              </span>
              <h4 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#FAF5ED]">
                {recommendedVariety.name}
              </h4>
            </div>

            <p className="text-sm sm:text-base text-[#FAF5ED]/90 leading-relaxed font-light max-w-2xl">
              {recommendedVariety.description}
            </p>

            {/* Flavor Metrics Snapshot */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#E5A84B]/20">
              <div className="p-3 bg-[#190608] rounded-lg text-center border border-[#E5A84B]/20">
                <span className="text-[10px] font-mono text-[#FAF5ED]/60 uppercase block">Pedas</span>
                <span className="font-mono font-bold text-[#E5A84B] text-sm sm:text-base">
                  {recommendedVariety.flavorProfile.spiceLevel} / 5
                </span>
              </div>
              <div className="p-3 bg-[#190608] rounded-lg text-center border border-[#E5A84B]/20">
                <span className="text-[10px] font-mono text-[#FAF5ED]/60 uppercase block">Santan</span>
                <span className="font-mono font-bold text-[#E5A84B] text-sm sm:text-base">
                  {recommendedVariety.flavorProfile.richness} / 5
                </span>
              </div>
              <div className="p-3 bg-[#190608] rounded-lg text-center border border-[#E5A84B]/20">
                <span className="text-[10px] font-mono text-[#FAF5ED]/60 uppercase block">Tekstur</span>
                <span className="font-mono font-bold text-[#E5A84B] text-sm sm:text-base">
                  {recommendedVariety.flavorProfile.crunchiness} / 5
                </span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="button"
                onClick={() => onSelectVariety(recommendedVariety)}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#E5A84B] hover:bg-[#FAF5ED] text-[#190608] font-mono font-bold text-xs uppercase tracking-widest rounded-lg transition-all shadow-lg hover:shadow-2xl cursor-pointer"
              >
                {quiz.resultButtonText}
              </button>
              <span className="text-xs text-[#FAF5ED]/60 italic font-serif">
                &ldquo;{recommendedVariety.funFact}&rdquo;
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
