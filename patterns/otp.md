# Pattern: OTP (One-Time Password)

## Purpose

Use the OTP pattern when verifying citizen/user identity during authentication, registration, password resets, or official transactions. 

The OTP screen must be clean, highly secure, and guide the user through entering a 4-6 digit numeric code.

---

## Anatomy of IDDS OTP Screen

An official IDDS OTP page contains:

1. **Header**: Clear, reassuring title (e.g., "Verifikasi Nomor Ponsel" or "Verifikasi Keamanan").
2. **Context Sub-title**: Explains where the OTP was sent (e.g., "Kami telah mengirimkan kode verifikasi ke nomor +62 812 **** 4321").
3. **OTP Inputs**: 4 to 6 separate, single-character numeric inputs.
4. **Countdown Timer**: Disables resending and shows remaining validity time (e.g., "Kirim ulang dalam 01:45").
5. **Resend Action**: A subtle secondary button or link, enabled only after the countdown reaches zero.
6. **Error Feedback**: Red boundaries and helper text for failed/expired inputs.

---

## Technical Behavior Rules

AI Agents must implement these exact interactive behaviors:

- **1 Digit Per Input**: Exactly 1 numeric digit (0-9) per input box.
- **Auto-Focus Progression**: Focus must automatically move to the next field immediately after typing a digit.
- **Auto-Focus Regression**: Pressing Backspace on an empty field must automatically shift focus back to the previous input field.
- **Paste Support**: Users must be able to copy a full 4-6 digit code and paste it directly, which should automatically populate all the fields.
- **Input Type Restriction**: Force numeric keypad on mobile: `inputmode="numeric" pattern="[0-9]*" type="text"`.

---

## Visual Rules

- **Input Dimensions**: Use rounded square input fields (typically `w-48 h-48` or `w-56 h-56`) with a border-radius of `rounded-md`.
- **States**:
  - **Normal**: `border-stroke-primary` border.
  - **Active/Focus**: `border-primary-500` border with a subtle focus ring `ring-2 ring-primary-300`.
  - **Error**: `border-error-500` border with red helper text.
- **Instructions**: Keep copywriting extremely brief. Do not write paragraphs of instructions.

---

## Copywriting Guide

Good OTP copy:

- **Primary**: "Masukkan Kode Verifikasi"
- **Sub-instruction**: "Kode OTP terdiri dari 6 digit angka yang dikirimkan melalui SMS ke nomor ponsel Anda."
- **Timer text**: "Kirim ulang kode dalam 01:50"
- **Resend link (active)**: "Kirim Ulang Kode"
- **Error message**: "Kode OTP tidak valid atau sudah kedaluwarsa. Periksa kembali dan coba lagi."

Avoid SaaS marketing jargon:
- ❌ "Unlock your account."
- ❌ "Type the magic numbers."

---

## Implementation Example: Vue 3 `<script setup>`

```html
<template>
  <div class="max-w-md mx-auto p-24 border border-stroke-secondary rounded-lg bg-surface-primary shadow-sm text-center flex flex-col gap-24">
    <div class="flex flex-col gap-8">
      <h2 class="text-h4 font-bold text-content-primary">Verifikasi Nomor Ponsel</h2>
      <p class="text-body-sm text-content-secondary leading-relaxed">
        Masukkan 6 digit kode OTP yang dikirimkan ke nomor ponsel <span class="font-semibold text-content-primary">+62 812 **** 4321</span>
      </p>
    </div>

    <!-- OTP Input Group -->
    <div class="flex justify-center gap-12" @paste="handlePaste">
      <input
        v-for="(digit, idx) in 6"
        :key="idx"
        ref="inputRefs"
        v-model="otp[idx]"
        type="text"
        inputmode="numeric"
        pattern="[0-9]*"
        maxlength="1"
        :class="[
          'w-48 h-48 text-center text-body-lg font-bold rounded-md border focus:outline-none focus:ring-2 transition-all',
          hasError 
            ? 'border-error-500 focus:ring-error-300 text-error-900' 
            : 'border-stroke-primary focus:border-primary-500 focus:ring-primary-300 text-content-primary'
        ]"
        @input="handleInput($event, idx)"
        @keydown.delete="handleBackspace($event, idx)"
      />
    </div>

    <!-- Feedback States -->
    <p v-if="hasError" class="text-caption text-error-600 font-medium">
      Kode OTP tidak valid atau sudah kedaluwarsa. Periksa kembali dan coba lagi.
    </p>

    <!-- Timer and Resend Actions -->
    <div class="text-body-sm text-content-secondary">
      <p v-if="timer > 0">
        Belum menerima kode? Kirim ulang dalam <span class="font-semibold text-primary-700">{{ formatTimer(timer) }}</span>
      </p>
      <button
        v-else
        type="button"
        @click="resendOtp"
        class="text-primary-700 hover:text-primary-800 font-bold focus:outline-none focus:underline"
      >
        Kirim Ulang Kode
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const otp = ref(Array(6).fill(''))
const inputRefs = ref([])
const hasError = ref(false)
const timer = ref(110) // 1 minute 50 seconds
let intervalId = null

const handleInput = (e, idx) => {
  const val = e.target.value
  if (!/^[0-9]$/.test(val)) {
    otp.value[idx] = ''
    return
  }
  hasError.value = false
  if (idx < 5 && val !== '') {
    inputRefs.value[idx + 1].focus()
  }
}

const handleBackspace = (e, idx) => {
  if (otp.value[idx] === '' && idx > 0) {
    otp.value[idx - 1] = ''
    inputRefs.value[idx - 1].focus()
  } else {
    otp.value[idx] = ''
  }
}

const handlePaste = (e) => {
  e.preventDefault()
  const pastedData = e.clipboardData.getData('text').trim()
  if (/^[0-9]{6}$/.test(pastedData)) {
    hasError.value = false
    pastedData.split('').forEach((char, idx) => {
      otp.value[idx] = char
    })
    inputRefs.value[5].focus()
  }
}

const resendOtp = () => {
  otp.value = Array(6).fill('')
  hasError.value = false
  timer.value = 110
  startTimer()
  inputRefs.value[0].focus()
}

const formatTimer = (secs) => {
  const m = Math.floor(secs / 60).toString().padStart(2, '0')
  const s = (secs % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}

const startTimer = () => {
  clearInterval(intervalId)
  intervalId = setInterval(() => {
    if (timer.value > 0) {
      timer.value--
    } else {
      clearInterval(intervalId)
    }
  }, 1000)
}

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>
```

---

## Review Checklist

- [ ] Are there 4-6 distinct, square numeric inputs?
- [ ] Is mobile `inputmode="numeric"` configured?
- [ ] Does focus advance automatically when typing?
- [ ] Does focus regress automatically on backspace?
- [ ] Is copy-paste input supported?
- [ ] Is the countdown timer and resend link active?
- [ ] Is error feedback clearly marked in red?
