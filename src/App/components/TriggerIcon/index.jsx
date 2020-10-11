import React from 'react'
import cl from 'classnames'
import PropTypes from 'prop-types'
import SVG from 'react-inlinesvg'

import s from './TriggerIcon.module.scss'
import t from './dark-theme.module.scss'

const TriggerIcon = ({
  src,
  width,
  height,
  rootClasses,
  contentClasses,
}) => (
  <div
    className={cl(
      s.root,
      t.root,
      ...rootClasses.split(' '),
    )}
  >
    <div
      className={cl(
        s.content,
        t.content,
        ...contentClasses.split(' '),
      )}
    >
      <SVG
        src={src}
        width={width}
        height={height}
      />
    </div>
  </div>
)

TriggerIcon.defaultProps = {
  rootClasses: '',
  contentClasses: '',
}

TriggerIcon.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  rootClasses: PropTypes.string,
  contentClasses: PropTypes.string,
}

export default TriggerIcon
