/* @flow */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import mediaIcon from './img/media-icon.svg';

const publicPath = process.env.PUBLIC_URL || '';

const mediaFiles = [
  {
    picture: `${publicPath}img/media1.png`,
  },
  {
    picture: `${publicPath}img/media2.png`,
  },
  {
    picture: `${publicPath}img/media3.png`,
  },
  {
    picture: `${publicPath}img/media4.png`,
  },
  {
    picture: `${publicPath}img/media5.png`,
  },
  {
    picture: `${publicPath}img/media6.png`,
  },
];

const StyledMedia = styled.div`
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

const Pictures = styled.div`
  margin-top: 8px;
`;

const Picture = styled.img`
  width: 83px;
  height: 83px;
  border-radius: 2px;
  margin-right: 5px;
  margin-bottom: 3px;
`;

type MediaProps = {
  currentUser: string,
};

const Media = ({ currentUser }: MediaProps) => (
  <div>
    <StyledMedia>
      <Icon src={mediaIcon} alt="Media" />
      <Link to={`/${currentUser}/media`}>
        <LinkText>522 Photos and videos</LinkText>
      </Link>
    </StyledMedia>
    <Pictures>{mediaFiles.map(media => <Picture src={media.picture} />)}</Pictures>
  </div>
);

export default Media;
