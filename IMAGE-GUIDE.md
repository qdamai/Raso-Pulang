# Raso Pulang — Image Asset Guide

This guide outlines all image asset requirements for the **Raso Pulang** web application.

The project features a graceful editorial fallback system — if image files are not present in `public/images`, the application will render high-quality stylized SVG graphic placeholders without breaking layout or showing broken image icons.

---

## Folder Structure

Place all image assets in the `public/images/` directory:

```text
public/
└── images/
    ├── hero-rendang.jpg
    ├── intro-kitchen.jpg
    └── gallery/
        ├── rendang-1.jpg
        ├── rendang-2.jpg
        ├── rendang-3.jpg
        └── rendang-4.jpg
```

---

## Image Specifications

### 1. Hero Image

* **Path**: `public/images/hero-rendang.jpg`
* **Used in**: `Hero` component (`src/components/hero.tsx`)
* **Subject**: Cinematic, close-up shot of rich dark Minangkabau Rendang simmering in a traditional vessel or served warm.
* **Aspect Ratio**: `16:9` or `21:9` wide landscape
* **Recommended Resolution**: `1920 x 1080 px` or `2560 x 1440 px`
* **Format**: WebP, JPG, or PNG (optimized under 500KB)

### 2. Introduction Storytelling Image

* **Path**: `public/images/intro-kitchen.jpg`
* **Used in**: `Introduction` component (`src/components/introduction.tsx`)
* **Subject**: Warm hearth, traditional kitchen setup, spice mortar & pestle, or wood-fired wok.
* **Aspect Ratio**: `4:5` portrait
* **Recommended Resolution**: `1080 x 1350 px`
* **Format**: WebP, JPG, or PNG (optimized under 400KB)

### 3. Gallery Images

* **Base Folder**: `public/images/gallery/`
* **Used in**: `Gallery` component (`src/components/gallery.tsx`)

| Filename | Subject Matter | Recommended Aspect Ratio | Recommended Resolution |
| :--- | :--- | :--- | :--- |
| `rendang-1.jpg` | Plated mahogany Rendang in clay pot | `4:5` Portrait | `1080 x 1350 px` |
| `rendang-2.jpg` | Fresh aromatics (lemongrass, galangal, chili) | `4:5` Portrait | `1080 x 1350 px` |
| `rendang-3.jpg` | Wood-fire hearth simmering wok | `4:5` Portrait | `1080 x 1350 px` |
| `rendang-4.jpg` | Rendang served over rice on banana leaf | `4:5` Portrait | `1080 x 1350 px` |

---

## Optimization Tips

1. **WebP Format**: Convert images to `.webp` for fastest loading performance.
2. **Compress**: Use tools like TinyPNG or Squoosh to compress files under 300–500 KB each.
3. **Alt Text**: Alt text is managed dynamically via `src/data/content.ts` for accessibility and SEO.
