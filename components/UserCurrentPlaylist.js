import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserPlaylist } from '../store/actions/playlistAction'

const UserCurrentPlaylist = () => {
  const style = {
    backgroundColor: 'lightgray',
    color: 'black',
    overflowY: 'scroll',
    maxHeight: '300px',
    maxWidth: '200px'
  }

  const dispatch = useDispatch()
  const { accessToken } = useSelector(state => state.auth)
  const { userPlaylist} = useSelector(state => state.playlist)

  useEffect(() => {
    dispatch(getUserPlaylist(accessToken))
  }, [])

  console.log('User Current Playlist === ', userPlaylist)

  return (
    <div>
      <ul>
        {/* {userPlaylist !== undefined &&
          userPlaylist.items.map(item => {
            <li>{item.name}</li>
          })
        } */}

        { userPlaylist !== undefined &&
        JSON.stringify(userPlaylist.items[0].name)}
        
      </ul>
    </div>
  )
}

export default UserCurrentPlaylist
