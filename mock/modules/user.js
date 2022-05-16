import Mock from 'mockjs'

Mock.mock(/\/user\/info/, 'post', {
  code: 200,
  data: [],
  msg: '',
  success: true
})
