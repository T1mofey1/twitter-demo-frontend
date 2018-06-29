import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Copyright = styled.div`
  display: flex;
  margin-top: 23px;
  margin-right: 20px;
  flex-wrap: wrap;
`;

const StyledLink = styled(Link)`
  font-size: 13px;
  padding-right: 5px;
  padding-top: 5px;
  color: #718290;
`;

export default function () {
  return (
    <Copyright>
      <StyledLink to="/">
© 2018 Twitter
      </StyledLink>
      <StyledLink to="/about">
About
      </StyledLink>
      <StyledLink to="/help">
Help Center
      </StyledLink>
      <StyledLink to="/terms">
Terms
      </StyledLink>
      <StyledLink to="/privacy_policy">
Privacy policy
      </StyledLink>
      <StyledLink to="/cookies">
Cookies
      </StyledLink>
      <StyledLink to="/ads_info">
Ads info
      </StyledLink>
    </Copyright>
  );
}
