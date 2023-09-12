'use strict'
// 定义在node环境下运行
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath:"/front",
  devServer: {
    open: true,
    proxy: {
      "/api": {
        target: "http://172.18.182.33:3300", // 本地
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    },
    disableHostCheck: true
  },
  chainWebpack(config) {
    // set svg-sprite-loader
    config.module
        .rule('svg')
        .exclude.add(resolve('src/assets/icons'))
        .end()
    config.module
        .rule('icons')
        .test(/\.svg$/)
        .include.add(resolve('src/assets/icons'))
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]'
        })
        .end()
  },
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false
  }
};
