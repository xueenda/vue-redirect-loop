var webpack = require('webpack');
var vue = require('vue-loader');

module.exports = {
  // the main entry of our app
  entry: ['./src/index.js'],
  // output configuration
  output: {
    path: __dirname + '/build/',
    publicPath: 'build/',
    filename: 'build.js'
  },
  // how modules should be transformed
  // module: {
  //   loaders: [
  //     // process *.vue files using vue-loader
  //     { test: /\.vue$/, loader: 'vue' },
  //     // process *.js files using babel-loader
  //     // the exclude pattern is important so that we don't
  //     // apply babel transform to all the dependencies!
  //     { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
  //     { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
  //   ]
  // },
  module: {
    //加载器配置
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        // excluding some local linked packages.
        // for normal use cases only node_modules is needed.
        exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader: 'babel'
      },
      //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
    ]
  },
  // configure babel-loader.
  // this also applies to the JavaScript inside *.vue files
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
          warnings: false
      }
    })
  ]
}
