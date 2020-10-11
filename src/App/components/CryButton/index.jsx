import React from 'react'
import cl from 'classnames'
import PropTypes from 'prop-types'

import s from './CryButton.module.scss'
import t from './dark-theme.module.scss'

const CryButton = ({
  isFullWidth,
  height,
  isActive,
}) => (
  <div
    className={cl(
      s.root,
      t.root,
      {
        [t.hoverable]: isActive,
        [s.mute]: !isActive,
        [t.mute]: !isActive,
      },
    )}
    style={{
      width: isFullWidth ? `calc(100% - ${Number.parseInt(s.sidePadding, 10) * 2}px)` : '',
      height: height || '',
    }}
  >
    give a cry
  </div>
)

CryButton.defaultProps = {
  isFullWidth: false,
  isActive: true,
  height: '',
}

CryButton.propTypes = {
  isFullWidth: PropTypes.bool,
  isActive: PropTypes.bool,
  height: PropTypes.string,
}

export default CryButton
