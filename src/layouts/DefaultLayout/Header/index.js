import React, { useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  MessageIcon,
  NotificationIcon,
  SideBarMobileIcon,
} from "~/components/Icons";
import userAvatar from "~/assets/images/avatar.jpg";
import "./Header.scss";
import Button from "~/components/Button";
import UserInfo from "./UserInfo";
import SearchBox from "~/components/Search";

function Header({ setClick }) {
  const [userInfoClick, setUserInfoClick] = useState(false);

  const handleUserInfoClick = () => {
    setUserInfoClick(!userInfoClick);
  };

  return (
    <header className="header__wrapper">
      <div className="header__container">
        <div className="header__search mobile_hide">
          <SearchBox placeholder="Search or type a command" commandF />
        </div>
        <div
          className="header__sidebar-icon mobile_show "
          onClick={() => setClick(true)}
        >
          <SideBarMobileIcon />
        </div>
        <div className="header__actions">
          <Button className="header__action-button mobile_hide btn--outline">
            <FontAwesomeIcon icon={faPlus} />
            <span>Create</span>
          </Button>
          <MessageIcon className="header__action-icon header__action" />
          <NotificationIcon className="header__action-icon header__action" />
          <div
            className="header__action-user header__action"
            onClick={handleUserInfoClick}
          >
            <img src={userAvatar} alt="Avatar" />
          </div>
        </div>
      </div>
      <UserInfo userInfoClick={userInfoClick} />
    </header>
  );
}

export default Header;
