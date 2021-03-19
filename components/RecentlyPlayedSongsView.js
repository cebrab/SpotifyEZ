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

    function setPlaylist(newPlaylist) {
      recentSongs = newPlaylist
    }

    function onPlusButtonClick(track) {
      router.push({
        pathname: '/SpotifyTinderPage',
        query: 'oneSongSeed=' + track.id
      })
    }

    console.log("==recentSongs: ", recentSongs && recentSongs.items.map(item => item.track.uri));

    return(
        <PlaylistColumn
          playlist={recentSongs && recentSongs.items.map(item => item.track)}
          //playlist={[]}
          playlistTitle="Recently Played"
          hasPlusButton={true}
          onPlusButtonClick={onPlusButtonClick}
          setPlaylist={setPlaylist}
        />

    )
}
export default RecentlyPlayedSongsView;
