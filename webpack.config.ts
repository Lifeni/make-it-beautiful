import CopyPlugin from 'copy-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import * as path from 'path'
import * as webpack from 'webpack'

const config: webpack.Configuration = {
  mode: 'production',
  entry: {
    'content-script': path.resolve(__dirname, 'content-script.ts'),
    background: path.resolve(__dirname, 'background.ts'),
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
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
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
  optimization: {
    minimize: false,
  },
}

export default config
