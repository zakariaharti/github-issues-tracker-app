const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common,{
  mode: 'development',
  devtool: 'inline-source-map',
  output : {
    filename: 'js/[name].bunlde.js',
    path: path.resolve('.','dist'),
    publicPath: '/'
  },
  module:{
    rules: [
      {
        test: /\.(c|sa|sc)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'imgs/[name].[ext]'
            }
          }
        ]
      },
      {
        test : /\.(eof|ttf|eot|woff|woff2|config)$/,
        use : [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve('.','dist'),
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
});
