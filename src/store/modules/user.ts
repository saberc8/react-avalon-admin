import { action, makeObservable, observable } from 'mobx'
import { login } from '@/api/user'

class User {
  constructor() {
    makeObservable(this)
  }

  @observable menus = []

  @action login = async (data: any) => {
    try {
      const response: any = await login(data)
      console.log(response, 'result')
      const token = response.token
      return Promise.resolve(response)
    } catch (e) {
      return Promise.reject(e)
    }
  }
}

export default new User()
