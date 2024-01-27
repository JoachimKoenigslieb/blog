import withMDX from '@next/mdx'
/** @type {import('next').NextConfig} */
const config = {
	pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
	output: 'export',
	basePath: '/blog'
};

export default withMDX()(config);
