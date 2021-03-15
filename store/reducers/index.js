import { combineReducers } from 'redux'
import authReducer from './authReducer'
import userReducer from './userReducer'
import songReducer from './songReducer'
import playlistReducer from './playlistReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  song: songReducer,
  playlist: playlistReducer
})

export default rootReducer