/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import loadUserAction from '../actions/loadUser';
import loadTweetsAction from '../actions/loadTweets';

type Props = {
  match: Match,
  loadTweets: [],
  loadUser: [],
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

const mapStateToProps = state => ({
  userData: state.user,
  tweetsData: state.tweets,
});

const mapDispatchToProps = dispatch => ({
  loadUser: id => dispatch(loadUserAction(id)),
  loadTweets: () => dispatch(loadTweetsAction()),
});

class ProfilePage extends Component<Props> {
  componentDidMount() {
    const {
      loadTweets,
      loadUser,
      match: {
        params: { id },
      },
    } = this.props;

    loadUser(id);

    loadTweets();
  }

  render() {
    const { userData, tweetsData } = this.props;
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfilePage);
