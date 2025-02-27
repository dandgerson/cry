import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Search,
  Bell,
  Mail,
  Bookmark,
  User,
  MoreHorizontal,
  Twitter,
  PenSquare,
} from "lucide-react";
import { SidebarLeft, NavItem, TweetButton } from "./styled";

const Sidebar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <SidebarLeft>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <NavItem style={{ marginBottom: "32px" }}>
          <Twitter size={28} color="#1d9bf0" />
        </NavItem>
      </Link>

      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <NavItem active={isActive("/")}>
          <Home size={26} />
          <span>Home</span>
        </NavItem>
      </Link>

      <Link to="/explore" style={{ textDecoration: "none", color: "inherit" }}>
        <NavItem active={isActive("/explore")}>
          <Search size={26} />
          <span>Explore</span>
        </NavItem>
      </Link>

      <Link
        to="/notifications"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <NavItem active={isActive("/notifications")}>
          <Bell size={26} />
          <span>Notifications</span>
        </NavItem>
      </Link>

      <Link to="/messages" style={{ textDecoration: "none", color: "inherit" }}>
        <NavItem active={isActive("/messages")}>
          <Mail size={26} />
          <span>Messages</span>
        </NavItem>
      </Link>

      <Link
        to="/bookmarks"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <NavItem active={isActive("/bookmarks")}>
          <Bookmark size={26} />
          <span>Bookmarks</span>
        </NavItem>
      </Link>

      <Link to="/profile" style={{ textDecoration: "none", color: "inherit" }}>
        <NavItem active={isActive("/profile")}>
          <User size={26} />
          <span>Profile</span>
        </NavItem>
      </Link>

      <NavItem>
        <MoreHorizontal size={26} />
        <span>More</span>
      </NavItem>

      <TweetButton>
        <span>Tweet</span>
        <PenSquare size={24} style={{ display: "none" }} />
      </TweetButton>
    </SidebarLeft>
  );
};

export default Sidebar;
