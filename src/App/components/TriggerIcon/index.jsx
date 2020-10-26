import React, { useState, useRef } from 'react'
import cl from 'classnames'
import PropTypes from 'prop-types'
import SVG from 'react-inlinesvg'
import hexToRgba from 'hex-to-rgba'

import s from './TriggerIcon.module.scss'
import t from './dark-theme.module.scss'

const TriggerIcon = ({
  src,
  width,
  height,
  rootClasses,
  contentClasses,
  text,
  color,
  accentColor,
  isTextColorPersist,
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const svgRef = useRef(null)

  return (
    <div
      className={cl(
        s.root,
        t.root,
        ...rootClasses.split(' '),
      )}
      style={{
        color: isHovered && !isTextColorPersist ? accentColor : color,
      }}
      onMouseEnter={() => {
        setIsHovered(true)
        svgRef.current.querySelector('path').style.fill = accentColor
      }}
      onMouseLeave={() => {
        setIsHovered(false)
        svgRef.current.querySelector('path').style.fill = color
      }}
    >
      <div
        className={cl(
          s.content,
          t.content,
          ...contentClasses,
        )}
        style={{
          backgroundColor: isHovered ? hexToRgba(accentColor, 0.15) : '',
        }}
      >
        <style jsx>
          {color && `
            path {
              fill: ${color};
            }
            circle {
              stroke: ${color};
            }
          `}
        </style>
        <SVG
          innerRef={svgRef}
          src={src}
          width={width}
          height={height}
          style={{
            marginRight: text ? '0.5em' : '',
          }}
        />

        <div
          className={cl(
            s.text,
            t.text,
          )}
          style={{
            color: isHovered ? accentColor : color,
          }}
        >
          {text}
        </div>
      </div>

    </div>
  )
}

TriggerIcon.defaultProps = {
  rootClasses: '',
  contentClasses: '',
  text: '',
  isTextColorPersist: false,
  color: '',
  accentColor: '',
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
  text: PropTypes.string,
  color: PropTypes.string,
  accentColor: PropTypes.string,
  isTextColorPersist: PropTypes.bool,
}

export default TriggerIcon
