import React from "react";
import styled from "styled-components";
import loupe from "./icons/loupe.svg";

const Search = styled.input`
  background: #f5f8fa;
  border: 2px solid #e6ecf0;
  border-radius: 100px;
  font-size: 12px;
  color: #687b8a;
  padding-left: 11px;
  padding-top: 9px;
  padding-bottom: 8px;
  max-width: 220px;
  width: 100%;
  &:focus {
    border: 2px solid #009de0;
    background: #fff;
  }
`;

const SearchWrap = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  position: relative;
  &:after {
    content: "";
    background-image: url(${loupe});
    background-repeat: no-repeat;
    display: block;
    width: 15px;
    height: 15px;
    background-size: contain;
    position: absolute;
    bottom: 10px;
    right: 12px;
  }
`;

function SearchTwitter() {
  return (
    <SearchWrap>
      <Search placeholder="Search Twitter" />
    </SearchWrap>
  );
}

export default SearchTwitter;
