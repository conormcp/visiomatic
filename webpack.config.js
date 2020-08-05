const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    visiomatic: "./src/index.js",
  },
  output: {
    filename: "visiomatic.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new CleanWebpackPlugin(), new MiniCssExtractPlugin()],
  mode: "production",
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
          //  publicPath: "node_modules/visiomatic/lib/images",
        },
      },
      /*
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "url-loader",
      },
      */
    ],
  },
};
