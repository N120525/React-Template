
const common = require('./webpack.common.js');
const merge = require('webpack-merge');
module.exports = merge(common,{
  entry: {
    app: './src/index.js',
  },
  devServer: {
    historyApiFallback: true,
  },
 
})
