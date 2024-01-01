const withPWA = require('next-pwa')({
  dest: 'public',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['oaidalleapiprodscus.blob.core.windows.net'],
  },
};

module.exports = withPWA(nextConfig);
