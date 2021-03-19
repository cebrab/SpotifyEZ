import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getSongs } from '../store/actions/songAction'
import Layout from '../components/Layout'
import PlaylistColumn from '../components/PlaylistColumn'
import PlaylistViewColumn from '../components/PlaylistViewColumn'

function SearchResultsPage() {
  const dispatch = useDispatch()
  const router = useRouter()
  const { accessToken } = useSelector(state => state.auth)
  const { searchSongs } = useSelector(state => state.song)

  useEffect(() => {
    dispatch(getSongs(accessToken, router.query.q))
  }, [])

  function onPlusButtonClick(track) {
    router.push({
      pathname: '/SpotifyTinderPage',
      query: 'oneSongSeed=' + track.id
    })
  }

  if (searchSongs){
    console.log("Search songs array: ", searchSongs );
  }

  return(
    <Layout>
      {searchSongs &&
        <PlaylistViewColumn
          playlist={searchSongs.tracks.items}
          playlistTitle={`Search results for: ${router.query.q}`}
          hasPlusButton={true}
          onPlusButtonClick={onPlusButtonClick}
        />
        }
    </Layout>
  )

}

export default SearchResultsPage;
