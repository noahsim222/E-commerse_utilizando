/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    backendURL: "https://server-two-ochre.vercel.app/"
  }

}

module.exports = nextConfig;