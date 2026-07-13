# Portfolio Website – Conversation Summary

## Overview

This document summarizes the session between the user (Sarthak) and the AI assistant, during which several changes were made to a personal portfolio website. It is intended to be understandable by both humans and other AI models picking up this project.

---

## Project Details

| Property | Value |
|---|---|
| **Project Type** | Static Personal Portfolio Website |
| **Tech Stack** | HTML, CSS (Vanilla), JavaScript |
| **Location** | `c:\Users\sarthak\AI & ML\PORTFOLIO\portfolio-website\` |
| **Key Files** | `index.html`, `style.css`, `script.js`, `resume.pdf` |

---

## Codebase Structure (at session start)

```
portfolio-website/
├── index.html       # Main HTML structure (151 lines)
├── style.css        # All styles (383 lines initially)
├── script.js        # Contact form handler (23 lines)
├── resume.pdf       # Added during session
└── README.md
```

### Sections in index.html
1. **Nav** – Sticky top navbar with logo and links: About, Featured Projects, Experience, Contact
2. **Hero** – Tagline h1, sub-paragraph, and two CTA buttons
3. **Featured Projects** – Grid of 3 project cards (Handwritten Digit Recognition, Student Placement Predictor, Customer Churn Prediction)
4. **Experience & Education** – Timeline-style layout with internship + upskilling entries
5. **About Me** – Two paragraphs of bio + a "Technical Arsenal" skill tags section
6. **Contact** – Contact form with name, email, message fields
7. **Footer** – Social links (Email, GitHub, LinkedIn)

---

## User Preferences Established

- **Strict preference for vanilla HTML, CSS, and JS** — no frameworks.
- **Form submission backend**: To be decided later. Options discussed include Formspree, EmailJS, or a simple serverless function.
- **Resume download filename**: User preferred `Resume.pdf` (not `Sarthak_Resume.pdf`).

---

## Changes Made (Chronological)

### 1. ✅ Resume Download Button — Functional Fix
**Files:** `index.html`

**Problem:** The existing `<a href="resume.pdf">` had `target="_blank"` (opens in new tab) instead of a proper download trigger.

**Fix:** Replaced `target="_blank"` with `download="Resume.pdf"` attribute so browsers trigger a file download instead of opening the PDF.

```diff
- <a href="resume.pdf" class="btn secondary-btn" target="_blank">Download Resume</a>
+ <a href="resume.pdf" class="btn secondary-btn" download="Resume.pdf">Download Resume</a>
```

> **Note:** User also renamed the download value from `Sarthak_Resume.pdf` to `Resume.pdf` via an inline comment on the diff.

---

### 2. ✅ Resume PDF Added to Project
**Files:** `resume.pdf` (added manually by user)

User physically placed their resume PDF in the project folder at:
`c:\Users\sarthak\AI & ML\PORTFOLIO\portfolio-website\resume.pdf`

The `href="resume.pdf"` in `index.html` already pointed to this correct path, so no HTML change was needed — just confirming the file exists.

---

### 3. ✅ "Download Resume" Button — Premium Upgrade
**Files:** `index.html`, `style.css`

**What Changed:**
- Removed the plain `.secondary-btn` class entirely.
- Created a new `.resume-btn` CSS class with a **glassmorphism** design.
- Added an **SVG download arrow icon** inside the button.
- Added a **shimmer/swipe animation** on hover using `::before` pseudo-element.
- The icon has a subtle **bounce effect** on hover.
- The button lifts up (`translateY(-3px)`) with a shadow glow on hover.

**Key CSS Properties Used:**
- `backdrop-filter: blur(10px)` — glass blur effect
- `background: rgba(255,255,255,0.1)` — semi-transparent background
- `overflow: hidden` + `::before` linear-gradient — shimmer sweep
- `transition` on multiple properties for smooth animation

---

### 4. ✅ "View Projects" Button — Matched to Resume Button Style
**Files:** `index.html`, `style.css`

**What Changed:**
- The `.resume-btn` class was renamed to `.glass-btn` to be reusable.
- The "View Projects" button was updated from `.primary-btn` to `.glass-btn`.
- An **SVG eye icon** was added inside the "View Projects" button (matching the icon style of the Download Resume button).
- Both buttons now share identical glassmorphic styling, hover animations, and icon layout.

**Result:** Both hero CTA buttons are now visually consistent — modern, glassy, and animated.

---

### 5. ✅ Hero Tagline Paragraph & About Section Paragraphs — Readability Fix
**Files:** `style.css`

**Problem:** The sub-tagline text in the hero section and the two bio paragraphs in the "About Me" section used dark/muted text colors (`#666`, `#555`) which became illegible when the animated gradient background cycled to darker shades.

**Fix:** Applied a **glassmorphism card style** to both `.hero-content p` and `.about-text p`:
- Changed text color to `#ffffff` (white) — always readable on any background.
- Added `background: rgba(255,255,255,0.15)` — frosted glass backing.
- Added `backdrop-filter: blur(10px)` — glass blur.
- Added a subtle `border`, `border-radius`, and `box-shadow` for depth.
- Added `line-height: 1.6` for improved readability.

```diff
# .hero-content p
- color: #666;
- margin-bottom: 30px;
+ color: #ffffff;
+ background: rgba(255, 255, 255, 0.15);
+ backdrop-filter: blur(10px);
+ padding: 15px 25px;
+ border-radius: 8px;
+ border: 1px solid rgba(255, 255, 255, 0.2);
+ box-shadow: 0 4px 15px rgba(0,0,0,0.1);

# .about-text p
- color: #555;
- font-size: 1.1rem;
+ color: #ffffff;
+ background: rgba(255, 255, 255, 0.15);
+ (same glass card styles as above)
```

---

## Current State of the Website

| Element | Status |
|---|---|
| Resume & Projects buttons | ✅ Premium glassmorphic design + Icons |
| Hero & About paragraphs | ✅ Always-readable glass card styling |
| Project Live Demos | ✅ Video modal popup implemented for all 3 projects |
| Experience section | ✅ Text visibility on white background fixed |
| Contact form | ⏳ Frontend-only (no backend yet) |
| LinkedIn link | ✅ Fixed line break in URL |

---

## Pending / Known Issues

1. **Contact Form Backend**: The form currently shows a browser `alert()` on submit. A real submission handler (e.g. Formspree or EmailJS) needs to be integrated.

---

## What to Do Next (Suggestions)

- Integrate a form submission service (Formspree recommended — free, no backend needed)
- Consider adding a profile photo to the About section
- Add a Skills section with progress indicators or icons
