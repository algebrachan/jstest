/**
 * webpack.config.js webpack的配置文件
 * 作用: 指示webpack干哪些活 
 * 所有构建工具都是基于node平台
 * 
 */
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  // webpack配置
  // 入口起点
  entry: './src/index.js',
  // 输出
  output: {
    filename: 'js/bulble.js',
    // 输出路径
    path: resolve(__dirname, 'build'),
    publicPath: "./"
  },
  // loader配置
  module: {
    rules: [
      // 详细loader配置
      {
        test:/\.less$/,
        use:['style-loader','css-loader','less-loader']
      },
      {
        // 匹配哪些文件
        test: /\.css$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          // 图片大小小于8kb 就会被base64处理
          limit: 8 * 1024,
          // 问题：因为url-loader默认使用es6模块化解析，html-loader引入图片是commonjs
          // 关闭es6模块化
          esModule: false,
          name: '[hash:10].[ext]',
          outputPath:'imgs'
        },
        
      },
      {
        test: /\.html$/,
        // 处理html中的img标签引入
        loader: 'html-loader'
      },
      {
        //处理其他资源
        exclude:/\.(html|js|css|less|jpg|png|gif)/,
        loader:'file-loader',
        options:{
          name:'[hash:10].[ext]',
          outputPath:'media'
        }
      }

    ]
  },
  // plugins配置
  plugins: [
    // html-webpack-plugin 
    // 功能：默认创建空html文件， 引入打包输出所有资源
    // 存在问题 html中的src不显示
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename:'css/main.css'
    })
  ],
  // 模式
  mode: 'development',
  // mode: 'production',
  // devServer: {
  //   contentBase: resolve(__dirname, 'build'),
  //   // 启动gzip
  //   compress: true,
  //   port: 3000,
  //   open: true
  // }
}