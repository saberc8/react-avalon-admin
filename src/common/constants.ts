import { version } from '../../package.json'

interface ICodeMessage {
  [propName: number]: string
}
export const APP_NAME = 'react admin'
export const CodeMessage: ICodeMessage = {
  200: '服务器成功返回请求的数据。',
}

export const BASE_URL = import.meta.env.VITE_BASE_URL

export const APP_VERSION = version

export const BlankList = ['/example/blank']
export const ProjectName = 'React - Tiger - Admin'
export const ProjectTitle = ProjectName.replace(/\s+/g, '')
export const ProjectKeywords = 'react-vite-antd开发模板'
export const StoreKey = `${ProjectTitle}-${APP_VERSION}`
export const LoginPath = '/login'
export const HomePath = '/basic/dashboard'
