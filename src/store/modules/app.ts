import { action, makeObservable, observable } from 'mobx'

class App {
  constructor() {
    makeObservable(this)
  }
  // 菜单折叠
  @observable collapsed = false

  // 设置菜单折叠状态
  @action setCollapsed = (type: boolean) => {
    this.collapsed = type
  }
}

export default new App()
