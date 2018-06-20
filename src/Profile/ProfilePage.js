import React from "react";
import styled from "styled-components";
import ProfileImage from "./ProfileImage";
import Statistics from "../Statistics";
import Feed from "../Feed/Feed";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Huy = styled.div`
  background: #e6ecf0;
`;

function ProfilePage() {
  return (
    <div>
      <ProfileImage />
      <Statistics />
      <Huy>
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
      </Huy>
    </div>
  );
}

export default ProfilePage;
