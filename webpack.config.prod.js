const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const path= require('path')
module.exports = merge(common, {
  devtool:'cheap-module-source-map',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js',
    library: 'React_library',

  },
  devServer: {
    historyApiFallback: true,
  },
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        sourceMap: true,
        uglifyOptions: {
          compress: {
            inline: false
          }
        }
      })
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      },
    }),
  ],
});