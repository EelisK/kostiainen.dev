const path = require("path");
const merge = require("webpack-merge");
const base = require("./webpack.base");

module.exports = merge(base, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  }
});
