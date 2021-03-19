import * as types from '../types'
import axios from 'axios'

import { getOptions } from '../utils'

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

export const getPlaylistsList = (accessToken) => async dispatch => {
  const url = 'https://api.spotify.com/v1/me/playlists'
  const res = await axios(getOptions(accessToken, url))
  dispatch({
    type: types.GET_PLAYLISTS_LIST,
    playlists: res.data.items
  })
}
