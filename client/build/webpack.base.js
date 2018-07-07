const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const config = require('./config');
const _ = require('./utils');
// const env = require('./env.config.json');
const Dotenv = require('dotenv-webpack');
// const GoogleFontsPlugin = require('google-fonts-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
// const PreloadWebpackPlugin = require('preload-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		client: './src/index.js'
	},
	output: {
		path: _.outputPath,
		filename: '[name].js',
		chunkFilename: '[name].bundle.js',
		publicPath: config.publicPath,
		// Point sourcemap entries to original disk location
		devtoolModuleFilenameTemplate: (info) =>
		{
			return path.resolve(info.absoluteResourcePath);
		},
		// Add /* filename */ comments to generated require()s in the output.
		pathinfo: true
	},
	performance: {
		hints: process.env.NODE_ENV === 'production' ? 'warning' : false
	},
	resolve: {
		extensions: ['*', '.js', '.vue', '.css', '.json'],
		alias: {
			vue$: 'vue/dist/vue.esm.js',
			'@': path.join(__dirname, '../src'),
			__testConfig: path.join(__dirname, '../testConfig')
		},
		modules: [
			_.cwd('node_modules'),
			// this means you can get rid of dot hell
			// for example import 'components/Foo' instead of import '../../components/Foo'
			_.cwd('client')
		]
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: [/node_modules/]
			},
			{
				test: /\.es6$/,
				loader: 'babel-loader'
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
			}
		]
	},
	plugins: [
		new StylelintPlugin({
			files: ['**/*.vue'],
			syntax: 'scss'
		}),
		new Dotenv(),
		new HtmlWebpackPlugin({
			title: config.title,
			chunksSortMode: 'none',
			template: path.resolve(__dirname, 'index.html'),
			filename: _.outputIndexPath
		}),
		new webpack.LoaderOptionsPlugin(_.loadersOptions()),
		// new CopyWebpackPlugin([
		// 	{
		// 		from: _.cwd('./static'),
		// 		// to the roor of dist path
		// 		to: './'
		// 	}
		// ]),
		// new PreloadWebpackPlugin(),
		// new webpack.DefinePlugin({
		// 	URL: JSON.stringify(env.URL) || 'http://localhost:4000/',
		// 	API: JSON.stringify(env.API) || 'http://localhost:3000/',
		// 	MODE: JSON.stringify(env.MODE) || 'local',
		// 	API_VERSION: JSON.stringify(env.API_VERSION) || 'v1'
		// }),
		// new GoogleFontsPlugin({
		// 	fonts: [
		// 		{ family: 'Source Sans Pro', variants: ['300', '600', '700', 'regular', 'italic', '700italic'] }
		// 	]
		// }),
		// new webpack.optimize.LimitChunkCountPlugin({
		// 	maxChunks: 2
		// }),
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: 'vendor'
		// 	// minChunks: ({ resource }) => (
		// 	// 	resource !== undefined &&
		// 	// 	resource.indexOf('moment') !== -1
		// 	// )
		// })
		// new webpack.optimize.CommonsChunkPlugin({
		// 	async: 'test',
		// 	children: true,
		// 	minChunks: 3
		// }),
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: 'vendor',
		// 	minChunks: ({ resource }) => (
		// 		resource !== undefined &&
		// 		resource.indexOf('node_modules') !== -1
		// 	)
		// }),
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: 'fontawesome',
		// 	minChunks: (module) =>
		// 	{
		// 		return module.context && module.context.includes('@fortawesome');
		// 	}
		// }),
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: 'app',
		// 	children: true,
		// 	async: true,
		// 	minChunks: Infinity
		// })
		// 	name: 'main',
		// 	children: true,
		// 	async: true,
		// 	minChunks: ({ resource }) => (
		// 		resource !== undefined &&
		// 		resource.indexOf('node_modules') !== -1
		// 	)
		// }),
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: 'manifest',
		// 	minChunks: Infinity
		// }),
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: 'vendor',
		// 	minChunks: (module) =>
		// 	{
		// 		return module.context && module.context.includes('node_modules');
		// 	}
		// }),
		new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				// 		vendor: {
				// 			name: 'vendor'
				// 			// minChunks: (module) =>
				// 			// {
				// 			// 	return module.context && module.context.includes('node_modules');
				// 			// }
				// 		},
				// 		fontawesome: {
				// 			name: 'fontawesome'
				// 			// minChunks: (module) =>
				// 			// {
				// 			// 	return module.context && module.context.includes('@fortawesome');
				// 			// }
				// 		},
				// 		app: {
				// 			name: 'app',
				// 			// children: true,
				// 			// async: true,
				// 			minChunks: Infinity
				// 		}
			}
		}
	},
	target: _.target
};
