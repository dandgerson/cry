import React from 'react'
import cl from 'classnames'

import Sidebar from 'App/components/Sidebar'

import s from './App.module.scss'

function App() {
  return (
    <div className={cl(s.root)}>
      <h1>Hello Cry App</h1>

      {/* Sidbar */}
      <Sidebar />

      {/* Feed */}

      {/* Widgets */}
    </div>
  )
}

export default App
