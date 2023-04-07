import { createContext, useContext } from 'react'
import userStore from './modules/user'
import appStore from './modules/app'
const store = {
  userStore,
  appStore,
}

const StoreContext = createContext(store)

export const useStore = () => useContext(StoreContext)

export default store
