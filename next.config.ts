import type { NextConfig } from "next";
import { BASE_PATH } from "./lib/asset";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: BASE_PATH,
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: `${BASE_PATH}/`,
        permanent: false,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
