import type { Metadata } from "next";
import Landing from "@/components/cardiacpath/Landing";
import { DISCLOSURE } from "@/lib/cardiacpath";

export const metadata: Metadata = {
  title: { absolute: "CardiacPath" },
  description: DISCLOSURE,
  alternates: { canonical: "/cardiacpath" },
  openGraph: {
    title: "CardiacPath",
    description:
      "A beta companion for the hours between cardiac rehab sessions. Synthetic patients only. Not for clinical use.",
    url: "https://www.hixon.studio/cardiacpath",
    siteName: "CardiacPath",
  },
  twitter: {
    card: "summary_large_image",
    title: "CardiacPath",
    description:
      "A beta companion for the hours between cardiac rehab sessions. Synthetic patients only. Not for clinical use.",
  },
};

export default function CardiacPathPage() {
  return <Landing />;
}
