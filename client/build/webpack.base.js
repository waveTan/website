const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const config = require('./config');
const _ = require('./utils');
const env = require('./env.config.json');

module.exports = {
	entry: {
		client: './src/index.js',
		vendor: ['moment', 'vue']
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
		extensions: ['.js', '.vue', '.css', '.json'],
		alias: {
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
		loaders: [
			{
				test: /\.vue$/,
				loaders: ['vue-loader']
			},
			{
				test: /\.js$/,
				loaders: ['babel-loader'],
				exclude: [/node_modules/]
			},
			{
				test: /\.es6$/,
				loaders: ['babel-loader']
			},
			{
				test: /\.(ico|jpg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
				loader: 'file-loader',
				query: {
					name: 'static/media/[name].[hash:8].[ext]'
				}
			},
			{
				test: /\.svg$/,
				loader: 'raw-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: config.title,
			template: path.resolve(__dirname, 'index.html'),
			filename: _.outputIndexPath
		}),
		new webpack.LoaderOptionsPlugin(_.loadersOptions()),
		new CopyWebpackPlugin([
			{
				from: _.cwd('./static'),
				// to the roor of dist path
				to: './'
			}
		]),
		new webpack.DefinePlugin({
			URL: JSON.stringify(env.URL) || 'http://localhost:4000/',
			API: JSON.stringify(env.API) || 'http://localhost:3000/',
			MODE: JSON.stringify(env.MODE) || 'local',
			API_VERSION: JSON.stringify(env.API_VERSION) || 'v1'
		}),
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
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: ({ resource }) => (
				resource !== undefined &&
				resource.indexOf('node_modules') !== -1
			)
		}),
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: 'fontawesome',
		// 	minChunks: (module) =>
		// 	{
		// 		return module.context && module.context.includes('@fortawesome');
		// 	}
		// }),
		// new webpack.optimize.CommonsChunkPlugin({
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
	target: _.target
};
