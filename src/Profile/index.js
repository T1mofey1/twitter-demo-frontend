import React from 'react';
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

function ProfilePage({
  match: {
    url,
    params: { user },
  },
  location: { state = { user: { name: 'Every Interaction', username: 'EveryInteract' } } },
}) {
  return (
    <div>
      <Helmet>
        <title>
          {url.slice(1)} (@
          {url.slice(1)}
          ) | Twitter
        </title>
      </Helmet>
      <ProfileImage />
      <Statistics currentUser={user} />
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <ProfileInfo user={state.user} />
            <FollowersUKnow currentUser={user} />
            <Media currentUser={user} />
          </div>
          <div className="col-lg-6">
            <Switch>
              <Route path={`/${user}/following`} component={links} />
              <Route path={`/${user}/followers`} component={links} />
              <Route path={`/${user}/likes`} component={links} />
              <Route path={`/${user}/lists`} component={links} />
              <Route path={`/${user}`} render={() => <Feed currentUser={user} />} />
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

export default ProfilePage;
