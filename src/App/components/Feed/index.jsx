import React from 'react'
import cl from 'classnames'
import SVG from 'react-inlinesvg'

import starsIcon from 'images/stars-icon.svg'

import 'App/components/TriggerIcon'

import s from './Feed.module.scss'
import t from './dark-theme.module.scss'

import TriggerIcon from '../TriggerIcon'

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
    )}>
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
    <div>
      TweetBox
    </div>


    <div className={cl(
      s.body,
      t.body,
    )}>
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
