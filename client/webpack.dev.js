const merge = require("webpack-merge");
const base = require("./webpack.base");

module.exports = merge(base, {
  mode: "development",
  devServer: {
    port: 3000,
    proxy: {
      "/**": {
        target: "http://localhost:8080",
        secure: false
      }
    }
  }
});
