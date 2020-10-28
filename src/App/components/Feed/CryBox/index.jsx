import React, { useState } from 'react'
import cl from 'classnames'
import { Editor, EditorState, ContentState } from 'draft-js'

import Button from 'App/components/Button'
import Avatar from 'App/components/Avatar'
import ActionIcon from 'App/components/ActionIcon'

import avatar from 'images/avatar.jpg'
import pictureIcon from 'images/picture-icon.svg'
import gifIcon from 'images/gif-icon.svg'
import pollIcon from 'images/poll-icon.svg'
import emojiIcon from 'images/emoji-icon.svg'
import sheduleIcon from 'images/shedule-icon.svg'
import everyoneIcon from 'images/everyone-icon.svg'
import peopleIcon from 'images/people-icon.svg'
import mentionIcon from 'images/mention-icon.svg'

import 'draft-js/dist/Draft.css'

import s from './CryBox.module.scss'
import t from './dark-theme.module.scss'

const CryBox = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [activeReply, setActiveReply] = useState('everyone')
  const [editorState, setEditorState] = useState(() => EditorState.createWithContent(ContentState.createFromText('What\'s happened?')))

  console.log({ editorState })

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
        <Avatar src={avatar} />
      </div>

      <form>
        <div className={cl(
          s.editor,
          t.editor,
        )}
        >
          <Editor
            editorState={editorState}
            onChange={setEditorState}
            onFocus={() => setIsFocused(true)}
          />
        </div>

        {isFocused && (
          <div className={cl(
            s.replySettings,
            t.replySettings,
            'bordered-bottom',
          )}
          >
            <ActionIcon
              src={repliesMap[activeReply].icon}
              width={20}
              height={20}
              innerText={repliesMap[activeReply].text}
              rootClasses={[
                s.replySettings_icon,
                t.controls_icon,
              ]}
              contentClasses={[
                s.replySettings_iconArea,
              ]}
              accentColor={t.darkAccentColor}
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
                {control === 'addImage'
                  ? (
                    <div>
                      <label htmlFor='add-image'>
                        <ActionIcon
                          src={controlsMap[control]}
                          width={24}
                          height={24}
                          rootClasses={[
                            t.controls_icon,
                          ]}
                          accentColor={t.darkAccentColor}
                        />
                      </label>
                      <input
                        id='add-image'
                        type='file'
                        accept='image/png, image/jpeg'
                        style={{
                          display: 'none',
                        }}
                      />

                    </div>
                  )
                  : (
                    <ActionIcon
                      src={controlsMap[control]}
                      width={24}
                      height={24}
                      rootClasses={[
                        t.controls_icon,
                      ]}
                      accentColor={t.darkAccentColor}
                    />
                  )}
              </React.Fragment>
            ))}
          </div>
          <Button
            isActive={editorState.getCurrentContent().hasText()}
          />
        </div>
      </form>
    </div>
  )
}

export default CryBox
