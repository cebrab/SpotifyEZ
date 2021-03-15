/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import SpotifyPlayer from './SpotifyPlayer'
function SpotifyTinder(props){
  const [counter, setCounter] = useState(0);
  const SpotifyTinderContainerStyling=css`
  display:flex;
  flex-direction: column;
  img{
    width: 50px;
    height: 50px;
    margin: 10px;
    &:hover{
      transform:scale(1.1,1.1);
      -webkit-transform:scale(1.1,1.1);
      -moz-transform:scale(1.1,1.1);
    }
  }
  align-items: center;
`;

  function swipeLeftClicked(e){
    if (counter < props.playlist.length - 1){
      setCounter(counter+1);
    }
    else {
      //request new api call
      setCounter(0); //reset counter
    }
  }
  function swipeRightClicked(e){
    if (counter < props.playlist.length - 1){
      // add song uri into redux props.playlist[counter].uri
      setCounter(counter+1);
    }
    else {
      //request new api call
      setCounter(0); //reset counter
    }
  }
  return (
    <>
    <div css={SpotifyTinderContainerStyling}>
      {console.log("Playlist object: " + props.playlist[counter].uri)}

      <SpotifyPlayer uri={props.playlist[counter].uri}/>

    <div>
      <img src="../images/x-icon-transparent.png" alt="swipe left" onClick={swipeLeftClicked}/>
      <img src="../images/heart-icon-transparent.png" alt="swipe right" onClick={swipeRightClicked}/>
    </div>

    </div>
    </>
  );
}
export default SpotifyTinder
