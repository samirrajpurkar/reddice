import path from 'path'
import webpack from 'webpack'

export default {
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.js')
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
          new webpack.HotModuleReplacementPlugin()
      ],
  module: {
    loaders: [
      {test: /\.js?$/, exclude: /(node_modules)/,loader: 'react-hot-loader'},
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}
