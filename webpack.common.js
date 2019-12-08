const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackRootPlugin = require("html-webpack-root-plugin");

module.exports = {
  entry: {
    main: ["@babel/polyfill", "./src/index.js"]
  },

  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist/")
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]"
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Film app",
      meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"
      }
    }),
    new HtmlWebpackRootPlugin(),
    new CleanWebpackPlugin()
  ]
};
