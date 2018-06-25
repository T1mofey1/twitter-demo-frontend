import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import homeIcon from "./icons/home-icon.svg";
import messagesIcon from "./icons/messages-icon.svg";
import momentsIcon from "./icons/moments-icon.svg";
import notificationsIcon from "./icons/notifications-icon.svg";

const Nav = styled.div`
  display: flex;
`;

const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  margin-right: 44px;
  font-weight: bold;
  font-size: 13px;
  line-height: 15px;
  color: rgb(102, 117, 128);
  position: relative;
`;

const Icon = styled.img``;

const StyledNavLink = styled(NavLink)`
  display: flex;
`;

function Navigation(props) {
  return (
    <div>
      <Nav>
        <StyledNavLink to="/EveryInteract">
          <Icon src={homeIcon} />
          <Button>Home</Button>
        </StyledNavLink>
        <StyledNavLink to="/Moments">
          <Icon src={momentsIcon} />
          <Button>Moments</Button>
        </StyledNavLink>
        <StyledNavLink to="/Notifications">
          <Icon src={notificationsIcon} />
          <Button>Notifications</Button>
        </StyledNavLink>
        <StyledNavLink to="/Messages">
          <Icon src={messagesIcon} />
          <Button>Messages</Button>
        </StyledNavLink>
      </Nav>
    </div>
  );
}

export default Navigation;
