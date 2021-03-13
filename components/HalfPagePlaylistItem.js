/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import HalfPagePlaylistItemPlayButton from './HalfPagePlaylistItemPlayButton';
import HalfPagePlaylistItemAddButton from './HalfPagePlaylistItemAddButton';
const HalfPagePlaylistItemStyling= css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  img {
    padding: 10px;
  };
  h2 {
    margin-right: 15%;
  };
  border-style: solid;
  border-radius: 4px;
  border-width: 2px;
  border-color: black;
  color: floralwhite;
  width: 100%;
  height: 100px;
  background-color: #121212;
  div {
    font-size: 20px;
    margin: 3%;
  };
  transition: 100ms all ease;
  &:hover {
    background-color: #404040;
  }
`;
function HalfPagePlaylistItem(){
  return (
    <>
      <div css={HalfPagePlaylistItemStyling}>
        <div> 1 </div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" width="80px" height="85%"/>
        <div>Never gonna give you up</div>
        <HalfPagePlaylistItemAddButton/>
        <HalfPagePlaylistItemPlayButton/>
      </div>

    </>
  );
}
export default HalfPagePlaylistItem;
