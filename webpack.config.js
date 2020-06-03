'use strict'
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: "./dist",
    stats: "errors-only",
    compress: false,
    host: "localhost",
    port: 8080
  },

  entry: './src/index.ts',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[hash:6].js',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: 'index.html'
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