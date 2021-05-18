const path = require('path')
const miniCSS = require('mini-css-extract-plugin')
const postcss = require('postcss')
const autoprefixer = require('autoprefixer')

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test:/\.(s*)css$/,
				exclude: /node_modules/,
				use: [miniCSS.loader, 'css-loader', 'postcss-loader', 'sass-loader',]
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader'
			}
		]
	},
	plugins: [
		new miniCSS({
			filename: 'style.css',
		}),
	]
}