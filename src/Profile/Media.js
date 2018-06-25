import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import mediaIcon from "./img/media-icon.svg";

const StyledMedia = styled.div`
  position: relative;
  margin-top: 18px;
`;

const Icon = styled.img`
  position: absolute;
  width: 16px;
  height: 16px;
  left: -5px;
`;

const LinkText = styled.div`
  margin-left: 20px;
`;

const Pictures = styled.div`
  margin-top: 8px;
`;

const Picture = styled.img`
  width: 83px;
  height: 83px;
  border-radius: 2px;
  margin-right: 5px;
  margin-bottom: 3px;
`;

function Media(props) {
  return (
    <div>
      <StyledMedia>
        <Icon src={mediaIcon} alt="Media" />
        <Link to="/EveryInteract/media">
          <LinkText>522 Photos and videos</LinkText>
        </Link>
      </StyledMedia>
      <Pictures>
        <Link to="/media1">
          <Picture
            src={process.env.PUBLIC_URL + "/img/media1.png"}
            alt="Media 1"
          />
        </Link>
        <Link to="/media2">
          <Picture
            src={process.env.PUBLIC_URL + "/img/media2.png"}
            alt="Media 2"
          />
        </Link>
        <Link to="/media3">
          <Picture
            src={process.env.PUBLIC_URL + "img/media3.png"}
            alt="Media 3"
          />
        </Link>
        <Link to="media4">
          <Picture
            src={process.env.PUBLIC_URL + "img/media4.png"}
            alt="Media 4"
          />
        </Link>
        <Link to="/media5">
          <Picture
            src={process.env.PUBLIC_URL + "img/media5.png"}
            alt="Media 5"
          />
        </Link>
        <Link to="/media6">
          <Picture
            src={process.env.PUBLIC_URL + "img/media6.png"}
            alt="Media 6"
          />
        </Link>
      </Pictures>
    </div>
  );
}

export default Media;
