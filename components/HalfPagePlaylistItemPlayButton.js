/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';


function HalfPagePlaylistItemPlayButton(){
  const [isPlaying, setisPlaying] = useState(false);
  const playButtonStyling = css `
    border: 0;
    background: transparent;
    box-sizing: border-box;
    width: 0;
    height: 74px;

    border-color: transparent transparent transparent #202020;
    transition: 100ms all ease;
    cursor: pointer;

    // play state
    border-style: solid;
    border-width: 37px 0 37px 60px;

    &.paused {
      border-style: double;
      border-width: 0px 0 0px 60px;
    }

    &:hover {
      border-color: transparent transparent transparent #404040;
    }
  `;
  function playButtonClicked(e){
    e.preventDefault();
    setisPlaying(!isPlaying);

  }

  return (
    <>
      <button className={isPlaying? "paused" : null} css={playButtonStyling} onClick={playButtonClicked}></button>
    </>
  );
}
export default HalfPagePlaylistItemPlayButton;
