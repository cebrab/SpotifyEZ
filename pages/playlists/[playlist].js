import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import colors from '../../styles/colors';

import PlaylistColumn from '../../components/PlaylistColumn'
import PlaylistView from '../../components/PlaylistView';
import PlaylistViewOptionsMenu from '../../components/PlaylistViewOptionsMenu'
import PlaylistViewColumn from '../../components/PlaylistViewColumn'
import Layout from '../../components/Layout';

const PlaylistViewPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

function PlaylistViewPage() {
  const router = useRouter()

  const [makingSubPlaylist, setMakingSubPlaylist] = useState(false)
  const [subPlaylist, setSubPlaylist] = useState([])

  useEffect(() => {
    setSubPlaylist([])
    setMakingSubPlaylist(false)
  }, [])

  function addToSubPlaylist(track) {
    setSubPlaylist([
      ...subPlaylist,
      {
        uri: track.uri,
      }
    ])
    console.log("==Sub Playlist: ", subPlaylist);
  }

  return (
    <Layout>
      <PlaylistViewPageContainer>
        <PlaylistColumn
          playlistId={router.query.playlist}
          hasPlusButton={makingSubPlaylist}
          onPlusButtonClick={addToSubPlaylist}
          addedSongs={[]}
          menu={
            <PlaylistViewOptionsMenu
              makingSubPlaylist={makingSubPlaylist}
              setMakingSubPlaylist={setMakingSubPlaylist}
              onCancelButtonClick={() => { setSubPlaylist([]) }}
            />
          }
        />

        {makingSubPlaylist && [
            <PlaylistColumn
              playlistTitle="Sub-Playlist"
              playlist={[]}
              addedSongs={subPlaylist}
              setPlaylist={setSubPlaylist}
              hasMinusButton={true}
            />
          ]
        }
      </PlaylistViewPageContainer>
    </Layout>
  )
}

export default PlaylistViewPage;
