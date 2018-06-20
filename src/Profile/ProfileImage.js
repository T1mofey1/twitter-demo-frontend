import React from "react";
import styled from "styled-components";

const ProfileImage = styled.img`
  max-height: 379px;
  width: 100%;
`;

function ImageProfile() {
  return <ProfileImage src={process.env.PUBLIC_URL + "profileImage.jpg"} />;
}

export default ImageProfile;