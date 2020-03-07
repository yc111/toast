const merge = require('webpack-merge');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const libConfig = require('./webpack.lib.conf');
const siteConfig = require('./webpack.site.conf');

module.exports = (env) => {
  const baseConfig = {
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader',
        },
        {
          test: /\.js$/,
          use: 'babel-loader',
        },
        {
          test: /\.less$/,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|bmp)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 1024 * 8,
                esModule: false,
                outputPath: 'images',
              },
            },
          ],
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                esModule: false,
                outputPath: 'fonts',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
    ],
  };
  if (env.lib) {
    return merge(baseConfig, libConfig);
  }
  if (env.site) {
    return merge(baseConfig, siteConfig);
  }
  return merge(baseConfig, siteConfig);
};
