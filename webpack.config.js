'use strict'
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
function detailPath (detail) {
  return path.resolve(__dirname, detail)
}
module.exports = {
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: "./dist",
    stats: "errors-only",
    compress: false,
    host: "localhost",
    port: 8080
  },

  entry: './src/main.ts',

  output: {
    path: detailPath('dist'),
    filename: 'bundle.[hash:6].js',
  },

  stats: {
    depth: true
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'TS',
      template: detailPath('./public/index.html'),
      filename: 'index.html',
      favicon: detailPath('./public/favicon.ico'),
      inject: true,
    })
  ],

  module: {
    rules: [{
      test: /.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/
    }]
  }
}