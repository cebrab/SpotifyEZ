/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import HalfPagePlaylistItem from './HalfPagePlaylistItem'

const HalfPagePlaylistContainerStyling = css`
  list-style: none;
  width: 100%;
  height: 100%;
`;

function HalfPagePlaylist(props){
  console.log("==half page playlist: ", props.playlist)
  return (
    <>
    <div>
      <ul css={HalfPagePlaylistContainerStyling}>
        {props.playlist.map((num, index) => <HalfPagePlaylistItem key={props.playlist[index].id}
          imgUrl={props.playlist[index].album.images[0] ?
          props.playlist[index].album.images[0].url : "/images/spotify-logo.png"}
          index={index+1} songName={props.playlist[index].name} uri={props.playlist[index].uri}/>)}
      </ul>
    </div>
    </>
  );
}
export default HalfPagePlaylist;
