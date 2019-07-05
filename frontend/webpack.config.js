const path = require('path')

module.exports = env => {

	//////////////////////
	// Loaders
	//////////////////////

	const babelLoader = () => ({
		loader: 'babel-loader',
	})
  
	const styleLoader = () => ({
		loader: 'style-loader'
	})
  
	const cssLoader = () => ({
		loader: 'css-loader',
		options: {
			modules: {
				localIdentName: '[name]__[local]',
			},
		}
	})
  
	const sassLoader = () => {
		const sass = require('sass')
		return {
			loader: 'sass-loader',
			options: {
				implementation: sass
			}
		}
	}



	//////////////////////
	// Rules
	//////////////////////

	const babelRule = () => ({
		test: /\.js$/,
		exclude: /node_modules/,
		use: babelLoader(),
	})
  
	const globalStylesRule = () => ({
		test: /\.scss$/,
		include: [path.resolve(__dirname, './src/index.scss')],
		use: [
			styleLoader(),
			cssLoader(),
			sassLoader(),
		]
	})

	const localStylesRule = () => ({
		test: /\.scss$/,
		exclude: [path.resolve(__dirname, './src/index.scss')],
		use: [
			styleLoader(),
			cssLoader(),
			sassLoader(),
		]
	})



	//////////////////////
	// Plugins
	//////////////////////

	const htmlWebpackPlugin = () => {
		const HtmlWebpackPlugin = require('html-webpack-plugin')
		return new HtmlWebpackPlugin({
			template: 'src/index.html',
		})
	}


  
	//////////////////////
	// Configuration
	//////////////////////

	return {
		mode: env.production ? 'production' : 'development',
		resolve: {
			extensions: ['.js', '*'],
		},
		output: {
			publicPath: '/',
		},
		module: {
			rules: [
				babelRule(),
				globalStylesRule(),
				localStylesRule(),
			]
		},
		plugins: [
			htmlWebpackPlugin(),
		],
		devServer: {
			historyApiFallback: true
		}
	}
}
