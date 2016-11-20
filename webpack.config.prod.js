var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var Visualizer = require('webpack-visualizer-plugin');

var GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

module.exports = {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: {
    'index': './src/index',
    'vendor': ['babel-polyfill','redux', 'react-router']
  },
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'js/[name].js'
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
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new Visualizer(),
    new HtmlwebpackPlugin({
      title: 'SOPS.APP',
      filename: 'index.html', //生成的html存放路径，相对于 path
      template: './src/assets/_layouts.ejs', //html模板路径
      inject: true, //允许插件修改哪些内容，inject: true, 包括head与body   inject: head, 只到head
      hash: true, //为静态资源生成hash值
      chunks: ['index', 'vendor'],
      cdn: '/assets/CDNLibs' //no need more move to chunks
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin('css/[name].css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin(
      /* chunkName= */
      "vendor",
    /* filename= */"js/vendor.bundle.js")
  ],
  module: {
    loaders: [
      { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel'] },
      { test: /(\.css)$/, loader: ExtractTextPlugin.extract("css?sourceMap") },
      { test: /(\.less)$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") },

      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },

      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  }
};
