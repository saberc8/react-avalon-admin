import { action, makeObservable, observable } from 'mobx'

class AppStore {
  constructor() {
    makeObservable(this)
  }

  @observable
  public isDrawerOpen = false

  constructor() {
    makeObservable(this)
  }

  @action
  public toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen
  }
}
