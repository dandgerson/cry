import React from 'react'
import PropTypes from 'prop-types'
import cl from 'classnames'

import s from './Avatar.module.scss'
import t from './dark-theme.module.scss'

const Avatar = ({ src, size }) => (
  <div className={cl(
    s.root,
    t.root,
  )}
  >
    <img
      src={src}
      alt='user avatar'
      style={{
        height: size,
      }}
    />
  </div>
)

Avatar.defaultProps = {
  size: '',
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
}

export default Avatar
