import React from "react";
import styled from "styled-components";

const size = {
  small: "32px",
  medium: "50px",
  large: "210px"
};

const StyledAvatar = styled.img`
  width: ${props => size[props.size ? props.size : "auto"]};
  height: ${props => size[props.size ? props.size : "auto"]};
  cursor: pointer;
  border-radius: 100px;
`;

function Avatar(props) {
  return (
    <StyledAvatar
      size={props.size}
      src={process.env.PUBLIC_URL + "img/profileAvatar.png"}
      alt="Avatar"
    />
  );
}

export default Avatar;
