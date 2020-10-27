import React, { useState, useRef } from 'react'
import cl from 'classnames'
import PropTypes from 'prop-types'
import SVG from 'react-inlinesvg'
import hexToRgba from 'hex-to-rgba'

import s from './ActionIcon.module.scss'
import t from './dark-theme.module.scss'

const ActionIcon = ({
  src,
  width,
  height,
  innerText,
  outerText,
  color,
  accentColor,
  isTextColorPersist,
  rootClasses,
  areaClasses,
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const svgRef = useRef(null)

  const applyStyles = ({
    elem,
    selector,
    styles,
  }) => {
    [...elem.querySelectorAll(selector)].forEach(item => Object.assign(
      item.style,
      styles,
    ))
  }

  return (
    <div
      className={cl(
        s.root,
        t.root,
        ...rootClasses,
      )}
      style={{
        color: isHovered && !isTextColorPersist ? accentColor : color,
      }}
      onMouseEnter={() => {
        setIsHovered(true)
        applyStyles({
          elem: svgRef.current,
          selector: 'path',
          styles: {
            fill: accentColor,
          },
        })
        applyStyles({
          elem: svgRef.current,
          selector: 'circle',
          styles: {
            stroke: accentColor,
          },
        })
      }}
      onMouseLeave={() => {
        setIsHovered(false)
        applyStyles({
          elem: svgRef.current,
          selector: 'path',
          styles: {
            fill: color,
          },
        })
        applyStyles({
          elem: svgRef.current,
          selector: 'circle',
          styles: {
            stroke: color,
          },
        })
      }}
    >
      <div
        className={cl(
          s.area,
          t.area,
          ...areaClasses,
        )}
        style={{
          backgroundColor: isHovered ? hexToRgba(accentColor, 0.15) : '',
        }}
      >
        <SVG
          innerRef={svgRef}
          src={src}
          width={width}
          height={height}
          style={{
            marginRight: innerText ? '0.5em' : '',
          }}
        />

        <div
          className={cl(
            s.text,
            s['text-inner'],
            t.text,
          )}
          style={{
            color: isHovered ? accentColor : color,
          }}
        >
          {innerText}
        </div>
      </div>

      {Boolean(outerText) && (
        <div
          className={cl(
            s.text,
            s['text-outer'],
            t.text,
          )}
          style={{
            color: isHovered ? accentColor : color,
          }}
        >
          {outerText}
        </div>
      )}

    </div>
  )
}

ActionIcon.defaultProps = {
  rootClasses: [],
  areaClasses: [],
  innerText: '',
  outerText: '',
  isTextColorPersist: false,
  color: '',
  accentColor: '',
}

ActionIcon.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  rootClasses: PropTypes.arrayOf(PropTypes.string),
  areaClasses: PropTypes.arrayOf(PropTypes.string),
  innerText: PropTypes.string,
  outerText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  color: PropTypes.string,
  accentColor: PropTypes.string,
  isTextColorPersist: PropTypes.bool,
}

export default ActionIcon
