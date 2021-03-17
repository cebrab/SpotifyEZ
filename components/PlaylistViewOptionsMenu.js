import styled from '@emotion/styled'
import colors from '../styles/colors'
import breakpoints from '../styles/breakpoints'

function PlaylistViewOptionsMenu({makingSubPlaylist, setMakingSubPlaylist, onCancelButtonClick}) {
  const PlaylistViewOptionsMenuContainer = styled.div`
    width: 100%;
    height: 30px;
    background-color: ${makingSubPlaylist ? colors.red : colors.darkGreen};
    margin-bottom: 5px;
  `;

  const PlaylistViewOptionsMenuItem = styled.span`
    float: left;
    width: 100%; //change this if add more menu items
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
        // <PlaylistViewOptionsMenuItem>Sort</PlaylistViewOptionsMenuItem>
      }
    </PlaylistViewOptionsMenuContainer>
  )
}

export default PlaylistViewOptionsMenu;
