import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAccessToken, getAuth, getUser } from '../redux/selectors'

import { setUser } from '../redux/actions/userActions'


const UserProfile = () => {
  const dispatch = useDispatch()
  const auth = useSelector(getAuth)
  const accessToken = useSelector(getAccessToken)
  const user = useSelector(getUser)

  useEffect(() => {
    if (auth.isAuthed === true) {
      const headers = new Headers()
      headers.append('Authorization', 'Bearer ' + accessToken)
      
      const fetchUserProfile = async (accessToken) => {
        const response = await fetch('https://api.spotify.com/v1/me', {
          method:'GET',
          headers: headers
        })
        const responseBody = await response.json()
        dispatch(setUser(responseBody))
      }

      const fetUserPlaylist = async (accessToken) => {
        const response = await fetch('https://api.spotify.com/v1/me/playlists', {
          method:'GET',
          headers: headers
        })
        const responseBody = await response.json()
        console.log('Current User Playlist === ', responseBody)
      }

      fetchUserProfile()
      fetUserPlaylist()
    }
  }, [])

  return (
    <div>
      <h1>{user.display_name}</h1>
      {user.images !== undefined ? (
        <img src={user.images[0].url} />)
        : (null)}
    </div>
  )
}

export default UserProfile
