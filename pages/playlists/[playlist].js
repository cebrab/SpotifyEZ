import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import colors from '../../styles/colors';

import PlaylistView from '../../components/PlaylistView';
import PlaylistViewOptionsMenu from '../../components/PlaylistViewOptionsMenu'
import PlaylistViewColumn from '../../components/PlaylistViewColumn'
import Layout from '../../components/Layout';
import { getPlaylistById } from '../../store/actions/playlistAction';

const getOptions = (accessToken, url) => {
  const options = {
    url: url,
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + accessToken,
      'Content-Type': 'application/json',
    },
    data: {
      'name': "SpotifyEZ",
      'description': "New playlist description",
      'public': 'false'
    }
  }
  return options
}

const PlaylistViewPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SaveSubPlaylistButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 12.5%;
  width: 200px;
  height: 60px;
  cursor: pointer;
  border: 0;
  border-radius:10px;
  font-size: 125%;
  color: white;
  background-color: ${colors.darkGreen};

  :hover {
    background-color: ${colors.hoverGreen};
  }
`;

function PlaylistViewPage() {
  const router = useRouter()
  const dispatch = useDispatch()
  const { accessToken } = useSelector(state => state.auth)
  const { playlistById } = useSelector(state => state.playlist)
  const { user } = useSelector(state => state.user)
  const [makingSubPlaylist, setMakingSubPlaylist] = useState(false)
  const [subPlaylist, setSubPlaylist] = useState([])
  const [playlistId, setPlaylistId] = useState()

  useEffect(() => {
    dispatch(getPlaylistById(accessToken, router.query.playlist))
    setSubPlaylist([])
    setMakingSubPlaylist(false)
  }, [router.query])

  function addToSubPlaylist(track) {
    setSubPlaylist([{
      uri: track.uri,
    },
    ...subPlaylist
    ])
  }

  function removeFromSubPlaylist(uri) {
    //TODO: Is there a way to not remove duplicate songs?
    setSubPlaylist(subPlaylist.filter(track => track.uri !== uri))
  }

  async function saveSubPlaylist() {

    async function makeNewPlaylist() {
      try {
        const url = `https://api.spotify.com/v1/users/${user.id}/playlists`
        axios(getOptions(accessToken, url))
          .then(function (response) {
            console.log("response ID", response)
            setPlaylistId(response.data.id)
            console.log("Within Async", response.data.id)

            // return response.data.id
            putItemsInPlaylist(playlistId)
          })
      } catch (e) {
        if (e instanceof DOMException) {
          console.log("HTTP request aborted");
        } else {
          console.log(e);
        }
      }
    }



    async function putItemsInPlaylist() {
      const options = {

        // url: `https://api.spotify.com/v1/playlists/${id}/tracks?uri=${subPlaylist.map((uri) => uri.uri)}`,
        url: `https://api.spotify.com/v1/playlists/${playlistId}/tracks?uris=${encodeURIComponent(subPlaylist.map((uri) => uri.uri))}`,
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + accessToken,
          'Content-Type': 'application/json',
        }
      }
      try {
        // const url = `https://api.spotify.com/v1/playlists/${id}/tracks?uri=${encodeURIComponent(subPlaylist.map((uri) => uri.uri))}`
        console.log("optionssss", options)
        axios(options)
          .then(function (response) {
            console.log("Putting Items in that new playlist: ", response);
          })
      } catch (e) {
        if (e instanceof DOMException) {
          console.log("HTTP request aborted");
        } else {
          console.log(e);
        }
      }
    }


    const id = await makeNewPlaylist().then(console.log("IDDDDDDDD", playlistId)).then(putItemsInPlaylist(playlistId));



  }

  return (
    <Layout>
      <PlaylistViewPageContainer>
        {playlistById &&
          <PlaylistViewColumn>
            <h1>{playlistById.name}</h1>
            <PlaylistViewOptionsMenu
              makingSubPlaylist={makingSubPlaylist}
              setMakingSubPlaylist={setMakingSubPlaylist}
              onCancelButtonClick={() => { setSubPlaylist([]) }}
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
            {subPlaylist.length > 0 &&
              <SaveSubPlaylistButton onClick={() => { saveSubPlaylist() }}>Save Sub-Playlist</SaveSubPlaylistButton>
            }
          </PlaylistViewColumn>
        }
      </PlaylistViewPageContainer>
    </Layout>
  )
}

export default PlaylistViewPage;
