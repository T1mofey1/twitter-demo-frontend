import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SuggestProfile from "./SuggestProfile";
import peopleIcon from "./img/people-icon.svg";

const WhoToFollow = styled.div`
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
    content: "";
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
    content: "";
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

export default function(props) {
  return (
    <WhoToFollow>
      <BlockTitle>Who to follow</BlockTitle>
      <RefreshBtn>Refresh</RefreshBtn>
      <Link to="">
        <ViewAll>View all</ViewAll>
      </Link>
      <SuggestProfile
        avatar="avatar1"
        name="AppleInsider"
        username="@appleinsider"
      />
      <SuggestProfile
        avatar="avatar2"
        name="AppleInsider"
        username="@appleinsider"
      />
      <SuggestProfile
        avatar="avatar3"
        name="AppleInsider"
        username="@appleinsider"
      />
      <Link to="/findpeople">
        <FindPeople>
          <Icon src={peopleIcon} alt="people" />Find people you know
        </FindPeople>
      </Link>
    </WhoToFollow>
  );
}
