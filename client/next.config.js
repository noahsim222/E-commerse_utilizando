/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    backendURL: "https://localhost:8080/"
  }

}

module.exports = nextConfig;