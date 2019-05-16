const HtmlWebpackPlugin = require('html-webpack-plugin')

const babelLoader = () => ({
  loader: 'babel-loader',
})

const styleLoader = () => ({
  loader: "style-loader"
})

const cssLoader = () => ({
  loader: "css-loader",
  options: {
    modules: true,
    localIdentName: '[name]__[local]',
  }
})

const sassLoader = () => {
  const sass = require("sass")
  return {
    loader: "sass-loader",
    options: {
      implementation: sass
    }
  }
}

const babelRule = () => ({
  test: /\.m?(j|t)sx?$/,
  exclude: /node_modules/,
  use: babelLoader(),
})

const stylesRule = () => ({
  test: /\.scss$/,
  use: [
    styleLoader(),
    cssLoader(),
    sassLoader(),
  ]
})

module.exports = {
  module: {
    rules: [
      babelRule(),
      stylesRule()
    ]
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", "*"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ]
}
