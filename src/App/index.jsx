import React from 'react'
import cl from 'classnames'

import 'styles/themes/dark-theme.scss'

import Sidebar from 'App/components/Sidebar'

import s from './App.module.scss'
import t from './dark-theme.module.scss'

function App() {
  return (
    <div className={cl(
      s.root,
      t.root,
    )}>
      <h1>Cry</h1>

      {/* Sidbar */}
      <Sidebar />

      {/* Feed */}

      {/* Widgets */}
    </div>
  )
}

export default App
