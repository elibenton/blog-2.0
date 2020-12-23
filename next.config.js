// next.config.js
module.exports = {
	images: {
		domains: ['images.pexels.com', 'images.unsplash.com']
	},
	reactStrictMode: true,
	webpack: (config, { isServer }) => {
		if (isServer) {
			require('./scripts/generate-sitemap')
		}
		return config
	}
}
