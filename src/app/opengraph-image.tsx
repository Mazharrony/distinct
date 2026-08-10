import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.strapline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#052A33",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand gradient rule */}
        <div
          style={{
            display: "flex",
            width: 220,
            height: 10,
            borderRadius: 999,
            background:
              "linear-gradient(90deg, #0089D1 0%, #00AFC0 34%, #00BFA5 67%, #00C878 100%)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              letterSpacing: 8,
              color: "#00BFA5",
              textTransform: "uppercase",
            }}
          >
            Distinct · Recognisably Different
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 76,
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.1,
            }}
          >
            One company. Every solution.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 30,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Property maintenance, technical services, renovation and fit-out
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 26,
            color: "rgba(255,255,255,0.75)",
          }}
        >
          <span>British-run · Dubai, UAE</span>
          <span>{site.phone.display}</span>
        </div>
      </div>
    ),
    size,
  );
}
