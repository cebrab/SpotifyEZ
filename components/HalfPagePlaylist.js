/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import HalfPagePlaylistItem from './HalfPagePlaylistItem'

const HalfPagePlaylistContainerStyling = css`
  list-style: none;
  width: 45%;
  height: 100%;
`;


function HalfPagePlaylist(props){
  return (
    <>
    <div>
      <ul css={HalfPagePlaylistContainerStyling}>
        {props.playlist.map((num, index) => <HalfPagePlaylistItem key={props.playlist[index].id} imgUrl={props.playlist[index].album.images[index].url}  index={index+1} songName={props.playlist[index].name}/>)}
      </ul>
    </div>
    </>
  );
}
export default HalfPagePlaylist;
