import { Navigate, useRoutes } from 'react-router-dom'

import Login from '@/pages/login/index'

// 导入所有router
const metaRouters: any = import.meta.glob('./modules/*.tsx', { eager: true, import: 'default' })

// 处理路由
export const routerArray: IRoute[] = []
Object.keys(metaRouters).forEach((key) => {
  const mod = metaRouters[key] || {}
  const modList = Array.isArray(mod) ? [...mod] : mod
  routerArray.push(...modList)
})

// 路由配置
export const routes = [
  {
    path: '/',
    key: '/',
    element: <Navigate to="/login" />,
    hidden: true,
  },
  {
    path: '/login',
    key: '/login',
    element: <Login />,
    hidden: true,
    meta: {
      requiresAuth: false,
      title: '登录',
      key: 'login',
    },
  },
  ...routerArray,
]

const Router = () => {
  return useRoutes(routes)
}

export default Router
