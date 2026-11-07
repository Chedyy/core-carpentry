# Observation ledger — https://core-carpentry.com/ → `/`

Viewports: desktop 1280x900, phone 390x844 (touch). Scroll container: window. Source evidence in `source/`, preview evidence in `preview/`, side-by-side in `compare/`. Raw source DOM for menus/popups/reviews/form in `source/collected.json`; control results in `preview/*_controls.json`.

| # | Control | Layout | Trigger | Expected (source) | Preview result | Status | Evidence |
|---|---------|--------|---------|-------------------|----------------|--------|----------|
| 1 | Header nav links | desktop | click "Projects" | jumps to `#projects`, URL keeps `#projects` | `localhost:8080/#projects`, section top 0 | pass | preview/desktop_controls.json |
| 2 | Header on scroll | both | scroll past ~640px | adds dark blurred bg, `py-3` | same classes | pass | compare/*_scroll_02.jpg |
| 3 | Phone menu open | phone | tap "Open menu" | full-screen dark overlay, 6 links + "Get a Free Quote" | same contents | pass | source/phone_menu_open.png, preview/phone_menu_open.png |
| 4 | Phone menu link | phone | tap "Services" | menu closes, jumps to `#services` | closes, `#services`, top 0, scroll unlocked | pass | preview/phone_menu_link.png |
| 5 | Phone menu close | phone | Close button / Escape | menu closes | closes, focus back on menu button | pass | preview/phone_controls.json |
| 6 | Hero CTAs | both | "Get a Free Quote" / "View Our Work" | `#contact` / `#projects` | same hrefs | pass | — |
| 7 | Project filters | both | tap "Custom Builds" | shows 2 projects; "All" shows 6 | same | pass | preview/*_tab5.png |
| 8 | Project popup | both | tap a project card | popup with image, category, title, description, scope, materials, duration | same contents for all 6 projects | pass | preview/*_card_open.png, preview/phone_card_open_after.png |
| 9 | Project popup close | both | Close button / backdrop | closes (source ignores Escape) | Close, backdrop and Escape all close | pass | preview/*_controls.json |
| 10 | Reviews slider | both | Next / Previous / dots | switches between 4 reviews | same; phone copy was invisible before repair | pass | preview/*_review.png |
| 11 | Reviews autoplay | both | wait ~7s | advances | advances every 6s | pass | preview/*_controls.json |
| 12 | Form project type | both | tap a type | single highlighted choice | same | pass | preview/*_form.png |
| 13 | Form progress bar | both | fill fields | 20% per completed field (name, phone, email, type, details) | same | pass | preview/*_controls.json |
| 14 | Form submit | both | "Send Build Request" | not observed (no submission made) | blocked from leaving the page; sends nothing | blocked | — |
| 15 | Custom crosshair cursor | desktop | move mouse / hover links | follows pointer, grows on links | same | pass | preview/desktop_controls.json |
| 16 | Hero spotlight + parallax | desktop | move mouse / scroll | gradient follows mouse; image and text drift and fade on scroll | same formulas | pass | preview/desktop_controls.json |
| 17 | Process timeline line | both | scroll through "How we build" | gold line grows with scroll | same | pass | preview/*_process.png |
| 18 | Final CTA image parallax | both | scroll | image drifts -15% → 15% | same | pass | — |

## Not reproduced
- Source opening loading screen ("CORE CARPENTRY — Built on Craftsmanship"): omitted; the page opens straight on the hero.
- Fade/slide-in reveal of sections while scrolling: content is shown settled (always visible).
- Footer "#" links match the source placeholders.

## Asset mapping
All 6 project images, hero, CTA and consultation images, and fonts are in `public/site-assets/` (20/20 downloaded at capture).
