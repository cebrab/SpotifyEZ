import * as types from '../types'

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_USER:
      return {
        ...state,
        user: action.user
      }
    default:
      return state
  }
}

export default userReducer