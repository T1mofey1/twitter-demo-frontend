/* @flow */
import React from 'react';
import styled from 'styled-components';

const ProfileImage = styled.img`
  display: block;
  width: 100%;
  max-height: 380px;
  margin: 0 auto;
  object-fit: cover;
`;

type ImageProps = {
  header: string,
};

const ImageProfile = ({ header }: ImageProps) => <ProfileImage src={header} />;

export default ImageProfile;
