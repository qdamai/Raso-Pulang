# Raso Pulang — A Taste That Feels Like Home

> **“Slow-cooked with patience, layered with memory, and shared across generations — Rendang is more than a dish. It is a feeling of home.”**

**Raso Pulang** is a warm, editorial web experience created as a digital love letter to Rendang. Submitted for the **DEV Community Frontend Challenge: Comfort Food Edition**, it presents Rendang through the lens of memory, patience, family gatherings, and Minangkabau culinary culture.

---

## 🌟 Key Features

* **Warm Editorial Storytelling**: Poetic copy, intentional typography system, and curated color palette reflecting dark cocoa, burnt terracotta, coconut cream, and spice warmth.
* **Responsive Editorial Navbar**: Smooth-scrolling navigation with top-hero integration, scroll background transition, and mobile menu drawer.
* **Interactive Ingredients Selector**: Keyboard-accessible tabbed showcase exploring 6 core Rendang ingredients (Beef, Coconut Milk, Chili, Galangal, Lemongrass, Kaffir Lime Leaves).
* **Cooking Journey Timeline**: Responsive progression flow (Horizontal on desktop, Vertical on mobile) detailing the 4 stages of slow reduction (*Gathering, Simmering, Deepening, Sharing*).
* **"Open a Memory" Interactive Section**: Asymmetric editorial memory cards with an expandable story trigger.
* **Accessible Gallery Lightbox Modal**: Photo gallery with Next.js image fallbacks, `Escape` key close, focus management, and mobile support.
* **Accessible & Reduced Motion Friendly**: Fully usable via keyboard, custom focus indicators, ARIA labels, semantic HTML, and `prefers-reduced-motion` safety rules.

---

## 🛠️ Technology Used

* **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
* **Library**: [React 19](https://react.dev/)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Fonts**: [Google Fonts (`Playfair Display` & `Plus Jakarta Sans`)](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) via `next/font`

---

## 🚀 Getting Started

### 1. Installation

Clone the repository and install dependencies:

```bash
npm install
```

### 2. Development Command

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Production Build Command

To validate and build the production bundle:

```bash
npm run build
npm run start
```

---

## 📁 Folder Structure

```text
raso-pulang/
├── public/
│   ├── favicon.ico
│   └── images/              # Local image assets
│       ├── hero-rendang.jpg
│       ├── intro-kitchen.jpg
│       └── gallery/
│           ├── rendang-1.jpg
│           ├── rendang-2.jpg
│           ├── rendang-3.jpg
│           └── rendang-4.jpg
│
├── src/
│   ├── app/
│   │   ├── globals.css      # Design system tokens, colors, & smooth scroll
│   │   ├── layout.tsx       # Root layout, Google Fonts, SEO metadata
│   │   └── page.tsx         # Main entry page assembling components
│   │
│   ├── components/          # Reusable UI components
│   │   ├── navbar.tsx
│   │   ├── hero.tsx
│   │   ├── introduction.tsx
│   │   ├── ingredients.tsx
│   │   ├── cooking-journey.tsx
│   │   ├── memories.tsx
│   │   ├── gallery.tsx
│   │   ├── closing-section.tsx
│   │   └── footer.tsx
│   │
│   └── data/
│       └── content.ts       # Central static copy, links, & gallery metadata
│
├── IMAGE-GUIDE.md           # Specifications & specs for image assets
├── README.md                # Project documentation
└── package.json
```

---

## 🖼️ Where to Add Images

Refer to [`IMAGE-GUIDE.md`](./IMAGE-GUIDE.md) for full instructions. Place image files inside `public/images/`.

If image files are missing, the website will display elegant, editorial SVG graphic fallbacks so the layout remains beautiful and functional.

---

## 🔗 How to Replace Placeholder Links

All text content, navigation items, social links, and memory stories are stored in `src/data/content.ts`.

To update GitHub or DEV Community links, edit lines in `src/data/content.ts`:

```typescript
export const SITE_CONTENT = {
  // ...
  footer: {
    githubUrl: "https://github.com/your-username/raso-pulang",
    devCommunityUrl: "https://dev.to/your-post-url",
  }
};
```

---

## ♿ Accessibility Considerations

* **Keyboard Navigation**: All interactive elements (navbar links, ingredient tabs, memory buttons, gallery items, modal close buttons, scroll-to-top) can be reached and activated using `Tab`, `Space`, `Enter`, and `Arrow` keys.
* **Visible Focus Indicators**: High-contrast custom focus rings (`#B95032`) are configured globally.
* **Modal Accessibility**: Lightbox modal locks body scroll, handles `Escape` key close, and supports backdrop dismissals.
* **Reduced Motion**: All animations and smooth scroll behaviors respect `prefers-reduced-motion: reduce`.
* **Semantic Structure**: Uses `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, and `<button>` elements.

---

## 🌐 Deployment Notes

Deploy seamlessly to [Vercel](https://vercel.com/):

1. Push your repository to GitHub.
2. Import the project in Vercel.
3. Vercel automatically detects Next.js App Router setup and builds with `npm run build`.

---

## 🏆 Connection to DEV Community Challenge

This project was built for the **DEV Community Frontend Challenge: Comfort Food Edition**.

Instead of treating comfort food as a generic transaction or restaurant menu, **Raso Pulang** explores comfort food as memory, patience, and cultural connection. It pays tribute to Rendang — recognized globally, but loved deeply at family tables where hours of slow cooking turn simple ingredients into a warm welcome home.

---

## 📜 License

Made with curiosity, code, and a little taste of home.
