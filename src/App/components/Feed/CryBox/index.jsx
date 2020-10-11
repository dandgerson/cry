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
import everyoneIcon from 'images/everyone-icon.svg'
import peopleIcon from 'images/people-icon.svg'
import mentionIcon from 'images/mention-icon.svg'

import s from './CryBox.module.scss'
import t from './dark-theme.module.scss'

const CryBox = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [activeReply, setActiveReply] = useState('everyone')
  const [inputValue, setInputValue] = useState('')

  const controlsMap = {
    addImage: pictureIcon,
    addGif: gifIcon,
    addPoll: pollIcon,
    addEmoji: emojiIcon,
    addShedule: sheduleIcon,
  }

  const repliesMap = {
    everyone: {
      icon: everyoneIcon,
      text: 'Everyone can reply',
    },
    followed: {
      icon: peopleIcon,
      text: 'People you follow can reply',
    },
    mentioned: {
      icon: mentionIcon,
      text: 'Only people you mention can reply',
    },
  }

  return (
    <div className={cl(
      s.root,
      t.root,
    )}
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
            onChange={e => setInputValue(e.target.value)}
          />
        </div>

        {isFocused && (
          <div className={cl(
            s.replySettings,
            t.replySettings,
            'bordered-bottom',
          )}
          >
            <TriggerIcon
              src={repliesMap[activeReply].icon}
              width={20}
              height={20}
              text={repliesMap[activeReply].text}
              rootClasses={cl(
                s.replySettings_icon,
                t.controls_icon,
              )}
              contentClasses={cl(
                s.replySettings_iconContent,
              )}
            />
          </div>
        )}

        <div className={cl(
          s.controls,
          t.controls,
        )}
        >
          <div className={cl(
            s.controls_wrapper,
          )}
          >
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
          <CryButton
            isActive={Boolean(inputValue.length)}
          />
        </div>
      </form>
    </div>
  )
}

export default CryBox
