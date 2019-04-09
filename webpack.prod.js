const merge = require("webpack-merge");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const common = require("./webpack.common.js");
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new TerserPlugin({
      parallel: true,
      terserOptions: {
        ecma: 6
      }
    })
  ]
});
