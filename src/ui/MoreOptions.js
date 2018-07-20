/* @flow */
import React from 'react';
import styled from 'styled-components';
import more from './icons/more.svg';

const OptionsButton = styled.img`
  width: 4px;
  height: 14px;
  cursor: pointer;
`;

function MoreOptions() {
  return <OptionsButton src={more} alt="More" />;
}

export default MoreOptions;
