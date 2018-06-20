import React, { Component } from "react";
import styled from "styled-components";
import Avatar from "../Profile/Avatar";
import like from "../ui/icons/like.svg";
import comments from "../ui/icons/comments.svg";
import retweet from "../ui/icons/retweet.svg";
import envelope from "../ui/icons/envelope.svg";
import pinned from "../ui/icons/pinned.svg";
import loves from "../ui/icons/loves.svg";

const Feed = styled.div`
  margin-top: 6px;
  border-bottom: 1px solid #e1e8ed;
  position: relative;
`;

const AvatarWrap = styled.div`
  position: absolute;
  left: 15px;
  top: 15px;
`;

const StyledTweet = styled.div`
  padding-left: 71px;
  padding-right: 12px;
`;

const TweetHead = styled.div`
  margin-top: 10px;
  display: flex;
  text-align: left;
  align-items: center;
`;

const Name = styled.div``;

const UserName = styled.div`
  font-size: 15px;
  color: #707e88;
  margin-left: 4px;
  margin-right: 4px;
`;

const PostDate = styled.div`
  color: #707e88;
`;

const Content = styled.div`
  text-align: left;
`;

const Text = styled.div`
  line-height: 30px;
  font-size: 25px;
`;

const Img = styled.img`
  margin-top: 13px;
  width: 100%;
`;

const Activity = styled.div`
  margin-top: 13px;
  padding-bottom: 10px;
  dispaly: flex;
`;

const Comment = styled.div`
  margin-left: 25px;
  font-weight: 550;
  color: #667580;
  cursor: pointer;
  position: relative;
  font-size: 13px;
  &:after {
    content: "";
    background-image: url(${comments});
    background-repeat: no-repeat;
    display: block;
    width: 16px;
    height: 16px;
    background-size: contain;
    position: absolute;
    background-size: contain;
    top: 0px;
    left: -25px;
  }
`;

const Share = styled.div`
  margin-left: 25px;
  font-weight: 550;
  color: #667580;
  cursor: pointer;
  position: relative;
  font-size: 13px;
  &:after {
    content: "";
    background-image: url(${retweet});
    background-repeat: no-repeat;
    display: block;
    width: 20px;
    height: 14px;
    background-size: contain;
    position: absolute;
    background-size: contain;
    top: 0px;
    left: -25px;
  }
`;

const Likes = styled.div`
  margin-left: 25px;
  font-weight: 550;
  color: #e2264d;
  cursor: pointer;
  position: relative;
  font-size: 13px;
  &:after {
    content: "";
    background-image: url(${like});
    background-repeat: no-repeat;
    display: block;
    width: 16px;
    height: 14px;
    background-size: contain;
    position: absolute;
    background-size: contain;
    top: 0px;
    left: -25px;
  }
`;

const Liked = styled.div`
  margin-left: 25px;
  font-weight: 550;
  color: #667580;
  cursor: pointer;
  position: relative;
  font-size: 13px;
  &:after {
    content: "";
    background-image: url(${loves});
    background-repeat: no-repeat;
    display: block;
    width: 16px;
    height: 14px;
    background-size: contain;
    position: absolute;
    background-size: contain;
    top: 0px;
    left: -25px;
  }
`;

const Post = styled.div`
  margin-left: 25px;
  cursor: pointer;
  position: relative;
  &:after {
    content: "";
    background-image: url(${envelope});
    background-repeat: no-repeat;
    display: block;
    width: 15px;
    height: 14px;
    background-size: contain;
    position: absolute;
    background-size: contain;
    top: 0px;
    left: -25px;
  }
`;

const Pinned = styled.div`
  font-size: 12px;
  color: #707e88;
  margin-top: 7px;
  padding-left: 71px;
  position: relative;
  &:after {
    content: "";
    background-image: url(${pinned});
    background-repeat: no-repeat;
    display: block;
    width: 11px;
    height: 12px;
    background-size: contain;
    position: absolute;
    background-size: contain;
    top: 0px;
    left: 50px;
  }
`;

export default class Tweet extends Component {
  render() {
    return (
      <div>
        {this.props.pinned ? <Pinned>Pinned Tweet</Pinned> : null}
        <Feed>
          <AvatarWrap>
            <Avatar size="m" />
          </AvatarWrap>

          <StyledTweet>
            <TweetHead>
              <Name>{this.props.name}</Name>
              <UserName>{this.props.username}</UserName>
              <PostDate>{this.props.date}</PostDate>
            </TweetHead>
            <Content>
              <Text>{this.props.text}</Text>
              {this.props.img ? <Img src={this.props.img} /> : null}
            </Content>
            <Activity>
              <div className="row">
                <div className="col-lg-2">
                  <Comment>{this.props.comments}</Comment>
                </div>
                <div className="col-lg-2">
                  <Share>{this.props.share}</Share>
                </div>
                <div className="col-lg-2">
                  {this.props.liked ? (
                    <Likes>{this.props.likes}</Likes>
                  ) : (
                    <Liked>{this.props.likes}</Liked>
                  )}
                </div>
                <Post />
              </div>
            </Activity>
          </StyledTweet>
        </Feed>
      </div>
    );
  }
}
