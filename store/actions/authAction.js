import * as types from '../types'

export const setAcessToken = (accessToken) => async dispatch => {
  dispatch({
    type: types.SET_ACCESS_TOKEN,
    accessToken: accessToken
  })
}

export const setExpiresIn = (expiresIn) => async dispatch => {
  dispatch({
    type: types.SET_EXPIRES_IN,
    expiresIn: expiresIn 
  })
}

export const setIsAuthed = (isAuthed) => async dispatch  => {
  dispatch({
    type: types.SET_IS_AUTHED,
    isAuthed: isAuthed
  })
}