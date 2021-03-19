import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import colors from '../styles/colors';
import PropTypes from 'prop-types';

import { getPlaylistById } from '../store/actions/playlistAction';

import PlaylistViewColumn from '../components/PlaylistViewColumn'

const SaveSubPlaylistButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 12.5%;
  width: 200px;
  height: 60px;
  cursor: pointer;
  border: 0;
  border-radius:10px;
  font-size: 125%;
  color: white;
  background-color: ${colors.darkGreen};

  :hover {
    background-color: ${colors.hoverGreen};
  }
`;

function CurrentPlaylistView(props) {
  const dispatch = useDispatch()
  const { accessToken } = useSelector(state => state.auth)
  const { playlistById } = useSelector(state => state.playlist)
  const { user } = useSelector(state => state.user)

  useEffect(() => {
    console.log("==Getting playlist with ID: ", props.playlistId);
    dispatch(getPlaylistById(accessToken, props.playlistId))
  }, [props.playlistId])

  return(
    <>
    {playlistById &&
      <PlaylistViewColumn
        playlistTitle={playlistById.name}
        playlist={playlistById.tracks.items.map(item => item.track)}
        setPlaylist={(newPlaylist) => {playlistById = newPlaylist}}
        hasPlusButton={props.hasPlusButton}
        onPlusButtonClick={props.onPlusButtonClick}
        menu={props.menu}
      />
    }
    </>
  )
}

CurrentPlaylistView.propTypes = {
  playlistId: PropTypes.string.isRequired,
  menu: PropTypes.element,
  hasPlusButton: PropTypes.boolean,
  onPlusButtonClick: PropTypes.func
}
CurrentPlaylistView.defaultProps = {
  menu: null,
  hasPlusButton: false,
  onPlusButtonClick: null
}

export default CurrentPlaylistView
