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
    data: JSON.stringify({
      name: 'New Playlist',
      description: "New playlist description",
      public: false
    })
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

    function removeFromSubPlaylist(uri){
      //TODO: Is there a way to not remove duplicate songs?
      setSubPlaylist(subPlaylist.filter(track => track.uri !== uri))
    }

    function saveSubPlaylist(){
        async function makeNewPlaylist(){
          try {
            const url = 'https://api.spotify.com/v1/users/me/playlists'
            axios.post(getOptions(accessToken, url))
            .then(function(response) {
              console.log("response ID", response)
            })
          } catch (e) {
            if (e instanceof DOMException) {
              console.log("HTTP request aborted");
            } else {
              console.log(e);
            }
          }
        }
        makeNewPlaylist();

        // async function putItemsInPlaylist(){
        //   try {
        //     const url = 'https://api.spotify.com/v1/playlists/{playlist_id}/tracks'
        //     axios.post(getOptions(accessToken, url))
        //     .then(function(response) {
        //       console.log("Putting Items in that new playlist: ", response);
        //     })
        //   } catch (e) {
        //     if (e instanceof DOMException) {
        //       console.log("HTTP request aborted");
        //     } else {
        //       console.log(e);
        //     }
        //   }
        // }
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
                {subPlaylist.length > 0 &&
                  <SaveSubPlaylistButton onClick={() => {saveSubPlaylist()}}>Save Sub-Playlist</SaveSubPlaylistButton>
                }
              </PlaylistViewColumn>
            }
          </PlaylistViewPageContainer>
        </Layout>
    )
}

export default PlaylistViewPage;
