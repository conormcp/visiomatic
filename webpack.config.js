const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    visiomatic: "./src/index.js",
  },
  output: {
    filename: "visiomatic.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new CleanWebpackPlugin(), new MiniCssExtractPlugin()],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader",
        options: {
          outputPath: "images",
        },
      },
    ],
  },
};
