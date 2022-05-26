if (
  process.env.NODE_ENV === 'development' ||
  process.env.VUE_APP_MODE === 'preview'
) {
  // dev 下才启用，以免mockjs 被打包到生产下
  const mockjs = require('mockjs')
  // 加载所有mock模块
  const req = require.context('./modules/', true, /\.js$/)
  req.keys().forEach((item) => {
    req(item)
  })
  mockjs.setup({
    timeout: 500
  })
}
