import withFlowbiteReact from "flowbite-react/plugin/nextjs";
const isProd = process.env.NODE_ENV === 'production';
/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: false,
    reactStrictMode: true,
    images: {
      unoptimized: true,
    },
    assetPrefix: isProd ? '/the-two-ways/' : '',
    basePath: isProd ? '/the-two-ways' : '',
    output: 'export'
};

export default withFlowbiteReact(nextConfig);