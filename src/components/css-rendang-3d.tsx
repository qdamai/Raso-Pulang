"use client";

import { useState, useRef } from "react";

export function CssRendang3D() {
  const [rotation, setRotation] = useState({ x: 25, y: -15 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);

  const sceneRef = useRef<HTMLDivElement>(null);

  // Pure Drag Gesture Handlers for 360° rotation (X and Y axes)
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStart.x;
    const deltaY = e.clientY - dragStart.y;

    setRotation((prev) => ({
      x: (prev.x - deltaY * 0.7) % 360,
      y: (prev.y + deltaX * 0.7) % 360,
    }));

    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Mobile Touch Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - dragStart.x;
    const deltaY = e.touches[0].clientY - dragStart.y;

    setRotation((prev) => ({
      x: (prev.x - deltaY * 0.7) % 360,
      y: (prev.y + deltaX * 0.7) % 360,
    }));

    setDragStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const setPresetView = (view: "top" | "bottom" | "flip180") => {
    setIsClicking(true);
    setTimeout(() => setIsClicking(false), 300);

    if (view === "top") {
      setRotation({ x: 25, y: 0 });
    } else if (view === "bottom") {
      setRotation({ x: 205, y: 0 });
    } else if (view === "flip180") {
      setRotation((prev) => ({ x: prev.x + 180, y: prev.y }));
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto flex flex-col items-center justify-center py-4 select-none">
      
      {/* 1. Container Scene (Perspective: 1000px) */}
      <div
        ref={sceneRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={`scene relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center cursor-grab ${
          isDragging ? "cursor-grabbing" : ""
        }`}
        style={{ perspective: "1000px" }}
        title="Tarik / Drag mouse ke mana saja untuk memutar piring 360 derajat (Pure <div> HTML + CSS)!"
      >
        {/* Dynamic Shadow Floor */}
        <div
          style={{
            transform: `translateY(110px) rotateX(90deg) scale(${
              1 + Math.sin((rotation.x * Math.PI) / 180) * 0.2
            })`,
          }}
          className="absolute w-72 h-44 bg-[#140603]/50 rounded-full blur-xl pointer-events-none transition-transform duration-100"
        />

        {/* 2. Container Object (.plate-container - preserve-3d) */}
        <div
          id="plate-container"
          className="plate-container relative w-72 h-72 sm:w-80 sm:h-80"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${
              isClicking ? "scale(0.94)" : "scale(1)"
            }`,
            transition: isDragging ? "none" : "transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)",
          }}
        >
          
          {/* ========================================================================= */}
          {/* TAMPAK BAWAH: DASAR PIRING KERAMIK PUTIH POLOS (Pure DIV Ceramic Base) */}
          {/* ========================================================================= */}
          <div
            className="plate-bottom absolute inset-0 w-full h-full rounded-full flex items-center justify-center"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateX(180deg) translateZ(1px)",
              background: "radial-gradient(circle, #FFFFFF 0%, #F5F2EB 70%, #E2DDD2 100%)",
              border: "6 border #ECE7DE",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3), inset 0 0 15px rgba(0,0,0,0.08)",
            }}
          >
            {/* Foot Ring Rim of Ceramic Plate (Dasar Ring Piring) */}
            <div
              className="w-44 h-44 rounded-full border-4 border-[#DDD7C8]"
              style={{
                boxShadow: "inset 0 2px 6px rgba(0,0,0,0.12), 0 2px 6px rgba(255,255,255,0.8)",
                background: "radial-gradient(circle, #FAF8F3 0%, #EFEBE2 100%)",
              }}
            />
          </div>

          {/* ========================================================================= */}
          {/* TAMPAK ATAS: ISIAN RENDANG PADANG (PURE DIV CSS ART STACK) */}
          {/* ========================================================================= */}
          <div
            className="plate-top absolute inset-0 w-full h-full rounded-full flex items-center justify-center"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "translateZ(1px)",
              background: "radial-gradient(circle, #FFFFFF 0%, #F4F0E6 75%, #DCD5C3 100%)",
              border: "6px solid #ECE7DE",
              boxShadow: "0 15px 35px rgba(0,0,0,0.35), inset 0 0 25px rgba(0,0,0,0.15)",
            }}
          >
            {/* Inner Plate Bowl Basin */}
            <div
              className="relative w-64 h-64 rounded-full flex items-center justify-center overflow-hidden"
              style={{
                background: "radial-gradient(circle, #1F0A04 0%, #2D120B 60%, #150602 100%)",
                boxShadow: "inset 0 0 30px rgba(0,0,0,0.95)",
              }}
            >
              {/* Glossy Oil Surface Lake */}
              <div
                className="absolute inset-1 rounded-full opacity-80"
                style={{
                  background: "radial-gradient(circle at 30% 30%, #5C2618 0%, #200C06 70%)",
                }}
              />

              {/* DAUN PISANG (Pure DIV Green Leaf Accent) */}
              <div
                className="absolute top-2 right-2 w-36 h-20 shadow-md"
                style={{
                  transform: "translateZ(12px) rotate(15deg)",
                  background: "linear-gradient(90deg, #2D5A34 0%, #4A8B5B 50%, #22452B 100%)",
                  borderRadius: "100px 10px 100px 10px",
                  borderTop: "2px solid #76B887",
                }}
              >
                {/* Leaf Veins */}
                <div className="w-full h-[2px] bg-[#1A3820] mt-4 transform rotate-6" />
                <div className="w-full h-[1px] bg-[#68A578]/40 mt-2" />
                <div className="w-full h-[1px] bg-[#68A578]/40 mt-3" />
              </div>

              {/* TUMPUKAN DAGING RENDANG 3D (Pure DIV Layered Chunks) */}
              <div
                className="relative w-48 h-48 flex flex-wrap items-center justify-center gap-1 z-20"
                style={{ transformStyle: "preserve-3d", transform: "translateZ(25px)" }}
              >
                {/* Daging Chunk 1 (Main Center) */}
                <div
                  className="relative w-20 h-16 shadow-2xl"
                  style={{
                    transform: "translateZ(15px) rotate(-8deg)",
                    background: "linear-gradient(135deg, #3B2210 0%, #2C1608 60%, #1A0A03 100%)",
                    borderRadius: "28px 14px 35px 20px",
                    border: "2px solid #522C16",
                    boxShadow: "inset 0 2px 4px rgba(255,255,255,0.15), 0 8px 16px rgba(0,0,0,0.6)",
                  }}
                >
                  {/* Serundeng Coconut Crumbs */}
                  <div
                    className="absolute top-1 left-2 right-2 h-5 rounded-full"
                    style={{ background: "#7A4522", filter: "blur(0.5px)" }}
                  />
                  <div
                    className="absolute top-2 left-3 right-3 h-3 rounded-full"
                    style={{ background: "#A36033" }}
                  />
                </div>

                {/* Daging Chunk 2 (Right Side) */}
                <div
                  className="relative w-18 h-15 shadow-xl -ml-3"
                  style={{
                    transform: "translateZ(22px) rotate(14deg)",
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

                {/* Daging Chunk 3 (Top Left Side) */}
                <div
                  className="relative w-16 h-14 shadow-xl -mt-4"
                  style={{
                    transform: "translateZ(28px) rotate(-16deg)",
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

                {/* Daging Chunk 4 (Bottom Center) */}
                <div
                  className="relative w-22 h-14 shadow-2xl -mt-2"
                  style={{
                    transform: "translateZ(35px) rotate(4deg)",
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

                {/* HIASAN CABAI MERAH 1 (Pure DIV Red Chili) */}
                <div
                  className="absolute top-6 left-6 w-12 h-4 shadow-lg"
                  style={{
                    transform: "translateZ(45px) rotate(-28deg)",
                    background: "linear-gradient(90deg, #C83726 0%, #E04533 50%, #8C1E12 100%)",
                    borderRadius: "50px",
                    border: "1px solid #FFAAA0",
                  }}
                >
                  <div className="w-2 h-1.5 bg-[#4A8B5B] rounded-full -ml-0.5 mt-1" />
                </div>

                {/* HIASAN CABAI MERAH 2 (Pure DIV Red Chili) */}
                <div
                  className="absolute top-12 left-4 w-10 h-3.5 shadow-lg"
                  style={{
                    transform: "translateZ(48px) rotate(16deg)",
                    background: "linear-gradient(90deg, #C83726 0%, #E04533 50%, #9C2A1B 100%)",
                    borderRadius: "50px",
                    border: "1px solid #FFAAA0",
                  }}
                >
                  <div className="w-1.5 h-1 bg-[#4A8B5B] rounded-full -ml-0.5 mt-1" />
                </div>

                {/* HIASAN CABAI RAWIT KUNING (Pure DIV Yellow Chili) */}
                <div
                  className="absolute top-8 left-16 w-10 h-3.5 shadow-lg"
                  style={{
                    transform: "translateZ(52px) rotate(36deg)",
                    background: "linear-gradient(90deg, #E5A84B 0%, #FFC05B 50%, #C88426 100%)",
                    borderRadius: "50px",
                    border: "1px solid #FFE8B8",
                  }}
                >
                  <div className="w-1.5 h-1 bg-[#4A8B5B] rounded-full -ml-0.5 mt-1" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Preset Controls */}
      <div className="flex flex-col sm:flex-row items-center gap-2 pt-4 z-10">
        <span className="text-[11px] font-bold text-[#A04028] uppercase tracking-wider">
          Sudut Pandang (360° Drag):
        </span>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setPresetView("top")}
            className="px-3 py-1 text-xs font-bold bg-[#FAF5ED] hover:bg-[#A04028] hover:text-white text-[#200C06] border border-[#200C06]/20 rounded-full transition-colors cursor-pointer"
          >
            Tampak Rendang (Top)
          </button>
          <button
            type="button"
            onClick={() => setPresetView("bottom")}
            className="px-3 py-1 text-xs font-bold bg-[#FAF5ED] hover:bg-[#A04028] hover:text-white text-[#200C06] border border-[#200C06]/20 rounded-full transition-colors cursor-pointer"
          >
            Tampak Dasar Piring (Bottom)
          </button>
          <button
            type="button"
            onClick={() => setPresetView("flip180")}
            className="px-3 py-1 text-xs font-bold bg-[#FAF5ED] hover:bg-[#A04028] hover:text-white text-[#200C06] border border-[#200C06]/20 rounded-full transition-colors cursor-pointer"
          >
            Flip 180°
          </button>
        </div>
      </div>

      <p className="text-[11px] font-serif italic text-[#2F130B]/70 text-center mt-2">
        &ldquo;Tarik / Drag objek 3D ke atas atau bawah untuk melihat bagian dasar piring yang bersih&rdquo;
      </p>
    </div>
  );
}
