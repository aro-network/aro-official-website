import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    domains: ["wordpress.enreach.network"],
  },
};

export default nextConfig;
