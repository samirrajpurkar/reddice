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
            loaders: [{
                test: /\.js$/,
                loaders: ['react-hot-loader/webpack', 'babel'],
                include: path.join(__dirname, 'src')
            }]
        }
}
