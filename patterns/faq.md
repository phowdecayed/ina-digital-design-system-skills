# Pattern: FAQ (Frequently Asked Questions)

## Purpose

Use this pattern when displaying frequently asked questions, help directories, or self-service knowledge bases in government portals or citizen-facing services.

The FAQ page should enable users to find answers quickly on their own, reducing direct telephone or back-office operational load.

---

## Anatomy of IDDS FAQ Screen

An official IDDS FAQ layout contains:

1. **Header Banner**: Reassuring title (e.g., "Pusat Bantuan" or "Pertanyaan yang Sering Diajukan").
2. **Searchbar**: Standarized search bar (`Searchbar`) centered or full-width, assisting with dynamic queries.
3. **Category Filters**: Chip or Tab menus enabling users to filter questions by category (e.g., "Akun", "Layanan", "Persyaratan").
4. **Accordion List**: Standard `AccordionGroup` (collapsible list) containing specific questions and answers.
5. **Secondary Help CTA**: Action buttons enabling citizens to contact direct support if their question is not listed (e.g., "Hubungi CS via WhatsApp" or "Kirim Tiket Bantuan").

---

## Technical Behavior Rules

AI Agents must implement these exact interactive behaviors:

- **Single Open Accordions**: Prefer `AccordionGroup` with default single-open behavior (`:multiple-open="false"`) so that opening one question automatically collapses others, keeping visual noise low.
- **Search Filtering**: Typing in the Searchbar should filter the Accordion list in real-time.
- **Filtered Empty State**: If no questions match the search query, show a proper empty state (`patterns/empty-state.md` Filtered style) with a "Reset Pencarian" action.
- **Category Synchronization**: Switching tabs/categories must update the questions list and clear/reset active search terms if there are no overlapping matches.

---

## Copywriting Guide

Good FAQ Copy:

- **Search Placeholder**: "Cari topik bantuan..."
- **No Results Wording**: "Topik tidak ditemukan. Hubungi kami jika Anda membutuhkan bantuan lebih lanjut."
- **Secondary CTA Label**: "Belum Menemukan Jawaban? Hubungi Kami"

---

## Code Example: Vue 3 `<script setup>`

```html
<template>
  <div class="max-w-4xl mx-auto p-24 flex flex-col gap-32">
    <!-- Header -->
    <div class="text-center flex flex-col gap-12">
      <h1 class="text-h2 font-extrabold text-content-primary tracking-tight">Ada yang bisa kami bantu?</h1>
      <p class="text-body text-content-secondary">
        Cari topik bantuan atau pilih kategori pertanyaan di bawah ini.
      </p>
    </div>

    <!-- Searchbar -->
    <div class="relative max-w-xl w-full mx-auto">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Cari kata kunci bantuan..."
        class="w-full h-48 pl-48 pr-16 text-body-sm rounded-md border border-stroke-primary bg-surface-primary text-content-primary focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-300 transition-all"
      />
      <!-- Icon Search -->
      <span class="absolute left-16 top-14 text-content-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>
      </span>
    </div>

    <!-- Category Chips (Tab Menu) -->
    <div class="flex justify-center gap-12 flex-wrap border-b border-stroke-secondary pb-16">
      <button
        v-for="cat in categories"
        :key="cat.id"
        type="button"
        @click="activeCategory = cat.id"
        :class="[
          'px-16 py-8 rounded-full text-caption font-semibold transition-all border',
          activeCategory === cat.id
            ? 'bg-primary-600 border-primary-600 text-white shadow-sm'
            : 'bg-surface-primary border-stroke-primary text-content-secondary hover:bg-surface-secondary'
        ]"
      >
        {{ cat.label }}
      </button>
    </div>

    <!-- FAQ Accordions -->
    <div class="flex flex-col gap-16">
      <AccordionGroup v-if="filteredFaqs.length > 0">
        <Accordion
          v-for="faq in filteredFaqs"
          :key="faq.id"
          :title="faq.question"
          class="border border-stroke-secondary rounded-lg overflow-hidden bg-surface-primary"
        >
          <p class="text-body-sm text-content-secondary leading-relaxed p-16 bg-surface-secondary border-t border-stroke-secondary">
            {{ faq.answer }}
          </p>
        </Accordion>
      </AccordionGroup>

      <!-- Empty State Filtered -->
      <div v-else class="text-center py-48 border border-dashed border-stroke-primary rounded-lg flex flex-col items-center gap-16">
        <div class="w-48 h-48 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
          </svg>
        </div>
        <div>
          <h3 class="text-body-lg font-bold text-content-primary">Pertanyaan tidak ditemukan</h3>
          <p class="text-caption text-content-secondary mt-4">
            Ubah kata kunci pencarian Anda atau reset filter kategori.
          </p>
        </div>
        <button
          type="button"
          @click="resetFilters"
          class="px-16 py-8 bg-primary-600 hover:bg-primary-700 text-white rounded-md text-caption font-bold transition-all"
        >
          Reset Pencarian
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Accordion, AccordionGroup } from '@idds/vue'

const searchQuery = ref('')
const activeCategory = ref('semua')

const categories = [
  { id: 'semua', label: 'Semua Topik' },
  { id: 'akun', label: 'Akun & Registrasi' },
  { id: 'layanan', label: 'Persyaratan Layanan' },
  { id: 'keamanan', label: 'Keamanan' },
]

const faqs = [
  {
    id: 1,
    category: 'akun',
    question: 'Bagaimana cara mendaftar akun di portal layanan?',
    answer: 'Anda dapat mendaftar dengan menekan tombol "Daftar Akun" di pojok kanan atas, menyiapkan NIK, nomor ponsel aktif, dan mengikuti langkah pengisian data diri sesuai form.'
  },
  {
    id: 2,
    category: 'layanan',
    question: 'Apa saja syarat pengajuan Surat Keterangan Domisili?',
    answer: 'Syarat yang diperlukan adalah scan KTP asli, scan Kartu Keluarga (KK), dan surat pengantar dari RT/RW setempat.'
  },
  {
    id: 3,
    category: 'keamanan',
    question: 'Apa yang harus saya lakukan jika kode OTP tidak masuk?',
    answer: 'Pastikan nomor ponsel Anda memiliki pulsa yang cukup, sinyal operator kuat, dan nomor ponsel yang didaftarkan sudah benar. Anda dapat menekan "Kirim Ulang Kode" setelah hitungan mundur habis.'
  }
]

const filteredFaqs = computed(() => {
  return faqs.filter(faq => {
    const matchesCategory = activeCategory.value === 'semua' || faq.category === activeCategory.value
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesCategory && matchesSearch
  })
})

const resetFilters = () => {
  searchQuery.value = ''
  activeCategory.value = 'semua'
}
</script>
```

---

## Review Checklist

- [ ] Does it use the official `Accordion` and `AccordionGroup` components?
- [ ] Is there an active `Searchbar` or query filter?
- [ ] Are categories separated neatly using Tabs or Chips?
- [ ] Is there a dynamic filtered empty state with reset capability?
- [ ] Is the language professional, polite, and in Indonesian?
