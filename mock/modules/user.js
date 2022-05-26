import Mock from 'mockjs'
import { toResponse, formatRequest } from '../utils'

Mock.mock(/\/user\/login/, 'post', (options) => {
  const req = formatRequest(options)
  console.log('req: ', req.body)
  if (req.body.username !== 'admin' || req.body.password !== '1') {
    return toResponse(null, 0, '用户名密码错误')
  }
  return toResponse({
    user_info: {
      user_name: 'admin',
      user_guid: 'xxxx-xxxx'
    },
    access_token: '123456'
  })
})
