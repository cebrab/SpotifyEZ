import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import PlaylistView from '../../components/PlaylistView';
import PlaylistViewOptionsMenu from '../../components/PlaylistViewOptionsMenu'
import PlaylistViewColumn from '../../components/PlaylistViewColumn'
import Layout from '../../components/Layout';
import { getPlaylistById } from '../../store/actions/playlistAction';

const PlaylistViewPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

function PlaylistViewPage() {
    const router = useRouter()
    const dispatch = useDispatch()
    const { accessToken } = useSelector(state => state.auth)
    const { playlistById } = useSelector(state => state.playlist)
    const [ makingSubPlaylist, setMakingSubPlaylist ] = useState(false)
    const [ subPlaylist, setSubPlaylist ] = useState([])

    useEffect(() => {
        dispatch(getPlaylistById(accessToken, router.query.playlist))
        setSubPlaylist([])
        setMakingSubPlaylist(false)
    }, [router.query])

    function addToSubPlaylist(track){
      setSubPlaylist([{
          uri: track.uri,
        },
        ...subPlaylist
      ])
    }

    function removeFromSubPlaylist(id){
      setSubPlaylist(subPlaylist.filter(track => track.id != id))
    }

    return(
        <Layout>
          <PlaylistViewPageContainer>
            {playlistById &&
              <PlaylistViewColumn>
                <h1>{playlistById.name}</h1>
                <PlaylistViewOptionsMenu
                  makingSubPlaylist = {makingSubPlaylist}
                  setMakingSubPlaylist = {setMakingSubPlaylist}
                  onCancelButtonClick = {() => {setSubPlaylist([])}}
                />
                <PlaylistView
                  playlist={playlistById.tracks.items.map(item => item.track)}
                  hasPlusButton={makingSubPlaylist}
                  onPlusButtonClick={addToSubPlaylist}
                />
              </PlaylistViewColumn>
            }
            {playlistById && makingSubPlaylist &&
              <PlaylistViewColumn>
                <h1>Sub Playlist</h1>
                <PlaylistView
                  playlist={subPlaylist}
                  hasMinusButton={true}
                  onMinusButtonClick={removeFromSubPlaylist}
                />
              </PlaylistViewColumn>
            }
          </PlaylistViewPageContainer>
        </Layout>
    )
}

export default PlaylistViewPage;
