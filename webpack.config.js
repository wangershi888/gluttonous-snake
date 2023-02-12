const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  // 指定入口文件
  entry: "./src/index.ts",
  // 打包文件输出目录
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  // webpack打包时需要使用到的模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // test指定的是规则生效的文件
        test: /\.ts$/,
        // 要使用的loader，执行顺序从后往前执行
        use: ["ts-loader"],
        // 要排除的文件
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browser: "last 2 versions",
                    },
                  ],
                ],
              },
            },
          },
          "less-loader",
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      //   title: "自定义title",
      template: "./public/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  // 用来设置模块引用
  resolve: {
    // .ts .js结尾的文件可以作为模块引用
    extensions: [".ts", ".js"],
  },
};
