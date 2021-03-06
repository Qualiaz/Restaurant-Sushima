const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "src/js/index.js"),
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },

  devtool: "inline-source-map",
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 5001,
    open: true,
    hot: true,
    compress: true,
  },

  module: {
    rules: [
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.(svg|ico|png|webp|jpg|jpeg|gif)$/i, type: "asset/resource" },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "title",
      filename: "index.html",
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],
};
