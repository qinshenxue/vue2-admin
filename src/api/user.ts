import { request } from '../utils/request'

export default class UserService {
  static async login(params: object) {
    return request.post('/user/login', params)
  }

  static async info() {
    return {}
  }
}
