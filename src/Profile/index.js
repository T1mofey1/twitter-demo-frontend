import React from 'react';
import ProfileImage from './Image';
import Statistics from '../Statistics';
import Feed from '../Feed/index';
import ProfileInfo from './Info';
import FollowersUKnow from './FollowersUKnow';
import Media from './Media';
import WhoToFollow from './WhoToFollow';
import TrendList from './TrendList';
import Copyright from '../Additions';

function ProfilePage() {
  return (
    <div>
      <ProfileImage />
      <Statistics />
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <ProfileInfo />
            <FollowersUKnow />
            <Media />
          </div>
          <div className="col-lg-6">
            <Feed />
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
