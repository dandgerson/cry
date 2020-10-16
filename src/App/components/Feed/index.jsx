import React from 'react'
import cl from 'classnames'
// import SVG from 'react-inlinesvg'

import starsIcon from 'images/stars-icon.svg'
import avatar from 'images/avatar.jpg'
import mockedImage from 'images/mocked.jpg'

import TriggerIcon from 'App/components/TriggerIcon'
import CryBox from './CryBox'
import Post from './Post'

import s from './Feed.module.scss'
import t from './dark-theme.module.scss'

const Feed = () => {
  const userData = {
    displayName: 'Dmitry G. Anderson',
    username: 'dandgerson',
    isVerified: true,
    timestamp: '13h',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In atque enim excepturi nesciunt, corporis assumenda saepe laborum modi! Qui ipsa quidem itaque, voluptas impedit praesentium recusandae assumenda, esse, eum corrupti veniam ipsum consequuntur?',
    image: mockedImage,
    avatar,
  }

  return (
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

      {/* TweetBox */}
      <CryBox />

      <div data-feed-body>
        {/* Post */}
        {Array.from({ length: 10 }, (_, i) => (
          <React.Fragment key={i}>
            <Post
              avatar={userData.avatar}
              displayName={userData.displayName}
              isVerified={userData.isVerified}
              username={userData.username}
              timestamp={userData.timestamp}
              text={userData.text}
              image={`https://picsum.photos/${500 + i * 10}/${300 + i * 10}`}
            />
          </React.Fragment>
        ))}
      </div>

    </div>
  )
}

export default Feed
