/** @jsxImportSource @emotion/react */

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getRecents } from '../store/actions/songAction';
import { useRouter } from 'next/router';
import PlaylistColumn from '../components/PlaylistColumn'
import PlaylistViewColumn from '../components/PlaylistViewColumn';


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


    if (recentSongs){
      var obj = {
        tracks: {
            items: recentSongs.items.map(item => item.track)
        }
      }
      console.log("recent songs ", recentSongs.items.map(item => item.track));
      console.log("obj", obj);
    }
    return(
      <>
      {recentSongs &&
        <PlaylistViewColumn
          playlist={recentSongs.items.map(item => item.track)}
          playlistTitle="Recently Played"
          hasPlusButton={true}
          onPlusButtonClick={onPlusButtonClick}
          setPlaylist={setPlaylist}
        />
      }
    </>
    );
}
export default RecentlyPlayedSongsView;
