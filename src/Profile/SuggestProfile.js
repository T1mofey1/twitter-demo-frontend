/* @flow */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProfileName from './Name';
import Username from './UserName';
import Button from '../ui/Button';
import deleteIcon from './img/delete-icon.svg';

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
  width: 48px;
  height: 48px;
  border-radius: 100px;
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

type Props = {
  avatar: string,
  name: string,
  username: string,
  id: number,
};

const SuggestProfie = ({
  avatar, name, username, id,
}: Props) => (
  <Profile>
    <Link
      to={{
        pathname: `/${id}`,
      }}
    >
      <Avatar src={avatar} />
      <User>
        <StyledName>{name}</StyledName>
        <StyledUsername to={username}>{username}</StyledUsername>
      </User>
    </Link>
    <ButtonWrap>
      <Button size="extrasmall" color="">
        Follow
      </Button>
    </ButtonWrap>
    <Delete src={deleteIcon} alt="delete" />
  </Profile>
);

export default SuggestProfie;
