"use client";

import { useState } from "react";
import { useLanguage } from "@/context/language-context";

interface WisdomItem {
  keywords: string[];
  title: { en: string; id: string };
  minangProverb: string;
  explanation: { en: string; id: string };
  tag: { en: string; id: string };
}

const WISDOM_DATABASE: WisdomItem[] = [
  {
    keywords: ["daging", "beef", "dagiang", "pemimpin", "leader", "daging sapi"],
    title: {
      en: "Dagiang — The Symbol of Leadership & Integrity",
      id: "Dagiang — Simbol Niniak Mamak & Kepemimpinan",
    },
    minangProverb: "Dagiang adolah lambang Niniak Mamak jo Cadiak Pandai nan maayomi nagari.",
    explanation: {
      en: "Beef represents Datuak and clan leaders (Niniak Mamak). Just as beef requires long hours to absorb spices without losing its structure, a leader must remain steadfast, accommodating, and wise through life's trials.",
      id: "Daging sapi melambangkan para Niniak Mamak dan pemimpin adat. Sebagaimana daging yang meresap rempah tanpa hancur dalam kuali, seorang pemimpin harus kokoh, bijaksana, dan mengayomi seluruh anak kemenakan.",
    },
    tag: { en: "Leadership & Integrity", id: "Kepemimpinan & Keteguhan" },
  },
  {
    keywords: ["kelapa", "coconut", "karambia", "santan", "intellectual", "cendekiawan"],
    title: {
      en: "Karambia — Coconut Milk & Intellectual Wisdom",
      id: "Karambia — Santan Kelapa & Kearifan Cendekiawan",
    },
    minangProverb: "Karambia maagiah minyak jo gurih, menyatukan sadonyo bumbu.",
    explanation: {
      en: "Coconut milk binds all disparate herbs into a harmonious reduction. It symbolizes intellectuals (Cadiak Pandai) whose knowledge brings clarity, unity, and richness to society.",
      id: "Santan kelapa menyatukan seluruh rempah menjadi rasa yang harmonis. Ini melambangkan kaum Cadiak Pandai (intelektual) yang dengan ilmunya mampu merekatkan dan memberi solusi bagi masyarakat.",
    },
    tag: { en: "Intellectual Unity", id: "Kearifan Intelektual" },
  },
  {
    keywords: ["rempah", "chili", "lada", "spices", "ulama", "religion", "bumbu"],
    title: {
      en: "Lada & Pemasak — Spices & Religious Wisdom",
      id: "Lada & Pemasak — Rempah & Bimbingan Ulama",
    },
    minangProverb: "Lada padeh maagiah semangaik, menegakkan kebenaran jo kearifan.",
    explanation: {
      en: "Chili and aromatic spices provide heat, preservation, and vibrancy. They symbolize the religious scholars (Alim Ulama) who guide the community with moral firmness and spiritual warmth.",
      id: "Cabai dan rempah memberikan sensasi pedas yang menggugah dan mengawetkan. Ini melambangkan Alim Ulama yang menegakkan syariat dengan tegas namun membawa kehangatan jiwa.",
    },
    tag: { en: "Spiritual Guidance", id: "Bimbingan Spiritual" },
  },
  {
    keywords: ["waktu", "time", "sabar", "patience", "kayu", "hearth", "tungku", "api"],
    title: {
      en: "Tungku Api — Wood Fire & The Philosophy of Time",
      id: "Tungku Api — Filosofi Waktu & Kesabaran Merendang",
    },
    minangProverb: "Api tenang maasiakan rendang kaledat; kesabaran menundukkan gejolak.",
    explanation: {
      en: "Rendang cannot be rushed with high flames. The 4-5 hours over slow embers teach that enduring value and emotional maturity are forged through steady patience and time.",
      id: "Merendang tak bisa terburu-buru dengan api besar. Proses 4-5 jam di atas tungku mengajarkan bahwa kematangan hidup dan hasil mahakarya hanya bisa dicapai lewat kesabaran yang konsisten.",
    },
    tag: { en: "Patience & Mastery", id: "Kesabaran & Kematangan" },
  },
  {
    keywords: ["musyawarah", "mufakat", "consensus", "harmony", "keharmonisan", "perjanjian"],
    title: {
      en: "Muwapakat — The Law of Mutual Consensus",
      id: "Muwapakat — Filosofi Musyawarah & Mufakat",
    },
    minangProverb: "Bulek aia dek pembuluh, bulek kato dek mufakat.",
    explanation: {
      en: "The four pillars of Rendang blend until no single ingredient dominates, yet each retains its essential character. This is the supreme Minangkabau law: unity through consensus.",
      id: "Seluruh unsur rendang melebur menjadi satu tanpa menghilangkan karakter aslinya. Inilah filosofi tertinggi Minangkabau: bulat air karena pembuluh, bulat kata karena mufakat.",
    },
    tag: { en: "Consensus & Unity", id: "Musyawarah & Mufakat" },
  },
  {
    keywords: ["merantau", "journey", "home", "pulang", "perjalanan", "perbekalan"],
    title: {
      en: "Merantau — The Taste that Calls You Home",
      id: "Merantau — Perbekalan Tahan Lama & Rasa Pulang",
    },
    minangProverb: "Karatau madang di hulu, babuah babungai balun. Rantau dicari dahulu, rumah digapai kemudian.",
    explanation: {
      en: "Rendang was born to sustain travelers across distant lands without spoiling. Opening a package of Rendang in a far city instantly transports the soul back to mother's kitchen.",
      id: "Rendang diciptakan sebagai perbekalan merantau yang tahan bertumpuk minggu tanpa pengawet buatan. Membuka rendang di perantauan adalah cara instan menghadirkan kehangatan rumah.",
    },
    tag: { en: "Homecoming & Tradition", id: "Tradisi & Merantau" },
  },
];

