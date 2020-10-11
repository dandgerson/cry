import React from 'react'
import cl from 'classnames'

import CryButton from 'App/components/CryButton'
import Avatar from 'App/components/Avatar'

import avatar from 'images/avatar.jpg'

import s from './CryBox.module.scss'
import t from './dark-theme.module.scss'

const CryBox = () => (
  <div className={cl(
    s.root,
    t.root,
  )}
  >
    <form>
      <div className={cl(
        s.input,
        t.input,
      )}
      >
        <Avatar
          src={avatar}
          size='49px'
        />
        <input placeholder="What's happening?" type='text' />
      </div>

      <CryButton />
    </form>
  </div>
)

export default CryBox
