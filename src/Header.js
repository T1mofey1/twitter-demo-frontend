import React from "react";
import styled from "styled-components";
import Navigation from "./ui/Navigation";
import Logo from "./ui/Logo";
import Search from "./ui/Search";
import Avatar from "./Profile/Avatar";
import Button from "./ui/Button";

const StyledHeader = styled.div`
  padding-bottom: 6px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: #fff;
`;

const NavigationWrap = styled.div`
  margin-top: 16px;
  margin-left: 20px;
`;

const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

const AvatarWrap = styled.div`
  margin-top: 3px;
  margin-left: 18px;
  margin-right: 19px;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 6px;
`;

function Header() {
  return (
    <StyledHeader>
      <div className="container">
        <div className="row ">
          <div className="col-lg-5">
            <NavigationWrap>
              <Navigation />
            </NavigationWrap>
          </div>
          <div className="col-lg-2">
            <LogoWrap>
              <Logo />
            </LogoWrap>
          </div>
          <div className="col-lg-5">
            <Wrap>
              <Search />
              <AvatarWrap>
                <Avatar size="small" />
              </AvatarWrap>
              <Button color="primary" size="small">
                Tweet
              </Button>
            </Wrap>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
