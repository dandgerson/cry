import React from 'react'
import PropTypes from 'prop-types'
import cl from 'classnames'

import s from './WhoToFollow.module.scss'
import t from './dark-theme.module.scss'

import FollowUser from './FollowUser'

const WhoToFollow = () => {
  const followUsers = [
    {
      avatar: '',
      displayName: '',
    }
  ]

  return (
    <div className={cl(
      s.root,
      t.root,
    )}>
      <div className={cl(
        s.header,
        t.header,
      )}>
        Who to follow
      </div>

      <div data-body />

      <div className={cl(
        s.footer,
        t.footer,
        t.hoverable,
      )}>
        Show more
      </div>
    </div>
  )
}

WhoToFollow.propTypes = {}

export default WhoToFollow
