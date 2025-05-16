// app/manifest.webmanifest.ts
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Enreach",
    short_name: "Enreach",
    description: "/",
    scope: "/",
    start_url: "/app",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/logo.png",
        sizes: "192x192",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
      },
    ],
  };
}
