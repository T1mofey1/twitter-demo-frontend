import React, { Component } from "react";
import styled from "styled-components";
import Button from "../ui/Button";
import Avatar from "./Avatar";
import ProfileName from "./ProfileName";
import UserName from "./UserName";
import linkIcon from "./img/link-icon.svg";
import locationIcon from "./img/location-icon.svg";
import joinedIcon from "./img/joined-icon.svg";

const Info = styled.div`
  text-align: left;
  position: relative;
  margin-top: 40px;
`;

const UserNameWrap = styled.div`
  margin-top: 6px;
`;

const AvatarWrap = styled.div`
  position: absolute;
  top: -230px;
  border: 1px solid #e7ecf0;
  border-radius: 100px;
  background: #fff;
`;

const ProfileDescription = styled.div`
  line-height: 20px;
  font-size: 14px;
  margin-top: 13px;
  margin-right: 35px;
`;

const UserLocation = styled.div`
  position: relative;
  font-size: 14px;
  color: #657786;
  margin-top: 13px;
  margin-bottom: 10px;
  margin-left: 20px;
`;

const UserLink = styled.a`
  position: relative;
  font-size: 14px;
  margin-left: 20px;
  text-decoration: none;
`;

const RegistrationDate = styled.div`
  position: relative;
  font-size: 14px;
  color: #657786;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: 20px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 16px;
`;

const Icon = styled.img`
position: absolute;
left -25px;
`;

export default class ProfileInfo extends Component {
  render() {
    return (
      <Info>
        <AvatarWrap>
          <Avatar size="large" />
        </AvatarWrap>
        <ProfileName verified={true}>Every Interaction</ProfileName>
        <UserNameWrap>
          <UserName to="/Everyinteraction">@EveryInteract</UserName>
        </UserNameWrap>
        <ProfileDescription>
          UX Design studio focussed problem solving creativity. Design to us is
          how can we make things *work* amazing.
        </ProfileDescription>
        <UserLocation>
          <Icon src={locationIcon} alt="location" />London, UK
        </UserLocation>
        <UserLink href="https://www.everyinteraction.com/">
          <Icon src={linkIcon} alt="Link" />
          everyinteraction.com
        </UserLink>
        <RegistrationDate>
          <Icon src={joinedIcon} alt="Joined" />Joined May 2008
        </RegistrationDate>
        <ButtonWrap>
          <Button color="primary" size="large">
            Tweet to
          </Button>
          <Button color="primary" size="large">
            Message
          </Button>
        </ButtonWrap>
      </Info>
    );
  }
}
