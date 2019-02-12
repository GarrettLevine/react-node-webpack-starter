const path = require('path');

const webpack = require('webpack'); // eslint-disable-line
const WriteFilePlugin = require('write-file-webpack-plugin'); // eslint-disable-line
const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // eslint-disable-line


module.exports = {
  entry: {
    bundle: ['./src/app/index.jsx', './src/scss/main.scss'],
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'public'),
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src'),
        exclude: [/node_modules/],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader' },
            { loader: 'sass-loader' },
          ],
        }),
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.template.html',
      filename: 'index.html',
      appMountId: 'app',
      inject: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      sourceMap: false,
      compress: { warnings: false },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'app',
      children: true,
      minChunks: 2,
      async: true,
    }),
    new ExtractTextPlugin({
      allChunks: true,
      filename: getPath => getPath('css/[name].css').replace('css/js', 'css'),
    }),
    new WriteFilePlugin({ log: true }),
  ],
};

