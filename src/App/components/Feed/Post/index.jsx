import React from 'react'
import PropTypes from 'prop-types'
import cl from 'classnames'
import SVG from 'react-inlinesvg'

import verifiedIcon from 'images/verified-icon.svg'
import moreSimpleIcon from 'images/more-simpled-icon.svg'
import chatIcon from 'images/chat-icon.svg'
import repeatIcon from 'images/repeat-icon.svg'
import likeIcon from 'images/like-icon.svg'
import shareIcon from 'images/share-icon.svg'

import Avatar from 'App/components/Avatar'
import TriggerIcon from 'App/components/TriggerIcon'

import s from './Post.module.scss'
import t from './dark-theme.module.scss'

const Post = ({
  displayName,
  username,
  isVerified,
  timestamp,
  text,
  image,
  avatar,
}) => {
  const postOptions = {
    comment: {
      icon: chatIcon,
      counter: Math.ceil(Math.random() * 100),
    },
    repost: {
      icon: repeatIcon,
      counter: Math.ceil(Math.random() * 100),
    },
    like: {
      icon: likeIcon,
      counter: Math.ceil(Math.random() * 100),
    },
    share: {
      icon: shareIcon,
      counter: 0,
    },
  }

  return (
    <div
      className={cl(
        s.root,
        t.root,
        'bordered-bottom',
      )}
    >
      <div
        data-content-wrapper
        style={{
          display: 'flex',
        }}
      >
        <div className={cl(
          s.avatarWrapper,
        )}
        >
          <Avatar
            src={avatar}
            size='49px'
          />
        </div>

        <div data-header-wrapper>
          <div className={cl(
            s.header,
            t.header,
          )}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
            }}>
              <div className={cl(
                s.displayName,
                t.displayName,
              )}
              >
                {displayName}
              </div>

              {isVerified && (
                <SVG
                  src={verifiedIcon}
                  width={19}
                  height={19}
                  className={cl(
                    s.verifiedIcon,
                    t.verifiedIcon,
                  )}
                />
              )}

              <div className={cl(
                s.username,
                t.username,
              )}
              >
                {`@${username}`}
              </div>

              <div className={cl(
                s.dotSeparator,
                t.dotSeparator,
              )}
              >
                ·
              </div>

              <div className={cl(
                s.timestamp,
                t.timestamp,
              )}
              >
                {timestamp}
              </div>

              <div style={{
                position: 'absolute',
                top: '-15px',
                right: '0',
              }}>
                <TriggerIcon
                  src={moreSimpleIcon}
                  width={19}
                  height={19}
                  rootClasses={cl(
                    t.moreSimpleIcon,
                  )}
                />
              </div>
            </div>

          </div>

          <div data-post-body>
            <div className={cl(
              s.text,
              t.text,
            )}
            >
              {text}
            </div>

            <div className={cl(
              s.image,
              t.image,
            )}
            >
              <img src={image} alt='post' />
            </div>
          </div>

          <div className={cl(
            s.footer,
            t.footer,
          )}>
            {Object.keys(postOptions).map(option => (
              <div
                key={option}
                className={cl(
                  s.option,
                  t.option,
                )}
              >
                <TriggerIcon
                  src={postOptions[option].icon}
                  width={19}
                  height={19}
                  rootClasses={cl(
                    s[`option-${option}_root`],
                    t[`option-${option}_root`],
                  )}
                  contentClasses={cl(
                    s[`option-${option}_content`],
                    t[`option-${option}_content`],
                  )}
                />

                {Boolean(postOptions[option].counter) && (
                  <div className={cl(
                    s.counter,
                    t[`option-${option}_counter`],
                  )}>
                    {postOptions[option].counter}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

Post.defaultProps = {
  text: '',
  image: '',
}

Post.propTypes = {
  displayName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  isVerified: PropTypes.bool.isRequired,
  timestamp: PropTypes.string.isRequired,
  text: PropTypes.string,
  image: PropTypes.string,
  avatar: PropTypes.string.isRequired,
}

export default Post
