import type { Metadata } from "next";
// Monowire loaded via @font-face in globals.css
import "@fontsource/fraunces/300.css";
import "@fontsource/fraunces/300-italic.css";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/fraunces/700.css";
import "@fontsource/fraunces/700-italic.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hixon.studio"),
  title: {
    default: "Hixon.Studio",
    // Pages set a bare title ("About"); this renders it as "About — Hixon.Studio".
    template: "%s — Hixon.Studio",
  },
  description: "AI developer. Builder. Making things worth using.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Hixon.Studio",
    description: "AI developer. Builder. Making things worth using.",
    url: "https://www.hixon.studio",
    siteName: "Hixon.Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hixon.Studio",
    description: "AI developer. Builder. Making things worth using.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
