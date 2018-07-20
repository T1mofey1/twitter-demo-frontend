/* @flow */
import React from 'react';
import styled from 'styled-components';
import logo from './icons/logo.svg';

const Logo = styled.img`
  cursor: pointer;
`;

export default function () {
  return <Logo src={logo} alt="Twitter" />;
}
