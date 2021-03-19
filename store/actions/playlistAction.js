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

export const clearPlaylistById = () => dispatch => {
  dispatch({
    type: types.CLEAR_PLAYLIST_BY_ID
  })
}

// Example
// axios({
//   method: 'post',
//   url: baseUrl + 'applications/' + appName + '/dataexport/plantypes' + plan,
//   headers: {}, 
//   data: {
//     foo: 'bar', // This is the body part
//   }
// })

// {
//   "tracks": [
//     { "uri": "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" },
//     { "uri": "spotify:track:1301WleyT98MSxVHPZCA6M" }
//   ]
// }

export const removeItemsFromPlaylist = (accessToken, playlistId, body) => async dispatch => {
  const options = {
    url: `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + accessToken,
      'Content-Type': 'application/json',
    },
    data: { body }
  }
  const res = await axios(options)
  dispatch({
    type: types.REMOVE_ITEMS_FROM_PLAYLIST
  })
}


