import React from "react";
import styled from "styled-components";

const Link = styled.a``;

const StyledFollowers = styled.div`
  margin-left: 2px;
  margin-top: 8px;
`;

const Image = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 5px;
  margin-bottom: 5px;
`;

function Followers(props) {
  return (
    <StyledFollowers>
      <Link href="">
        <Image src={props.imageSrc[0]} />
      </Link>
      <Link href="">
        <Image src={props.imageSrc[1]} />
      </Link>
      <Link href="">
        <Image src={props.imageSrc[2]} />
      </Link>
      <Link href="">
        <Image src={props.imageSrc[3]} />
      </Link>
      <Link href="">
        <Image src={props.imageSrc[4]} />
      </Link>
      <Link href="">
        <Image src={props.imageSrc[5]} />
      </Link>
    </StyledFollowers>
  );
}

export default Followers;
