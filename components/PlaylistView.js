/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

import colors from '../styles/colors'
import breakpoints from '../styles/breakpoints'
import SpotifyPlayer from './SpotifyPlayer'

function PlaylistViewOptionsMenu({makingSubPlaylist, setMakingSubPlaylist}) {
  const PlaylistViewOptionsMenuContainer = styled.div`
    width: 100%;
    height: 30px;
    background-color: ${colors.darkGreen};
    margin-bottom: 5px;
  `;

  const PlaylistViewOptionsMenuItem = styled.span`
    float: left;
    width: 50%;
    height: 100%;

    text-align: center;
    line-height: 30px;  //match height of container
    color: white;
    font-size: 18px;

    cursor: pointer;
    :hover,
    :focus {
      background-color: ${colors.hoverGreen};
    }
  `;

  function toggleMakingSubPlaylist(e) {
    setMakingSubPlaylist(!makingSubPlaylist);
  }

  return(
    <PlaylistViewOptionsMenuContainer>
      <PlaylistViewOptionsMenuItem onClick = {toggleMakingSubPlaylist}>
        {makingSubPlaylist ? 'cancel' : 'Make Sub-Playlist'}
      </PlaylistViewOptionsMenuItem>
      <PlaylistViewOptionsMenuItem>Sort</PlaylistViewOptionsMenuItem>
    </PlaylistViewOptionsMenuContainer>
  )
}

function PlaylistViewItem(props){
  const AddToSubPlaylistButton = styled.button`
    background-color: ${colors.darkGreen};
    color: white;
    border: 0;
    font-size: 100%;
    float: right;
    position: relative;

    :hover {
      background-color: ${colors.hoverGreen};
    }
  `;

  return(
    <li>
      <SpotifyPlayer
        uri={props.uri}
        playerHeight="80px"
        playerWidth={props.makingSubPlaylist ? "90%" : "100%"}
      />
      {props.makingSubPlaylist && <AddToSubPlaylistButton>+</AddToSubPlaylistButton>}
    </li>
  )
}

function PlaylistView({ playlist }) {
  const [ makingSubPlaylist, setMakingSubPlaylist ] = useState(false);
  const styles = css`
    list-style: none;
    width: 45%;
  `;
  return (
    <ul css={styles}>
      <PlaylistViewOptionsMenu
        makingSubPlaylist = {makingSubPlaylist}
        setMakingSubPlaylist = {setMakingSubPlaylist}
      />
      {playlist.map(track =>
        <PlaylistViewItem
          key={track.id}
          imgUrl={track.album.images[0].url}
          songName={track.name}
          uri={track.uri}
          makingSubPlaylist = {makingSubPlaylist}
        />
      )}
    </ul>
  )
}

export default PlaylistView;
