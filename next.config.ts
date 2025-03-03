import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output:'export',
  distDir: "out",
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:'sunwaytechclub.s3.ap-southeast-1.amazonaws.com'
      }
    ]
  }
};

export default nextConfig;
