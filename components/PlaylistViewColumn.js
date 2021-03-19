/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import colors from '../styles/colors';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PlaylistView from './PlaylistView';
import PropTypes from 'prop-types';

const PlaylistTitle = styled.div`
  width: 100%;
  text-align: center;
  color: ${colors.black};
  font-size: 40px;
  font-weight: bold;
  margin: 20px 0;
  border: 2px solid ${colors.darkGreen};
  border-radius: 10px;
`;

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

function PlaylistViewColumn(props) {
  const { accessToken } = useSelector(state => state.auth)
  const { user } = useSelector(state => state.user)
  const [removedSongUris, setRemovedSongUris] = useState([])

  const styles = css`
    width: 45%;
    float: left;
    padding: 0 20px;
  `;

  function removeFromplaylist(uri) {
    //TODO: Is there a way to not remove duplicate songs?
    props.setPlaylist([
      ...props.playlist.filter(track => track.uri !== uri),
      ...props.addedSongs.filter(track => track.uri !== uri)
    ])

    setRemovedSongUris([...removedSongUris, uri])
  }

  async function savePlaylist() {
    async function makeNewPlaylist() {
      const getOptions = (accessToken, url, data) => {
        return {
            url: url,
            method: 'POST',
            headers: {
              'Authorization': 'Bearer ' + accessToken,
              'Content-Type': 'application/json',
            },
            data: data
        }
      }
      try {
        const url = `https://api.spotify.com/v1/users/${user.id}/playlists`
        axios(getOptions(accessToken, url, {
          'name': "SpotifyEZ",
          'description': "New playlist description",
          'public': 'false'
        }))
          .then(function (response) {
            console.log("Make new playlist response:", response)
            putItemsInPlaylist(response.data.id)
            //setMakingplaylist(false)
          })
      } catch (e) {
        if (e instanceof DOMException) {
          console.log("HTTP request aborted");
        } else {
          console.log(e);
        }
      }
    }

    async function putItemsInPlaylist(id) {
      const options = {
        url: `https://api.spotify.com/v1/playlists/${id}/tracks?uris=${encodeURIComponent(props.addedSongs.map((uri) => uri.uri))}`,
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + accessToken,
          'Content-Type': 'application/json',
        }
      }
      try {
        axios(options)
          .then(function (response) {
            console.log("Putting Items in that new playlist: ", response);
          })
      } catch (e) {
        if (e instanceof DOMException) {
          console.log("HTTP request aborted");
        } else {
          console.log(e);
        }
      }
    }

    if (props.playlistId) {
      console.log("Adding to this playlist: ", props.playlistId);
      putItemsInPlaylist(props.playlistId)
    } else {
      console.log("Making a new playlist");
      //TOGGLE MODAL, let the user enter the playlist data
      //onSUBMIT, pass data to makeNewPlaylist
      makeNewPlaylist()
    }
  }

  console.log("PlaylistViewColumn props: ", props);
  return(
    <div css={styles}>
      <PlaylistTitle>{props.playlistTitle}</PlaylistTitle>
      {props.menu}
      <PlaylistView
        playlist={props.addedSongs? props.addedSongs : []}
        hasPlusButton={props.hasPlusButton}
        onPlusButtonClick={props.onPlusButtonClick}
        hasMinusButton={props.hasMinusButton}
        onMinusButtonClick={removeFromplaylist}
      />
      <PlaylistView
        playlist={props.playlist}
        hasPlusButton={props.hasPlusButton}
        onPlusButtonClick={props.onPlusButtonClick}
        hasMinusButton={props.hasMinusButton}
        onMinusButtonClick={removeFromplaylist}
      />
      {((props.addedSongs && props.addedSongs.length > 0) || removedSongUris.length > 0) &&
        <SaveSubPlaylistButton
          onClick={() => { savePlaylist() }}>
          Save Sub-Playlist
        </SaveSubPlaylistButton>
      }
    </div>
  )
}

PlaylistViewColumn.propTypes = {
  playlist: PropTypes.object.isRequired,
  addedSongs: PropTypes.array,
  setPlaylist: PropTypes.func.isRequired,
  playlistTitle: PropTypes.string,
  playlistId: PropTypes.string,
  menu: PropTypes.element,
  hasPlusButton: PropTypes.boolean,
  hasMinusButton: PropTypes.boolean,
  onPlusButtonClick: PropTypes.func
}

PlaylistViewColumn.defaultProps = {
  addedSongs: [],
  playlistTitle: "",
  playlistId: "",
  menu: null,
  hasPlusButton: false,
  hasMinusButton: false,
  onPlusButtonClick: null
}

export default PlaylistViewColumn;
