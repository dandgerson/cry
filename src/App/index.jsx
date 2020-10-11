import React from 'react'
import cl from 'classnames'

import 'styles/themes/dark-theme.scss'

import Sidebar from 'App/components/Sidebar'
import Feed from 'App/components/Feed'

import s from './App.module.scss'
import t from './dark-theme.module.scss'

function App() {
  return (
    <div className={cl(
      s.root,
      t.root,
    )}
    >
      {/* Sidbar */}
      <div
        className={cl(
          'bordered-right',
        )}
        style={{
          flex: '0 0 275px',
          padding: '0 10px',
        }}
      >
        <Sidebar />
      </div>

      {/* Feed */}
      <Feed />

      {/* Widgets */}
    </div>
  )
}

export default App
