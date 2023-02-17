/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		dangerouslyAllowSVG: true,
		domains: ['res.cloudinary.com', 'asset.cloudinary.com'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'example.com',
				port: '',
				pathname: '/account123/**',
			},
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
				port: '',
				pathname: '/dtaakwnul/image/upload/v1674251078/Portfolio/**', // dp_hi22uf.jpg
			},
			{
				protocol: 'https',
				hostname: 'asset.cloudinary.com',
				port: '',
				pathname: '/dtaakwnul/**',
			},
			{
				protocol: 'https',
				hostname: '**.example.com',
			},
		],
	},
};

module.exports = nextConfig;
