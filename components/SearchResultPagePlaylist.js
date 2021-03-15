/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import SearchResultPagePlaylistItem from './SearchResultPagePlaylistItem'

const SearchResultPagePlaylistStyling = css`
  list-style: none;
  width: 100%;
  height: 100%;
`;


function SearchResultPagePlaylist(props){
  return (
    <>
    <div>
      <ul css={SearchResultPagePlaylistStyling}>
        {props.playlist.map((num, index) => <SearchResultPagePlaylistItem key={props.playlist[index].id} imgUrl={props.playlist[index].album.images[index].url}  index={index+1} songName={props.playlist[index].name} uri={props.playlist[index].uri}/>)}
      </ul>
    </div>
    </>
  );
}
export default SearchResultPagePlaylist;
