# Palestra Fitness Studio — React (JSX)

The design handoff (static HTML/inline-CSS prototypes) rebuilt as a **Vite + React** app using JSX components, `react-router-dom` for the 4 pages, real CSS classes for interactions/animation, and React state/hooks for the mobile menu and booking form.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build

## Structure

public/assets/          logo.jpeg, gym-interior.jpeg (user-supplied images)
src/
  main.jsx              app entry + BrowserRouter
  App.jsx               routes + scroll/anchor manager
  index.css             design tokens + .reveal/.marquee/.nav/.card-hover/.svc-row
  data.js               all site copy (nav, marquee, services, plans, form options)
  components/
    Header.jsx          logo, nav (active state), Book-Trial CTA, hamburger (useState)
    Footer.jsx          `variant="full"` (Home 4-col) | `variant="compact"` (inner pages)
    Marquee.jsx         CSS-animated ticker (list duplicated for seamless loop)
    ServiceRow.jsx      numbered 01–04 hover row -> /services
    StatBlock.jsx       big Bebas number + label (lg / sm)
    PricingCard.jsx     plan card, `variant="teaser"` (Home) | `"detail"` (Services)
    BookingForm.jsx     controlled form -> opens WhatsApp deep link
    RevealOnScroll.jsx  IntersectionObserver fade/slide-in (with 3s fallback)
    ui.jsx              Eyebrow, ButtonFilled/Outline, PageHeader, CtaBanner
    Icons.jsx           inline stroke SVGs (no icon-library dependency)
  pages/
    Home.jsx  About.jsx  Services.jsx  Contact.jsx

## Notes on the conversion

- Routing uses `react-router-dom`. The old `.dc.html` links map to `/`, `/about`,
  `/services`, `/contact`; the Home pricing CTAs point to `/services#pricing` and the
  `ScrollManager` in `App.jsx` handles the anchor jump.
- Layout values are kept as inline `style` objects so the result stays pixel-close to the
  high-fidelity spec; everything that *can't* be inline (`:hover`, `@keyframes`, media
  queries, `:focus`) lives in `index.css` as classes. If you'd prefer a full Tailwind or
  CSS-Modules migration, the token names in `index.css` make that a mechanical swap.
- The Contact "map" placeholder is now a live Google Maps `<iframe>` — swap the query for
  the exact address/pin when you have it.
- Service/coach photos are Pexels placeholders (URLs in `data.js` / the pages); replace
  with real Palestra photography before launch.
