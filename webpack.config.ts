import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import * as path from 'path'
import * as webpack from 'webpack'

const config = (env: any): webpack.Configuration => {
  const dist = env.MANIFEST === 'v2' ? 'dist-v2' : 'dist'
  const manifest = env.MANIFEST === 'v2' ? 'manifest.v2.json' : 'manifest.json'

  return {
    mode: 'production',
    entry: {
      'content-script': path.resolve(__dirname, 'content-script.ts'),
      background: path.resolve(__dirname, 'background.ts'),
      'options-page': path.resolve(__dirname, 'pages/options/options.ts'),
    },
    output: {
      path: path.resolve(__dirname, dist),
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
            from: path.resolve(__dirname, manifest),
            to: path.resolve(__dirname, `${dist}/manifest.json`),
          },
          {
            from: path.resolve(__dirname, '_locales'),
            to: path.resolve(__dirname, `${dist}/_locales`),
          },
          {
            from: path.resolve(__dirname, 'assets'),
            to: path.resolve(__dirname, `${dist}/assets`),
          },
        ],
      }),
      new HtmlWebpackPlugin({
        chunks: ['options-page'],
        filename: 'options-page.html',
        template: './pages/options/index.html',
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
        path.resolve(__dirname, 'dist-v2/**'),
      ],
    },
    optimization: {
      minimize: false,
    },
  }
}

export default config
