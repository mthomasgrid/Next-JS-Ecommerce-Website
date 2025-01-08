import type { NextConfig } from "next";


module.exports = {

  images: {
    dangerouslyAllowSVG: true,
    domains: ['placehold.co','localhost'], 
    localPatterns: [
      {
        pathname: '/**',
        search: '',
      },
    ],
  },
};
const nextConfig: NextConfig = {
  

};

export default nextConfig;
