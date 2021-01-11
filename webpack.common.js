const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.ts',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Snake game',
      template: path.resolve(__dirname, 'src/template/index.html'),
    }),
    new WebpackPwaManifest({
      name: 'Snake game',
      short_name: 'Snake game',
      description: 'Snake game - Jesus bossa',
      background_color: '#ffffff',
      crossorigin: 'anonymous',
      ios: true,
      icons: [
        {
          src: path.resolve('src/assets/images/Logo.png'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
        {
          src: path.resolve('src/assets/images/Logo.png'),
          size: '1024x1024',
        },
        {
          src: path.resolve('src/assets/images/Logo.png'),
          size: '1024x1024',
          purpose: 'maskable',
        },
      ],
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
