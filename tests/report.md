# IDF — QA Test Report

> Updated by QA after every test cycle. Each cycle gets a new entry — oldest entries stay for reference.
> Pass/fail is the final signal. Issues route to Researcher (content) or Fullstack Dev (technical).

---

## Cycle Log

| Cycle | Date | Intent | Result | Notes |
|---|---|---|---|---|
| — | — | — | — | Initial setup — no tests run yet |

---

## Test Checklist (run each cycle)

### Visual / Rendering
- [ ] All pages render correctly on desktop (1280px+)
- [ ] All pages render correctly on mobile (375px)
- [ ] No broken layouts or overflow issues
- [ ] CSS variables used throughout — no hardcoded colors

### Navigation
- [ ] `nav.js` loads and sticky nav displays correctly on all pages
- [ ] All nav links resolve correctly
- [ ] Version badge displays correct version

### Content
- [ ] No placeholder or TODO text visible
- [ ] No broken internal links
- [ ] External links open in new tab with rel="noopener"

### Analytics
- [ ] GA4 tag (G-MV9XNW7Y6V) present in `<head>` of all active pages

### Performance
- [ ] Pages load without console errors
- [ ] No missing font or asset 404s

### Accessibility
- [ ] Heading hierarchy is logical (h1 → h2 → h3)
- [ ] Links have descriptive text (no bare URLs as link text)

---

## Issue Log

| ID | Cycle | Type | Description | Routed to | Status |
|---|---|---|---|---|---|
| — | — | — | — | — | — |
