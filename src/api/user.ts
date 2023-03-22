import request from '@/utils/request'
import { LoginParams, LoginResultModel, GetUserInfoModel } from './model/userModel'

enum Api {
  Login = '/user/login',
  Logout = '/logout',
  GetUserInfo = '/user/getUserInfo',
  GerUserList = '/user/list',
  AddUser = '/user/add',
  InitDatabase = '/user/initDatabase',
}


export function login(data: any) {
  return request({
    url: Api.Login,
    method: 'post',
    data,
  })
}

export function initDatabase() {
  return request({
    url: Api.InitDatabase,
    method: 'get',
  })
}
