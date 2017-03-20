const path = require('path');

module.exports = {
  devtool: 'source-map',
  context: path.join(__dirname, 'client'),
  entry: [
    path.join(__dirname, 'client/main.js'),
  ],
  output: {
    path: path.join(__dirname, 'www'),
    publicPath: '/www/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.(jpe?g|gif|png)$/,
        loader: 'file-loader',
      }
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};
