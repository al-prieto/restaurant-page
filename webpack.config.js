const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, //limpia dist/ antes de cada build
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
};
