const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/code-editor/' : '',
  basePath: isProd ? '/code-editor' : '',
  output: 'export',
};

export default nextConfig;
