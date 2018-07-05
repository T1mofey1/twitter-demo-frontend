import React from 'react';
import Tweet from './Tweet';

export default function ({ tweets, avatar }) {
  return (
    <div>
      {tweets.map(tweet => (
        <Tweet
          pinned={tweet.pinned}
          avatar={avatar}
          name={tweet.account.display_name}
          username={tweet.account.username}
          date={tweet.created_at}
          text={tweet.content}
          images={tweet.media_attachments}
          comments={tweet.comments}
          share={tweet.reblogs_count}
          likes={tweet.favourites_count}
          liked={tweet.favourited}
        />
      ))}
    </div>
  );
}
