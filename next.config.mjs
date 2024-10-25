import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Imagens rand for prototypesa
  images: {
    // domains: ['img.freepik.com'], 
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
    ],
  },
};
const withMDX = createMDX({
  // Add markdown plugins here, as desired
});
// Merge MDX config with Next.js config
export default withMDX(nextConfig);
