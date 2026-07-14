# Pattern: Component Interactions (Interaksi Antar-Komponen)

## Purpose

Use this guide to structure the interactive flows and state changes between multiple components. 

Government services must feel responsive and certain. Every action must trigger a predictable, accessible, and cohesive chain of component updates.

---

## Flow 1: Confirmation & Feedback (Alur Konfirmasi & Umpan Balik)

**Use case**: Destructive or high-impact actions (e.g., "Hapus Pengajuan", "Tolak Dokumen", "Kirim Keputusan").

### The Interactive Chain:

```txt
[Button Click] ──> [Modal (Blocking Overlay)] ──> [Loading State] ──> [Modal Closes + Toast Success]
```

1. **Trigger**: User clicks a destructive action **`Button`** (e.g., `hierarchy="danger"` or `hierarchy="secondary"`).
2. **Overlay**: Displays a **`Modal`** utilizing **Blocking Overlay** behavior (blocking interaction with the page and trapping keyboard focus).
3. **Anatomy of Modal**:
   - Concise warning header.
   - Polite description of the administrative consequence.
   - Core Action Button (`hierarchy="danger"` or `hierarchy="primary"`) and a "Batal" tertiary button.
4. **Processing**: Clicking confirm puts the primary button into a **`Loading` (busy)** state, displaying a spinner and disabling both buttons to prevent duplicate submissions.
5. **Success**: Upon API success, the `Modal` transitions close, keyboard focus returns to the original triggering button, and a temporary **`Toast`** slides in with a "Float Shadow" at the top/bottom of the page (e.g., "Dokumen berhasil ditolak.").

---

## Flow 2: Dense Data Drill-Down (Alur Penelusuran Detail Data)

**Use case**: Checking detailed parameters, audit trails, or document previews from a record list without losing page context.

### The Interactive Chain:

```txt
[Table Row Hover] ──> [Row Click] ──> [Drawer Slides-In (Focusing Overlay)] ──> [Drawer Closes + Focus Returns]
```

1. **Hover**: Hovering over a row in a **`Table`** highlights it softly (`bg-surface-secondary` with a pointer cursor) to indicate clickability.
2. **Trigger**: User clicks the row or the "Lihat Detail" action button inside the **`TableCell`**.
3. **Overlay**: A **`Drawer` (Slide-Over)** slides in from the right edge of the screen, utilizing a **Focusing Overlay** (dimming the background to concentrate attention on the details).
4. **Anatomy of Drawer**:
   - Persistent header with a clear "Close" button.
   - Detailed information structured in collapsible **`Accordion`** blocks or tabs.
   - Semantic badges (`Badge` or `Chip`) indicating active document states.
5. **Dismissal**: User can close the `Drawer` by clicking the close cross, clicking the dimmed backdrop scrim, or pressing the `Escape` key.
6. **Focus Restoration**: Focus returns safely to the table row that triggered the Drawer, enabling seamless keyboard navigation.

---

## Flow 3: Guided Multi-Step Form Validation (Alur Pengisian Form Berpanduan)

**Use case**: Complex administrative submissions (e.g., "Pendaftaran Akun", "Permohonan Izin").

### The Interactive Chain:

```txt
[Active Input (Focus Ring)] ──> [Inline Error / Helper Text] ──> [Lanjut Click (Validation Block)] ──> [Top Alert Banner]
```

1. **Focus**: Active **`TextInput`** fields show a prominent focus ring (`ring-2 ring-primary-300`).
2. **Inline Validation**: Typing into a field evaluates its schema. If invalid, the border turns red (`border-error-500`) and a red helper text appears, bound via `aria-describedby` to the input.
3. **Transition**: User clicks the "Lanjut" **`Button`**.
4. **Validation Block (If Errors Exist)**:
   - The form prevents transition to the next **`Stepper`** step.
   - The page automatically scrolls to the first invalid input field and focuses it.
   - A persistent **`Alert`** banner (negative sentiment) appears at the top of the active step, summarizing the errors (e.g., "Ada 3 bidang yang belum diisi dengan benar. Periksa kembali.").
5. **Review State**: Before the final submit, all inputs are presented as non-editable text cards. The "Kirim" button triggers a final loading spinner before redirecting to the successful **Submission Confirmation** page.

---

## AI Implementation Rules

When generating code, the AI must:

- Write explicit handlers for hover, focus, loading, and disabled states.
- Always implement the Escape key listener and backdrop click handlers for closing overlays (Modals & Drawers).
- Set `disabled` attributes on buttons during loading states.
- Restore keyboard focus to the triggering element after closing modals or drawers.
- Link inputs to validation states semantically using accessibility tags (`aria-invalid="true"`, `aria-describedby="error-id"`).

---

## Review Checklist

- [ ] Does every modal have a loading state on submit?
- [ ] Are buttons disabled while a request is processing?
- [ ] Does pressing `Escape` close active Modals and Drawers?
- [ ] Is keyboard focus trapped in Modals and restored upon close?
- [ ] Do tables have soft hover highlight transitions?
- [ ] Are input validation errors highlighted with red borders and clear helper text?
