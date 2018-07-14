/* @flow */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import users from '../users';
import followersIcon from './img/followers-icon.svg';

const publicPath = process.env.PUBLIC_URL || '';

const followers = [
  {
    avatar: `${publicPath}img/follower1.png`,
  },
  {
    avatar: `${publicPath}img/follower2.png`,
  },
  {
    avatar: `${publicPath}img/follower3.png`,
  },
  {
    avatar: `${publicPath}img/follower4.png`,
  },
  {
    avatar: `${publicPath}img/follower5.png`,
  },
  {
    avatar: `${publicPath}img/follower6.png`,
  },
];

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

type FollowersYouKnowProps = {
  currentUser: string,
};

const FollowersYouKnow = ({ currentUser }: FollowersYouKnowProps) => (
  <div>
    <StyledFollowersUKnow>
      <Icon src={followersIcon} alt="Followers you know" />
      <Link to={`/${currentUser}/followers_you_follow}`}>
        <LinkText>6 Followers you know</LinkText>
      </Link>
    </StyledFollowersUKnow>
    <Followers>
      {users.slice(1, 7).map((user, index) => (
        <Link
          to={{
            pathname: `/${user.username}`,
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
