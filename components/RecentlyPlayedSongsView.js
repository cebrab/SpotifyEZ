import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getRecents } from '../store/actions/songAction';
import { useRouter } from 'next/router'
import PlaylistColumn from '../components/PlaylistColumn'


function RecentlyPlayedSongsView() {
    const dispatch = useDispatch()
    const router = useRouter()
    const { accessToken } = useSelector(state => state.auth)
    const { recentSongs } = useSelector(state => state.song)

    useEffect(() => {
      dispatch(getRecents(accessToken))
    }, [])

    function onPlusButtonClick(track) {
      router.push({
        pathname: '/SpotifyTinderPage',
        query: track.uri
      })
    }

    console.log("==recentSongs: ", recentSongs && recentSongs.items.map(item => item.track));

    return(
      <>
        <PlaylistColumn
          playlist={recentSongs && recentSongs.items.map(item => item.track)}
          playlistTitle="Recently Played"
          hasPlusButton={true}
          onPlusButtonClick={onPlusButtonClick}
        />
      </>

    )
}
export default RecentlyPlayedSongsView;
