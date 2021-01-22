const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    'content-script': path.resolve(__dirname, 'content-script.js'),
    background: path.resolve(__dirname, 'background.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'manifest.json'),
          to: path.resolve(__dirname, 'dist'),
        },
        {
          from: path.resolve(__dirname, 'LICENSE'),
          to: path.resolve(__dirname, 'dist'),
        },
        {
          from: path.resolve(__dirname, 'README.*'),
          to: path.resolve(__dirname, 'dist'),
        },
        {
          from: path.resolve(__dirname, '_locales'),
          to: path.resolve(__dirname, 'dist/_locales'),
        },
        {
          from: path.resolve(__dirname, 'pages'),
          to: path.resolve(__dirname, 'dist/pages'),
        },
        {
          from: path.resolve(__dirname, 'assets'),
          to: path.resolve(__dirname, 'dist/assets'),
        },
        {
          from: path.resolve(
            __dirname,
            'node_modules/codemirror/theme/material.css'
          ),
          to: path.resolve(__dirname, 'dist/assets/themes'),
        },
        {
          from: path.resolve(
            __dirname,
            'node_modules/codemirror/lib/codemirror.css'
          ),
          to: path.resolve(__dirname, 'dist/assets/libraries/codemirror'),
        },
        {
          from: path.resolve(
            __dirname,
            'node_modules/codemirror/addon/fold/foldgutter.css'
          ),
          to: path.resolve(__dirname, 'dist/assets/libraries/codemirror'),
        },
      ],
    }),
  ],
  performance: {
    hints: false,
    maxAssetSize: 1_000_000,
  },
  watchOptions: {
    ignored: [
      path.resolve(__dirname, 'node_modules/**'),
      path.resolve(__dirname, 'dist/**'),
    ],
  },
}
