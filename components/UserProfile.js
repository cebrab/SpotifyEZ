/** @jsxImportSource @emotion/react */

import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../store/actions/userAction'
import { css } from '@emotion/react';
const UserProfile = () => {

  const dispatch = useDispatch()
  const { user } = useSelector(state => state.user)
  const { accessToken } = useSelector(state => state.auth)


  const userProfileContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border-style: solid;
    border-width: 1px;
    background-color: rgba(0, 0, 0, 0.65);
    width: 30%;
    margin-left: 10px;
    img{
      border-radius: 50%;
      margin: 10px;
      padding: 5px;
    }
    h1{
      margin-left: 5px;
      margin-right: 5px;
      color: floralwhite;
      font-weight: bold;
    }

  `;
  console.log(user)

  useEffect(() => {
    dispatch(getUser(accessToken))
  }, [])

  return (
    (user !== undefined &&
      <div css={userProfileContainer}>
          <h1>Welcome to SpotifyEZ</h1>
          <h1>Username: {user.display_name}</h1>
        <img src={user.images[0].url} alt={'Profile picture doesnt exist'} />
      </div>
    )
  )
}

export default UserProfile
