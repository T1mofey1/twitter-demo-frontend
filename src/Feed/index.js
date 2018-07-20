/* @flow */
import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Head from './Head';
import TweetList from './TweetsList';
import Links from '../links';

const Feed = styled.div`
  background: white;
`;

type Props = {
  currentUser: string,
  tweets: [],
  avatar: string,
};

const Index = ({ currentUser, tweets, avatar }: Props) => (
  <Feed>
    <Head currentUser={currentUser} />
    <Switch>
      <Route
        path={`/${currentUser}`}
        render={() => <TweetList tweets={tweets} avatar={avatar} />}
      />
      <Route exact path={`/${currentUser}/with_replies`} component={Links} />
      <Route exact path={`/${currentUser}/media`} component={Links} />
    </Switch>
  </Feed>
);
export default Index;
