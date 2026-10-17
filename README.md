# Mayank Agrawal — Portfolio

Personal portfolio of **Mayank Agrawal**, a backend-focused software engineer building production REST APIs, distributed event-driven systems, and AI retrieval platforms in Go and TypeScript.

An interactive, scroll-driven site with a 3D character, a physics-based tech stack, and animated sections for About, Career, Work, and Contact.

---

## Sections

- **Landing** — animated intro with a 3D character that follows the cursor
- **About** — short summary
- **What I Do** — Backend and Infra skill cards
- **Career** — scroll-animated timeline: Conekt, Microcks CLI (CNCF), WiredLeap, Taqtona AI
- **Work** — horizontal-scroll project showcase: Kronos, nmemo, Heatgit, Microcks CLI
- **Tech Stack** — interactive 3D physics spheres
- **Contact** — email, phone, and social links

---

## Tech Stack

React • TypeScript • Vite • GSAP • Three.js • React Three Fiber • Rapier • HTML • CSS

---

## Run Locally

Requires Node.js 18+.

```bash
git clone https://github.com/hazelmayank/mayank-portfolio.git
cd mayank-portfolio
npm install
npm run dev
```

Open http://localhost:5173.

Other scripts:

```bash
npm run build     # type-check and production build
npm run preview   # preview the production build
npm run lint      # lint the codebase
```

---

## Customizing Content

| What | Where |
| --- | --- |
| Name and roles on the landing page | `src/components/Landing.tsx` |
| About text | `src/components/About.tsx` |
| Career timeline | `src/components/Career.tsx` |
| Skill cards | `src/components/WhatIDo.tsx` |
| Projects (name, tools, link, image) | `src/components/Work.tsx` |
| Project cover images | `public/images/proj-*.webp` |
| Tech stack spheres | `src/components/TechStack.tsx`, `public/images/` |
| Contact and social links | `src/components/Contact.tsx`, `src/components/SocialIcons.tsx` |
| Resume PDF | `public/Mayank_Agrawal_Resume.pdf` |

---

## Notes

- Animations use [GSAP](https://gsap.com) (including ScrollSmoother and SplitText), which is free for all use since GSAP 3.13.
- Built from the open-source portfolio template by **Moncy Yohannan** ([MoncyDev/Portfolio-Website](https://github.com/MoncyDev/Portfolio-Website)). Content, project covers, and customizations are my own. The original template's license terms and the restrictions on its 3D avatar still apply; see [LICENSE](LICENSE).

---

## Contact

- Email: mayankjeefinal@gmail.com
- GitHub: [hazelmayank](https://github.com/hazelmayank)
- LinkedIn: [mayank-agrawal-202300323](https://linkedin.com/in/mayank-agrawal-202300323)
- Codeforces: [mayankcpcoder](https://codeforces.com/profile/mayankcpcoder)
