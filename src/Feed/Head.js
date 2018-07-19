/* @flow */
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: #fff;
  &:hover {
  }
  &:active {
    color: #1da1f2;
  }
`;

const FeedHead = styled.div`
  display: flex;
  padding-left: 16px;
  border-bottom: 1px solid #e1e8ed;
  margin-top: 6px;
  padding-top: 15px;
  padding-bottom: 9.5px;
  font-weight: Bold;
  font-size: 18px;
  background: white;
  color: #1da1f2;
`;

const Text = styled.div`
  margin-right: 35px;
  cursor: pointer;
  color: black;
`;

type Props = {
  currentUser: string,
};

const Head = ({ currentUser }: Props) => (
  <FeedHead>
    <StyledLink exact to={`/${currentUser}`}>
      <Text>Tweets</Text>
    </StyledLink>
    <StyledLink exact to={`/${currentUser}/with_replies`}>
      <Text>Tweets & replies</Text>
    </StyledLink>
    <StyledLink exact to={`/${currentUser}/media`}>
      <Text>Media</Text>
    </StyledLink>
  </FeedHead>
);

export default Head;
