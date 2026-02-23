# SarkinMota 🏎️✨

**SarkinMota** is an ultra-premium, Awwwards-level web experience designed for an elite automotive concierge service. The application curates and showcases the world's most exclusive performance machines and limited-production hypercars. 

It aims to provide a "Jesko Jets" level of digital luxury and discretion for high-net-worth clients, featuring immersive interactive elements, cinematic scroll effects, and an AI-powered personal vehicle finder.

## ✨ Key Features & Highlights

*   **Cinematic "Jesko Jets" Aesthetic**: A meticulously crafted dark theme utilizing true black (`#000000`/`#020202`), high-contrast typography, and refined gold accents (`#C7A43D`).
*   **Awwwards-Level Interactions**:
    *   **Sticky Horizontal Scroll**: The *Why SarkinMota* section locks to the viewport and translates vertical scrolling into a smooth, horizontal tracking shot across massive philosophy panels.
    *   **Immersive Global Presence**: A vertical city-ticker overlays a background globe video, anchored by deep-parallax "AFRICA" background typography.
    *   **Magnetic Elements**: Custom `MagneticLink` and cursor-following micro-interactions offer a tactile, engineered feel to navigation and footers.
    *   **Elevated Light-Theme Testimonials**: Air-light cards with precision drop-shadows that lift upon hover, demonstrating a sophisticated contrast alongside the dark sections.
*   **AI Auto Concierge (OpenRouter Integration)**: A bespoke "Personal Finder" chat interface powered by an advanced LLM. It features a technical, cockpit-style UI that provides real-time, context-aware vehicle recommendations, diagnosing user needs through a conversational interface (streamed via the Vercel AI SDK).
*   **Dynamic Inventory System**: High-quality vehicle displays complete with color swatches, 300-point inspection guarantees, and in-depth performance specifications.

## 🛠️ Technology Stack

*   **Framework**: [Next.js 14](https://nextjs.org/) (App Router, React Server Components)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom extended themes and granular animation utilities.
*   **Animation**: [Framer Motion](https://www.framer.com/motion/) (Scroll-linked animations, parallax strings, magnetic hovers).
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **AI Integration**: Vercel AI SDK + OpenRouter

## 🚀 Getting Started

To run the SarkinMota development environment locally:

### 1. Clone the repository
```bash
git clone https://github.com/your-username/sarkinmota.git
cd sarkinmota
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env.local` file in the root directory and add your OpenRouter API key for the AI Concierge functionality:
```env
OPENROUTER_API_KEY=your_openrouter_api_key_here
```

### 4. Start the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the live result.

## 📂 Project Architecture

*   `src/app/`: Next.js App Router endpoints, global layouts, and unified pages.
*   `src/components/home/`: The core modular sections of the homepage (Hero, AI Concierge, Testimonials, Global Presence, Why SarkinMota).
*   `src/components/layout/`: Shared structural components like the dynamic HUD Navigation and the architectural Footer.
*   `src/data/`: Static assets and JSON stores (e.g., `inventory.json`) used to populate the premium garage.
*   `public/`: Static videos, custom fonts (`bauserif`), and placeholder imagery.

---
*Designed & engineered for unparalleled excellence. SarkinMota — We don't sell cars. We curate power.*