export function NiniakMamakSearch() {
  const [query, setQuery] = useState("");
  const [activeItem, setActiveItem] = useState<WisdomItem | null>(WISDOM_DATABASE[0]);
  const { language } = useLanguage();

  const handleSearch = (term: string) => {
    setQuery(term);
    if (!term.trim()) {
      setActiveItem(WISDOM_DATABASE[0]);
      return;
    }
    const match = WISDOM_DATABASE.find((item) =>
      item.keywords.some(
        (kw) => kw.toLowerCase().includes(term.toLowerCase()) || term.toLowerCase().includes(kw)
      )
    );
    if (match) {
      setActiveItem(match);
    }
  };

  // Pure Editorial Keywords (No Emojis, No Boxes)
  const sampleKeywords = [
    { label: language === "en" ? "BEEF & LEADERS" : "DAGING & ADAT", term: "daging" },
    { label: language === "en" ? "COCONUT MILK" : "SANTAN KELAPA", term: "kelapa" },
    { label: language === "en" ? "SPICES & ULAMA" : "REMPAH & ULAMA", term: "rempah" },
    { label: language === "en" ? "TIME & PATIENCE" : "WAKTU & SABAR", term: "waktu" },
    { label: language === "en" ? "CONSENSUS" : "MUSYAWARAH", term: "musyawarah" },
    { label: language === "en" ? "MERANTAU" : "MERANTAU & PULANG", term: "merantau" },
  ];

  return (
    <div className="py-12 sm:py-16 space-y-12 max-w-5xl mx-auto text-center font-sans">
      
      {/* Understated Editorial Section Label */}
      <div className="space-y-2 text-center">
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#E5A84B]/70 block">
          {language === "en" ? "CULTURAL KNOWLEDGE SYSTEM" : "SISTEM PENGETAHUAN ADAT MINANGKABAU"}
        </span>
        <h3 className="text-xl sm:text-2xl font-serif italic text-[#FAF5ED]/80 font-normal">
          {language === "en" ? "Ask the Wisdom of Niniak Mamak" : "Tanyakan Rahasia pada Niniak Mamak"}
        </h3>
      </div>

      {/* Vintage Single-Line Typewriter Search Bar (No Box, No Lens Icon) */}
      <div className="max-w-2xl mx-auto text-left relative">
        <label className="text-xs font-mono uppercase tracking-widest text-[#E5A84B] block mb-2">
          {language === "en" ? "Type keyword to consult Niniak Mamak:" : "Tanyakan pada Niniak Mamak:"}
        </label>
        <div className="relative border-b-2 border-[#E5A84B]/40 focus-within:border-[#E5A84B] pb-2 transition-colors">
          <input
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder={
              language === "en"
                ? "kelapa, waktu, dagiang, rempah, sabar..."
                : "kelapa, waktu, dagiang, rempah, sabar..."
            }
            className="w-full bg-transparent text-[#FAF5ED] placeholder-[#FAF5ED]/30 font-serif italic text-2xl sm:text-3xl focus:outline-none tracking-wide"
          />
        </div>
      </div>

      {/* Bare Text Keyword Navigation (ALL CAPS, Separated by Slashes, No Boxes, No Emojis) */}
      <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-4 pt-2 text-xs font-mono tracking-[0.25em] uppercase text-[#FAF5ED]/60">
        {sampleKeywords.map((chip, idx) => {
          const isActive =
            query.toLowerCase().includes(chip.term) || activeItem?.keywords.includes(chip.term);
          return (
            <div key={chip.term} className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => handleSearch(chip.term)}
                className={`transition-all cursor-pointer underline-offset-8 hover:text-[#E5A84B] ${
                  isActive
                    ? "text-[#E5A84B] font-bold underline decoration-[#E5A84B]"
                    : "hover:underline decoration-[#E5A84B]/50"
                }`}
              >
                {chip.label}
              </button>
              {idx < sampleKeywords.length - 1 && (
                <span className="text-[#E5A84B]/30 font-light select-none">/</span>
              )}
            </div>
          );
        })}
      </div>

      {/* Sacred Proverb Display — THE MAIN STAR (2X Giant Sharp Serif Italic, No Yellow Card Box) */}
      {activeItem && (
        <div className="pt-8 space-y-8 max-w-4xl mx-auto border-t border-[#E5A84B]/20 animate-in fade-in duration-500">
          {/* Understated Metadata Line */}
          <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.25em] text-[#E5A84B]/70 border-b border-[#E5A84B]/15 pb-3">
            <span>{activeItem.tag[language]}</span>
            <span>PETUAH ADAT MINANGKABAU</span>
          </div>

          {/* THE MAIN STAR: Giant Dramatically Curved Serif Italic Proverb */}
          <div className="space-y-4 py-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#E5A84B] block">
              SACRED PROVERB:
            </span>
            <p className="font-serif italic text-3xl sm:text-5xl lg:text-6xl text-[#E5A84B] leading-[1.12] font-normal max-w-3xl mx-auto drop-shadow-md">
              &ldquo;{activeItem.minangProverb}&rdquo;
            </p>
          </div>

          {/* Proverb Title & Philosophical Explanation */}
          <div className="max-w-2xl mx-auto space-y-3 pt-2">
            <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#FAF5ED]">
              {activeItem.title[language]}
            </h4>
            <p className="text-sm sm:text-base font-light text-[#FAF5ED]/85 leading-relaxed">
              {activeItem.explanation[language]}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
