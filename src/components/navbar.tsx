"use client";

import { useState, useEffect } from "react";
import { SITE_CONTENT } from "@/data/content";
import { useLanguage, Language } from "@/context/language-context";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const content = SITE_CONTENT[language];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const languages: { code: Language; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "id", label: "ID" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-deep-brown/10 ${
        isScrolled
          ? "bg-[#FAF5ED]/95 backdrop-blur-md py-3 text-deep-brown shadow-sm"
          : "bg-[#FAF5ED] py-4 text-deep-brown"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Brand Logo Wordmark */}
        <a
          href="#"
          className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-deep-brown hover:text-burnt-terracotta transition-colors"
        >
          Raso<span className="italic font-normal text-burnt-terracotta">Pulang</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 text-xs font-sans tracking-wider uppercase text-dark-cocoa/80">
          {content.navigation.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-burnt-terracotta transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Section: Vintage Year & Language Switch */}
        <div className="flex items-center gap-3">
          {/* Vintage Year Pill (2026) */}
          <span className="hidden sm:inline-block font-serif italic px-2.5 py-0.5 border border-deep-brown/30 rounded-full text-xs font-bold text-deep-brown">
            2026
          </span>

          {/* Dual Language Switcher */}
          <div className="flex items-center border border-deep-brown/20 rounded-full p-0.5 text-[10px] font-bold">
            {languages.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => setLanguage(lang.code)}
                className={`px-2 py-0.5 rounded-full transition-colors cursor-pointer ${
                  language === lang.code
                    ? "bg-deep-brown text-soft-rice"
                    : "text-dark-cocoa/60 hover:text-deep-brown"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1.5 text-deep-brown hover:text-burnt-terracotta focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FAF5ED] border-b border-deep-brown/10 px-4 pt-2 pb-6 space-y-3 shadow-md animate-in slide-in-from-top-2 duration-200">
          {content.navigation.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block text-sm font-sans tracking-wider uppercase text-dark-cocoa hover:text-burnt-terracotta transition-colors py-2 border-b border-deep-brown/5"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
