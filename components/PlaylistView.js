/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import colors from '../styles/colors'

import SpotifyPlayer from './SpotifyPlayer'

const playlistViewItemButtonStyles = css`
  height: 30px;
  width: 30px;

  color: white;
  border: 0;
  font-size: 100%;
  float: right;
  position: relative;
  cursor: pointer;
`;

const PlusButton = styled.button`
  ${playlistViewItemButtonStyles};
  background-color: ${colors.darkGreen};
  :hover {
    background-color: ${colors.hoverGreen};
  }
`;

const MinusButton = styled.button`
  ${playlistViewItemButtonStyles};
  background-color: ${colors.red};
  :hover {
    background-color: ${colors.hoverRed};
  }
`;

function PlaylistViewItem(props){
  function onPlusButtonClick(){
    console.log("==plus button was clicked for this uri: ", props.track.uri);
    props.onPlusButtonClick(props.track)
  }

  function onMinusButtonClick(){
    console.log("==minus button was clicked for this uri: ", props.track.uri);
    props.onMinusButtonClick(props.track.uri)
  }

  return(
    <li>
      <SpotifyPlayer
        uri={props.track.uri}
        playerHeight="80px"
        playerWidth={props.hasPlusButton || props.hasMinusButton ? "90%" : "100%"}
      />
      {props.hasPlusButton && <PlusButton onClick={onPlusButtonClick}>+</PlusButton>}
      {props.hasMinusButton && <MinusButton onClick={onMinusButtonClick}>-</MinusButton>}
    </li>
  )
}

function PlaylistView(props) {
  const styles = css`
    list-style: none;
    padding: 0;
  `;
  return (
    <ul css={styles}>
      {props.playlist.map(track =>
        <PlaylistViewItem
          track = {track}
          hasPlusButton = {props.hasPlusButton}
          hasMinusButton = {props.hasMinusButton}
          onPlusButtonClick = {props.onPlusButtonClick}
          onMinusButtonClick = {props.onMinusButtonClick}
        />
      )}
    </ul>
  )
}

export default PlaylistView;
