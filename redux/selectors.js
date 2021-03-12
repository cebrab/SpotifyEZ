export const getAccessToken = (state) => {
  return state.auth.accessToken
}

export const getAuth = (state) => {
  return state.auth
}

export const getUser = (state) => {
  return state.user
}

export const getSong = (state) => {
  return state.song
}

export const getRecommendations = (state) => {
  return state.song.recommendations
}

