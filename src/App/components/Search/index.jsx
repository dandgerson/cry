import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import SVG from 'react-inlinesvg'
import cl from 'classnames'

import searchIcon from 'images/search-icon.svg'
import crossIcon from 'images/cross-icon.svg'

import s from './Search.module.scss'
import t from './dark-theme.module.scss'

const Search = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef(null)
  return (
    <div
      className={cl(
        s.root,
        t.root,
        {
          [s['root-focused']]: isFocused,
          [t['root-focused']]: isFocused,
        },
      )}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <SVG
        src={searchIcon}
        width={18}
        height={18}
        className={cl(
          s.icon_search,
          t.icon_search,
          {
            [t['icon_search-focused']]: isFocused,
          },
        )}
      />

      <input
        ref={inputRef}
        type='text'
        placeholder='Search Cry'
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
      />

      {inputValue ? (
        <SVG
          src={crossIcon}
          width={18}
          height={18}
          className={cl(
            s.icon_cross,
            t.icon_cross,
          )}
          onClick={() => {
            setInputValue('')
            inputRef.current.focus()
          }}
        />
      ) : null}
    </div>
  )
}

Search.propTypes = {

}

export default Search
