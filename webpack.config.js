// const webpack = require("webpack");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const devMode = process.env.NODE_ENV !== "production";

// const plugins = [
//   new MiniCssExtractPlugin({
//     // Options similar to the same options in webpackOptions.output
//     // both options are optional
//     filename: devMode ? "[name].css" : "[name].[contenthash].css",
//     chunkFilename: devMode ? "[id].css" : "[id].[contenthash].css",
//   }),
// ];
// if (devMode) {
//   // only enable hot in development
//   plugins.push(new webpack.HotModuleReplacementPlugin());
// }

// module.exports = {
//   plugins,
//   module: {
//     rules: [
//       {
//         test: /\.(sa|sc|c)ss$/,
//         use: [
//           MiniCssExtractPlugin.loader,
//           "css-loader",
//           "postcss-loader",
//           "sass-loader",
//         ],
//       },
//     ],
//   },
// };