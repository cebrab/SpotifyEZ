import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../store/actions/userAction'

const UserProfile = () => {

  const dispatch = useDispatch()
  const { user } = useSelector(state => state.user)
  const { accessToken } = useSelector(state => state.auth)

  console.log(user)

  useEffect(() => {
    dispatch(getUser(accessToken))
  }, [])

  return (
    (user !== undefined &&
      <div>
        <h1>User Name :{user.display_name}</h1>
        <img src={user.images[0].url} alt={'Profile picture doesnt exist'} />
      </div>
    )
  )
}

export default UserProfile
