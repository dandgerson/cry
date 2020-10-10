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
    <div className={cl(
      s.option_content,
      t.option_content,
    )}>
      {renderIcon()}
      <div className={cl(
        s.option_text,
        t.option_text,
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
}

export default SidebarOption
