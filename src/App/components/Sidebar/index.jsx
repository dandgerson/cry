import React from 'react'
import cl from 'classnames'
import SVG from 'react-inlinesvg'
import { useHistory, useLocation } from 'react-router-dom'

import { routes } from 'App/constants'

import twitterIcon from 'images/twitter-icon.svg'
import moreIcon from 'images/more-icon.svg'

import ActionIcon from 'App/components/ActionIcon'
import Button from 'App/components/Button'
import SidebarOption from './SidebarOption'

import s from './Sidebar.module.scss'
import t from './dark-theme.module.scss'

const Sidebar = () => {
  const location = useLocation()
  const history = useHistory()

  const activeOption = location.pathname.slice(1)

  return (
    <div className={cl(
      s.root,
    )}
    >
      <div
        onClick={() => history.push('/home')}
      >
        <ActionIcon
          src={twitterIcon}
          width={24}
          height={24}
          rootClasses={[
            t.cryIcon,
          ]}
          isColorPersist
          color={t.darkFontColor}
          accentColor={t.darkAccentColor}
        />
      </div>

      {/* Sidbar options */}
      {Object.entries(routes).map(([route, { icon, path }]) => (
        <React.Fragment key={route}>
          <SidebarOption
            text={route}
            path={path}
            renderIcon={() => (
              <SVG
                src={icon}
                width={24}
                height={24}
                className={cl(
                  s.option_icon,
                  t.option_icon,
                  {
                    [t['option_icon-active']]: activeOption === route,
                  },
                )}
              />
            )}
            styleModule={s}
            themeModule={t}
            isActive={activeOption === route}
          />
        </React.Fragment>
      ))}

      <div>
        <SidebarOption
          text='more'
          renderIcon={() => (
            <SVG
              src={moreIcon}
              width={24}
              height={24}
              className={cl(
                s.option_icon,
                t.option_icon,
                {
                  [t['option_icon-active']]: false,
                },
              )}
            />
          )}
          styleModule={s}
          themeModule={t}
          isActive={false}
        />
      </div>

      <div style={{
        marginTop: '20px',
        width: '100%',
      }}
      >
        <Button isFullWidth height='49px' />
      </div>
    </div>
  )
}

export default Sidebar
