/* @flow */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledTrends = styled.div`
  background: #fff;
  margin-top: 10px;
  margin-left: 16px;
`;

const Name = styled.div`
  font-size: 15px;
  font-weight: bold;
`;
const Description = styled.span`
  font-size: 12px;
  color: #657786;
`;
const Count = styled.span`
  font-size: 12px;
  color: #657786;
`;

function getCount(tweets) {
  if (tweets > 9999) {
    const count = (tweets / 1000).toFixed(1);
    return `${count}K`;
  }
  return tweets;
}

type Props = {
  name: string,
  description: null | string,
  count: null | number,
};

const Trend = ({ name, description, count }: Props) => (
  <Link to={`search?q="${name}"`}>
    <StyledTrends>
      <Name>{name}</Name>
      {description ? <Description>{description}</Description> : null}
      {count ? <Count>{getCount(count)} Tweets</Count> : null}
    </StyledTrends>
  </Link>
);

export default Trend;
