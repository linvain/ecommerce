const HtmlWebpackPlugin = require('html-webpack-plugin')
import webpack from 'webpack';

interface Env {
  development?: boolean;
  production?: boolean;
}

const config: (env: Env) => webpack.Configuration = env => {

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

  return {
    mode: env.production ? 'production' : 'development',
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
}

export default config;
