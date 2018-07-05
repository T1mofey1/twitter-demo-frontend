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
    const secretCode = process.env.REACT_APP_SECRET_CODE;

    fetch(`${hostname}/api/v1/accounts/1?access_token=${secretCode}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject();
      })
      .then(userData => this.setState({ userData }));
    fetch(`${hostname}/api/v1/timelines/home/?access_token=${secretCode}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject();
      })
      .then(tweetsData => this.setState({ tweetsData }));
  }

  render() {
    const { userData, tweetsData } = this.state;
    return (
      <div>
        <Helmet>
          <title>
            {userData.display_name} (@
            {userData.username}
            ) | Twitter
          </title>
        </Helmet>
        <ProfileImage header={userData.header} />
        <Statistics
          currentUser={userData.username}
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
                <Route path={`/${userData.username}/following`} component={links} />
                <Route path={`/${userData.username}/followers`} component={links} />
                <Route path={`/${userData.username}/likes`} component={links} />
                <Route path={`/${userData.username}/lists`} component={links} />
                <Route
                  path={`/${userData.username}`}
                  render={() => (
                    <Feed
                      tweets={tweetsData}
                      avatar={userData.avatar}
                      currentUser={userData.username}
                    />
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
