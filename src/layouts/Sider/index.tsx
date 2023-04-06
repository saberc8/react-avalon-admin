import React from 'react'
import { Layout } from 'antd'
import SideMenu from './Menu'

import '../index.less'
import { APP_NAME } from '@/common/constants'
const { Sider } = Layout

const AppSider = () => {
  return (
    <Sider className="app-sider" collapsed={false} collapsible trigger={null}>
      <div className="app-sider-logo">
        <img className="logo" src={'/logo.jpg'} />
        <span className="name">{APP_NAME}</span>
      </div>
      <SideMenu />
    </Sider>
  )
}

export default AppSider
