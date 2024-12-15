// const autoprefixer = require('autoprefixer');
const config = require('./src/config/SiteConfig');

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;

module.exports = {
	pathPrefix: config.pathPrefix,
	siteMetadata: {
		siteUrl: config.siteUrl + pathPrefix,
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pdf',
				path: `${__dirname}/src/assets/documents`,
			},
		},
		`gatsby-plugin-postcss`,
		// {
		// 	resolve: 'gatsby-remark-external-links',
		// 	options: {
		// 		target: '_blank',
		// 		rel: 'nofollow noopener noreferrer',
		// 	},
		// },
		{
			resolve: 'gatsby-plugin-google-fonts',
			options: {
				fonts: ['roboto: 300,400,500,700,900'],
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: config.siteTitle,
				short_name: config.siteTitleAlt,
				description: config.siteDescription,
				start_url: config.pathPrefix,
				background_color: config.backgroundColor,
				theme_color: config.themeColor,
				display: 'minimal-ui',
				icons: [
					{
						src: '/logos/logo-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: '/logos/logo-512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
				],
			},
		},
		'gatsby-plugin-offline',
	],
};
