// next.config.js
module.exports = {
	reactStrictMode: true,
	webpack: (config, { isServer }) => {
		if (isServer) {
			require('./scripts/generate-sitemap')
		}
		return config
	}
}
