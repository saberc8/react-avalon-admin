import React, { useEffect, FC, useState } from 'react'
import { routes, routerArray } from '@/router'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu } from 'antd'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons'

import '../../index.less'
import { IRoute, MenuInfo } from '@/types/router'

const SideMenu: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { pathname } = location
  const [openMenu, setOpenMenu] = useState<Array<string>>([])
  const openKey: Array<string> = [pathname]
  useEffect(() => {
    pathname !== '/' && handleDefaultSelect()
  }, [])

  // 刷新页面，处理默认选中
  const handleDefaultSelect = () => {
    const currentPathArray = pathname.split('/')
    if (currentPathArray.length === 4) {
      const currentKey = [`/${currentPathArray[1]}`, `/${currentPathArray[1]}/${currentPathArray[2]}`]
      setOpenMenu(currentKey)
    } else {
      const currentKey = [`/${currentPathArray[1]}`]
      setOpenMenu(currentKey)
    }
  }

  const getMenuTree = (routers: IRoute[]) => {
    return routers.reduce((pre: any, item: any) => {
      if (!item.hidden) {
        pre.push(item)
      }
      return pre
    }, [])
  }

  const menuItems = getMenuTree(routes)

  const handleMenuClick = (item: MenuInfo) => {
    const { key } = item
    const currentKey = `/${key.split('/')[1]}`
    if (key === pathname) return
    navigate(item.key)
  }
  return (
    <div className="app-side-menu" style={{ height: window.innerHeight - 64 }}>
      <Menu
        mode="inline"
        theme="dark"
        inlineIndent={15}
        items={menuItems}
        defaultSelectedKeys={openKey}
        openKeys={openMenu}
        onClick={handleMenuClick}
      />
    </div>
  )
}

export default SideMenu
