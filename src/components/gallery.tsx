"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { SITE_CONTENT, GalleryItem } from "@/data/content";
import { useLanguage } from "@/context/language-context";

// Traditional Minang Swirling Carved Corner Ornament (Motif Kaluak Paku - Meliuk-Liuk)
function KaluakPakuCorner({
  position,
}: {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) {
  const rotationClass = {
    "top-left": "-top-3 -left-3 rotate-0",
    "top-right": "-top-3 -right-3 rotate-90",
    "bottom-right": "-bottom-3 -right-3 rotate-180",
    "bottom-left": "-bottom-3 -left-3 -rotate-90",
  }[position];

  return (
    <div
      className={`absolute ${rotationClass} w-10 h-10 sm:w-12 sm:h-12 z-20 pointer-events-none drop-shadow-[0_4px_8px_rgba(0,0,0,0.85)]`}
    >
      <svg viewBox="0 0 50 50" className="w-full h-full">
        <defs>
          <linearGradient id={`goldGrad-${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2D4" />
            <stop offset="35%" stopColor="#F3C77C" />
            <stop offset="70%" stopColor="#E5A84B" />
            <stop offset="100%" stopColor="#9C6820" />
          </linearGradient>
        </defs>

        {/* Wavy Swirling Tendril (Kaluak Paku / Leaf Curl) */}
        <path
          d="M 6 44 C 6 24, 14 12, 44 6 C 26 14, 16 24, 20 36 C 23 43, 38 40, 36 30 C 34 22, 22 25, 26 32 C 28 35, 32 34, 30 31"
          fill="none"
          stroke={`url(#goldGrad-${position})`}
          strokeWidth="3.8"
          strokeLinecap="round"
        />
        {/* Inner Gold Highlight Line */}
        <path
          d="M 12 38 C 16 28, 24 18, 38 12"
          fill="none"
          stroke="#FAF5ED"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.9"
        />
        {/* Carved Leaf Bud */}
        <circle cx="44" cy="6" r="3" fill="#F3C77C" stroke="#9C6820" strokeWidth="0.75" />
        <circle cx="20" cy="36" r="2.5" fill="#E5A84B" />
      </svg>
    </div>
  );
}

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const { language } = useLanguage();
  const content = SITE_CONTENT[language];

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  const closeModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (selectedImage) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, closeModal]);

  return (
    <section
      id="gallery"
      className="py-24 sm:py-32 pb-32 sm:pb-40 bg-chiaroscuro-dark text-[#FAF5ED] relative overflow-hidden border-b border-[#FAF5ED]/10"
    >
      {/* Background Ambient Spotlight Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C86D3B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E5A84B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Category Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12 pb-6 border-b border-[#FAF5ED]/15">
          <div className="flex items-center gap-3">
            <span className="editorial-number text-3xl font-serif !text-[#E5A84B]">07</span>
            <span className="h-4 w-[1px] bg-[#FAF5ED]/20" />
            <span className="text-xs uppercase tracking-widest text-[#E5A84B] font-bold">
              {content.gallery.label} &bull; GALERI PUSAKA RUMAH GADANG
            </span>
          </div>
          <span className="text-xs font-serif italic text-[#FAF5ED]/70">
            Curated Digital Exhibition &bull; Rumah Gadang Heritage Wall
          </span>
        </div>

        {/* Section Main Title */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-[#FAF5ED] leading-tight">
            {content.gallery.title}
          </h2>
          <p className="text-base sm:text-lg text-[#FAF5ED]/80 font-light leading-relaxed">
            {content.gallery.intro}
          </p>
        </div>

        {/* Museum Exhibition Grid (Balanced Curated Wall) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start">
          {content.gallery.items.map((item, idx) => {
            const hasError = failedImages[item.id];
            const exhibitNumber = `EXHIBIT N° 0${idx + 1}`;

            return (
              <div
                key={item.id}
                className="group relative flex flex-col items-center cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                {/* 1. Traditional Wavy Carved Wooden Frame (Bingkai Ukiran Minang Meliuk-Liuk) */}
                <div className="minang-carved-frame p-3 sm:p-4 rounded-lg w-full transition-all duration-500 relative">
                  {/* Four Swirling Kaluak Paku Carved Tendrils */}
                  <KaluakPakuCorner position="top-left" />
                  <KaluakPakuCorner position="top-right" />
                  <KaluakPakuCorner position="bottom-left" />
                  <KaluakPakuCorner position="bottom-right" />

                  {/* Top & Bottom Decorative Carved Wave Lines (Solid Lines) */}
                  <div className="absolute top-1 left-8 right-8 h-[1px] bg-[#E5A84B]/40" />
                  <div className="absolute bottom-1 left-8 right-8 h-[1px] bg-[#E5A84B]/40" />

                  {/* Image Container with Fixed Aspect Ratio */}
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden rounded-md bg-[#180A04] border border-[#E5A84B]/30 shadow-inner">
                    {!hasError ? (
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={() => handleImageError(item.id)}
                      />
                    ) : (
                      <div className="w-full h-full bg-[#2F130B] p-6 text-[#FAF5ED] flex flex-col justify-center items-center text-center">
                        <span className="font-serif italic text-2xl text-[#E5A84B]">
                          {item.title}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* 2. Dark Brass Museum Plaque (Plakat Kuningan Museum) */}
                <div className="brass-plaque p-5 sm:p-6 mt-5 w-[92%] rounded-sm space-y-2 text-left relative">
                  {/* Four Plaque Corner Rivets */}
                  <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-[#E5A84B] border border-[#FAF5ED]/50 opacity-80" />
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#E5A84B] border border-[#FAF5ED]/50 opacity-80" />
                  <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-[#E5A84B] border border-[#FAF5ED]/50 opacity-80" />
                  <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-[#E5A84B] border border-[#FAF5ED]/50 opacity-80" />

                  <div className="flex items-center justify-between border-b border-[#E5A84B]/25 pb-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#E5A84B]">
                      {exhibitNumber} &bull; {item.tag}
                    </span>
                    <span className="text-[10px] font-sans text-[#FAF5ED]/60 uppercase">
                      Minang Heritage
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#FAF5ED] pt-1">
                    {item.title}
                  </h3>

                  <p className="font-serif italic text-sm text-[#E5A84B]">
                    &ldquo;{item.handwrittenCaption}&rdquo;
                  </p>

                  <p className="text-xs sm:text-sm font-light text-[#FAF5ED]/80 leading-relaxed pt-1">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Museum Spotlight Showcase Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/92 backdrop-blur-md animate-in fade-in duration-300"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-full bg-[#24130A] border-2 border-[#E5A84B]/60 p-6 sm:p-8 space-y-6 text-[#FAF5ED] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#E5A84B]/30 pb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#E5A84B] font-bold">
                  Rumah Gadang Exhibition &bull; {selectedImage.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#FAF5ED]">
                  {selectedImage.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="px-3 py-1 text-xs uppercase font-bold tracking-widest bg-[#A04028] hover:bg-[#9C2A1B] text-[#FAF5ED] rounded-full border border-[#E5A84B]/40 cursor-pointer transition-colors"
              >
                Close [X]
              </button>
            </div>

            {/* Modal Image Frame with Kaluak Paku Corner Ornaments */}
            <div className="relative aspect-video w-full bg-[#150803] border-2 border-[#E5A84B]/40 rounded-md overflow-hidden shadow-2xl">
              <KaluakPakuCorner position="top-left" />
              <KaluakPakuCorner position="top-right" />
              <KaluakPakuCorner position="bottom-left" />
              <KaluakPakuCorner position="bottom-right" />

              {!failedImages[selectedImage.id] ? (
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  sizes="100vw"
                  className="object-contain p-2"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#2F130B] text-[#FAF5ED]">
                  <span className="font-serif italic text-2xl text-[#E5A84B]">
                    {selectedImage.title}
                  </span>
                </div>
              )}
            </div>

            {/* Modal Brass Plaque */}
            <div className="brass-plaque p-6 rounded-sm space-y-2">
              <p className="font-serif italic text-lg sm:text-xl text-[#E5A84B]">
                &ldquo;{selectedImage.handwrittenCaption}&rdquo;
              </p>
              <p className="text-sm font-light text-[#FAF5ED]/90 leading-relaxed">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
