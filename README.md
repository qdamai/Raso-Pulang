<div align="center">

  <img src="https://raw.githubusercontent.com/qdamai/Raso-Pulang/main/public/images/dev-cover-image.png" alt="Raso Pulang Banner" width="100%" />

  # 🌾 Raso Pulang — A Taste That Feels Like Home

  **A Romantic Digital Love Letter to Rendang & Minangkabau Culinary Heritage**

  [![Live Demo](https://img.shields.io/badge/Live%20Demo-rasopulang.vercel.app-E5A84B?style=for-the-badge&logo=vercel&logoColor=white)](https://rasopulang.vercel.app)
  [![DEV Community](https://img.shields.io/badge/DEV%20Submission-Frontend%20Challenge-20D63B?style=for-the-badge&logo=devto&logoColor=white)](https://dev.to/challenges/frontend-2026-07-29)
  [![Next.js 16](https://img.shields.io/badge/Next.js-16.2.12-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS v4](https://img.shields.io/badge/Tailwind%20CSS-v4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-A04028.svg?style=for-the-badge)](LICENSE)

  [🌐 Explore Live Website](https://rasopulang.vercel.app) • [📖 Read Submission on DEV.to](https://dev.to) • [🐛 Report Issue](https://github.com/qdamai/Raso-Pulang/issues)

</div>

---

> **“Slow-cooked with patience, layered with memory, and shared across generations — Rendang is more than a dish. It is a feeling of home.”**

**Raso Pulang** (Minang for *"The Taste of Home"*) is an immersive, high-elegance web application created for the **DEV Community Frontend Challenge 2026 (Comfort Food Edition: Perfect Landing)**. It translates the ancient Minangkabau tradition of *Merantau* and the slow caramelization of Rendang into a tactile, interactive digital museum.

---

## 🌟 Interactive Feature Showcase

<details open>
<summary><b>🌐 1. Dual-Language Editorial Engine (EN / ID)</b></summary>
<br />
Seamlessly toggle between <b>English</b> and <b>Bahasa Indonesia</b> instantly with smooth state transitions. Built to welcome both international food lovers and local Minang communities.
</details>

<details>
<summary><b>🔊 2. Web Audio API Spatial Kitchen Hearth Soundscape</b></summary>
<br />
Includes a custom-synthesized Web Audio API sound generator in <code>src/utils/spatial-audio.ts</code>. Toggling the hearth sound plays ambient wood-fire crackles, mortar pounding, and gentle coconut cream simmer sounds directly in your browser without external audio files.
</details>

<details>
<summary><b>📜 3. The Four Sacred Pillars & Niniak Mamak Knowledge System</b></summary>
<br />
Explore the cultural philosophy of Minangkabau society through the 4 ingredients of Rendang:
<ul>
  <li><b>Dagiang (Beef):</b> Symbolizes <i>Niniak Mamak</i> (Leaders & Tribal Elders).</li>
  <li><b>Karambia (Coconut Cream):</b> Symbolizes <i>Cadiak Pandai</i> (Scholars & Intellectuals).</li>
  <li><b>Lado (Red Chili):</b> Symbolizes <i>Alim Ulama</i> (Religious Guidance).</li>
  <li><b>Pemasak (Spices):</b> Symbolizes <i>Masyarakat</i> (The Harmonious Community).</li>
</ul>
Contains an interactive keyword search bar consulting traditional Minang proverbs (*Petuah Adat*).
</details>

<details>
<summary><b>🧪 4. Traditional Spice Proportion Calculator</b></summary>
<br />
An interactive culinary tool allowing home cooks to slide beef weight (1 kg to 10 kg) and calculate exact traditional measurements for coconut cream, hand-pounded red chili paste, galangal, lemongrass, and kaffir lime leaves.
</details>

<details>
<summary><b>🍲 5. Luhak Nan Tigo Regional Rendang Matcher Quiz</b></summary>
<br />
Discover 6 authentic regional Rendang variations (<i>Randang Dagiang, Randang Itiak, Randang Talua, Randang Lokan, Randang Suir, Randang Paru</i>). Take the 3-question interactive quiz to find your personal soul match.
</details>

<details>
<summary><b>🖼️ 6. Rumah Gadang Museum Gallery Lightbox</b></summary>
<br />
A curated photo exhibition framed with traditional swirling <i>Kaluak Paku</i> gold SVG ornaments and dark brass museum plaques. Features keyboard accessibility (<code>Escape</code> key close & focus trap).
</details>

---

## 🛠️ Technology Specifications

| Component | Technology Used | Version / Details |
| :--- | :--- | :--- |
| **Core Framework** | [Next.js](https://nextjs.org/) | `v16.2.12` (Turbopack, App Router) |
| **UI Library** | [React](https://react.dev/) | `v19.2.4` |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | `v5.0` (Strict Type Safety) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | `v4.0` (Custom Design System Tokens) |
| **Icons** | [Lucide React](https://lucide.dev/) | `v1.28.0` |
| **Audio Engine** | Web Audio API | Native Browser Audio Synthesizer |
| **Typography** | Google Fonts | `Playfair Display`, `Plus Jakarta Sans`, `Caveat` |
| **Deployment** | [Vercel](https://vercel.com/) | Live Global Production Build |

---

## 🚀 Quick Start & Installation

Follow these steps to run **Raso Pulang** locally on your machine:

### 1. Clone Repository
```bash
git clone https://github.com/qdamai/Raso-Pulang.git
cd Raso-Pulang
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open **`http://localhost:3000`** in your browser to view the interactive site.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 📁 Repository Structure

```text
raso-pulang/
├── public/
│   ├── assets/              # Traditional ornament assets
│   └── images/              # Optimized web photography
│       ├── gallery/         # Museum exhibit images
│       ├── hero-rendang.jpg # Main hero photography
│       └── intro-kitchen.jpg# Minang kitchen hearth
│
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css      # Custom color tokens & scrollbar styles
│   │   ├── layout.tsx       # Root layout & Google Fonts configuration
│   │   └── page.tsx         # Main page assembly
│   │
│   ├── components/          # Reusable UI Components
│   │   ├── navbar.tsx       # Fixed header with mobile drawer & language switcher
│   │   ├── hero.tsx         # Headline & color palette preview
│   │   ├── introduction.tsx # History of Merantau & quote
│   │   ├── philosophy-varieties.tsx # Four Pillars & regional filters
│   │   ├── ingredients.tsx  # Spice laboratory & interactive calculator
│   │   ├── cooking-journey.tsx # 4-Stage timeline & spatial audio triggers
│   │   ├── memories.tsx     # Expandable stories of homecomings
│   │   ├── gallery.tsx      # Museum exhibition & Kaluak Paku SVG frames
│   │   ├── closing-section.tsx # Return to top & final farewell
│   │   ├── kitchen-audio.tsx# Web Audio API floating control button
│   │   └── niniak-mamak-search.tsx # Proverbs search system
│   │
│   ├── context/
│   │   └── language-context.tsx # Global EN / ID state provider
│   │
│   ├── data/
│   │   └── content.ts       # Structured content database
│   │
│   └── utils/
│       └── spatial-audio.ts # Web Audio API sound synthesis engine
│
└── package.json
```

---

## ♿ Accessibility & Performance

- **Full Keyboard Navigation:** All interactive cards, sliders, sound switches, and modals can be focused and triggered via `Tab`, `Enter`, `Space`, and `Arrow` keys.
- **Accessible Focus Indicators:** Custom high-contrast focus rings (`#A04028`) configured globally.
- **Screen Reader Friendly:** Built with semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) and ARIA labels.
- **Reduced Motion Safety:** All CSS transitions strictly honor `prefers-reduced-motion: reduce`.
- **Zero Image Layout Shifts:** All images utilize Next.js `Image` component with fixed aspect ratios and graceful SVG fallbacks.

---

## 📜 License & Credits

Built with ❤️ by **[qdamai](https://github.com/qdamai)** for the **DEV Community Frontend Challenge 2026**.

Distributed under the **MIT License**. See `LICENSE` for more information.

<div align="center">
  <sub>May every journey lead you back home. 🌾</sub>
</div>
