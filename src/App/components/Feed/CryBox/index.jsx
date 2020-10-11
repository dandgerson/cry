import React, { useState } from 'react'
import cl from 'classnames'

import CryButton from 'App/components/CryButton'
import Avatar from 'App/components/Avatar'
import TriggerIcon from 'App/components/TriggerIcon'

import avatar from 'images/avatar.jpg'
import pictureIcon from 'images/picture-icon.svg'
import gifIcon from 'images/gif-icon.svg'
import pollIcon from 'images/poll-icon.svg'
import emojiIcon from 'images/emoji-icon.svg'
import sheduleIcon from 'images/shedule-icon.svg'

import s from './CryBox.module.scss'
import t from './dark-theme.module.scss'

const CryBox = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [activeReply, setActiveReply] = useState('everyone')

  const controlsMap = {
    addImage: pictureIcon,
    addGif: gifIcon,
    addPoll: pollIcon,
    addEmoji: emojiIcon,
    addShedule: sheduleIcon,
  }

  const repliesMap = {}

  return (
    <div className={cl(
      s.root,
      t.root,
    )}
    >
      <div className={cl(
        s.avatarWrapper,
      )}>
        <Avatar
          src={avatar}
          size='49px'
        />
      </div>

      <form>
        <div className={cl(
          s.input,
          t.input,
        )}
        >
          <input
            placeholder="What's happening?"
            type='text'
            onFocus={() => setIsFocused(true)}
          />
        </div>

        <div className={cl(
          s.replySettings,
          t.replySettings,
        )}>

        </div>

        <div className={cl(
          s.controls,
          t.controls,
        )}>
          <div className={cl(
            s.controls_wrapper,
          )}>
            {Object.keys(controlsMap).map(control => (
              <React.Fragment key={control}>
                <TriggerIcon
                  src={controlsMap[control]}
                  width={24}
                  height={24}
                  rootClasses={cl(
                    t.controls_icon,
                  )}
                />
              </React.Fragment>
            ))}
          </div>
          <CryButton />
        </div>
      </form>
    </div>
  )
}

export default CryBox
