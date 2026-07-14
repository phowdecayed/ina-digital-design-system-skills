# Pattern: 404 Section (Halaman Tidak Ditemukan)

## Purpose

Use this pattern when a citizen or administrator requests a URL, resource, or page that does not exist or cannot be found on the server.

The 404 Section must remain reassuring, clean, official, and easily guide the user back to safety.

---

## Anatomy of IDDS 404 Screen

An official IDDS 404 page contains:

1. **Illustration**: Optional **Ilustrasi State** (medium complexity, `280x210px` / `4:3`, no characters in spot illustration size if smaller) representing a clean, non-dramatic error.
2. **Error Code**: Polite, large text representation (e.g., "404").
3. **Headline**: Polite Indonesian title (e.g., "Halaman Tidak Ditemukan" or "Halaman Belum Tersedia").
4. **Description**: Concise, clear sub-paragraph explaining why the error occurred and how to resolve it (e.g., "Alamat URL yang Anda masukkan mungkin salah, atau halaman telah dipindahkan. Periksa kembali tautan Anda.").
5. **Primary CTA**: High-priority button guiding the user back to safety (e.g., "Kembali ke Beranda" or "Ke Halaman Utama").
6. **Secondary CTA**: Optional action button (e.g., "Laporkan Masalah" or "Hubungi Bantuan").

---

## Technical Behavior Rules

AI Agents must implement these exact interactive behaviors:

- **Strict Routing**: Always offer a clear route back to the user's dashboard or the homepage.
- **Accessibility**: Heading order must remain sequential (`h1` or `h2` for the main title, never skip heading levels).
- **No Infinite Loops**: The "Kembali" button must not trigger a backward loop if the previous page was also an error. Prefer directing specifically to the home page or a stable dashboard link.

---

## Visual Rules

- **Shadows**: Avoid using heavy shadows or floating visual effects.
- **Spacing**: Keep layout centered and spacious, using `py-48 md:py-80` for the outer container.
- **Banned Visual Elements**:
  - ❌ Do not use "Lost in space" or "Astronaut/Alien" illustrations.
  - ❌ Do not use humorous or playful wording.
  - ❌ Do not display raw stack traces, SQL errors, or system codes to citizens.

---

## Copywriting Guide

Good 404 Copy:

- **Headline**: "Halaman Tidak Ditemukan"
- **Sub-instruction**: "Maaf, halaman yang Anda cari tidak dapat ditemukan atau telah dipindahkan. Pastikan alamat URL yang Anda masukkan sudah benar."
- **Primary CTA**: "Kembali ke Beranda"

SaaS playful text to avoid:
- ❌ "Whoops! You're lost in space."
- ❌ "Houston, we have a problem."
- ❌ "Uh-oh, nothing here."

---

## Code Example: Vue 3 `<script setup>`

```html
<template>
  <div class="min-h-screen bg-surface-primary flex flex-col justify-center items-center px-24 py-48 md:py-80">
    <div class="max-w-md w-full text-center flex flex-col items-center gap-24">
      
      <!-- IDDS State Illustration Wrapper (Standard 4:3 Ratio) -->
      <div class="w-280 h-210 flex items-center justify-center bg-primary-50 rounded-lg text-primary-600 mb-16">
        <!-- Reassuring Icon/SVG (Replacement for State Illustration) -->
        <svg xmlns="http://www.w3.org/2000/svg" class="w-80 h-80 opacity-80" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M3 7v4a1 1 0 0 0 1 1h3" />
          <path d="M7 7v10" />
          <path d="M10 8v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1z" />
          <path d="M17 7v4a1 1 0 0 0 1 1h3" />
          <path d="M21 7v10" />
        </svg>
      </div>

      <div class="flex flex-col gap-12">
        <!-- Error Code Title -->
        <span class="text-caption font-bold tracking-widest text-primary-700 uppercase">
          Kesalahan 404
        </span>
        <!-- Headline -->
        <h1 class="text-h2 font-extrabold text-content-primary tracking-tight leading-tight">
          Halaman Tidak Ditemukan
        </h1>
        <!-- Description -->
        <p class="text-body-sm text-content-secondary leading-relaxed">
          Maaf, halaman yang Anda tuju tidak dapat ditemukan. Alamat URL mungkin salah ketik, telah kedaluwarsa, atau dipindahkan oleh pengelola sistem.
        </p>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-wrap justify-center gap-16 mt-8 w-full">
        <a
          href="/"
          class="px-24 py-12 bg-primary-600 hover:bg-primary-700 text-white rounded-md text-body-sm font-bold shadow-sm transition-all text-center focus:ring-2 focus:ring-primary-300"
        >
          Kembali ke Beranda
        </a>
        <a
          href="/bantuan"
          class="px-24 py-12 border border-stroke-primary text-primary-700 hover:bg-primary-50 rounded-md text-body-sm font-bold transition-all text-center"
        >
          Pusat Bantuan
        </a>
      </div>

    </div>
  </div>
</template>

<script setup>
// No complex state required for a pure 404 section page
</script>
```

---

## Review Checklist

- [ ] Is there an illustration/icon of suitable proportion (no characters in spot sizes, State Illustration at `280x210px`)?
- [ ] Is the headline written in polite, reassuring Indonesian?
- [ ] Does it avoid scary, playful, or abstract metaphors?
- [ ] Is there a prominent Primary CTA leading back to a safe route (home/dashboard)?
- [ ] Are system stack traces and database error codes completely hidden from citizens?
