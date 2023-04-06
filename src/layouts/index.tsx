import React from 'react'
import { Layout } from 'antd'
import AppHeader from './Header'
import AppSider from './Sider'
import AppContent from './Content'
const AppLayout = () => {
  return (
    <Layout className="app-layout">
      <AppSider />
      <Layout style={{ minHeight: '100vh' }}>
        <AppHeader />
        <AppContent />
      </Layout>
    </Layout>
  )
}

export default AppLayout
