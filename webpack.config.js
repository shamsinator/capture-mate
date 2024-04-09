const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

/**
 * Returns an array of HtmlWebpackPlugin instances based on the input chunks array.
 *
 * @param {Array} chunks - the array of chunks
 * @return {Array} an array of HtmlWebpackPlugin instances
 */
function getHtmlPlugins(chunks) {
  if (!Array.isArray(chunks) || chunks.length === 0) {
    throw new Error("Chunks must be a non-empty array");
  }

  return chunks.map(
    (chunk) =>
      new HtmlWebpackPlugin({
        title: `${
          chunk.charAt(0).toUpperCase() + chunk.slice(1)
        } - Chrome Extension`,
        filename: `${chunk}.html`,
        chunks: [chunk],
      })
  );
}

module.exports = {
  entry: {
    popup: path.resolve("src/popup/index.tsx"),
    options: path.resolve("src/options/index.tsx"),
    contentScript: path.resolve("src/contentScript/index.tsx"),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader", // This will be replaced by MiniCssExtractPlugin.loader in production
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("tailwindcss"), require("autoprefixer")],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve("src/static"),
          to: path.resolve("dist"),
        },
      ],
    }),
    ...getHtmlPlugins(["popup", "options", "contentScript"]),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
};
