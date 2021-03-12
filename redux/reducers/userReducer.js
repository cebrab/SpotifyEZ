import {
  SET_USER_NAME,
  SET_USER_IMAGE_URL,
  SET_USER
} from '../actions/userActions'

const userReducer = (state = {
  name: '',
  imageUrl: ''
}, action) => {
  switch (action.type) {
    case SET_USER:
      return action.user
    case SET_USER_NAME:
      return {
        ...state,
        name: action.name
      }
    case SET_USER_IMAGE_URL:
      return {
        ...state,
        imageUrl: action.imageUrl
      }
    default:
      return state
  }
}

export default userReducer