import * as types from '../types'
import axios from 'axios'

import { getOptions } from '../utils'

export const getGenreSeeds = (accessToken) => async dispatch => {
  const url = 'https://api.spotify.com/v1/recommendations/available-genre-seeds'
  const res = await axios(getOptions(accessToken, url))
  dispatch({
    type: types.GET_GENRE_SEEDS,
    genreSeeds: res.data
  })
}

export const getRecommendations = (accessToken, query) => async dispatch => {
  const url = `https://api.spotify.com/v1/recommendations?limit=10&seed_genres=${query}`
  const res = await axios(getOptions(accessToken, url))
  dispatch({
    type: types.GET_RECOMMENDATIONS,
    recommendations: res.data
  })
}

export const getSongRecommendations = (accessToken, query) => async dispatch => {
  const url = `https://api.spotify.com/v1/recommendations?limit=50&seed_tracks=${query}`
  const res = await axios(getOptions(accessToken, url))
  dispatch({
    type: types.GET_RECOMMENDATIONS,
    recommendations: res.data
  })
}

export const getSongs = (accessToken, query) => async dispatch => {
  const url = `https://api.spotify.com/v1/search?q=${query}&type=track&market=US&limit=10`
  const res = await axios(getOptions(accessToken, url))
  dispatch({
    type: types.GET_SONGS,
    searchSongs: res.data
  })
}

export const getRecents = (accessToken, query) => async dispatch => {
  const url = `https://api.spotify.com/v1/me/player/recently-played`
  const res = await axios(getOptions(accessToken, url))
  dispatch({
    type: types.GET_RECENTS,
    recentSongs: res.data
  })
}
