/* @flow */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import followersIcon from './img/followers-icon.svg';

const StyledFollowersUKnow = styled.div`
  position: relative;
  margin-top: 18px;
`;

const Icon = styled.img`
  position: absolute;
  width: 16px;
  height: 16px;
  left: -5px;
`;

const LinkText = styled.div`
  margin-left: 20px;
`;

const Followers = styled.div`
  margin-top: 8px;
`;

const Follower = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 5px;
  margin-bottom: 5px;
  cursor: pointer;
`;

type Props = {
  currentUser: string,
  followers: [],
};

const FollowersYouKnow = ({ currentUser, followers }: Props) => (
  <div>
    <StyledFollowersUKnow>
      <Icon src={followersIcon} alt="Followers you know" />
      <Link to={`/${currentUser}/followers_you_follow}`}>
        <LinkText>Followers you know</LinkText>
      </Link>
    </StyledFollowersUKnow>
    <Followers>
      {Object.values(followers).map((user, index) => (
        <Link
          key={user.id}
          to={{
            pathname: `/${user.id}`,
            state: { user },
          }}
        >
          <Follower src={followers[index].avatar} />
        </Link>
      ))}
    </Followers>
  </div>
);

export default FollowersYouKnow;
