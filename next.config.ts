const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Needed for static exports
  },
  assetPrefix: isProd ? '/code-editor/' : '', // Required for GitHub Pages
  basePath: isProd ? '/code-editor' : '', // Required for GitHub Pages
  output: 'export', // Ensure you are only using static-compatible features
  trailingSlash: true,
};

export default nextConfig;
