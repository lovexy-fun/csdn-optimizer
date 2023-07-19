const { merge } = require('webpack-merge')
const base = require('./webpack.config.base')

module.exports = merge(base, {
  mode: process.env.NODE_ENV || 'production',
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/dist',
  },
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
  plugins: [],
})
