/* @flow */
import React from 'react';
import styled from 'styled-components';
import formatDate from '../utills/formatDate';
import Avatar from '../Profile/Avatar';
import likeIcon from '../ui/icons/like-icon.svg';
import commentsIcon from '../ui/icons/comments-icon.svg';
import retweetIcon from '../ui/icons/retweet-icon.svg';
import envelopeIcon from '../ui/icons/envelope-icon.svg';
import pinnedIcon from '../ui/icons/pinned-icon.svg';
import lovesIcon from '../ui/icons/loves-icon.svg';

const Feed = styled.div`
  margin-top: 6px;
  border-bottom: 1px solid #e1e8ed;
  position: relative;
  p {
    margin: 0;
  }
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

const Image = styled.img`
  margin-top: 13px;
  width: 100%;
`;

const Activity = styled.div`
  margin-top: 13px;
  padding-bottom: 10px;
  dispaly: flex;
  justify-content: center;
`;

const Comment = styled.button`
  display: flex;
  border: none;
  background: #fff;
  font-weight: 550;
  color: #667580;
  cursor: pointer;
  position: relative;
  font-size: 13px;
`;

const Share = styled.button`
  display: flex;
  border: none;
  background: #fff;
  font-weight: 550;
  color: #667580;
  cursor: pointer;
  position: relative;
  font-size: 13px;
`;

const Likes = styled.button`
  display: flex;
  border: none;
  background: #fff;
  font-weight: 550;
  color: #e2264d;
  cursor: pointer;
  position: relative;
  font-size: 13px;
`;

const Liked = styled.button`
  display: flex;
  border: none;
  background: #fff;
  font-weight: 550;
  color: #667580;
  cursor: pointer;
  position: relative;
  font-size: 13px;
`;

const Post = styled.button`
  display: flex;
  border: none;
  background: #fff;
  cursor: pointer;
  position: relative;
`;

const Pinned = styled.div`
  font-size: 12px;
  color: #707e88;
  margin-top: 7px;
  padding-left: 71px;
  position: relative;
  &:after {
    content: '';
    background-image: url(${pinnedIcon});
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

const Icon = styled.img`
  padding-right: 3px;
`;

type TweetProps = {
  pinned: boolean,
  name: string,
  username: string,
  date: string,
  text: string,
  images: [],
  comments: number | void,
  share: number | void,
  likes: boolean,
  liked: number | void,
  avatar: string,
};

const Tweet = ({
  pinned,
  name,
  username,
  date,
  text,
  images,
  comments,
  share,
  likes,
  liked,
  avatar,
}: TweetProps) => (
  <div>
    {pinned && <Pinned>Pinned Tweet</Pinned>}
    <Feed>
      <AvatarWrap>
        <Avatar src={avatar} size="medium" />
      </AvatarWrap>

      <StyledTweet>
        <TweetHead>
          <Name>{name}</Name>
          <UserName to="/:id">@{username}</UserName>
          <PostDate>• {formatDate(+new Date(date))}</PostDate>
        </TweetHead>
        <Content>
          <Text dangerouslySetInnerHTML={{ __html: text }} />
          {images ? images.map(image => <Image src={image.url} />) : null}
        </Content>
        <Activity>
          <div className="row">
            <div className="col-lg-2">
              <Comment>
                <Icon src={commentsIcon} />
                {comments}
              </Comment>
            </div>
            <div className="col-lg-2">
              <Share>
                <Icon src={retweetIcon} />
                {share}
              </Share>
            </div>
            <div className="col-lg-2">
              {liked ? (
                <Likes>
                  <Icon src={likeIcon} />
                  {likes}
                </Likes>
              ) : (
                <Liked>
                  <Icon src={lovesIcon} />
                  {likes}
                </Liked>
              )}
            </div>
            <Post>
              <Icon src={envelopeIcon} />
            </Post>
          </div>
        </Activity>
      </StyledTweet>
    </Feed>
  </div>
);

export default Tweet;
