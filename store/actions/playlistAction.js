import * as types from '../types'
import axios from 'axios'

const getOptions = (accessToken, url) => {
  const options = {
    url: url,
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + accessToken,
      'Content-Type': 'application/json',
    }
  }
  return options
}

// Get a List of Current User's Playlists
export const getUserPlaylist = (accessToken) => async dispatch => {
  const url = 'https://api.spotify.com/v1/me/playlists'
  const res = await axios(getOptions(accessToken, url))
  dispatch({
    type: types.GET_USER_PLAYLIST,
    userPlaylist: res.data
  })
}

// Get a Playlist
export const getPlaylistById = (accessToken, playlistId) => async dispatch => {
  const url = `https://api.spotify.com/v1/playlists/${playlistId}`
  const res = await axios(getOptions(accessToken, url))
  dispatch({
    type: types.GET_PLAYLIST_BY_ID,
    playlistById: res.data
  })
}