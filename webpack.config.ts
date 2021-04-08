import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import * as path from 'path'
import * as webpack from 'webpack'

const config = (env: any): webpack.Configuration => {
  const dist = env.MANIFEST === 'v2' ? 'dist-v2' : 'dist'
  const manifest =
    env.MANIFEST === 'v2' ? 'src/manifest.v2.json' : 'src/manifest.json'
  const minimize = env.MINIMIZE === 'false' ? false : true

  return {
    mode: 'production',
    entry: {
      'content-script': path.resolve(__dirname, 'src/content-script.ts'),
      background: path.resolve(__dirname, 'src/background.ts'),
      'options-page': path.resolve(__dirname, 'src/pages/options/options.ts'),
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
          use: 'babel-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
      alias: {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      },
    },
    plugins: [
      // @ts-ignore
      new CleanWebpackPlugin(),
      // @ts-ignore
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, manifest),
            to: path.resolve(__dirname, `${dist}/manifest.json`),
          },
          {
            from: path.resolve(__dirname, 'src/_locales'),
            to: path.resolve(__dirname, `${dist}/_locales`),
          },
          {
            from: path.resolve(__dirname, 'src/assets'),
            to: path.resolve(__dirname, `${dist}/assets`),
          },
          {
            from: path.resolve(__dirname, 'LICENSE'),
            to: path.resolve(__dirname, `${dist}/`),
          },
        ],
      }),
      new HtmlWebpackPlugin({
        chunks: ['options-page'],
        filename: 'options-page.html',
        template: 'src/pages/options/index.html',
      }),
    ],
    performance: {
      hints: false,
      maxAssetSize: 10_000_000,
    },
    watchOptions: {
      ignored: [
        path.resolve(__dirname, 'node_modules/**'),
        path.resolve(__dirname, 'dist/**'),
        path.resolve(__dirname, 'dist-v2/**'),
      ],
    },
    optimization: {
      minimize: minimize,
    },
  }
}

export default config
