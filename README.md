# hixon.studio

> My personal site: projects, notes, and experiments.

[![Live at hixon.studio](https://img.shields.io/badge/live-hixon.studio-0b0b0f?style=flat-square)](https://hixon.studio)
![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_4-0F172A?style=flat-square&logo=tailwindcss&logoColor=38BDF8)
![GSAP](https://img.shields.io/badge/GSAP-0AE448?style=flat-square&logo=greensock&logoColor=black)
[![MIT License](https://img.shields.io/badge/code-MIT-lightgrey?style=flat-square)](LICENSE)

![hixon.studio landing](.github/screenshot.png)

The home for everything I build. Portfolio, project log, blog, and the place I send people when they ask "what are you working on?"

## Pages

| Route | What's there |
|-------|--------------|
| `/` | Landing, with the animated wordmark |
| `/projects` | Everything I've shipped, with write-ups |
| `/blog` | Notes and essays, written in MDX |
| `/about` | Who I am |
| `/contact` | A form that actually reaches me |

## Built with

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS 4**
- **GSAP** for scroll and entrance animation
- **MDX** (`next-mdx-remote` + `gray-matter`) for blog content
- **Resend** for contact form email
- Type: Fraunces, EB Garamond, Orbitron, Syncopate
- **Jest** + Testing Library
- Deployed on **Vercel**

## Run locally

```bash
git clone https://github.com/Hixly/hixonstudio.git
cd hixonstudio
npm install
npm run dev     # http://localhost:3000
```

```bash
npm run build   # production build
npm test        # Jest + Testing Library
```

The contact form needs `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` in `.env.local`.

## License

The code is [MIT](LICENSE). Blog posts, project write-ups and images are © Hixon and not covered by the license.
