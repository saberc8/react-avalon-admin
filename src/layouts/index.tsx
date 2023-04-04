import React from 'react'
import { Outlet } from 'react-router-dom'
import AppHeader from './Header'
import AppSider from './Sider'

const AppLayout = () => {
  return (
    <div>
      <AppHeader />
      <AppSider />
      <Outlet />
    </div>
  )
}

export default AppLayout
