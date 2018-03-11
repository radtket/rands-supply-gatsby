module.exports = {
	siteMetadata: {
		title: 'Gatsby Default Starter',
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-styled-components`,
		{
			resolve: 'gatsby-plugin-google-fonts',
			options: {
				fonts: ['roboto: 300,400,500,700,900'],
			},
		},
	],
};
