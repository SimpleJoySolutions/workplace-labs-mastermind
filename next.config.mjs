/** @type {import('next').NextConfig} */
import { withContentlayer } from 'next-contentlayer'

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove experimental options
}

export default withContentlayer(nextConfig)