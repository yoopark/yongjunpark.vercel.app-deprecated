/** @type {import('next').NextConfig} */
const nextConfig = {};

// Reference : https://next-intl-docs.vercel.app/docs/next-13/server-components
const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n.ts'
);
module.exports = withNextIntl(nextConfig);
