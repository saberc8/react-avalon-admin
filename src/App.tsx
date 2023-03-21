import React, { FC } from 'react'
import { HashRouter } from 'react-router-dom'
import Router from '@/router/index'

const App: FC = () => {
  return (
    <HashRouter>
      <Router />
    </HashRouter>
  )
}

export default App
