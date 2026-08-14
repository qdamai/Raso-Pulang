"use client";

import { useState, useRef } from "react";

export function CssArtRendang() {
  const [tilt, setTilt] = useState({ x: 15, y: -10 });
  const [isStirring, setIsStirring] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: -y * 24, y: x * 24 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 15, y: -10 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleClick = () => {
    setIsStirring(true);
    setTimeout(() => setIsStirring(false), 600);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto my-12 p-6 sm:p-12 bg-[#FAF5ED] text-[#200C06] border border-[#200C06]/15 rounded-3xl shadow-xl select-none overflow-hidden">
      
      {/* Artwork Header Title */}
      <div className="text-center space-y-2 mb-8">
        <span className="text-[10px] sm:text-xs uppercase font-bold tracking-[0.3em] text-[#A04028]">
          DEV Community Challenge: Comfort Food Edition
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#200C06] tracking-tight">
          Rendang — <span className="font-serif italic font-normal text-[#C86D3B]">Cooked by Time</span>
        </h2>
        <p className="text-xs sm:text-sm font-sans font-light text-[#2F130B]/80 max-w-lg mx-auto italic">
          &ldquo;A celebration of patience, culture, craftsmanship, and home served inside a CSS bowl.&rdquo;
        </p>
      </div>

      {/* CSS Table Surface: Woven Bamboo Mat & Wood Grain */}
      <div className="relative w-full max-w-2xl aspect-[4/3] mx-auto flex items-center justify-center rounded-2xl overflow-hidden border border-[#200C06]/20 bg-paper-texture shadow-inner">
        
        {/* CSS Woven Bamboo Mat Texture Base */}
        <div
          className="absolute inset-4 rounded-xl border border-[#C86D3B]/20 pointer-events-none opacity-80"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(200, 109, 59, 0.1) 4px, rgba(200, 109, 59, 0.1) 8px),
              repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(32, 12, 6, 0.08) 4px, rgba(32, 12, 6, 0.08) 8px)
            `,
          }}
        />

        {/* Dynamic 3D Scene Container */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center cursor-grab active:cursor-grabbing"
          style={{ perspective: "1000px" }}
          title="Click to gently stir the Rendang • Move mouse for 3D depth"
        >
          {/* Dynamic Floor Shadow shifting with Tilt */}
          <div
            className="absolute bottom-6 w-80 h-44 bg-[#140603]/60 rounded-full blur-2xl pointer-events-none transition-transform duration-200"
            style={{
              transform: `translate(${tilt.y * -1.5}px, ${tilt.x * -1.5}px) scale(${
                1 + Math.abs(tilt.y) / 100
              })`,
            }}
          />

          {/* 3D Rotatable Ceramic Bowl Container */}
          <div
            className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full flex items-center justify-center transition-transform duration-200"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${
                isStirring ? "scale(0.94) rotate(4deg)" : isHovered ? "scale(1.02)" : "scale(1)"
              }`,
            }}
          >
            {/* 1. CERAMIC BOWL (Pure CSS Multi-layered Earthenware Bowl) */}
            <div
              className="absolute inset-0 rounded-full p-4 border-4 border-[#ECE7DE] shadow-2xl"
              style={{
                background: "radial-gradient(circle, #FFFFFF 0%, #F5F2EB 65%, #DCD5C3 100%)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.4), inset 0 -8px 20px rgba(0,0,0,0.15)",
              }}
            >
              {/* Bowl Rim Glaze Highlight */}
              <div className="absolute inset-1 rounded-full border-2 border-white/80 pointer-events-none" />

              {/* Inner Bowl Basin & Dark Mahogany Oil Surface */}
              <div
                className="relative w-full h-full rounded-full p-4 overflow-hidden flex items-center justify-center shadow-inner"
                style={{
                  background: "radial-gradient(circle, #1F0A04 0%, #2D120B 60%, #150602 100%)",
                  boxShadow: "inset 0 0 35px rgba(0,0,0,0.95)",
                }}
              >
                {/* Coconut Oil Gloss Sheen */}
                <div
                  className="absolute inset-2 rounded-full opacity-75 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at 35% 35%, #5C2618 0%, #200C06 75%)",
                  }}
                />

                {/* 2. BANANA LEAF GARNISH (Pure CSS Leaf with Veins) */}
                <div
                  className="absolute top-2 right-3 w-40 h-24 shadow-md pointer-events-none transition-transform duration-300"
                  style={{
                    transform: `translateZ(14px) rotate(16deg) ${isHovered ? "scale(1.05)" : "scale(1)"}`,
                    background: "linear-gradient(90deg, #2D5A34 0%, #4A8B5B 50%, #22452B 100%)",
                    borderRadius: "100px 10px 100px 10px",
                    borderTop: "2px solid #76B887",
                  }}
                >
                  <div className="w-full h-[2px] bg-[#1A3820] mt-4 transform rotate-6" />
                  <div className="w-full h-[1px] bg-[#68A578]/40 mt-2" />
                  <div className="w-full h-[1px] bg-[#68A578]/40 mt-3" />
                </div>

                {/* 3. RENDANG BEEF PIECES & COCONUT GRAVY TEXTURES (Pure CSS Layered Chunks) */}
                <div
                  className="relative w-56 h-56 flex flex-wrap items-center justify-center gap-1.5 z-20 transition-transform duration-500"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: `translateZ(28px) ${isStirring ? "rotate(12deg)" : "rotate(0deg)"}`,
                  }}
                >
                  {/* Beef Chunk 1 (Center Hero Piece) */}
                  <div
                    className="relative w-22 h-18 shadow-2xl transition-transform duration-300"
                    style={{
                      transform: "translateZ(18px) rotate(-6deg)",
                      background: "linear-gradient(135deg, #3B2210 0%, #2C1608 60%, #1A0A03 100%)",
                      borderRadius: "28px 14px 35px 20px",
                      border: "2px solid #522C16",
                      boxShadow: "inset 0 2px 4px rgba(255,255,255,0.15), 0 8px 16px rgba(0,0,0,0.6)",
                    }}
                  >
                    {/* Toasted Coconut Crumbs (Kerisik) */}
                    <div
                      className="absolute top-1 left-2 right-2 h-5 rounded-full"
                      style={{ background: "#7A4522", filter: "blur(0.5px)" }}
                    />
                    <div
                      className="absolute top-2 left-3 right-3 h-3 rounded-full"
                      style={{ background: "#A36033" }}
                    />
                  </div>

                  {/* Beef Chunk 2 (Right Piece) */}
                  <div
                    className="relative w-20 h-16 shadow-xl -ml-4"
                    style={{
                      transform: "translateZ(24px) rotate(14deg)",
                      background: "linear-gradient(135deg, #331A0B 0%, #241004 70%, #120401 100%)",
                      borderRadius: "16px 30px 20px 26px",
                      border: "2px solid #48230D",
                    }}
                  >
                    <div
                      className="absolute top-1 left-2 right-2 h-4 rounded-full"
                      style={{ background: "#6E3E1E" }}
                    />
                  </div>

                  {/* Beef Chunk 3 (Top Left Piece) */}
                  <div
                    className="relative w-18 h-15 shadow-xl -mt-5"
                    style={{
                      transform: "translateZ(30px) rotate(-16deg)",
                      background: "linear-gradient(135deg, #422612 0%, #2B1507 70%, #150802 100%)",
                      borderRadius: "24px 18px 30px 14px",
                      border: "2px solid #5C3218",
                    }}
                  >
                    <div
                      className="absolute top-1 left-2 right-2 h-4 rounded-full"
                      style={{ background: "#854C28" }}
                    />
                  </div>

                  {/* Beef Chunk 4 (Bottom Piece) */}
                  <div
                    className="relative w-24 h-16 shadow-2xl -mt-3"
                    style={{
                      transform: "translateZ(36px) rotate(4deg)",
                      background: "linear-gradient(135deg, #2D1609 0%, #1D0A03 70%, #0E0301 100%)",
                      borderRadius: "20px 26px 16px 32px",
                      border: "2px solid #421D0A",
                    }}
                  >
                    <div
                      className="absolute top-1 left-3 right-3 h-5 rounded-full"
                      style={{ background: "#75411E" }}
                    />
                  </div>

                  {/* 4. CHILI & HERB GARNISHES (Pure CSS Red/Yellow Chilies) */}
                  <div
                    className="absolute top-6 left-8 w-14 h-4 shadow-lg transition-transform duration-300"
                    style={{
                      transform: `translateZ(48px) rotate(-28deg) ${
                        isHovered ? "translateY(-2px)" : "translateY(0)"
                      }`,
                      background: "linear-gradient(90deg, #C83726 0%, #E04533 50%, #8C1E12 100%)",
                      borderRadius: "50px",
                      border: "1px solid #FFAAA0",
                    }}
                  >
                    <div className="w-2.5 h-1.5 bg-[#4A8B5B] rounded-full -ml-0.5 mt-1" />
                  </div>

                  <div
                    className="absolute top-12 left-5 w-11 h-3.5 shadow-lg transition-transform duration-300"
                    style={{
                      transform: `translateZ(52px) rotate(16deg) ${
                        isHovered ? "translateY(-1px)" : "translateY(0)"
                      }`,
                      background: "linear-gradient(90deg, #C83726 0%, #E04533 50%, #9C2A1B 100%)",
                      borderRadius: "50px",
                      border: "1px solid #FFAAA0",
                    }}
                  >
                    <div className="w-1.5 h-1 bg-[#4A8B5B] rounded-full -ml-0.5 mt-1" />
                  </div>

                  <div
                    className="absolute top-8 left-18 w-11 h-3.5 shadow-lg transition-transform duration-300"
                    style={{
                      transform: `translateZ(55px) rotate(36deg) ${
                        isHovered ? "translateY(-2px)" : "translateY(0)"
                      }`,
                      background: "linear-gradient(90deg, #E5A84B 0%, #FFC05B 50%, #C88426 100%)",
                      borderRadius: "50px",
                      border: "1px solid #FFE8B8",
                    }}
                  >
                    <div className="w-1.5 h-1 bg-[#4A8B5B] rounded-full -ml-0.5 mt-1" />
                  </div>
                </div>

                {/* 5. ANIMATED STEAM (Pure CSS Cooking Steam Keyframes) */}
                <div className="absolute inset-0 z-40 pointer-events-none flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/10 rounded-full blur-md animate-steam" />
                  <div className="w-24 h-24 bg-white/5 rounded-full blur-lg animate-steam-delayed" />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Artwork Footer & Cultural Note */}
      <div className="mt-8 text-center space-y-2">
        <p className="font-serif italic text-sm text-[#A04028]">
          &ldquo;Hover to feel the 3D perspective • Click the bowl to gently stir the Rendang&rdquo;
        </p>
        <div className="flex items-center justify-center gap-4 text-xs font-mono text-[#2F130B]/60">
          <span>Pure HTML + CSS Artwork</span>
          <span>•</span>
          <span>Zero Images &amp; Zero SVGs</span>
          <span>•</span>
          <span>DEV Challenge Entry</span>
        </div>
      </div>

    </div>
  );
}
