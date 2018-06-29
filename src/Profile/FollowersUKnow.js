import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import followersIcon from './img/followers-icon.svg';

const followers = [
  {
    avatar: `${process.env.PUBLIC_URL}img/follower1.png`,
  },
  {
    avatar: `${process.env.PUBLIC_URL}img/follower2.png`,
  },
  {
    avatar: `${process.env.PUBLIC_URL}img/follower3.png`,
  },
  {
    avatar: `${process.env.PUBLIC_URL}img/follower4.png`,
  },
  {
    avatar: `${process.env.PUBLIC_URL}img/follower5.png`,
  },
  {
    avatar: `${process.env.PUBLIC_URL}img/follower6.png`,
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

function FollowersYouKnow() {
  return (
    <div>
      <StyledFollowersUKnow>
        <Icon src={followersIcon} alt="Followers you know" />
        <Link to="/EveryInteract/followers_you_follow">
          <LinkText>
6 Followers you know
          </LinkText>
        </Link>
      </StyledFollowersUKnow>
      <Followers>
        {followers.map(follower => <Follower src={follower.avatar} />)}
      </Followers>
    </div>
  );
}

export default FollowersYouKnow;
