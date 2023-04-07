import React from 'react'
import { Layout } from 'antd'
import SideMenu from './Menu'
import { useStore } from '@/store/index'
import { observer } from 'mobx-react'
import '../index.less'
import { APP_NAME } from '@/common/constants'
const { Sider } = Layout

const AppSider = () => {
  const { appStore } = useStore()
  const { collapsed } = appStore
  return (
    <Sider className="app-sider" collapsed={collapsed} collapsible trigger={null}>
      <div className="app-sider-logo">
        <img className="logo" src={'/logo.jpg'} />
        <span className={`${collapsed ? 'name-none' : 'name'}`}>{APP_NAME}</span>
      </div>
      <SideMenu />
    </Sider>
  )
}

export default observer(AppSider)
