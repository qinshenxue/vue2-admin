import Mock from 'mockjs'
import { toResponse } from '../utils'

function bigdata(options) {
  const body = JSON.parse(options.body)
  const data = []
  for (let i = 0; i < body.page_size; i++) {
    data.push({
      id: Mock.mock('@guid'),
      name: Mock.mock('@name'),
      status: Mock.mock('@integer(0, 3)'),
      text: Mock.Random.cword(4, 10),
      long_text: Mock.Random.cword(100),
      date: Mock.Random.date(),
      datetime: Mock.Random.datetime()
    })
  }
  return toResponse({
    records: data,
    total: 100
  })
}

Mock.mock(/\/list\/page/, 'post', bigdata)
