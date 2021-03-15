import * as types from '../types'

const initialState = {
}

const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_PLAYLIST:
      return {
        ...state,
        userPlaylist: action.userPlaylist
      }
    case types.GET_PLAYLIST_BY_ID:
      return {
        ...state,
        playlistById: action.playlistById
      }
    default:
      return state
  }
}
export default playlistReducer
