import React from 'react'
import PropTypes from 'prop-types'
import cl from 'classnames'

import s from './FollowButton.module.scss'
import t from './dark-theme.module.scss'

const FollowButton = () => {
  return (
    <div className={cl(
      s.root,
      t.root,
    )}>
      Follow
    </div>
  )
}

FollowButton.propTypes = {

}

export default FollowButton
