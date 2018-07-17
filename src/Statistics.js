/* @flow */
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Button from './ui/Button';
import MoreOptions from './ui/MoreOptions';

const StyledLink = styled(NavLink)`
  text-decoration: none;
  border-bottom: 4px solid transparent;
  transition: 0.5s;
  color: #788a98;
  &:hover {
    border-bottom: 4px solid #1da1f2;
    color: #1da1f2;
  }
  &.active {
    border-bottom: 4px solid #1c94e0;
    color: #1da1f2;
  }
`;

const ProfieNav = styled.div`
  display: flex;
`;

const StatisticsNav = styled.div`
  position: relative;
  box-shadow: 0px 2px 2px #b0b8be;
  background: white;
`;

const StatisticsBtnWrap = styled.div`
  cursor: pointer;
  line-height: 21px;
  font-size: 12px;
  text-align: center;
  padding: 6px 15px 7px;
`;

const Text = styled.div`
  line-height: 21px;
  font-size: 12px;
  font-weight: bold;
  color: #788a98;
`;

const Quanity = styled.div`
  line-height: 21px;
  font-size: 18px;
  font-weight: bold;
  color: inherit;
  &:hover {
    color: #1da1f2;
  }
  &.active {
    color: blue;
  }
`;

function StatisticsBtn({ children, quanity }) {
  return (
    <StatisticsBtnWrap>
      <Text>{children}</Text>
      <Quanity>{quanity}</Quanity>
    </StatisticsBtnWrap>
  );
}

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`;

const OptionsWrap = styled.div`
  margin-left: 18px;
  margin-top: 11px;
`;

type Props = {
  currentUser: string,
  followers: number | null,
  following: number | null,
  tweets: number | null,
};

const Statistics = ({
  currentUser, followers, following, tweets,
}: Props) => (
  <StatisticsNav>
    <div className="container">
      <div className="row">
        <div className="col-lg-offset-3 col-lg-4">
          <ProfieNav>
            <StyledLink exact to={`/${currentUser}`}>
              <StatisticsBtn quanity={tweets || 0}>Tweets</StatisticsBtn>
            </StyledLink>
            <StyledLink to={`/${currentUser}/following`}>
              <StatisticsBtn quanity={following || 0}>Following</StatisticsBtn>
            </StyledLink>
            <StyledLink to={`/${currentUser}/followers`}>
              <StatisticsBtn quanity={followers || 0}>followers</StatisticsBtn>
            </StyledLink>
            <StyledLink to={`/${currentUser}/likes`}>
              <StatisticsBtn quanity="460">likes</StatisticsBtn>
            </StyledLink>
            <StyledLink to={`/${currentUser}/lists`}>
              <StatisticsBtn quanity="2">lists</StatisticsBtn>
            </StyledLink>
          </ProfieNav>
        </div>
        <div className="col-lg-offset-3 col-lg-2">
          <ButtonWrap>
            <Button size="medium" color="">
              Follow
            </Button>
            <OptionsWrap>
              <MoreOptions />
            </OptionsWrap>
          </ButtonWrap>
        </div>
      </div>
    </div>
  </StatisticsNav>
);

export default Statistics;
