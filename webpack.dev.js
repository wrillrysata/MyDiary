const merge = require("webpack-merge");
const path = require('path');
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const common = require("./webpack.common.js");
module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  plugins: [new HardSourceWebpackPlugin()],
  devServer: {
    contentBase: path.join(__dirname, "dist/"),
    port: 5000,
    historyApiFallback: true,
    proxy: {
      "/api": process.env.PORT || "http://localhost:2000"
    }
  }
});
