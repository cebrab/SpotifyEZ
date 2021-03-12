export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN'
export const SET_EXPIRES_IN = 'SET_EXPIRES_IN'
export const SET_IS_AUTHED = 'SET_IS_AUTHED'

export const setAccessToken = (accessToken) => {
  return {
    type: SET_ACCESS_TOKEN,
    accessToken: accessToken
  }
}

export const setExpiresIn = (expiresIn) => {
  return {
    type: SET_EXPIRES_IN,
    expiresIn: expiresIn
  }
}

export const setIsAuthed = (isAuthed) => {
  return {
    type: SET_IS_AUTHED,
    isAuthed: isAuthed
  }
}
