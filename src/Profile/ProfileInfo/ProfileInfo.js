import React, { Component } from "react";
import styled from "styled-components";
import Button from "../../ui/Button";
import Avatar from "../Avatar";
import ProfileName from "./ProfileName";
import UserName from "./UserName";
import link from "./link.svg";
import location from "./location.svg";
import joined from "./joined.svg";

const Info = styled.div`
  text-align: left;
  position: relative;
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

  &:after {
    content: "";
    background-image: url(${location});
    background-repeat: no-repeat;
    display: block;
    width: 15px;
    height: 16px;
    background-size: contain;
    position: absolute;
    background-size: contain;
    left: -24px;
    top: 2px;
  }
`;

const UserLink = styled.a`
  position: relative;
  font-size: 14px;
  margin-left: 20px;
  text-decoration: none;

  &:after {
    content: "";
    background-image: url(${link});
    background-repeat: no-repeat;
    display: block;
    width: 16px;
    height: 17px;
    background-size: contain;
    position: absolute;
    background-size: contain;
    left: -24px;
    top: 0px;
  }
`;

const RegistrationDate = styled.div`
  position: relative;
  font-size: 14px;
  color: #657786;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: 20px;

  &:after {
    content: "";
    background-image: url(${joined});
    background-repeat: no-repeat;
    display: block;
    width: 16px;
    height: 16px;
    background-size: contain;
    position: absolute;
    background-size: contain;
    left: -25px;
    top: 0px;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 16px;
`;

export default class ProfileInfo extends Component {
  render() {
    return (
      <Info>
        <AvatarWrap>
          <Avatar size="l" />
        </AvatarWrap>
        <ProfileName verifyed="true">Every Interaction</ProfileName>
        <UserName href="https://twitter.com/everyinteract">
          @EveryInteract
        </UserName>
        <ProfileDescription>
          UX Design studio focussed problem solving creativity. Design to us is
          how can we make things *work* amazing.
        </ProfileDescription>
        <UserLocation>London, UK</UserLocation>
        <UserLink href="https://www.everyinteraction.com/">
          everyinteraction.com
        </UserLink>
        <RegistrationDate>Joined May 2008</RegistrationDate>
        <ButtonWrap>
          <Button color="primary" size="l">
            Tweet to
          </Button>
          <Button color="primary" size="l">
            Message
          </Button>
        </ButtonWrap>
      </Info>
    );
  }
}
