import React from "react";
import styled from "styled-components";
import home from "./icons/home.svg";
import messages from "./icons/messages.svg";
import moments from "./icons/moments.svg";
import notifications from "./icons/notifications.svg";

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

  &:before {
    content: "";
    background-image: url(${props => props.icon});
    background-repeat: no-repeat;
    display: block;
    width: 20px;
    height: 19px;
    left: -20px;
    top: -1px;
    background-size: contain;
    position: absolute;
    background-size: contain;
  }
`;

function Navigation(props) {
  return (
    <div>
      <Nav>
        <Button icon={home}>Home</Button>
        <Button icon={moments}>Moments</Button>
        <Button icon={notifications}>Notifications</Button>
        <Button icon={messages}>Messages</Button>
      </Nav>
    </div>
  );
}

export default Navigation;
