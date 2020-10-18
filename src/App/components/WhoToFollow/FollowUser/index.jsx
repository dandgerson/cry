import React from 'react'
import PropTypes from 'prop-types'
import cl from 'classnames'

import Avatar from 'App/components/Avatar'
import FollowButton from './FollowButton'

import s from './FollowUser.module.scss'
import t from './dark-theme.module.scss'

const FollowUser = ({ avatar, displayName, username }) => {
  return (
    <div className={cl(
      s.root,
      t.root,
    )}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={{
          marginRight: '10px',
        }}>
          <Avatar
            src={avatar}
            size={49}
          />
        </div>
        <div className={cl(
          s.userMeta,
          t.userMeta,
        )}>
          <div className={cl(
            s.displayName,
            t.displayName,
          )}>
            {displayName}
          </div>
          <div className={cl(
            s.username,
            t.username,
          )}>
            {username}
          </div>
        </div>
      </div>
      <FollowButton />
    </div>
  )
}

FollowUser.propTypes = {
  avatar: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}

export default FollowUser
