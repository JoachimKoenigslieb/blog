import withMDX from '@next/mdx'
/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
	output: 'export'
};

export default withMDX()(nextConfig);
