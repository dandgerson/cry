import React from 'react'
import PropTypes from 'prop-types'

import Avatar from 'App/components/Avatar'

import s from './FollowUser.module.scss'
import t from './dark-theme.module.scss'

const FollowUser = ({ avatar, displayName, username }) => {
  return (
    <div>

    </div>
  )
}

FollowUser.propTypes = {
  avatar: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}

export default FollowUser
