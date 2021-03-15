import * as types from '../types'

const initialState = {
  accessToken: '',
  expiresIn: 0,
  expireDate: '',
  isAuthed: 'false'
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.accessToken
      }

    case types.SET_EXPIRES_IN:
      const expireDate = new Date()
      if (action.expiresIn > 0) {
        expireDate.setSeconds(expireDate.getSeconds() + action.expiresIn)
      } else {
        expireDate.setSeconds(expireDate.getSeconds())
      }
      return {
        ...state,
        expiresIn: action.expiresIn,
        expireDate: expireDate.toISOString()
      }

    case types.SET_IS_AUTHED:
      return {
        ...state,
        isAuthed: action.isAuthed
      }

    default:
      return state
  }
}

export default authReducer
