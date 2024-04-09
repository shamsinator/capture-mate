const path = require("path");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const config = require("./webpack.config.js");
const ZipPlugin = require("zip-webpack-plugin");
const packageInfo = require("./package.json");

module.exports = merge(config, {
  mode: "production",
  devtool: "source-map",
  output: {
    filename: (chunkData) => {
      return chunkData.chunk.name === "contentScript"
        ? "[name].js"
        : "[name].[contenthash].js";
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new ZipPlugin({
      path: path.join(__dirname, "dist"),
      filename: `${packageInfo.name}-${packageInfo.version}.zip`,
    }),
  ],
  optimization: {
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    splitChunks: {
      chunks: "all",
    },
  },
});
