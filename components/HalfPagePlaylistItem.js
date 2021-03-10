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
  margin: 5px;
  img {
    margin-right: 20%;
    padding: 10px;
  };
  border-style: solid;
  border-radius: 4px;
  border-width: 2px;
  border-color: black;
  width: 40%;
`;
function HalfPagePlaylistItem(){
  return (
    <>
      <div css={HalfPagePlaylistItemStyling}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" width="128px" height="128px"/>
        <h2> Song title </h2>
        <HalfPagePlaylistItemAddButton/>
        <HalfPagePlaylistItemPlayButton/>
      </div>

    </>
  );
}
export default HalfPagePlaylistItem;
