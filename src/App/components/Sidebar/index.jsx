import React from 'react'
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
import s from './Sidebar.module.scss'
import SidebarOption from './SidebarOption'

const Sidebar = () => {
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
      <h2>Sidebar</h2>

      {/* Twitter Icon */}
      <SVG
        src={twitterIcon}
        width={24}
        height={24}
        className={cl(
          s.icon,
        )}
      />

      {Object.entries(optionsMap).map(([key, value]) => (
        <React.Fragment key={key}>
          <SidebarOption
            text={key}
            renderIcon={() => (
              <SVG
                src={value}
                width={24}
                height={24}
                className={cl(
                  s.option_icon,
                )}
              />
            )}
            styleModule={s}
          />
        </React.Fragment>
      ))}

      {/* Button -> Tweet */}
    </div>
  )
}

export default Sidebar
