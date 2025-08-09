import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // Security headers to prevent email sending and protect domain reputation
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Prevent any form submissions to external services
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; form-action 'none'; connect-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"
          },
          // Additional security headers
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ],
      },
    ];
  },
};

export default nextConfig;
