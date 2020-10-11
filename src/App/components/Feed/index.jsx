import React from 'react'
import cl from 'classnames'
import SVG from 'react-inlinesvg'

import starsIcon from 'images/stars-icon.svg'

import TriggerIcon from 'App/components/TriggerIcon'

import CryBox from './CryBox'

import s from './Feed.module.scss'
import t from './dark-theme.module.scss'

const Feed = () => (
  <div className={cl(
    s.root,
    t.root,
  )}
  >
    {/* Header */}
    <div className={cl(
      s.header,
      t.header,
      'bordered-bottom',
    )}
    >
      Home
      <TriggerIcon
        src={starsIcon}
        width={24}
        height={24}
        rootClasses={cl(
          t.header_icon,
        )}
      />
    </div>
    {/* TweetBox */}
    <CryBox />

    <div className={cl(
      s.body,
      t.body,
    )}
    >
      body
    </div>
    {/* Post */}
    {/* Post */}
    {/* Post */}
    {/* Post */}
    {/* Post */}
    {/* Post */}
    {/* Post */}
  </div>
)

export default Feed
