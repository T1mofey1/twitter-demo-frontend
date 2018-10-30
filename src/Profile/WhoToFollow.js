/* @flow */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SuggestProfile from './SuggestProfile';
import peopleIcon from './img/people-icon.svg';

const Follow = styled.div`
  margin-top: 6px;
  background: #fff;
`;

const BlockTitle = styled.span`
  display: inline-block;
  margin-left: 13px;
  margin-top: 14px;
  font-size: 17px;
  font-weight: bold;
`;

const RefreshBtn = styled.button`
  position: relative;
  cursor: pointer;
  background: #fff;
  border: none;
  margin-left: 13px;
  margin-right: 11px;
  font-size: 12px;
  color: #1da1f2;
  &:before {
    cursor: default;
    content: '';
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #66757f;
    left: -5px;
    top: 7px;
  }
`;

const ViewAll = styled.span`
  font-size: 12px;
  position: relative;

  &:before {
    cursor: default;
    content: '';
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #66757f;
    left: -9px;
    top: 7px;
  }
`;

const FindPeople = styled.span`
  position: relative;
  display: inline-block;
  bottom: 0px;
  font-size: 13px;
  margin-left: 36px;
  margin-top: 23px;
  margin-bottom: 20px;
`;
const Icon = styled.img`
  position: absolute;
  width: 16px;
  height: 13px;
  left: -20px;
`;

type Props = {
  followers: [],
};

const WhoToFollow = ({ followers }: Props) => (
  <Follow>
    <BlockTitle>Who to follow</BlockTitle>
    <RefreshBtn>Refresh</RefreshBtn>
    <Link to="/who_to_follow/suggestions">
      <ViewAll>View all</ViewAll>
    </Link>
    {Object.values(followers).map(profile => (
      <SuggestProfile
        key={profile.id}
        id={profile.id}
        avatar={profile.avatar_static}
        name={profile.name}
        username={profile.username}
      />
    ))}
    <Link to="/findpeople">
      <FindPeople>
        <Icon src={peopleIcon} alt="people" />
        Find people you know
      </FindPeople>
    </Link>
  </Follow>
);
export default WhoToFollow;
