import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./ui/Button";
import MoreOptions from "./ui/MoreOptions";

const StyledLink = styled(Link)`
  text-decoration: none;
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
  border-bottom: ${props =>
    props.active === true ? "4px solid #1DA1F2" : NaN};
  cursor: pointer;
  line-height: 21px;
  font-size: 12px;
  text-align: center;
  padding: 6px 15px 7px;

  &:hover {
    border-bottom: 4px solid #1da1f2;
  }
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
  color: ${props => (props.active === true ? "#1DA1F2;" : "#788a98;")};

  &:hover {
    color: #1da1f2;
  }
`;

const StatisticsBtn = function(props, active, quanity) {
  return (
    <StatisticsBtnWrap active={props.active}>
      <Text active={props.active}>{props.children}</Text>
      <Quanity quanity={quanity} active={props.active}>
        {props.quanity}
      </Quanity>
    </StatisticsBtnWrap>
  );
};

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`;

const OptionsWrap = styled.div`
  margin-left: 18px;
  margin-top: 11px;
`;

function Statistics() {
  return (
    <StatisticsNav>
      <div className="container">
        <div className="row">
          <div className="col-lg-offset-3 col-lg-4">
            <ProfieNav>
              <StyledLink to="/EveryInteract/">
                <StatisticsBtn active={true} quanity="8,058">
                  Tweets
                </StatisticsBtn>
              </StyledLink>
              <StyledLink to="/EveryInteract/following">
                <StatisticsBtn active={false} quanity="721">
                  Following
                </StatisticsBtn>
              </StyledLink>
              <StyledLink to="/EveryInteract/followers">
                <StatisticsBtn active={false} quanity="1,815">
                  followers
                </StatisticsBtn>
              </StyledLink>
              <StyledLink to="/EveryInteract/likes">
                <StatisticsBtn active={false} quanity="460">
                  likes
                </StatisticsBtn>
              </StyledLink>
              <StyledLink to="/EveryInteract/lists">
                <StatisticsBtn active={false} quanity="2">
                  lists
                </StatisticsBtn>
              </StyledLink>
            </ProfieNav>
          </div>
          <div className="col-lg-offset-3 col-lg-2">
            <ButtonWrap>
              <Button size="m">Follow</Button>
              <OptionsWrap>
                <MoreOptions />
              </OptionsWrap>
            </ButtonWrap>
          </div>
        </div>
      </div>
    </StatisticsNav>
  );
}

export default Statistics;
