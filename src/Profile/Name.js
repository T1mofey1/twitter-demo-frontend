/* @flow */
import styled from 'styled-components';
import tickIcon from './img/tick-icon.svg';

const Name = styled.div`
  display: inline-block;
  font-size: 22px;
  position: relative;
  color: #14171a;
  &:after {
    content: '';
    background-image: url(${({ verified }) => (verified === true ? tickIcon : '')});
    background-repeat: no-repeat;
    display: block;
    width: 18px;
    height: 18px;
    background-size: contain;
    position: absolute;
    background-size: contain;
    right: -25px;
    top: 5px;
  }
`;

export default Name;
