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

type Props = {
  header: string,
};

const ImageProfile = ({ header }: Props) => <ProfileImage src={header} />;

export default ImageProfile;
