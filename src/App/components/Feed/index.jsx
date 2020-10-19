import React, { useState, useEffect } from 'react'
import cl from 'classnames'
// import SVG from 'react-inlinesvg'

// import { lorem, postData } from 'App/constants'
import db from 'services/firebase'

import starsIcon from 'images/stars-icon.svg'

import TriggerIcon from 'App/components/TriggerIcon'
import CryBox from './CryBox'
import Post from './Post'

import s from './Feed.module.scss'
import t from './dark-theme.module.scss'

const Feed = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => (setPosts(snapshot.docs.map(doc => doc.data()))))
  }, [])

  console.log({ posts })
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
        {posts.map((post, i) => (
          <React.Fragment key={i}>
            <Post
              avatar={post.avatar}
              displayName={post.displayName}
              isVerified={post.isVerified}
              username={post.username}
              timestamp={`${new Date(new Date() - post.timestamp.seconds).getHours()}h`}
              text={post.text}
              image={post.image}
              comments={post.comments}
              reposts={post.reposts}
              likes={post.likes}
            />
            {/* <Post
              avatar={i > 0 ? `https://picsum.photos/${200 + i * 10}/${200 + i * 10}` : post.avatar}
              displayName={post.displayName}
              isVerified={Boolean(Math.ceil(Math.random() * 10) % 2)}
              username={post.username}
              timestamp={`${Math.ceil(Math.random() * 24)}h`}
              text={lorem}
              image={`https://picsum.photos/${500 + i * 10}/${300 + i * 10}`}
            /> */}
          </React.Fragment>
        ))}
      </div>

    </div>
  )
}

export default Feed
