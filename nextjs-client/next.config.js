/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   env: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    API_KEY:process.env.API_KEY

  },
  // typescript: {
  //   // !! WARN !!
  //   // Dangerously allow production builds to successfully complete even if
  //   // your project has type errors.
  //   // !! WARN !!
  //   ignoreBuildErrors: true,
  // },
}

module.exports = nextConfig
