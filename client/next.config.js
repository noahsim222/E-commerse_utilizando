/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    backendURL: "http://localhost:8080"
  }

}

module.exports = nextConfig;