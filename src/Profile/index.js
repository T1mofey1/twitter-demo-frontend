/* @flow */
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import links from '../links';
import ProfileImage from './Image';
import Statistics from '../Statistics';
import Feed from '../Feed/index';
import ProfileInfo from './Info';
import FollowersUKnow from './FollowersUKnow';
import Media from './Media';
import WhoToFollow from './WhoToFollow';
import TrendList from './TrendList';
import Copyright from '../Additions';

type Props = {
  match: Match,
};

type State = {
  userData: {
    id: string,
    header: string,
    note: string,
    following_count: number,
    followers_count: number,
    statuses_count: number,
    avatar: string,
    created_at: string,
    display_name: string,
    username: string,
  },
  tweetsData: [],
};

export default class ProfilePage extends Component<Props, State> {
  state = {
    userData: {
      display_name: '',
      username: '',
      header: '',
      note: '',
      following_count: 0,
      followers_count: 0,
      statuses_count: 0,
      avatar: '',
      id: '',
      created_at: '',
    },
    tweetsData: [],
  };

  componentDidMount() {
    const hostname = 'https://twitter-demo.erodionov.ru';
    const secretCode = process.env.REACT_APP_SECRET_CODE || '';
    const {
      match: {
        params: { id },
      },
    } = this.props;

    fetch(`${hostname}/api/v1/accounts/${id}?access_token=${secretCode}`)
      .then(response => response.json())
      .then(userData => this.setState({ userData }))
      .catch(err => err);

    fetch(`${hostname}/api/v1/timelines/home/?access_token=${secretCode}`)
      .then(response => response.json())
      .then(tweetsData => this.setState({ tweetsData }))
      .catch(err => err);
  }

  render() {
    const { userData, tweetsData } = this.state;
    return (
      <div>
        <Helmet>
          <title>
            {userData.display_name ? userData.display_name : ''} (@
            {userData.username ? userData.username : ''}
            ) | Twitter
          </title>
        </Helmet>
        <ProfileImage header={userData.header} />
        <Statistics
          currentUser={userData.id}
          followers={userData.followers_count}
          following={userData.following_count}
          tweets={userData.statuses_count}
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <ProfileInfo
                name={userData.display_name}
                username={userData.username}
                avatar={userData.avatar}
                description={userData.note}
                joined={userData.created_at}
              />
              <FollowersUKnow currentUser={userData.id} />
              <Media currentUser={userData.id} />
            </div>
            <div className="col-lg-6">
              <Switch>
                <Route path={`/${userData.id}/following`} component={links} />
                <Route path={`/${userData.id}/followers`} component={links} />
                <Route path={`/${userData.id}/likes`} component={links} />
                <Route path={`/${userData.id}/lists`} component={links} />
                <Route
                  path={`/${userData.id}`}
                  render={() => (
                    <Feed tweets={tweetsData} avatar={userData.avatar} currentUser={userData.id} />
                  )}
                />
              </Switch>
            </div>
            <div className="col-lg-3">
              <WhoToFollow />
              <TrendList />
              <Copyright />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
