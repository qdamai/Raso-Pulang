"use client";

import { SITE_CONTENT } from "@/data/content";
import { useLanguage } from "@/context/language-context";

export function Footer() {
  const { language } = useLanguage();
  const content = SITE_CONTENT[language];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const techStack = [
    "Next.js 16 (Turbopack)",
    "React 19",
    "TypeScript 5",
    "Tailwind CSS v4",
    "Web Audio API",
  ];

  return (
    <footer className="bg-[#1A0A05] text-[#FAF5ED] border-t border-[#FAF5ED]/15 py-16 sm:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Developer Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#FAF5ED]/10">
          
          {/* Column 1: Brand & Engineering Architecture */}
          <div className="md:col-span-4 space-y-4">
            <div className="space-y-1">
              <a
                href="#"
                className="font-serif text-2xl font-bold tracking-tight text-[#FAF5ED] hover:text-[#E5A84B] transition-colors"
              >
                Raso<span className="italic font-normal text-[#E5A84B]">Pulang</span>
              </a>
              <span className="text-[11px] font-serif italic text-[#E5A84B]/80 block">
                {content.navigation.subtagline}
              </span>
            </div>

            <p className="text-xs text-[#FAF5ED]/80 font-light leading-relaxed">
              {content.footer.description} High-performance web experience engineered for cultural storytelling, responsiveness, and accessibility.
            </p>

            {/* Developer Tech Stack Badges */}
            <div className="pt-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#E5A84B] block mb-2">
                Tech Specifications
              </span>
              <div className="flex flex-wrap gap-1.5">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-[10px] font-mono rounded bg-[#24130A] text-[#FAF5ED]/90 border border-[#FAF5ED]/15"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Routes */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E5A84B] block">
              Navigation Routes
            </span>
            <ul className="grid grid-cols-2 gap-2 text-xs uppercase tracking-wider font-light text-[#FAF5ED]/80 pt-1">
              {content.footer.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-[#E5A84B] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-[#E5A84B] opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                      &bull;
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Developer Info & Challenge Details */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E5A84B] block">
              Developer Info &amp; Challenge
            </span>

            <div className="p-5 bg-[#24130A] border border-[#E5A84B]/20 rounded-xl space-y-4 shadow-lg">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#E5A84B] uppercase font-extrabold tracking-wider block">
                  Project Scope
                </span>
                <h4 className="font-serif font-bold text-sm text-[#FAF5ED] leading-snug">
                  Frontend Challenge Submission 2026
                </h4>
                <p className="text-xs text-[#FAF5ED]/70 font-light">
                  Minangkabau Cultural Web Heritage
                </p>
              </div>

              <div className="pt-3 border-t border-[#FAF5ED]/10 flex items-center justify-between text-[11px] font-mono text-[#FAF5ED]/60">
                <span>Environment: Production</span>
                <span className="font-bold text-[#E5A84B]">Build v0.1.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Professional Copyright & Swatches */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#FAF5ED]/60 pt-2">
          <p className="text-center sm:text-left text-[11px]">
            {content.footer.copyright}
          </p>

          {/* Palette Swatches */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-bold text-[#FAF5ED]/40 mr-1 hidden sm:inline">
              Palette:
            </span>
            <div className="w-4 h-4 rounded border border-[#FAF5ED]/20 bg-[#FAF5ED]" title="Coconut Cream (#FAF5ED)" />
            <div className="w-4 h-4 rounded border border-[#FAF5ED]/20 bg-[#C86D3B]" title="Burnt Spice (#C86D3B)" />
            <div className="w-4 h-4 rounded border border-[#FAF5ED]/20 bg-[#A04028]" title="Terracotta (#A04028)" />
            <div className="w-4 h-4 rounded border border-[#FAF5ED]/20 bg-[#2F130B]" title="Dark Cocoa (#2F130B)" />
            <div className="w-4 h-4 rounded border border-[#FAF5ED]/20 bg-[#200C06]" title="Deep Brown (#200C06)" />
          </div>
        </div>
      </div>
    </footer>
  );
}
