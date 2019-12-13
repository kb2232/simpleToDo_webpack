const webpack = require('webpack');
const path = require('path');
const HTMLwebpackPlugin = require('html-webpack-plugin');
const Vendor_Library = [
  'react','react-dom','react-redux','redux','redux-thunk',
  'react-router-dom','react-loader-spinner','redux-form'
];

module.exports = {
  entry: {
    bundle:'./src/index.js',
    vendor: Vendor_Library
  },
  mode:'development',
  output:{
    path: path.resolve(__dirname,'dist'),
    filename: '[name].[chunkhash].js'
  },
  module:{
    rules:[
      {
        use:'babel-loader',
				test:/\.js$/,
        exclude:/node_modules/
      },
      {
        use:['style-loader','css-loader'],
        test:/\.s?css$/
      },
      {
        test:/\.(jpe.?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit:40000}
          },
          'image-webpack-loader']
      }
    ]
  },
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all'
    }
  },
  plugins: [
    new HTMLwebpackPlugin({ 
      template:'./index.html'
    }),
    new webpack.DefinePlugin({
      'process.env_NODE_ENV':JSON.stringify(process.env_NODE_ENV)
    })
  ]
}