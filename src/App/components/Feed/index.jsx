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
  const postData = [
    {
      displayName: 'Dmitry G. Anderson',
      username: 'dandgerson',
      isVerified: true,
      timestamp: '13h',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In atque enim excepturi nesciunt, corporis assumenda saepe laborum modi! Qui ipsa quidem itaque, voluptas impedit praesentium recusandae assumenda, esse, eum corrupti veniam ipsum consequuntur?',
      image: mockedImage,
      avatar,
    },
    {
      displayName: 'Amet Consectetur',
      username: 'ametconsectetur',
      isVerified: true,
      timestamp: '13h',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In atque enim excepturi nesciunt, corporis assumenda saepe laborum modi! Qui ipsa quidem itaque, voluptas impedit praesentium recusandae assumenda, esse, eum corrupti veniam ipsum consequuntur?',
      image: mockedImage,
      avatar,
    },
    {
      displayName: 'Adipisicing Elit',
      username: 'adipisicingelit',
      isVerified: false,
      timestamp: '13h',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In atque enim excepturi nesciunt, corporis assumenda saepe laborum modi! Qui ipsa quidem itaque, voluptas impedit praesentium recusandae assumenda, esse, eum corrupti veniam ipsum consequuntur?',
      image: mockedImage,
      avatar,
    },
    {
      displayName: 'In Atque',
      username: 'inatque',
      isVerified: false,
      timestamp: '13h',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In atque enim excepturi nesciunt, corporis assumenda saepe laborum modi! Qui ipsa quidem itaque, voluptas impedit praesentium recusandae assumenda, esse, eum corrupti veniam ipsum consequuntur?',
      image: mockedImage,
      avatar,
    },
    {
      displayName: 'Enim Excepturi',
      username: 'enimexcepturi',
      isVerified: false,
      timestamp: '13h',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In atque enim excepturi nesciunt, corporis assumenda saepe laborum modi! Qui ipsa quidem itaque, voluptas impedit praesentium recusandae assumenda, esse, eum corrupti veniam ipsum consequuntur?',
      image: mockedImage,
      avatar,
    },
    {
      displayName: 'Nesciunt Corporis',
      username: 'nesciuntcorporis',
      isVerified: false,
      timestamp: '13h',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In atque enim excepturi nesciunt, corporis assumenda saepe laborum modi! Qui ipsa quidem itaque, voluptas impedit praesentium recusandae assumenda, esse, eum corrupti veniam ipsum consequuntur?',
      image: mockedImage,
      avatar,
    },
    {
      displayName: 'Assumenda Saepe',
      username: 'assumendasaepe',
      isVerified: true,
      timestamp: '13h',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In atque enim excepturi nesciunt, corporis assumenda saepe laborum modi! Qui ipsa quidem itaque, voluptas impedit praesentium recusandae assumenda, esse, eum corrupti veniam ipsum consequuntur?',
      image: mockedImage,
      avatar,
    },
    {
      displayName: 'Laborum Modi',
      username: 'laborummodi',
      isVerified: true,
      timestamp: '13h',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In atque enim excepturi nesciunt, corporis assumenda saepe laborum modi! Qui ipsa quidem itaque, voluptas impedit praesentium recusandae assumenda, esse, eum corrupti veniam ipsum consequuntur?',
      image: mockedImage,
      avatar,
    },
  ]

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
              isVerified={post.isVerified}
              username={post.username}
              timestamp={`${Math.ceil(Math.random() * 24)}h`}
              text={post.text}
              image={`https://picsum.photos/${500 + i * 10}/${300 + i * 10}`}
            />
          </React.Fragment>
        ))}
      </div>

    </div>
  )
}

export default Feed
