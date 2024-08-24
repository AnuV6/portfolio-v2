/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  output: "standalone",
  images: {
    unoptimized: true
}
};

export default nextConfig;
