import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Head from './Head';
import TweetList from './TweetsList';
import Links from '../links';

const Feed = styled.div`
  background: white;
`;

export default function ({ currentUser }) {
  return (
    <Feed>
      <Head currentUser={currentUser} />
      <Switch>
        <Route exact path={`/${currentUser}`} component={TweetList} />
        <Route exact path={`/${currentUser}/with_replies`} component={Links} />
        <Route exact path={`/${currentUser}/media`} component={Links} />
      </Switch>
    </Feed>
  );
}
