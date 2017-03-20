const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: [
      './client/main.js',
    ],
    output: {
      path: path.resolve(__dirname, './_dist/'),
      filename: 'build.js'
    },
    resolve: {
      modules: [path.join(__dirname, './node_modules')],
      extensions: ['.js', '.vue'],
      alias: {
        'vue$': 'vue/dist/vue.common.js',
        'vue-router$': 'vue-router/dist/vue-router.js'
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              'css': ExtractTextPlugin.extract(['css-loader'])
            }
          }
        },
        {
          test: /\.html$/,
          loader: 'vue-html-loader'
        },
      ]
    }
  }
;

config.plugins = [
  new HtmlWebpackPlugin({
    filename: path.resolve(__dirname, './_dist/index.html'),
    template: path.resolve(__dirname, './client/index.html'),
    inject: true
  }),
  new ExtractTextPlugin('style.css'),
];

if (process.env.NODE_ENV === 'production') {
  console.log('building for production - minifying all scripts\n');
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      warnings: false
    }
  }));
} else {
  console.log('not in production mode - not minifying scripts\n');
}


module.exports = config;
