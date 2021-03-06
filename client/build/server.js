// const fs = require('fs');
const path = require('path');
// const chalk = require('chalk');
// const express = require('express');
const webpack = require('webpack');
const Server = require('webpack-dev-server');
const webpackConfig = require('./webpack.dev');
const config = require('./config');
const LogPlugin = require('./log-plugin');

// const app = express();

const devServerOptions = Object.assign({}, webpackConfig.devServer, config.devServer);
const { host, port } = devServerOptions;

webpackConfig.entry.client = [
	path.join(__dirname, '../src/devClient.js'),
	webpackConfig.entry.client
];

webpackConfig.plugins.push(new LogPlugin({ host, port }));

let compiler;

try
{
	compiler = webpack(webpackConfig);
}
catch(err)
{
	console.log(err.message);
	// process.exit(1)
	throw new Error('Something bad happened!');
}

const server = new Server(compiler, Object.assign({
	noInfo: true,
	hot: true,
	overlay: true,
	disableHostCheck: true,
	clientLogLevel: 'warning',
	historyApiFallback: {
		rewrites: [
			{ from: /.*/, to: path.posix.join(config.assetsPublicPath, 'index.html') }
		]
	},
	publicPath: compiler.options.publicPath
}, devServerOptions));

server.listen(port, host);
