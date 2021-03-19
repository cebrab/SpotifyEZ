import styled from '@emotion/styled'
import colors from '../styles/colors'
import breakpoints from '../styles/breakpoints'
import { useRouter } from 'next/router';

function PlaylistViewOptionsMenu({makingSubPlaylist, setMakingSubPlaylist, onCancelButtonClick}) {
  const router = useRouter()

  const PlaylistViewOptionsMenuContainer = styled.div`
    width: 100%;
    height: 30px;
    background-color: ${makingSubPlaylist ? colors.red : colors.darkGreen};
    margin-bottom: 5px;
  `;



  const PlaylistViewOptionsMenuItem = styled.span`
    float: left;
    width: 50%; //change this if add more menu items
    height: 100%;

    text-align: center;
    line-height: 30px;  //match height of container
    color: white;
    font-size: 18px;

    cursor: pointer;
    :hover,
    :focus {
      background-color: ${makingSubPlaylist ? colors.hoverRed : colors.hoverGreen};
    }
  `;
  function onSwipeButtonClick() {
    router.push({
      pathname: '/SpotifyTinderPage',
      query: 'playlistId=' + router.query.playlist
    })
  }

  function toggleMakingSubPlaylist() {
    makingSubPlaylist && onCancelButtonClick();
    setMakingSubPlaylist(!makingSubPlaylist);

  }

  return(
    <PlaylistViewOptionsMenuContainer>
      <PlaylistViewOptionsMenuItem onClick = {toggleMakingSubPlaylist}>
        {makingSubPlaylist ? 'Cancel' : 'Make Sub-Playlist'}
      </PlaylistViewOptionsMenuItem>
      {
        //TODO: Implement Sorting
       <PlaylistViewOptionsMenuItem onClick= {onSwipeButtonClick}
       >Add to Playlist</PlaylistViewOptionsMenuItem>
      }
    </PlaylistViewOptionsMenuContainer>
  )
}

export default PlaylistViewOptionsMenu;
