const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  output: {
    publicPath: 'http://localhost:8081/',
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },

  devServer: {
    port: 8081,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      name: 'remote1',
      filename: 'remoteEntry.js',
      remotes: {
        home: 'home@http://localhost:8080/remoteEntry.js',
        remote1: 'remote1@http://localhost:8081/remoteEntry.js',
      },
      exposes: {
        './Carousel': './src/Carousel.vue',
        './CTA': './src/CTA.vue',
        './Button': './src/components/Button.vue',
      },
      shared: require('./package.json').dependencies,
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
};
