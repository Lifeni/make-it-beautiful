import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import * as path from 'path'
import * as webpack from 'webpack'

const config: webpack.Configuration = {
  mode: 'production',
  entry: path.resolve(__dirname, 'pages/options/options.ts'),
  output: {
    path: path.resolve(__dirname, 'dist/pages/options'),
    filename: 'options.bundle.js',
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
    new HtmlWebpackPlugin({ template: './pages/options/index.html' }),
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
