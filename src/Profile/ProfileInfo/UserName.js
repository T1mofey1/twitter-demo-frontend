import React from "react";
import styled from "styled-components";

const NameWrap = styled.div``;

const UserName = styled.a`
  font-size: 14px;
  color: #697787;
  margin-top: 6 px;
  text-decoration: none;
`;

function Name(props) {
  return (
    <NameWrap>
      <UserName>{props.children}</UserName>
    </NameWrap>
  );
}

export default Name;
