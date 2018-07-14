/* @flow */
import React from 'react';
import styled from 'styled-components';

const sizeBtn = {
  extrasmall: '6px 22px',
  small: '7px 24px',
  medium: '9px 27px',
  large: '10.5px 15px',
};

const StyledButton = styled.button`
  cursor: pointer;
  border-radius: 100px;
  border: 1px solid #1da1f2;
  font-weight: bold;
  font-size: 14px;
  background-color: ${({ color }) => (color === 'primary' ? '#1DA1F2' : '#fff')};
  color: ${({ color }) => (color === 'primary' ? '#fff' : '#1DA1F2')};
  padding: ${({ size }) => sizeBtn[size || 'm']};
  min-width: ${({ size }) => (size === 'large' ? '128px' : '0')};
  &:hover {
    background-color: ${({ color }) => (color === 'primary' ? '#009DE0;' : '#E5F5FB;')}
    border-color: #009DE0;
`;

type ButtonProps = {
  size: string,
  color: string,
  children: string,
};

function Button({ size, color, children }: ButtonProps) {
  return (
    <StyledButton size={size} color={color}>
      {children}
    </StyledButton>
  );
}

export default Button;
