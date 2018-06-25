import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

export default class Trend extends Component {
  getCount(tweets) {
    if (tweets > 9999) {
      const count = (tweets / 1000).toFixed(1);
      return `${count}K`;
    }
    return tweets;
  }

  render() {
    return (
      <Link to={`search?q="${this.props.name}"`}>
        <StyledTrends>
          <Name>{this.props.name}</Name>
          {this.props.description ? (
            <Description>{this.props.description}</Description>
          ) : null}
          {this.props.count ? (
            <Count>{this.getCount(this.props.count)} Tweets</Count>
          ) : null}
        </StyledTrends>
      </Link>
    );
  }
}
