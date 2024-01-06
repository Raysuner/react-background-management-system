/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src", "index.tsx")
  },
  output: {
    filename: "[name].[contenthash:8].js", // hash 防止浏览器缓存
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src") // @ === src
    },
    extensions: [".ts", ".tsx", "..."] // tsx?后缀文件可以不写后缀，其它的文件类型默认带上文件后缀
  },
  // externals: [{ lodash: "_" }, { React: "React" }, { "react-dom": "ReactDOM" }],
  devServer: {
    // 本地服务器配置
    hot: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.((s(a|c))|c)ss$/, // 支持sass、scss、css
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.tsx?$/, // 支持tsx
        use: "babel-loader"
      }
    ]
  },
  plugins: [
    // 根据public里面的html文件为模板，产生页面html
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html")
    })
  ]
};
