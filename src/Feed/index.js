import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Tweet from './Tweet';

const StyledLink = styled(Link)`
  color: #1da1f2;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const tweets = [
  {
    pinned: true,
    name: 'Every Interaction',
    username: '@EveryInteract',
    date: 1433019600000,
    text:
      'We’ve made some more resources for all you wonderful #design folk everyinteraction.com/resources/ #webdesign #UI',
    img: `${process.env.PUBLIC_URL}img/tweetPicture1.jpg`,
    comments: '',
    share: 17,
    likes: 47,
    liked: true,
  },
  {
    name: 'Every Interaction',
    username: '@EveryInteract',
    date: 1529960400000,
    text: 'Our new website concept, Taking you from… @EveryInteract instagram.com/p/BNFGrfhBP3M/',
    img: '',
    comments: 1,
    share: 4,
    likes: 2,
    liked: false,
  },
  {
    name: 'Every Interaction',
    username: '@EveryInteract',
    date: 1516568400000,
    text:
      'Variable web fonts are coming, and will open a world of opportunities for weight use online',
    img: `${process.env.PUBLIC_URL}img/tweetPicture2.jpg`,
    comments: 1,
    share: 1,
    likes: 1,
  },
];

const Feed = styled.div`
  background: white;
`;

const FeedHead = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #e1e8ed;
  margin-top: 6px;
  padding-top: 15px;
  padding-bottom: 9.5px;
  font-weight: Bold;
  font-size: 18px;
  background: white;
  color: #1da1f2;
`;

const Tweets = styled.div`
  margin-right: 35px;
  margin-left: 16px;
  cursor: pointer;
  color: black;
`;

const Replies = styled.div`
  margin-right: 35px;
  cursor: pointer;
`;

const Media = styled.div`
  cursor: pointer;
`;

export default function () {
  return (
    <Feed>
      <FeedHead>
        <StyledLink to="/EveryInteract/">
          <Tweets>
Tweets
          </Tweets>
        </StyledLink>
        <StyledLink to="/EveryInteract/with_replies">
          <Replies>
Tweets & replies
          </Replies>
        </StyledLink>
        <StyledLink to="/EveryInteract/media">
          <Media>
Media
          </Media>
        </StyledLink>
      </FeedHead>
      {tweets.map(tweet => (
        <Tweet
          pinned={tweet.pinned}
          name={tweet.name}
          username={tweet.username}
          date={tweet.date}
          text={tweet.text}
          img={tweet.img}
          comments={tweet.comments}
          share={tweet.share}
          likes={tweet.likes}
          liked={tweet.liked}
        />
      ))}
    </Feed>
  );
}
