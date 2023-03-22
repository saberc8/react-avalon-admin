import Cookies from 'js-cookie'
import { StoreKey } from '@/common/constants'

const TokenKey = `${StoreKey}-Token`

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token: string) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
