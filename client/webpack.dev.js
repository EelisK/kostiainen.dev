const HtmlWebPackPlugin = require("html-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html"
});

const manifestPlugin = new ManifestPlugin({
  publicPath: "/"
});

const config = {
  mode: "development",
  entry: "./src/index.tsx",
  resolve: { extensions: [".ts", ".tsx", ".js", ".json"] },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ["file-loader?name=[name].[ext]"]
      }
    ]
  },
  plugins: [htmlPlugin, manifestPlugin]
};

module.exports = config;
