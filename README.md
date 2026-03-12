# Global Techno — Company Profile Website

**Next.js 14 + TailwindCSS** · Light theme · Deep red accent · Splash screen · Scroll animations · Full multi-page

## Quick Start

```bash
npm install
npm run dev   # → http://localhost:3000
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home (splash, hero, services, work, process, CTA) |
| `/services` | All 6 services with image slots |
| `/portfolio` | All 11 projects with filter tabs |
| `/about` | Team, values, timeline, tech stack |
| `/contact` | Contact form + sidebar info |

---

## 📁 Add Your Images

All images go into `/public/assets/`. Just drop the files — no code changes needed.

### Services (`/public/assets/services/`)
```
ux-ui-design.png
custom-software.png
mobile-app.png
web-development.png
qa-testing.png
consulting.png
```

### Portfolio (`/public/assets/portfolio/`)
```
smart-hotel-web.png       ← Smart Hotel System web app
smart-hotel-mobile.png    ← Smart Hotel mobile app
telkomsel-poin.png        ← Telkomsel Poin app
telkomsel-mnv.png         ← Telkomsel MNV CMS
bale-btn.png              ← Bale by BTN
xpedius.png               ← Xpedius medical CMS
cerdas-learning.png       ← Cerdas Learning System
dkt-ehealth.png           ← DKT E-Health
histore.png               ← HiStore e-commerce
jingga-survey.png         ← Jingga Teknologi Survey
geeknesia.png             ← Geeknesia IoT platform
```

### Team & About (`/public/assets/team/` & `/public/assets/about/`)
```
assets/about/office.png   ← Office photo (used in About + Contact)
assets/team/member-1.png  ← CEO
assets/team/member-2.png  ← CTO
assets/team/member-3.png  ← Head of Design
assets/team/member-4.png  ← Lead Mobile Dev
```

> **Tip:** Images are shown with `object-fit: cover`. Recommended sizes:
> - Portfolio: 800×500px (landscape)
> - Services: 600×400px (landscape)
> - Team: 400×400px (square)
> - Office: 1200×600px (wide)

---

## Production Build

```bash
npm run build
npm start
```

## Features
- Splash screen animation (2.8s)
- Scroll-triggered reveal animations (all sections)
- Sticky navbar with services dropdown
- Client marquee strip
- Portfolio filter by category
- Full contact form with validation
- WhatsApp quick link
- Fully responsive (mobile + tablet + desktop)
- Image placeholders shown until real images are added
