import React from 'react'
import PropTypes from 'prop-types'
import cl from 'classnames'

const SidebarOption = ({
  styleModule: s,
  themeModule: t,
  text,
  renderIcon,
  isActive,
  handleClick,
}) => (
  <div
    className={cl(
      s.option,
      t.option,
      {
        [t['option-active']]: isActive,
        [t.hoverable]: !isActive,
      },
    )}
    onClick={handleClick}
  >
    <div className={cl(
      s.option_content,
      t.option_content,
      {
        [t['option_content-active']]: isActive,
      },
    )}>
      {renderIcon()}
      <div className={cl(
        s.option_text,
        t.option_text,
        {
          [t['option_text-active']]: isActive,
        },
      )}>
        {text}
      </div>
    </div>
  </div>
)

SidebarOption.propTypes = {
  styleModule: PropTypes.shape({}).isRequired,
  themeModule: PropTypes.shape({}).isRequired,
  renderIcon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default SidebarOption
