# # Aether | Premium Portfolio & Agency Template

**Aether** is a high-performance, dual-mode (Dark/Light) portfolio template crafted by **Zero Bloat UI**. It combines cinematic glassmorphism aesthetics with physics-based interactions, powered by a lightweight stack of Tailwind CSS and Alpine.js.

**"Built for speed. Designed for impact."**

## ## Key Features

### ### Immersive Visuals

* **Dual-Tone Mesh Gradients:** Ambient background blobs (Purple, Indigo, Pink) that adapt opacity based on the active theme (Dark/Light) and screen size.
* **Adaptive Glassmorphism:** A sophisticated frosted glass effect that changes density and border opacity depending on the lighting mode.
* **Cinematic Reveals:** Intersection Observer-powered scroll animations that cascade elements into view with precision timing.

### ### Zero Bloat Architecture

* **Vanilla Stack:** Built with semantic HTML5, Tailwind CSS (via CDN or config), and optimized Vanilla JavaScript.
* **Lightweight Reactivity:** Uses **Alpine.js** for handling state (Mobile Menu, Portfolio Filtering, Form Validation) without the overhead of a virtual DOM.
* **No Build Step Required:** Ready to deploy immediately. No Webpack, Vite, or Node.js required for the static version.

### ### Advanced Interactivity

* **3D Tilt Physics:** Interactive cards that respond to mouse movement with a parallax depth effect.
* **Real-Time Filtering:** Instant project sorting in the Portfolio section using Alpine.js logic.
* **Haptic Form Validation:** The Contact form features real-time input checking with "Shake" physics and immediate visual feedback.
* **Smart Navigation:** Auto-detects the active page to highlight menu items and handles sticky headers intelligently.

## ## Project Structure

Aether includes a complete suite of pages for a professional presence:

* `index.html` - Landing page with Hero, Featured Work, and Values.
* `portfolio.html` - Filterable grid of all case studies.
* `project-detail.html` - Immersive case study layout with sticky meta-data.
* `about.html` - Biography, Experience Timeline, and Tech Stack.
* `blog.html` - Editorial layout for writing and thoughts.
* `contact.html` - Contact form with validation and FAQ accordion.
* `style-guide.html` - Utility page for design tokens (Colors, Type, Components).
* `404.html` - Interactive error page.

## ## Quick Start

### ### Option 1: Direct Usage

This template is pre-configured with the Tailwind CSS CDN script for instant deployment.

1.  Clone the repository.
2.  Open `index.html` in your browser.
3.  That's it!

### ### Option 2: Production Integration

To integrate this into a modern web project (React, Vue, Laravel, etc.):

1.  Copy the `tailwind.config` object from `assets/js/tailwind.config.js` into your project's `tailwind.config.js`.
2.  Ensure **Alpine.js** is installed or included via CDN.
3.  Migrate the logic from `assets/js/main.js` into your component lifecycle hooks (e.g., `useEffect` or `onMounted`).

## ## Customization

### ### Changing the Color Scheme

**Aether** uses a **Violet/Indigo** primary palette. To change the brand color globally, open `assets/js/tailwind.config.js` and modify the `accent` color definition:

```javascript
colors: {
    accent: 'rgb(your-r your-g your-b / <alpha-value>)', //Supports alpha transparency
    // ... other colors
},

```

### ### Modifying Content & Logic

* **Navigation Links:** Edit the HTML in `index.html` (the Desktop and Mobile menus are standardized).
* **Portfolio Data:** The filtering logic is handled via Alpine's `x-show` attributes in `portfolio.html`.
* **Form Logic:** Validation rules are defined inside the Alpine `x-data` object within `contact.html`.

## ## Browser Support

Aether utilizes modern CSS features like `backdrop-filter`, `mix-blend-mode`, `grid`, and `sticky` positioning.

Browser     Support
**Chrome**  Latest
**Firefox** Latest
**Safari**  Latest
**Edge**    Latest


**© 2026 Zero Bloat UI.** Built for speed. Designed for light.
