import React from 'react'
import PropTypes from 'prop-types'
import cl from 'classnames'

const SidebarOption = ({
  styleModule: s,
  text,
  renderIcon,
}) => {
  return (
    <div className={cl(
      s.option,
    )}>
      {renderIcon()}
      {text}
    </div>
  )
}

SidebarOption.propTypes = {
  styleModule: PropTypes.shape({}).isRequired,
  renderIcon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

export default SidebarOption
