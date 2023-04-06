import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'

const { Content } = Layout

const AppContent = () => {
  return (
    <Content>
      <Outlet />
    </Content>
  )
}

export default AppContent
