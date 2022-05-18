const { defineConfig } = require('@vue/cli-service')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack(config) {
    // set svg-sprite-loader
    config.module.rule('svg').exclude.add(resolve('src/components/SvgIcon/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/components/SvgIcon/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'svg-icon-[name]'
      })
      .end()
  }
})
