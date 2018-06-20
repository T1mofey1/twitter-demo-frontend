import React from "react";
import styled from "styled-components";

const size = {
  s: "32px",
  m: "50px",
  l: "210px"
};

const StyledAvatar = styled.img`
  width: ${props => size[props.size ? props.size : ""]};
  height: ${props => size[props.size ? props.size : ""]};
  cursor: pointer;
  border-radius: 100px;
`;

function Avatar(props) {
  return (
    <StyledAvatar
      size={props.size}
      src={process.env.PUBLIC_URL + "profileAvatar.png"}
      alt="Avatar"
    />
  );
}

export default Avatar;
