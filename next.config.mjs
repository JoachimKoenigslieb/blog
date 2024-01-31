import withMDX from '@next/mdx'
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';

/** @type {import('next').NextConfig} */
const config = {
	pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
	output: 'export',
	basePath: '/blog',
	experimental: {
		typedRoutes: true
	}
};

export default withMDX({
	options: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeMathjax],
	}
})(config);
