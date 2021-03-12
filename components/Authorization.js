import React, { useEffect } from 'react'
import { getAuthorizeHref, getHashParams, removeHashParamsFromUrl } from '../auth/Auth'

import { 
  setAccessToken, 
  setExpiresIn,
  setIsAuthed } from '../redux/actions/authActions'
  
import { useDispatch, useSelector } from 'react-redux'

import { getAccessToken } from '../redux/selectors'

const Authorization = () => {

  const auth = useSelector(getAccessToken)
  const dispatch = useDispatch()
  console.log('Access Token === ', auth)

  useEffect(() => {
    const params = getHashParams()
    const accessToken = params.access_token
    const expiresIn = params.expires_in

    if (accessToken) {
      dispatch(setAccessToken(accessToken))
      dispatch(setExpiresIn(expiresIn))
      dispatch(setIsAuthed(true))
      removeHashParamsFromUrl()
    }
  }, [])

  return (

    <div>
      <button
        onClick={() => window.location = (getAuthorizeHref())}>
        hit me
      </button>

    </div>
  )
}

export default Authorization
