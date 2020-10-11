import React, { useState } from 'react'
import cl from 'classnames'
import SVG from 'react-inlinesvg'

import twitterIcon from 'images/twitter-icon.svg'
import homeIcon from 'images/home-icon.svg'
import exploreIcon from 'images/explore-icon.svg'
import notificationsIcon from 'images/notifications-icon.svg'
import messagesIcon from 'images/messages-icon.svg'
import bookmarksIcon from 'images/bookmarks-icon.svg'
import listsIcon from 'images/lists-icon.svg'
import profileIcon from 'images/profile-icon.svg'
import moreIcon from 'images/more-icon.svg'

import TriggerIcon from 'App/components/TriggerIcon'
import CryButton from 'App/components/CryButton'
import SidebarOption from './SidebarOption'

import s from './Sidebar.module.scss'
import t from './dark-theme.module.scss'

const Sidebar = () => {
  const [activeOption, setActiveOption] = useState('')

  const optionsMap = {
    home: homeIcon,
    explore: exploreIcon,
    notifications: notificationsIcon,
    messages: messagesIcon,
    bookmarks: bookmarksIcon,
    lists: listsIcon,
    profile: profileIcon,
    more: moreIcon,
  }

  return (
    <div className={cl(
      s.root,
    )}
    >
      {/* Twitter Icon */}
      <TriggerIcon
        src={twitterIcon}
        width={24}
        height={24}
        rootClasses={cl(
          t.cryIcon,
        )}
        contentClasses={cl(
          t.cryIcon_content,
        )}
      />

      {/* Sidbar options */}
      {Object.entries(optionsMap).map(([option, icon]) => (
        <React.Fragment key={option}>
          <SidebarOption
            text={option}
            renderIcon={() => (
              <SVG
                src={icon}
                width={24}
                height={24}
                className={cl(
                  s.option_icon,
                  t.option_icon,
                  {
                    [t['option_icon-active']]: activeOption === option,
                  },
                )}
              />
            )}
            styleModule={s}
            themeModule={t}
            isActive={activeOption === option}
            handleClick={() => setActiveOption(option)}
          />
        </React.Fragment>
      ))}

      {/* Button -> Tweet */}
      <div style={{
        marginTop: '20px',
        width: '100%',
      }}
      >
        <CryButton fullWidth height='49px' />
      </div>
    </div>
  )
}

export default Sidebar
