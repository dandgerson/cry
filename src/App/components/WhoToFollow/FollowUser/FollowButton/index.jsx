import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import cl from 'classnames'

import s from './FollowButton.module.scss'
import t from './dark-theme.module.scss'

const FollowButton = () => {
  const [isToggled, setIsToggled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      className={cl(
        s.root,
        t.root,
        {
          [t.fill]: isToggled,
          [t.outline]: !isToggled,
        },
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsToggled(!isToggled)}
    >
      {(() => {
        switch (true) {
          case isToggled && !isHovered: return 'Following'
          case isToggled && isHovered: return 'Unfollow'
          default: return 'Follow'
        }
      })()}
    </div>
  )
}

FollowButton.propTypes = {

}

export default FollowButton
