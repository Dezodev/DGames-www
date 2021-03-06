
export default {
	mode: 'universal',

	// Headers of the page
	head: {
		titleTemplate: '%s - DGames',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Signika&display=swap' }
		],
		script: []
	},

	// Customize the progress-bar color
	loading: { color: '#fff' },

	// Global CSS
	css: [
		{ src: '@fortawesome/fontawesome-free/css/all.css' },
		{ src: 'flexboxgrid/dist/flexboxgrid.css' },
		{ src: 'emoji-awesome/dist/css/twitter.min.css' },
		{ src: '~/assets/less/main.less', lang: 'less' },
	],

	// Plugins to load before mounting the App
	plugins: [
		'@/plugins/antd-ui'
	],

	//Nuxt.js modules
	modules: [
		'@nuxtjs/axios',
	],

	// Axios module configuration
	axios: {
	},

	router: {
		base: '/dgames/'
	},

	// Build configuration
	build: {
		// You can extend webpack config here
		extend(config, ctx) {
			ctx.loaders.less.javascriptEnabled = true
		},

		// publicPath: '/dgames/_nuxt/'
	},
}
