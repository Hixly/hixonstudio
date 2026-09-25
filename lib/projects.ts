export type Project = {
  name: string;
  domain: string;
  url: string;
  description: string;
  tags: string[];
  status: "live" | "in-progress";
  logo?: string; // custom logo path in /public, overrides favicon
};

export const projects: Project[] = [
  {
    name: "Hackyard",
    domain: "hackyard.tech",
    url: "https://hackyard.tech",
    logo: "/logos/hackyard.png",
    description:
      "Small, capped AI hackathons where builders get one theme and one weekend to ship something real with any open-source model they choose.",
    tags: ["Next.js", "Supabase", "Vercel"],
    status: "live",
  },
  {
    name: "Jev Board",
    domain: "jevboard.dev",
    url: "https://www.jevboard.dev",
    logo: "/logos/jevboard.png",
    description:
      "A talking board where Ghost Jev picks every word. Ask a question and a decision model, not a chatbot, chooses the reply while the planchette spells it out.",
    tags: ["Next.js", "TypeSafe", "Railway"],
    status: "live",
  },
  {
    name: "Ephpha",
    domain: "ephpha.ai",
    url: "https://ephpha.ai",
    logo: "/logos/ephpha.png",
    description:
      "An AI email assistant that helps you write better emails, craft subject lines that get opened, and know exactly when to hit send.",
    tags: ["React", "OpenAI", "Chrome Extension"],
    status: "live",
  },
  {
    name: "WhatColor",
    domain: "what-color.com",
    url: "https://what-color.com",
    logo: "/logos/whatcolor.png",
    description:
      "A color identification tool built for the colorblind. Point your camera at anything and instantly know what color it is.",
    tags: ["React", "Vite", "Camera"],
    status: "live",
  },
  {
    name: "DemoBro",
    domain: "demobro.video",
    url: "https://www.demobro.video",
    logo: "/logos/demobro.png",
    description:
      "An AI demo-video maker that turns a live app and its GitHub repo into a polished product walkthrough. No manual screen recording required.",
    tags: ["Next.js", "AI", "Playwright"],
    status: "live",
  },
  {
    name: "Huncho",
    domain: "github.com/Hixly/huncho",
    url: "https://github.com/Hixly/huncho/releases/latest",
    logo: "/logos/huncho.png",
    description:
      "A hands-free AI assistant for Windows that drives your browser by voice. Say what you want and it navigates, clicks, types, and reads pages back to you.",
    tags: ["Electron", "Gemini", "Voice"],
    status: "live",
  },
  {
    name: "Pluit",
    domain: "pluit.cloud",
    url: "https://pluit.cloud",
    logo: "/logos/pluit.png",
    description:
      "Cloud storage with a clean, opinionated interface I actually want to use every day.",
    tags: ["Next.js", "Supabase", "Storage"],
    status: "in-progress",
  },
  {
    name: "Noxservo",
    domain: "noxservo.com",
    url: "https://noxservo.com",
    logo: "/logos/noxservo.png",
    description:
      "A simple search engine built around saving energy. Dark by design, like the nostalgic Blackle, but made for today.",
    tags: ["React", "Vite", "Tailwind"],
    status: "in-progress",
  },
  {
    name: "Rain on Glass",
    domain: "rain-on-glass-production.up.railway.app",
    url: "https://rain-on-glass-production.up.railway.app",
    logo: "/logos/rain-on-glass.svg",
    description:
      "An interactive rainy window at night. Wipe the fogged glass and watch it steam back up. Built with Claude Opus 5.5.",
    tags: ["WebGL", "Shaders", "Creative Coding"],
    status: "live",
  },
];
