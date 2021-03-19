import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import colors from '../styles/colors';
import PropTypes from 'prop-types';

import { getPlaylistById } from '../store/actions/playlistAction';
import PlaylistViewColumn from '../components/PlaylistViewColumn'


function PlaylistColumn(props) {
  const dispatch = useDispatch()
  const { accessToken } = useSelector(state => state.auth)
  const { playlistById } = useSelector(state => state.playlist)
  const { user } = useSelector(state => state.user)

  useEffect(() => {
    if (props.playlistId){
      console.log("==Getting playlist with ID: ", props.playlistId);
      dispatch(getPlaylistById(accessToken, props.playlistId))
    } else {
      console.log("Rendering a client-side playlist", props.playlist);
    }
  }, [props.playlistId])

  return(
    <>
    {playlistById &&
      <PlaylistViewColumn
        {...props}
        playlistTitle={props.playlistId ?
          playlistById.name :
          props.playlistTitle
        }
        playlist={props.playlistId ?
            playlistById.tracks.items.map(item => item.track) :
            props.playlist
        }
        setPlaylist={props.playlistId ?
          (newPlaylist) => {playlistById = newPlaylist}:
          props.setPlaylist
        }
      />
    }
    </>
  )
}

PlaylistColumn.propTypes = {
  addedSongs: PropTypes.array,
  playlistId: PropTypes.string,
  menu: PropTypes.element,
  hasPlusButton: PropTypes.boolean,
  onPlusButtonClick: PropTypes.func
}
PlaylistColumn.defaultProps = {
  addedSongs: [],
  playlistTitle: "",
  playlistId: "",
  menu: null,
  hasPlusButton: false,
  onPlusButtonClick: null
}

export default PlaylistColumn
