# Skills.sh Compatibility Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Modify the repository so that it is fully compliant with the `skills.sh` / `npx skills` specification and can be installed via `npx skills add phowdecayed/ina-digital-design-system-skills`.

**Architecture:** Add standard YAML frontmatter to `SKILL.md` and update `README.md` to document the `npx skills` installation workflow.

**Tech Stack:** `npx skills` CLI.

## Global Constraints
- Naming rules: Skill identifier must be lowercase and hyphenated. We will use `idds`.
- Non-negotiables: No placeholders or unresolved TODOs.

---

### Task 1: Add YAML Frontmatter to `SKILL.md`

**Files:**
- Modify: `/Users/rachmatsharyadi/Developer/personal/ina-digital-design-system-skills/SKILL.md:1-2`

**Interfaces:**
- Consumes: None
- Produces: Valid YAML frontmatter at the beginning of the markdown file.

- [ ] **Step 1: Edit `SKILL.md` to add frontmatter**

Edit `/Users/rachmatsharyadi/Developer/personal/ina-digital-design-system-skills/SKILL.md` and add:
```markdown
---
name: idds
description: Operational skill pack that teaches AI coding agents how to design, audit, and implement Indonesian government / public-service interfaces in alignment with the INA Digital Design System (IDDS).
---
```
at the absolute top of the file, shifting the existing content down.

- [ ] **Step 2: Commit Task 1**

```bash
git add SKILL.md
git commit -m "feat: add YAML frontmatter to SKILL.md for skills.sh compliance"
```

---

### Task 2: Update `README.md` with modern installation instructions

**Files:**
- Modify: `/Users/rachmatsharyadi/Developer/personal/ina-digital-design-system-skills/README.md`

**Interfaces:**
- Consumes: Valid skill `idds` defined in Task 1
- Produces: Updated documentation for standard `npx skills add` installation.

- [ ] **Step 1: Read and modify `README.md`**

Replace the installation section under "Quick Start" to list the modern installation method first.

- [ ] **Step 2: Commit Task 2**

```bash
git add README.md
git commit -m "docs: update installation instructions to use npx skills"
```

---

### Task 3: Local Verification

**Files:**
- None (Verification task)

- [ ] **Step 1: Run local validation with npx skills CLI**

Run the local list command:
```bash
npx skills add ./ --list
```
Expected: The CLI discovers the `idds` skill and outputs its details successfully.
