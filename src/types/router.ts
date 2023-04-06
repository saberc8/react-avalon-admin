import React from 'react'

type ComponentType = React.ComponentType<any> & { name: string }

export interface IRouteBase {
  path: string
  label?: string // 菜单项标题
  title?: string // 设置收缩时展示的悬浮标题
  icon?: React.ReactNode
  name?: string
  key?: string
  exact?: boolean
  meta?: MetaProps
  component?: ComponentType
  element?: React.ReactNode
  children?: Array<IRouteBase>
  // 302 跳转
  redirect?: string
  hidden?: boolean
}

export interface MetaProps {
  keepAlive?: boolean;
  requiresAuth?: boolean;
  title: string;
  key?: string;
}

export interface IRoute extends IRouteBase {
  children?: IRoute[];
}

export interface MenuInfo {
  key: string;
  keyPath: string[];
  /** @deprecated This will not support in future. You should avoid to use this */
  item: any;
  domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
}
