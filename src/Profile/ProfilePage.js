import React from "react";
import ProfileImage from "./ProfileImage";
import Statistics from "../Statistics";
import Feed from "../Feed/Feed";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function ProfilePage() {
  return (
    <div>
      <ProfileImage />
      <Statistics />
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <ProfileInfo />
          </div>
          <div className="col-lg-6">
            <Feed />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
