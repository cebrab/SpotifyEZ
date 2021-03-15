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

export const getUser = (accessToken) => async dispatch => {
  const url = 'https://api.spotify.com/v1/me'
  const res = await axios(getOptions(accessToken, url))
  dispatch({
    type: types.GET_USER,
    user: res.data
  })
}
