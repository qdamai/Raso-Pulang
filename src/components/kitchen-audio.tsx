"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/language-context";

export function KitchenAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const { language } = useLanguage();

  const buttonText = {
    en: isPlaying ? "Silence Hearth" : "Listen to Kitchen",
    id: isPlaying ? "Heningkan Dapur" : "Dengarkan Dapur",
  };

  const toggleAudio = () => {
    if (!isPlaying) {
      try {
        const AudioContextClass =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        const mainGain = ctx.createGain();
        mainGain.gain.setValueAtTime(0.12, ctx.currentTime);
        mainGain.connect(ctx.destination);
        gainNodeRef.current = mainGain;

        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = Math.random() * 2 - 1;
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = "bandpass";
        filter.frequency.setValueAtTime(400, ctx.currentTime);
        filter.Q.setValueAtTime(3, ctx.currentTime);

        whiteNoise.connect(filter);
        filter.connect(mainGain);
        whiteNoise.start();

        setIsPlaying(true);
      } catch (err) {
        console.warn("Web Audio API error:", err);
      }
    } else {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
        audioCtxRef.current = null;
      }
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 pointer-events-auto">
      <button
        onClick={toggleAudio}
        type="button"
        className={`group flex items-center gap-2.5 px-3.5 py-2 rounded-full border shadow-xl backdrop-blur-md transition-all duration-300 cursor-pointer ${
          isPlaying
            ? "bg-[#2F130B]/95 border-[#E5A84B] text-[#E5A84B] shadow-[#E5A84B]/20"
            : "bg-[#200C06]/90 border-[#E5A84B]/30 text-[#FAF5ED]/90 hover:border-[#E5A84B] hover:text-[#FAF5ED]"
        }`}
        title="Kitchen Hearth Ambient Sound"
        aria-label="Toggle Kitchen Hearth Sound"
      >
        {/* Animated Hearth Flame / Sound Wave Emblem */}
        <div className="relative flex items-center justify-center w-3.5 h-3.5">
          {isPlaying ? (
            <div className="flex items-end gap-0.5 h-3">
              <span className="w-0.5 bg-[#E5A84B] animate-bounce h-2" style={{ animationDelay: "0ms" }} />
              <span className="w-0.5 bg-[#E5A84B] animate-bounce h-3" style={{ animationDelay: "150ms" }} />
              <span className="w-0.5 bg-[#E5A84B] animate-bounce h-1.5" style={{ animationDelay: "300ms" }} />
            </div>
          ) : (
            <svg className="w-3.5 h-3.5 fill-current text-[#E5A84B]" viewBox="0 0 24 24">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
          )}
        </div>
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider">
          {buttonText[language]}
        </span>
      </button>
    </div>
  );
}
