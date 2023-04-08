const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  // Define the entry point of the application
  entry: {
    popup: "./src/popup.jsx",
  },
  // Define where the built files will be placed
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  // Define rules for how different types of files should be treated
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Apply the following rules to all JS and JSX files
        exclude: /node_modules/, // Don't apply the rules to files in node_modules directory
        use: {
          loader: "babel-loader", // Use babel-loader to transpile JSX and ES6 syntax to ES5
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // Use these presets for transpilation
          },
        },
      },
    ],
  },
  // Define plugins that provide additional functionality
  plugins: [
    // The HtmlWebpackPlugin simplifies creation of HTML files
    new HtmlWebpackPlugin({
      template: "./src/popup.html", // Use this file as the template for the output HTML
      filename: "popup.html", // Name the output HTML file as "popup.html"
    }),
    // CopyWebpackPlugin is a third-party package maintained by community members
    // Copies individual files or entire directories, which already exist, to the build directory
    new CopyPlugin({
      patterns: [{ from: "public" }], // Copy the "public" directory to the build directory
    }),
  ],
};