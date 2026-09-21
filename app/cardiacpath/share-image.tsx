import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "CardiacPath. Synthetic data only. Not for clinical use.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function ShareImage() {
  const logo = await readFile(join(process.cwd(), "public/cardiacpath/logo-h-white.png"));
  const src = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#101D2F",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
        }}
      >
        <img src={src} alt="" width={280} height={60} />
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 54, fontWeight: 700, letterSpacing: -1 }}>
            The hours between sessions.
          </div>
          <div style={{ fontSize: 28, color: "#D5DDEA", maxWidth: 860, lineHeight: 1.35 }}>
            A beta queue for cardiac rehab. The software flags. A clinician decides.
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#C5CEDD" }}>
          Synthetic data only. Not for clinical use. Not HIPAA-cleared.
        </div>
      </div>
    ),
    { ...size },
  );
}
