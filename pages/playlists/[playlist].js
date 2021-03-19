import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import colors from '../../styles/colors';

import CurrentPlaylistView from '../../components/CurrentPlaylistView'
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
    setSubPlaylist([{
      uri: track.uri,
    },
    ...subPlaylist
    ])
  }

  return (
    <Layout>
      <PlaylistViewPageContainer>
        <CurrentPlaylistView
          playlistId={router.query.playlist}
          hasPlusButton={makingSubPlaylist}
          onPlusButtonClick={addToSubPlaylist}
          menu={
            <PlaylistViewOptionsMenu
              makingSubPlaylist={makingSubPlaylist}
              setMakingSubPlaylist={setMakingSubPlaylist}
              onCancelButtonClick={() => { setSubPlaylist([]) }}
            />
          }
        />

        {makingSubPlaylist && [
            <PlaylistViewColumn
              playlistTitle="Sub-Playlist"
              playlist={[]}
              addedSongs={subPlaylist}
              setPlaylist={setSubPlaylist}
              hasMinusButton={true}
              isNewPlaylist={true}
            />
          ]
        }
      </PlaylistViewPageContainer>
    </Layout>
  )
}

export default PlaylistViewPage;
