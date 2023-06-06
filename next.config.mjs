/** @type {import('next').NextConfig} */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
