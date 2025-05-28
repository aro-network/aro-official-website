// app/manifest.webmanifest.ts
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ARO Companion",
    short_name: "ARO Companion",
    description: "/",
    scope: "/",
    start_url: "/app",
    display: "fullscreen",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/logo192.png",
        sizes: "192x192",
      },
      {
        src: "/logo512.png",
        sizes: "512x512",
      },
    ],
  };
}
