"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compute dynamic color from Santan (Cream) -> Kalio (Burnt Spice) -> Rendang (Dark Mahogany)
  const getProgressColor = (progress: number) => {
    if (progress < 35) {
      return "bg-[#E5A84B]"; // Fresh coconut & spice gold
    } else if (progress < 70) {
      return "bg-[#C86D3B]"; // Kalio reduction burnt spice
    } else {
      return "bg-[#A04028]"; // Dark mahogany rendang
    }
  };

  return (
    <div className="fixed right-3 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-2 pointer-events-none">
      <span className="text-[9px] font-bold uppercase tracking-widest text-deep-brown/60 -rotate-90 origin-center mb-6">
        MERENDANG
      </span>

      {/* Progress Track Line */}
      <div className="w-1.5 h-48 bg-warm-spice/20 rounded-full overflow-hidden relative border border-warm-spice/30 shadow-inner">
        <div
          className={`w-full transition-all duration-300 rounded-full ${getProgressColor(scrollProgress)}`}
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      <span className="text-[10px] font-mono font-bold text-burnt-terracotta mt-2">
        {Math.round(scrollProgress)}%
      </span>
    </div>
  );
}
