/* @flow */
import React from 'react';
import styled from 'styled-components';

const avatarSize = {
  small: '32px',
  medium: '50px',
  large: '210px',
};

const StyledAvatar = styled.img`
  width: ${({ size }) => avatarSize[size] || 'auto'};
  height: ${({ size }) => avatarSize[size] || 'auto'};
  cursor: pointer;
  border-radius: 100px;
`;

type Props = {
  size: string,
  src: string,
};

const Avatar = ({ size, src }: Props) => <StyledAvatar size={size} src={src} alt="Avatar" />;

export default Avatar;
