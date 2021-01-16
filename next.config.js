// next.config.js
module.exports = {
	images: {
		domains: ['dl.airtable.com']
	},
	reactStrictMode: true,
	webpack: (config, { isServer }) => {
		if (isServer) {
			require('./scripts/generate-sitemap')
		}
		return config
	}
}
