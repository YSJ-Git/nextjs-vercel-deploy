/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "avatars.githubusercontent.com"],
  },
  i18n: {
    locales: ["ko"],
    defaultLocale: "ko",
  },
};

module.exports = nextConfig;
