import React from 'react'
import cl from 'classnames'
// import SVG from 'react-inlinesvg'

import { lorem, postData } from 'App/constants'

import starsIcon from 'images/stars-icon.svg'

import TriggerIcon from 'App/components/TriggerIcon'
import CryBox from './CryBox'
import Post from './Post'

import s from './Feed.module.scss'
import t from './dark-theme.module.scss'

const Feed = () => {
  return (
    <div className={cl(
      s.root,
      t.root,
    )}
    >
      <div className={cl(
        s.header,
        t.header,
        'bordered-bottom',
      )}
      >
        <div>Home</div>

        <TriggerIcon
          src={starsIcon}
          width={24}
          height={24}
          rootClasses={cl(
            t.header_icon,
          )}
        />
      </div>

      <CryBox />

      <div data-feed-body>
        {postData.map((post, i) => (
          <React.Fragment key={i}>
            <Post
              avatar={i > 0 ? `https://picsum.photos/${200 + i * 10}/${200 + i * 10}` : post.avatar}
              displayName={post.displayName}
              isVerified={Boolean(Math.ceil(Math.random() * 10) % 2)}
              username={post.username}
              timestamp={`${Math.ceil(Math.random() * 24)}h`}
              text={lorem}
              image={`https://picsum.photos/${500 + i * 10}/${300 + i * 10}`}
            />
          </React.Fragment>
        ))}
      </div>

    </div>
  )
}

export default Feed
