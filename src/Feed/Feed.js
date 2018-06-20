import React from "react";
import styled from "styled-components";
import Tweet from "./Tweet";

const TextLink = styled.a`
  text-decoration: none;
`;

const LittleText = styled.span`
  line-height: 22px;
  font-size: 16px;
`;

const tweets = [
  {
    pinned: true,
    name: "Every Interaction",
    username: "@EveryInteract",
    date: "• 2 Mar 2015",
    text: (
      <span>
        We’ve made some more resources for all you wonderful
        <TextLink href=""> #design</TextLink> folk
        <TextLink href="https://www.everyinteraction.com/resources/">
          {" "}
          everyinteraction.com/resources/
        </TextLink>
        <TextLink href=""> #webdesign </TextLink>
        <TextLink href="">#UI</TextLink>
      </span>
    ),
    img: process.env.PUBLIC_URL + "tweetPicture1.jpg",
    comments: "",
    share: 17,
    likes: 47,
    liked: true
  },
  {
    name: "Every Interaction",
    username: "@EveryInteract",
    date: "• 23h",
    text: (
      <span>
        Our new website concept, Taking you<br /> from… @ Every Interaction{" "}
        <TextLink href="https://www.instagram.com/p/BNFGrfhBP3M/">
          instagram.com/p/BNFGrfhBP3M/
        </TextLink>
      </span>
    ),
    img: "",
    comments: 1,
    share: 4,
    likes: 2,
    liked: false
  },
  {
    name: "Every Interaction",
    username: "@EveryInteract",
    date: "• Nov 18",
    text: (
      <LittleText>
        Variable web fonts are coming, and will open a world of opportunities
        for weight use online
      </LittleText>
    ),
    img: process.env.PUBLIC_URL + "tweetPicture2.jpg",
    comments: "",
    share: "",
    likes: ""
  }
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

export default function() {
  return (
    <Feed>
      <FeedHead>
        <Tweets>Tweets</Tweets>
        <Replies>Tweets & replies</Replies>
        <Media>Media</Media>
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
