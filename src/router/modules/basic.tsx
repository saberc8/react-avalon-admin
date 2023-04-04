import { lazy } from 'react'
import { DashboardOutlined, FileOutlined, FileWordOutlined, GlobalOutlined } from '@ant-design/icons'
import { IRoute } from '@/typings/router'
import Layout from '@/layouts/index'
import Dashboard from '@/pages/basic/dashboard'
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
    ],
  },
]

export default Basic
