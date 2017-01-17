var path = require('path')
var webpack = require('webpack')
var poststylus = require('poststylus')

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      'Promise': 'exports?global.Promise!es6-promise'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.styl/,
        loader: 'style-loader!css-loader!stylus-loader',
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.(ttf)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  stylus:{
	use: [poststylus(['autoprefixer', 'rucksack-css'])]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.styl']
  }
}
