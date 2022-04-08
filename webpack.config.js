/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const webpack = require("webpack");
const dotenv = require('dotenv')
// fork-ts-checker-webpack-plugin需要单独安装
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

console.log('>>>>>>>>>>>>>')
console.log(process.env.NODE_ENV)
// console.log(dotenv.config({ path: `.env.${process.env.NODE_ENV}` }))
console.log("<<<<<<<<<<<<<<<")

module.exports = {
  entry: "./src/main",
  target: "node",
  // 置为空即可忽略webpack-node-externals插件
  externals: {},
  // ts文件的处理
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: {
          loader: "ts-loader",
          options: { transpileOnly: true }
        },
        exclude: /node_modules/
      }
    ]
  },
  // 打包后的文件名称以及位置
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".js", ".ts", ".json"],
    alias: {
      '@': [path.resolve(__dirname, './src/')]
    }
  },
  plugins: [
    // 需要进行忽略的插件
    new webpack.IgnorePlugin({
      checkResource(resource) {
        const lazyImports = [
          "@nestjs/microservices",
          "@nestjs/microservices/microservices-module",
          "@nestjs/websockets/socket-module",
          "cache-manager",
          "class-validator",
          "class-transformer"
        ];
        if (!lazyImports.includes(resource)) {
          return false;
        }
        try {
          require.resolve(resource, {
            paths: [process.cwd()]
          });
        } catch (err) {
          return true;
        }
        return false;
      }
    }),
    new ForkTsCheckerWebpackPlugin(),
    // new webpack.DefinePlugin({
    //   'process.env': JSON.stringify(dotenv.config({ 
    //     path: `.env.${process.env.NODE_ENV}` 
    //   }).parsed)
    // }),
  ]
};
