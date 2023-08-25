const path = require("path");
const Timestamp = new Date().getTime();
const CompressionPlugin = require('compression-webpack-plugin');//引入gzip压缩插件

const webpack = require("webpack");
module.exports = {
  // chainWebpack: (config) => {
  //   /* 添加分析工具 */
  //   config.plugins.delete('prefetch')
  //   if (process.env.NODE_ENV === 'production') {
  //     config
  //       .plugin('webpack-bundle-analyzer')
  //       .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
  //       .end()
  //     config.plugins.delete('prefetch')
  //   } else {
  //   }
  // },
  publicPath: './',
    css: {
        loaderOptions: {
          postcss: {
            plugins: [
              require('postcss-px2rem')({
                remUnit: 37.5
              })
            ]
          }
        }
    },
    
    // 内网穿透
    devServer: {
      disableHostCheck: true,
      // host: "192.168.43.142",
      // port: 8090,
      // proxy: {
      //   '/api': {
      //     target:'http://192.168.220.68:9090/order-api/',
      //     changeOrigin:true,
      //     pathRewrite: {'^/api':'/'}
      //   }
      // }
    },
    outputDir: 'dist', //打包生成的文件夹名字
    //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir: 'static',
     //默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。
    filenameHashing: false,
    productionSourceMap: false,
    configureWebpack: (config) => {
      return {
        //output: {
         // filename: `[name].${Timestamp}.js`,
         // chunkFilename: `[name].${Timestamp}.js`
      //  },
        resolve: {
          extensions: ['.js', '.json', '.vue', '.less', '.css'],
        },
        plugins: [
          new CompressionPlugin({ //gzip压缩配置
            test: /\.js$|\.html$|\.css/, //匹配文件名
            threshold: 10240, //对超过10kb的数据进行压缩
            deleteOriginalAssets: false, //是否删除原文件
          })
        ]
      }
    }
}