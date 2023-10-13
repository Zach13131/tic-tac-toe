const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/script/main.js", // Entry point for JavaScript files
    // main: ["./src/script/main.js", "./src/css/main.css"], // Entry point for JavaScript files
  },
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory for bundled files
    filename: "[name].bundle.js", // Output filename for JavaScript bundles
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].bundle.css", // Output filename for CSS bundle
    }),
    new OptimizeCssAssetsPlugin(), // Minify the bundled CSS
  ],
};
