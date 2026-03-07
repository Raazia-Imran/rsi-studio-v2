
# 🚀 RSI Studio V2

> **Enterprise-grade Digital Architecture & High-End UX/UI Ecosystem**

RSI Studio V2 is the flagship digital presence for the RSI brand. Engineered as a high-ticket agency platform, it enforces strict Software Requirements Specification (SRS) compliance to deliver a premium, urgency-free, and mathematically precise user experience. 

This repository abandons traditional grid layouts and templated design in favor of custom SVG engineering, Framer Motion physics, and advanced React 19 / Next.js 16 architectures.

---

## 📑 Table of Contents
1. [Tech Stack & Engine](#-tech-stack--engine)
2. [Core System Architecture](#-core-system-architecture)
3. [Feature Deep-Dive & SRS Compliance](#-feature-deep-dive--srs-compliance)
4. [Routing & Directory Structure](#-routing--directory-structure)
5. [Local Development](#-local-development)
6. [Team Git Workflow](#-team-git-workflow)
7. [Brand & UI Guidelines](#-brand--ui-guidelines)

---

## 🛠️ Tech Stack & Engine

Built on the bleeding edge of modern web development to ensure zero-latency routing and cinematic rendering.

* **Framework:** [Next.js 16.1.6](https://nextjs.org/) (App Router)
* **Library:** [React 19.2.3](https://react.dev/)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (Utility-first, CSS variable driven)
* **Animation Physics:** [Framer Motion v12.31.1](https://www.framer.com/motion/) (Hardware-accelerated inertia and orchestrations)
* **Smooth Scrolling:** [`@studio-freight/lenis`](https://github.com/darkroomengineering/lenis) (Custom easing curves for page scroll)
* **Infinite Reels:** `react-fast-marquee` (Used for seamless, unbreaking horizontal loops)
* **Iconography:** `lucide-react` (Consistent, clean stroke icons)
* **Language:** TypeScript v5 (Strict type safety across all components)

---

## 🏛️ Core System Architecture

### 1. Dual-Layer Navigation System (`FloatingNav.tsx`)
To prevent UI viewport clutter and maximize the immersive background elements, navigation is strictly divided into two tiers:
* **Primary Nav (The Dock):** A floating bottom pill utilizing `backdrop-blur-3xl`. It strictly houses core conversion routes: *Home, Testimonials, Pricing, and the Ecosystem CTA.*
* **Secondary Nav (The Drawer):** A cinematic right-side off-canvas slide-out menu that houses the remaining 9 extended routes. Uses staggered Framer Motion fade-ins and a dark backdrop-blur overlay to maintain user context.

### 2. Dual-Theme Crossover Engine (`/team`)
The Team architecture seamlessly blends two distinct corporate identities into a single scrolling experience:
* **RSI ONE Aesthetic:** Beige (`#E5D9C5`), Black, and White.
* **RSI Studio Aesthetic:** Coral Pink (`#FF6B6B`), Black, and Deep Charcoal.
* **Logic:** Stylistic rules are strictly mapped to 5 distinct department tiers (Founders, Backend, Frontend, Management, Sales) representing all 17 team members.

---

## 🔍 Feature Deep-Dive & SRS Compliance

### The "OG Puzzle" Testimonial Reel
We engineered a true mathematical masonry sliding block puzzle.
* **Logic:** Instead of standard grids, we utilize variable widths/heights (`small`, `medium`, `large`) paired with flexbox `items-center`. As the two opposite-moving reels slide past each other, the varying heights naturally interlock without breaking layout.
* **Data Compliance:** Strictly features 12 hardcoded reviews exactly as dictated by the SRS (Six 5-stars, Four 4-stars, One 3-star, One 1-star "Waitlist flex").
* **Viewport Restraint:** Container widths are mathematically calculated so that exactly ~8 geometric cards are visible on standard 1080p/4k displays at any given time.

### Transparent Pricing & Connected Node UI
* **Clean Authority:** Utilizes a "Design Monks" inspired layout. Clean pricing tiers ($2,000, $5,000, $10,000) with absolutely zero urgency language or discount tags.
* **Node Architecture:** The "$500/Month Managed Presence" is visualized as a central hub connected to sub-features via a custom-engineered SVG network. Uses `strokeDasharray` animations to simulate packets of data flowing through glowing coral pink wires.
* **Light-Speed Warp:** The Ecosystem CTA triggers a 120-beam randomized mathematical star-warp animation that overtakes the screen before routing.

### The RSI Library (`/blogs`)
A from-scratch, white-dominant knowledge base replacing standard blog templates.
* **SVG Engineering:** Features a bespoke, zero-dependency 3-part SVG hero section (Bookshelf / Center Node / 2D Aerospace schematic).
* **Structure:** Separates "Published Articles" from "Ongoing Internal Research", complete with pulsing indicator lights and an internal Staff Portal Gateway.

---

## 📂 Routing & Directory Structure

All 13 primary application routes are fully mapped and accessible via the dual-layer navigation system:

```text
src/app/
├── (Main Pill Nav)
│   ├── page.tsx                 # Home
│   ├── pricing/page.tsx         # Pricing & Node System
│   ├── testimonials/page.tsx    # Proof of Concept & Puzzle Reel
│   └── ecosystem/page.tsx       # Start Project CTA / Portal
│
├── (Off-Canvas Drawer Nav)
│   ├── services/page.tsx
│   ├── work/page.tsx            # Portfolio
│   ├── industries/page.tsx
│   ├── team/page.tsx            # Dual-Theme Crossover
│   ├── blogs/page.tsx           # RSI Library
│   ├── rs-international/page.tsx
│   ├── partner/page.tsx
│   ├── contact-ceo/page.tsx
│   └── complains/page.tsx       # Complaints / Resolution
````

---

## 💻 Local Development

1. **Clone the repository:**

```bash
git clone https://github.com/Raazia-Imran/rsi-studio-v2.git
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the development server:**

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌿 Team Git Workflow

To maintain the integrity of the core architecture and prevent merge conflicts, all developers **must** adhere to the following workflow:

**Rule 1: Never push directly to `main`.**

**Creating Features:**

```bash
git checkout -b feature/your-feature-name
# Make your changes
git add .
git commit -m "feat(section): description of work"
git push origin feature/your-feature-name
```

*Open a Pull Request on GitHub. Only Lead Developers may merge PRs into `main`.*

**Syncing your Local Environment (Without losing your Work-in-Progress):**

```bash
git stash                  # Temporarily saves your uncommitted work
git checkout main          # Switch to main branch
git pull origin main       # Download the latest architectural updates
git checkout your-branch   # Go back to your feature branch
git merge main             # Merge the new updates into your branch
git stash pop              # Apply your saved uncommitted work back on top
```

---

## 🎨 Brand & UI Guidelines

All new UI components must strictly adhere to these design tokens:

* **Primary Accent:** Coral Pink (`#FF6B6B`) - Used for highlights, active states, and glowing node lines.

* **Secondary Accent:** RSI ONE Beige (`#E5D9C5`) - Used exclusively for the crossover Team page and upper management sections.

* **Backgrounds:**

  * Pure Black (`#000000`) for vast negative space.
  * Deep Studio Charcoal (`#050505` / `#0A0A0F`) for elevated cards and section breaks.

* **Typography:**

  * Headers/Display: `font-display` (tracking-tighter)
  * Eyebrows/Data: `font-mono` (uppercase, tracking-widest, text-[10px] to text-[12px])

---

*Engineered with precision for RSI.*

```



Do you want me to do that next?
```
