import React from "react";
import styled from "styled-components";

const size = {
  s: "7px 24px",
  m: "9px 27px",
  l: "15px 15px"
};

const StyledButton = styled.button`
  cursor: pointer;
  border-radius: 100px;
  border: 1px solid #1da1f2;
  font-weight: bold;
  font-size: 14px;
  background-color: ${props =>
    props.color === "primary" ? "#1DA1F2" : "#fff"};
  color: ${props => (props.color === "primary" ? "#fff" : "#1DA1F2")};
  padding: ${props => size[props.size ? props.size : "m"]};
  min-width: ${props => (props.size === "l" ? "128px" : "0")};
`;

function Button(props) {
  return (
    <StyledButton size={props.size} color={props.color}>
      {props.children}
    </StyledButton>
  );
}

export default Button;
