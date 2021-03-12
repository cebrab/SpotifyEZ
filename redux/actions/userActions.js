export const SET_USER_NAME = 'SET_USER_NAME'
export const SET_USER_IMAGE_URL = 'SET_USER_IMAGE_URL'
export const SET_USER= 'SET_USER'

export const setUserName = (name) => {
  return {
    type: SET_USER_NAME,
    name: name
  }
}

export const setUserImageUrl = (imgaeUrl) => {
  return {
    type: SET_USER_IMAGE_URL,
    imgaeUrl: imgaeUrl
  }
}

export const setUser = (user) => {
  return {
    type: SET_USER,
    user: user
  }
}
