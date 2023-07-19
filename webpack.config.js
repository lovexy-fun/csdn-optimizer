const TerserPlugin = require("terser-webpack-plugin")
const webpack = require('webpack');
const { merge } = require('webpack-merge')
const base = require('./webpack.config.base')

module.exports = merge(base, {
  mode: process.env.NODE_ENV || 'production',
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/dist',
  },
  externals: [
    (ctx, callback) => {
      if (process.env.NODE_ENV == 'production') {
        callback(null, ['react', 'react-dom']);
      } else {
        callback()
      }
    }
  ],
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: ['style-loader',
          {
            loader: 'css-loader',
            options: { modules: true }
          },
          'less-loader'],
      },
    ],
  },
})
