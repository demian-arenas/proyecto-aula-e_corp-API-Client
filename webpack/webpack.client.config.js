var pathout = './build'
const path = require('path')
var pathentry = './lib/client'

module.exports = {
  entry: pathentry,
  output: {
    filename: 'client.js',
    path: path.join(process.cwd(), pathout)
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          presets: ['es2016', 'es2017', 'react'],
          plugins: ['transform-es2015-modules-commonjs']
        }
      }
    ]
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  target: 'web'
}
