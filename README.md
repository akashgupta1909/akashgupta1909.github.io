# akash.dev — portfolio

Personal portfolio of Akash Gupta, Staff Software Engineer. Built with React + Vite and Framer Motion, implemented from a Figma design.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Structure

```
index.html            Vite entry + fonts + meta
src/
  main.jsx            React root
  App.jsx             page composition
  index.css           design tokens + all styles
  data.js             all copy/content (edit here to update the site)
  hooks/useReveal.js  IntersectionObserver scroll-reveal
  components/         Nav, Hero, About, Projects, Architecture,
                      Experience, Fun, Contact, CustomCursor, MagneticButton
public/resume.pdf     résumé (linked from the nav)
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes `dist/` to GitHub Pages. Enable it once under **Settings → Pages →
Build and deployment → Source: GitHub Actions**.

## Animations

Implemented per the design's motion spec: staggered hero entrance, terminal
typewriter, scroll reveals, magnetic CTAs, sticky-nav morph, project-card hover,
animated hero backdrop, and a custom cursor — all `prefers-reduced-motion` aware.
