import { createContext, useContext } from 'react'
import userStore from './modules/user'

const store = {
  userStore,
}

const StoreContext = createContext(store)

export const useStore = () => useContext(StoreContext)

export default store
