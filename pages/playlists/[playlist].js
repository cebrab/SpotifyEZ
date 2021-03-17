import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import PlaylistView from '../../components/PlaylistView';
import Layout from '../../components/Layout';
import { getPlaylistById } from '../../store/actions/playlistAction';

function PlaylistViewPage() {
    const router = useRouter()
    const dispatch = useDispatch()
    const { accessToken } = useSelector(state => state.auth)
    const { playlistById } = useSelector(state => state.playlist)

    useEffect(() => {
        dispatch(getPlaylistById(accessToken, router.query.playlist))
    }, [router.query])

    if (playlistById) {
        console.log('Rendering this playlist: ', playlistById.tracks.items);
    }

    return(
        <Layout>
            {playlistById && <PlaylistView
              playlist={playlistById.tracks.items.map(item => item.track)}
            />}
        </Layout>
    )
}

export default PlaylistViewPage;
