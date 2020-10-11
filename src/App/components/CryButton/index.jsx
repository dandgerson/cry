import React from 'react'
import cl from 'classnames'
import PropTypes from 'prop-types'

import s from './CryButton.module.scss'
import t from './dark-theme.module.scss'

const CryButton = ({
  fullWidth,
}) => (
  <div
    className={cl(
      s.root,
      t.root,
    )}
    style={{
      width: fullWidth ? `calc(100% - ${Number.parseInt(s.sidePadding, 10) * 2}px)` : '',
    }}
  >
    give a cry
  </div>
)

CryButton.defaultProps = {
  fullWidth: false,
}

CryButton.propTypes = {
  fullWidth: PropTypes.bool,
}

export default CryButton
