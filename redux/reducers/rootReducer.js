import {combineReducers} from 'redux'

import authReducer from './authReducer'
// import userReducer from './userReducer'
// import songReducer from './songReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  // user: userReducer,
  // song: songReducer
})

export default rootReducer