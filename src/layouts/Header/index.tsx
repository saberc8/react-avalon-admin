import React from 'react'
import { Layout } from 'antd'
import CollapsedIcon from './collapsedIcon'
import '../index.less'
const { Header } = Layout

const AppHeader = () => {

  return (
    <Header className='app-header'>
      <CollapsedIcon />
    </Header>
  )
}

export default AppHeader
