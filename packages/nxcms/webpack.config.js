/* eslint-disable import/no-extraneous-dependencies, no-use-before-define */
const { join, resolve } = require('path');
const { readFileSync } = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env = {}) => {
  const isProduction = env.production === true;
  const devServerPort = env.port || 3001;
  const publicPath = env.publicPath || '/';
  const publicAccessible = env.publicAccessible === true;

  return {
    context: resolve(__dirname, 'src'),
    entry: entry(isProduction, devServerPort),
    output: output(isProduction, publicPath),
    module: modules(isProduction),
    resolve: { extensions: ['.js', '.jsx'] },
    plugins: plugins(isProduction),
    devServer: devServer(isProduction, devServerPort, publicAccessible),
    devtool: isProduction ? 'source-map' : 'inline-source-map',
  };
};

const entry = (isProduction, devServerPort) =>
  isProduction
    ? { app: ['babel-polyfill', './index.js'] }
    : [
        'babel-polyfill',
        'react-hot-loader/patch',
        `webpack-dev-server/client?http://localhost:${devServerPort}`,
        'webpack/hot/only-dev-server',
        './index.js',
      ];

const output = (isProduction, publicPath) =>
  isProduction
    ? {
        path: resolve(__dirname, 'dist'),
        publicPath: isProduction ? publicPath : '/',
        chunkFilename: 'static/js/[id].[chunkhash].js',
        filename: 'static/js/[name].[chunkhash].js',
      }
    : {
        path: resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js',
      };

const modules = isProduction => {
  const rules = [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: { loader: 'babel-loader', options: babelOptions() },
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      use: {
        loader: 'url-loader',
        options: { limit: 10000, name: 'static/img/[name].[hash:7].[ext]' },
      },
    },
  ];

  if (!isProduction)
    rules.push({
      enforce: 'pre',
      test: /\.jsx?$/,
      use: ['eslint-loader'],
      exclude: /node_modules/,
    });

  return { rules };
};

const plugins = isProduction => {
  const pluginsList = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(isProduction ? 'production' : 'development'),
      },
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: join(__dirname, 'index.html'),
      minify: isProduction
        ? {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true,
          }
        : false,
      chunksSortMode: isProduction ? 'dependency' : 'auto',
    }),
  ];

  if (isProduction)
    pluginsList.push(
      ...[
        new webpack.optimize.UglifyJsPlugin({ warnings: false }),
        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor',
          minChunks: module =>
            // Any required modules inside node_modules are extracted out to vendor.
            module.resource &&
            /\.jsx?$/.test(module.resource) &&
            module.resource.indexOf(join(__dirname, 'node_modules')) === 0,
        }),
        new webpack.optimize.CommonsChunkPlugin({
          name: 'manifest',
          chunks: ['vendor'],
        }),
      ]
    );
  else
    pluginsList.push(
      ...[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
      ]
    );

  return pluginsList;
};

const devServer = (isProduction, devServerPort, publicAccessible) =>
  isProduction
    ? {}
    : {
        hot: true,
        host: publicAccessible ? '0.0.0.0' : 'localhost',
        disableHostCheck: publicAccessible,
        contentBase: resolve(__dirname, 'dist'),
        publicPath: '/',
        historyApiFallback: true,
        port: devServerPort,
        proxy: {
          '/api': { target: 'http://localhost:3000', secure: false },
        },
      };

const babelOptions = () => {
  // Enable ES2015 modules so that hot module replacement and tree shaking work
  // properly. Leaving it disabled in .babelrc so that Mocha works properly.
  const babelConfig = JSON.parse(readFileSync(resolve(__dirname, '.babelrc')));
  babelConfig.presets = babelConfig.presets.map(
    p => (p === 'env' ? ['env', { modules: false }] : p)
  );
  babelConfig.babelrc = false;
  babelConfig.cacheDirectory = true;
  return babelConfig;
};
