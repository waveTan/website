require('dotenv').config();

module.exports = {
	title: 'NULS',
	// Options for webpack-dev-server
	// See https://webpack.js.org/configuration/dev-server
	devServer: {
		host: process.env.HOST || 'localhost',
		port: process.env.PORT || 4000
	},
	// when you use electron please set to relative path like ./
	// otherwise only set to absolute path when you're using history mode
	publicPath: './',
	electron: false,
	assetsSubDirectory: 'src/assets',
	assetsPublicPath: '/',
	useEslint: true,
	showEslintErrorsInOverlay: true
};
