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
import loadUserAction from './loadUser';
import loadTweetsAction from '../Feed/loadTweets';
import loadUserFollowers from './loadFollowers';

type Props = {
  match: Match,
  dispatch: Function,
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
    username: string
  },
  tweetsData: [],
  followersData: []
};

const mapStateToProps = state => ({
  userData: state.user,
  tweetsData: state.tweets,
  followersData: state.followers,
});

class ProfilePage extends Component<Props> {
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      dispatch,
    } = this.props;

    dispatch(loadUserAction(id));

    dispatch(loadTweetsAction(id));

    dispatch(loadUserFollowers(id));
  }

  componentDidUpdate(prevProps) {
    const {
      match: {
        params: { id },
      },
      dispatch,
    } = this.props;
    if (prevProps.match.params.id !== id) {
      dispatch(loadUserAction(id));

      dispatch(loadTweetsAction(id));

      dispatch(loadUserFollowers(id));
    }
  }

  render() {
    const { userData, tweetsData, followersData } = this.props;
    return (
      <div>
        <Helmet>
          <title>
            {userData.display_name ? userData.display_name : ''} (@
            {userData.username ? userData.username : ''}) | Twitter
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
              <FollowersUKnow
                currentUser={userData.id}
                followers={followersData}
              />
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
                    <Feed
                      tweets={tweetsData}
                      avatar={userData.avatar}
                      currentUser={userData.id}
                    />
                  )}
                />
              </Switch>
            </div>
            <div className="col-lg-3">
              <WhoToFollow followers={followersData} />
              <TrendList />
              <Copyright />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(ProfilePage);
