import * as types from '../types'
import axios from 'axios'

import { getOptions } from '../utils'

export const getUser = (accessToken) => async dispatch => {
  const url = 'https://api.spotify.com/v1/me'
  const res = await axios(getOptions(accessToken, url))
  dispatch({
    type: types.GET_USER,
    user: res.data
  })
}
