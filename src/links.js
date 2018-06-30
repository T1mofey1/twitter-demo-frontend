import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const WhereIam = styled.p`
  font-size: 25px;
  padding-top: 50px;
  text-align: center;
`;

export default ({ match }) => (
  <div>
    <Helmet>
      <title>{match.url.slice(1)}</title>
    </Helmet>
    <WhereIam>{match.url.slice(1)}</WhereIam>
  </div>
);
