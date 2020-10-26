import React from 'react'
import PropTypes from 'prop-types'
import cl from 'classnames'
import SVG from 'react-inlinesvg'
import hexToRgba from 'hex-to-rgba'

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
  comments,
  reposts,
  likes,
}) => {
  const postOptions = {
    comment: {
      icon: chatIcon,
      counter: comments,
      color: hexToRgba(t.darkFontColor, 0.5),
      accentColor: t.darkAccentColor,
    },
    repost: {
      icon: repeatIcon,
      counter: reposts,
      color: hexToRgba(t.darkFontColor, 0.5),
      accentColor: t.darkGreenColor,
    },
    like: {
      icon: likeIcon,
      counter: likes,
      accentColor: t.darkRedColor,
    },
    share: {
      icon: shareIcon,
      color: hexToRgba(t.darkFontColor, 0.5),
      accentColor: t.darkAccentColor,
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
          <Avatar src={avatar} />
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
                  color={postOptions[option].color}
                  accentColor={postOptions[option].accentColor}
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
  comments: PropTypes.number.isRequired,
  reposts: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
}

export default Post
