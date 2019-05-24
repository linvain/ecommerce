import webpack from "webpack"
const path = require('path')

interface Env {
  development?: boolean;
  production?: boolean;
}

const configureWebpack = (env: Env) => {

  //////////////////////
  // Loaders
  //////////////////////

  const babelLoader = () => ({
    loader: 'babel-loader',
  })
  
  const styleLoader = () => ({
    loader: "style-loader"
  })

  const cssModulesTypescriptLoader = () => ({
    loader: "css-modules-typescript-loader"
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



  //////////////////////
  // Rules
  //////////////////////

  const babelRule = () => ({
    test: /\.(js|ts|jsx|tsx)$/,
    exclude: /node_modules/,
    use: babelLoader(),
  })
  
  const globalStylesRule = () => ({
    test: /\.scss$/,
    include: [path.resolve(__dirname, "./src/index.scss")],
    use: [
      styleLoader(),
      cssLoader(),
      sassLoader(),
    ]
  })

  const localStylesRule = () => ({
    test: /\.scss$/,
    exclude: [path.resolve(__dirname, "./src/index.scss")],
    use: [
      styleLoader(),
      cssModulesTypescriptLoader(),
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

  // Without this variable Typescript would
  // fail to type check extra properties
  const configuration: webpack.Configuration = {
    mode: env.production ? 'production' : 'development',
    resolve: {
      extensions: [".js", ".ts", ".jsx", ".tsx", "*"],
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
  
  return configuration
}

export default configureWebpack
