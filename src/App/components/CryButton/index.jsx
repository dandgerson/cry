import React from 'react'
import cl from 'classnames'
import PropTypes from 'prop-types'

import s from './CryButton.module.scss'
import t from './dark-theme.module.scss'

const CryButton = ({
  fullWidth,
  height,
}) => (
  <div
    className={cl(
      s.root,
      t.root,
    )}
    style={{
      width: fullWidth ? `calc(100% - ${Number.parseInt(s.sidePadding, 10) * 2}px)` : '',
      height: height || '',
    }}
  >
    give a cry
  </div>
)

CryButton.defaultProps = {
  fullWidth: false,
  height: '',
}

CryButton.propTypes = {
  fullWidth: PropTypes.bool,
  height: PropTypes.string,
}

export default CryButton
