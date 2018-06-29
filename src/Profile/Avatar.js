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

function Avatar({ size }) {
  return (
    <StyledAvatar size={size} src={`${process.env.PUBLIC_URL}img/profileAvatar.png`} alt="Avatar" />
  );
}

export default Avatar;
