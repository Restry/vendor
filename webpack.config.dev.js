import webpack from 'webpack';
import path from 'path';

export default {
  debug: true,
  devtool: '#source-map',
  noInfo: false,
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    './src/index'
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src',
    hot: true,
    inline: true,
    host: '0.0.0.0',
    port: 3000,
    watchOptions: {
      poll: true
    },
    proxy: {
      '/sopsapi/api/*': {
        target: 'http://127.0.0.1:9999',
        secure: false
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel'] },
      { test: /(\.css)$/, loaders: ['style', 'css'] },
      { test: /(\.less)$/, loaders: ['style', 'css', 'less'] },
       { test: /\.(woff|ttf|eot|svg)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/, loader: 'url-loader?limit=100000' }
    ]
  }
};
