import React from 'react';
import Tweet from './Tweet';

const tweets = [
  {
    pinned: true,
    name: 'Every Interaction',
    username: '@EveryInteract',
    date: 1433019600000,
    text:
      'We’ve made some more resources for all you wonderful #design folk everyinteraction.com/resources/ #webdesign #UI',
    img: `${process.env.PUBLIC_URL}img/tweetPicture1.jpg`,
    share: 17,
    likes: 47,
    liked: true,
  },
  {
    name: 'Every Interaction',
    username: '@EveryInteract',
    date: 1529960400000,
    text: 'Our new website concept, Taking you from… @EveryInteract instagram.com/p/BNFGrfhBP3M/',
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

export default function () {
  return (
    <div>
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
    </div>
  );
}
