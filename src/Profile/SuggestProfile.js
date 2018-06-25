import React from "react";
import styled from "styled-components";
import ProfileName from "./ProfileName";
import Username from "./UserName";
import Button from "../ui/Button";
import deleteIcon from "./img/delete-icon.svg";

const Profile = styled.div`
  border-bottom: 1px solid #e6ecf0;
  margin-left: 16px;
  margin-right: 16px;
  position: relative;
`;

const User = styled.div`
  display: flex;
  margin-top: 15px;
  margin-left: 60px;
  cursor: pointer;
`;

const Avatar = styled.img`
  position: absolute;
`;

const StyledName = styled(ProfileName)`
  font-size: 13px;
  font-weight: bold;
`;

const StyledUsername = styled(Username)`
  font-size: 13px;
  margin-left: 2px;
`;

const ButtonWrap = styled.div`
  margin-top: 7px;
  margin-left: 60px;
  margin-bottom: 16px;
`;

const Delete = styled.img`
  position: absolute;
  right: 0px;
  top: 0px;
  cursor: pointer;
`;

export default function(props) {
  return (
    <Profile>
      <Avatar
        src={process.env.PUBLIC_URL + "img/" + props.avatar + ".png"}
        alt={props.name}
      />
      <User>
        <StyledName verified={props.verified}>{props.name}</StyledName>
        <StyledUsername to={props.username}>{props.username}</StyledUsername>
      </User>
      <ButtonWrap>
        <Button size="extrasmall">Follow</Button>
      </ButtonWrap>
      <Delete src={deleteIcon} alt="delete" />
    </Profile>
  );
}
