const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Needed for static exports
  },
  assetPrefix: isProd ? '/code-editor/' : '', // Required for GitHub Pages
  basePath: isProd ? '/code-editor' : '', // Required for GitHub Pages
  trailingSlash: true,
};

export default nextConfig;
