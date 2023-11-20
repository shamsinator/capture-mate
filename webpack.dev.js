const webpack = require("webpack");
const path = require("path");
const { merge } = require("webpack-merge");
const config = require("./webpack.config.js");

module.exports = merge(config, {
  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    // Enable Hot Module Replacement
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    hot: true, // Enable Hot Module Replacement
  },
});
