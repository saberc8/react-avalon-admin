import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import App from './App'
import './index.css'
// import '@/styles/global.less'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          // colorPrimary: '#00b96b',
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
)
