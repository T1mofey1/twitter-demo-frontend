import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
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

export default class ProfilePage extends Component {
  state = {
    userData: { display_name: '', username: '' },
    tweetsData: [],
  };

  componentDidMount() {
    const hostname = 'https://twitter-demo.erodionov.ru';
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const secretCode = process.env.REACT_APP_SECRET_CODE;

    fetch(`${hostname}/api/v1/accounts/${id}?access_token=${secretCode}`)
      .then(response => response.json())
      .then(userData => this.setState({ userData }));

    fetch(`${hostname}/api/v1/timelines/home/?access_token=${secretCode}`)
      .then(response => response.json())
      .then(tweetsData => this.setState({ tweetsData }));
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
              <FollowersUKnow />
              <Media />
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
