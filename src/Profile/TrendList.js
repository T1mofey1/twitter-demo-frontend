/* @flow */
import React from 'react';
import styled from 'styled-components';
import Trend from './Trend';

const trends = [
  {
    name: '#BringYourDogToWorkDay',
    description: '',
    count: 0,
  },
  {
    name: '#FridayFeeling',
    description: '',
    count: 12121,
  },
  {
    name: '#BrexitAnniversary',
    description: 'It’s one year since the UK voted to leave the European Union',
    count: 0,
  },
  {
    name: 'HMS Queen Elizabeth',
    description: '',
    count: 1036,
  },
  {
    name: 'Joe Budden',
    description: '',
    count: 1036,
  },
  {
    name: 'Trident',
    description: '',
    count: 6136,
  },
];

const TrendsWrap = styled.div`
  background: #fff;
  margin-top: 10px;
  padding-bottom: 50px;
`;

const BlockTitle = styled.span`
  display: inline-block;
  margin-top: 15px;
  margin-left: 16px;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.3px;
`;

const Change = styled.button`
  position: relative;
  cursor: pointer;
  background: #fff;
  border: none;
  margin-left: 15px;
  font-size: 12px;
  color: #1da1f2;
  &:before {
    cursor: default;
    content: "";
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #66757f;
    left: -5px;
    top: 7px;
  }
`;

export default function () {
  return (
    <TrendsWrap>
      <BlockTitle>United Kingdom Trends</BlockTitle>
      <Change>Change</Change>
      {trends.map(trend => (
        <Trend
          key={trend.name}
          name={trend.name}
          count={trend.count}
          description={trend.description}
        />
      ))}
    </TrendsWrap>
  );
}
