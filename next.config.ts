const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/code-editor/' : '',
  basePath: isProd ? '/code-editor' : '',
  trailingSlash: true,
};

export default nextConfig;
