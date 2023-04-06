import { lazy } from 'react'
import { DashboardOutlined, FileOutlined, FileWordOutlined, GlobalOutlined } from '@ant-design/icons'
import { IRoute } from '@/typings/router'
import lazyLoad  from '@/router/lazyLoad'
import Layout from '@/layouts/index'
import Dashboard from '@/pages/basic/dashboard'
import NotFoundPage from '@/pages/basic/error/404'
const Basic: Array<IRoute> = [
  {
    path: '/basic',
    key: '/basic',
    label: '基础',
    name: 'basic',
    icon: <GlobalOutlined />,
    element: <Layout />,
    redirect: '/basic/dashboard',
    children: [
      {
        path: '/basic/dashboard',
        key: '/basic/dashboard',
        label: '公告板',
        title: '公告板',
        name: 'dashboard',
        icon: <DashboardOutlined />,
        element: <Dashboard />,
      },
      {
        path: '/basic/error',
        key: '/basic/error',
        label: '错误页面',
        title: '错误页面',
        icon: <DashboardOutlined />,
        name: 'error',
        children: [
          {
            path: '/basic/error/404',
            key: '/basic/error/404',
            label: '404',
            title: '404',
            icon: <FileOutlined />,
            name: '404',
            element: lazyLoad(lazy(() => import(/* webpackChunkName: "404" */ '@/pages/basic/error/404'))),
          },
        ],
      },
    ],
  },
]

export default Basic
