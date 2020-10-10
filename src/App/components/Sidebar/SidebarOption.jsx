import React from 'react'
import PropTypes from 'prop-types'
import cl from 'classnames'

const SidebarOption = ({
  styleModule: s,
  themeModule: t,
  text,
  renderIcon,
}) => (
  <div className={cl(
    s.option,
    t.option,
  )}
  >
    {renderIcon()}
    {text}
  </div>
)

SidebarOption.propTypes = {
  styleModule: PropTypes.shape({}).isRequired,
  themeModule: PropTypes.shape({}).isRequired,
  renderIcon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

export default SidebarOption
