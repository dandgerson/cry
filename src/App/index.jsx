import React from 'react'
import cl from 'classnames'

import 'styles/themes/dark-theme.scss'

import Sidebar from 'App/components/Sidebar'
import Feed from 'App/components/Feed'
import Search from 'App/components/Search'

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
        style={{
          flex: '0 0 275px',
          padding: '0 10px',
        }}
      >
        <Sidebar />
      </div>

      {/* Feed */}
      <div
        className={cl(
          'bordered-left',
          'bordered-right',
        )}
        style={{
          flex: '0 0 600px',
        }}
      >
        <Feed />
      </div>

      {/* Widgets */}
      <div style={{
        flex: '0 0 350px',
        paddingLeft: '30px',
        paddingTop: '10px',
        paddingRight: '10px',
        // outline: '1px solid tomato',
      }}
      >
        <Search />
      </div>
    </div>
  )
}

export default App
