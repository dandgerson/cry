import React from 'react'
import PropTypes from 'prop-types'
import cl from 'classnames'
import { useHistory } from 'react-router-dom'

const SidebarOption = ({
  styleModule: s,
  themeModule: t,
  path,
  text,
  renderIcon,
  isActive,
}) => {
  const history = useHistory()

  return (
    <div
      className={cl(
        s.option,
        t.option,
        {
          [t['option-active']]: isActive,
          [t.hoverable]: !isActive,
        },
      )}
      onClick={() => (path && !isActive) && history.push(path)}
    >
      <div className={cl(
        s.option_content,
        t.option_content,
        {
          [t['option_content-active']]: isActive,
        },
      )}
      >
        {renderIcon()}
        <div className={cl(
          s.option_text,
          t.option_text,
          {
            [t['option_text-active']]: isActive,
          },
        )}
        >
          {text}
        </div>
      </div>
    </div>
  )
}

SidebarOption.defaultProps = {
  path: '',
}

SidebarOption.propTypes = {
  styleModule: PropTypes.shape({}).isRequired,
  themeModule: PropTypes.shape({}).isRequired,
  renderIcon: PropTypes.func.isRequired,
  path: PropTypes.string,
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
}

export default SidebarOption
