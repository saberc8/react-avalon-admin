import React, { FC } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { useStore } from '@/store/index'
import { observer } from 'mobx-react'
import '../index.less'
const CollapsedIcon: FC = () => {
  const { appStore } = useStore()

  const handleCollapsed = () => {
    console.log(1)
    appStore.setCollapsed(!appStore.collapsed)
  }
  return (
    <div className='collapsed-icon' onClick={handleCollapsed}>
      {
        appStore.collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />
      }
    </div>
  )
}

export default observer(CollapsedIcon)
