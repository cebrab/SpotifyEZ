import {
  SET_ACCESS_TOKEN,
  SET_EXPIRES_IN,
  SET_IS_AUTHED
} from '../actions/authActions'


const authReducer = (state = {
  accessToken: '',
  expiresIn: 0,
  expireDate: '',
  isAuthed: 'false'
}, action) => {

  switch (action.type) {
    case SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.accessToken
      }
    case SET_EXPIRES_IN:
      const expireDate = new Date()
      expireDate.setSeconds(expireDate.getSeconds() + action.expiresIn)
      return {
        ...state,
        expiresIn: action.expiresIn,
        expireDate: expireDate.toISOString()
      }
    case SET_IS_AUTHED:
      return {
        ...state,
        isAuthed: action.isAuthed
      }
    default:
      return state
  }
}

export default authReducer