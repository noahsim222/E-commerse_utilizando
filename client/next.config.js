/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    backendURL: "https://server-omega-azure.vercel.app/"
  }

}

module.exports = nextConfig;