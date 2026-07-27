import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Pin the workspace root so Next does not pick a parent lockfile.
  turbopack: { root: path.resolve(__dirname) },
};

export default nextConfig;
