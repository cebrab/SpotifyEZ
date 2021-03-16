import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPlaylistsList } from '../store/actions/playlistAction'

function usePlaylists() {

    const dispatch = useDispatch()
    const { accessToken } = useSelector(state => state.auth)
    const { playlists } = useSelector(state => state.playlist)

    useEffect(() => {
        dispatch(getPlaylistsList(accessToken))
    }, [])
    return { playlists }
}

export default usePlaylists;