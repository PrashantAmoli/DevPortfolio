/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'example.com',
				port: '',
				pathname: '/account123/**',
			},
			{
				protocol: 'https',
				hostname: 'https://res.cloudinary.com',
				port: '',
				pathname: '/dtaakwnul/image/upload/v1671902542/ProjectDec22/**', // dp_hi22uf.jpg
			},
			{
				protocol: 'https',
				hostname: '**.example.com',
			},
		],
	},
};

module.exports = nextConfig;
