import type { Metadata } from "next";
import ProjectsClient from "@/components/ProjectsClient";

const title = "Projects";
const description =
  "Things I've built and things I'm building: Hackyard, Jev Board, Ephpha, WhatColor, DemoBro, Huncho, Pluit, Noxservo, and Rain on Glass.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: `${title} — Hixon.Studio`,
    description,
    url: "/projects",
    type: "website",
  },
  twitter: { title: `${title} — Hixon.Studio`, description },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
