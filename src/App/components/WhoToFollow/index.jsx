import React from 'react'
// import PropTypes from 'prop-types'
import cl from 'classnames'

import s from './WhoToFollow.module.scss'
import t from './dark-theme.module.scss'

import FollowUser from './FollowUser'

const WhoToFollow = () => {
  const followUsers = [
    {
      avatar: `https://picsum.photos/${200}`,
      displayName: 'Lorem Ipsum',
      username: '@loremipsum',
    },
    {
      avatar: `https://picsum.photos/${300}`,
      displayName: 'Dolor Sit',
      username: '@dolorsit',
    },
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

      <div data-body>
        {followUsers.map(user => (
          <React.Fragment key={user.username}>
            <FollowUser
              avatar={user.avatar}
              displayName={user.displayName}
              username={user.username}
            />
          </React.Fragment>
        ))}
      </div>

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
