/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ["res.cloudinary.com", "avatars.githubusercontent.com"],
//   },
//   i18n: {
//     locales: ["ko"],
//     defaultLocale: "ko",
//   },
// };
module.exports = withPWA({
  pwa: {
    dest: "public",
  },
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "avatars.githubusercontent.com"],
  },
  i18n: {
    locales: ["ko"],
    defaultLocale: "ko",
  },
  //nextConfig,
});

//module.exports = nextConfig;
