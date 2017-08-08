var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Ex = require("extract-text-webpack-plugin");
var glob = require('glob');


var config = {};
var SRC_PATH = path.resolve(__dirname, 'src');
var BUILD_PATH = path.resolve(__dirname, 'static/corp/');

//模块存在apps中便于查询
var files1 = glob.sync('./src/apps/**/*.html');
var files2 = glob.sync('./src/apps/**/**/*.html');
var entries = {};
var plugins = [];
var files = [].concat(files1).concat(files2);

files.forEach(function(f) {
  var name = /.*\/(apps\/(?:.*\/)+\w+)\.html/.exec(f)[1]; //得到home/index这样的文件名
  if (!name) return;
  
  //局部监听
  // var name = /.*\/(apps\/news\/(?:.*\/)*\w+)\.html/.exec(f); //得到home/index这样的文件名
  // if (!name) return;
  // name = name[1];
  
  //glob是通过html文件查到的filename
  var jsname = f.replace(/\.html$/, '.js');
  var jsfile = glob.sync(jsname);
  if(jsfile && jsfile.length){
    entries[name] = jsname;
  }

  var plug = new HtmlWebpackPlugin({
    favicon:'./src/images/favicon.ico', //favicon路径
    filename: path.resolve(BUILD_PATH, name + '.html'),
    //加上chunks之后每个页面会引入自己的chunks
    chunks: ['vendor','common', name],
    template: path.resolve(SRC_PATH, name + '.html'),
    inject: true
  });
  plugins.push(plug);
});

config = {
  entry: Object.assign(entries, {
    'vendor': ["babel-polyfill", 'vue', 'vue-router', 'jquery'],
    'common': './src/common/common.js',
  }),
  output: {
    path: BUILD_PATH,
    filename: '[name].js',
    publicPath: "/static/corp/",
  },
  module: {
    loaders: [
    {
      test: /\.(s)?css$/,
      use: Ex.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    },
    {
      test: /\.(png|jpg|gif|jpeg|ico)$/,
      loader: 'url-loader',
      options: {
        name: 'images/[path][name].[ext]',
        limit: 1000
      }
    },
    {
      test: /\.(eot|woff|svg|ttf|woff2)$/,
      loader: "file-loader",
      options: {
        name: 'fonts/[name].[ext]'
      }
    },
    {
      test: /\.js$/, //js 加载器
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015'], //转换 es6编码为 es5
      }
    },
    {
      test: /iview.src.*?js$/,
      loader: 'babel'
    },
    {
      test: /\.html$/,
      loader: "html-withimg-loader?min=false"
    },
    {  
      test: /\.vue$/,   
      exclude: /node_modules/,  
      loader: 'vue-loader',
      options: {
        loaders: {
          scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
          sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
        }
      }
    },]
  },
  plugins: plugins.concat([
    new Ex('[name].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      chunks: Object.keys(entries)
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      Vue: 'vue',
    }),
  ]),
  resolve: {
    alias: { 
      vue: 'vue/dist/vue.js',
      iviewCss: 'iview/dist/styles/iview.css'
    } 
  },
  devServer: {
    host: 'localhost',
    port: 8888,
    contentBase: './static/corp/apps',
    historyApiFallback: false,
    open: true, // 打开地址
    compress: true, // 开启gzip压缩
    watchContentBase : true,
    proxy: {
            '/api': {
              target: 'http://www.31huiyi.com',
              changeOrigin: true
            },
            '/LoadArticle_2017':{
              target: 'http://www.31huiyi.com',
              changeOrigin: true
            },
            '/download':{
              target: 'http://corp_beta.31huiyi.com',
              changeOrigin: true
            },
            '/corpserviceresourcecategory_2017':{
              target: 'http://corpapi.31huiyi.com',
              changeOrigin: true
            }
         },
  }
}

module.exports = config;
