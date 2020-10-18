import homeIcon from 'images/home-icon.svg'
import exploreIcon from 'images/explore-icon.svg'
import notificationsIcon from 'images/notifications-icon.svg'
import messagesIcon from 'images/messages-icon.svg'
import bookmarksIcon from 'images/bookmarks-icon.svg'
import listsIcon from 'images/lists-icon.svg'
import profileIcon from 'images/profile-icon.svg'
import avatar from 'images/avatar.jpg'

export const lorem = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In atque enim excepturi nesciunt, corporis assumenda saepe laborum modi! Qui ipsa quidem itaque, voluptas impedit praesentium recusandae assumenda, esse, eum corrupti veniam ipsum consequuntur?'

export const postData = [
  {
    displayName: 'Dmitry G. Anderson',
    username: 'dandgerson',
    avatar,
  },
  {
    displayName: 'Amet Consectetur',
    username: 'ametconsectetur',
  },
  {
    displayName: 'Adipisicing Elit',
    username: 'adipisicingelit',
  },
  {
    displayName: 'In Atque',
    username: 'inatque',
  },
  {
    displayName: 'Enim Excepturi',
    username: 'enimexcepturi',
  },
  {
    displayName: 'Nesciunt Corporis',
    username: 'nesciuntcorporis',
  },
  {
    displayName: 'Assumenda Saepe',
    username: 'assumendasaepe',
  },
  {
    displayName: 'Laborum Modi',
    username: 'laborummodi',
  },
]

export const routes = {
  home: {
    path: '/home',
    widgets: ['WhoToFollow'],
    icon: homeIcon,
  },
  explore: {
    path: '/explore',
    widgets: ['WhoToFollow'],
    icon: exploreIcon,
  },
  notifications: {
    path: '/notifications',
    widgets: [],
    icon: notificationsIcon,
  },
  messages: {
    path: '/messages',
    widgets: ['WhoToFollow'],
    icon: messagesIcon,
  },
  bookmarks: {
    path: '/bookmarks',
    widgets: ['WhoToFollow'],
    icon: bookmarksIcon,
  },
  lists: {
    path: '/lists',
    widgets: ['WhoToFollow'],
    icon: listsIcon,
  },
  profile: {
    path: '/profile',
    widgets: ['WhoToFollow'],
    icon: profileIcon,
  },
}
