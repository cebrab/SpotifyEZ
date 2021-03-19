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
