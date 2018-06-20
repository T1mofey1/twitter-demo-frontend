import React from "react";
import styled from "styled-components";
import tick from "./tick.svg";

const Name = styled.div`
  font-size: 22px;
  position: relative;
  color: #14171a;
  margin-top: 40px;
  &:after {
    content: "";
    background-image: url(${props => (props.verifyed === "true" ? tick : "")});
    background-repeat: no-repeat;
    display: block;
    width: 18px;
    height: 18px;
    background-size: contain;
    position: absolute;
    background-size: contain;
    left: 170px;
    top: 5px;
  }
`;

function ProfileName(props) {
  return <Name verifyed={props.verifyed}>{props.children}</Name>;
}

export default ProfileName;
