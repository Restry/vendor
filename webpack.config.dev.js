var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var Visualizer = require('webpack-visualizer-plugin');

module.exports = {
  debug: true,
  devtool: '#source-map',
  noInfo: false,
  entry: {
    "index": [
      'eventsource-polyfill', // necessary for hot reloading with IE
      'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
      './src/index'
    ]
  },
  target: 'web',

  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'js/[name].js'
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

  /*
    使用公共cdn来提升打包数据和访问速度
   */
  externals: {
    moment: true,
    antd: true,
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new Visualizer(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('css/[name].css'),
    new HtmlwebpackPlugin({
      title: 'SOPS.APP',
      filename: 'index.html', //生成的html存放路径，相对于 path
      template: './src/assets/_layouts.ejs', //html模板路径
      inject: true, //允许插件修改哪些内容，inject: true, 包括head与body   inject: head, 只到head
      hash: true, //为静态资源生成hash值
      chunks: ['index']
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel'] },
      { test: /(\.css)$/, loader: ExtractTextPlugin.extract("css?sourceMap") },
      { test: /(\.less)$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") },

      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
      {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  }
};
