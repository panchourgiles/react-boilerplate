const path = require('path')
const HTMLwebplugin = require('html-webpack-plugin')

const rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  },
  {
    test: /\.css$/,
    exclude: /node_modules/,
    use: ['style-loader', 'css-loader'],
  }
]

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: { rules },
  plugins: [
    new HTMLwebplugin({
      template: path.join(__dirname, 'src', 'index.html'),
      filename: 'index.html',
      hash: true
    }),
  ],
  stats: {
    children: false,
  },
}