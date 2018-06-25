import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import followersIcon from "./img/followers-icon.svg";

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
`;

function FollowersYouKnow(props) {
  return (
    <div>
      <StyledFollowersUKnow>
        <Icon src={followersIcon} alt="Followers you know" />
        <Link to="/EveryInteract/followers_you_follow">
          <LinkText>6 Followers you know</LinkText>
        </Link>
      </StyledFollowersUKnow>
      <Followers>
        <Link to="/follower1">
          <Follower
            src={process.env.PUBLIC_URL + "/img/follower1.png"}
            alt="Follower 1"
          />
        </Link>
        <Link to="/follower2">
          <Follower
            src={process.env.PUBLIC_URL + "/img/follower2.png"}
            alt="Follower 2"
          />
        </Link>
        <Link to="/follower3">
          <Follower
            src={process.env.PUBLIC_URL + "img/follower3.png"}
            alt="Follower 3"
          />
        </Link>
        <Link to="follower4">
          <Follower
            src={process.env.PUBLIC_URL + "img/follower4.png"}
            alt="Follower 4"
          />
        </Link>
        <Link to="/follower5">
          <Follower
            src={process.env.PUBLIC_URL + "img/follower5.png"}
            alt="Follower 5"
          />
        </Link>
        <Link to="/follower6">
          <Follower
            src={process.env.PUBLIC_URL + "img/follower6.png"}
            alt="Follower 6"
          />
        </Link>
      </Followers>
    </div>
  );
}

export default FollowersYouKnow;
