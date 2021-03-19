/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import colors from '../styles/colors';
import PlaylistView from './PlaylistView';
import PropTypes from 'prop-types';

const PlaylistTitle = styled.div`
  width: 100%;
  text-align: center;
  color: ${colors.black};
  font-size: 40px;
  font-weight: bold;
  margin: 20px 0;
  border: 2px solid ${colors.darkGreen};
  border-radius: 10px;
`;

function PlaylistViewColumn(props) {
  const styles = css`
    width: 45%;
    float: left;
    padding: 0 20px;
  `;

  return(
    <div css={styles}>
      <PlaylistTitle>{props.playlistTitle}</PlaylistTitle>
      {props.menu}
      <PlaylistView
        playlist={props.playlist}
        hasPlusButton={props.hasPlusButton}
        onPlusButtonClick={props.onPlusButtonClick}
        hasMinusButton={props.hasMinusButton}
        onMinusButtonClick={props.onMinusButtonClick}
      />
    </div>
  )
}

PlaylistViewColumn.propTypes = {
  playlist: PropTypes.object.isRequired,
  playlistTitle: PropTypes.string,
  menu: PropTypes.element,
  hasPlusButton: PropTypes.boolean,
  hasMinusButton: PropTypes.boolean,
  onPlusButtonClick: PropTypes.func,
  onMinusButtonClick: PropTypes.func
}

PlaylistViewColumn.defaultProps = {
  playlistTitle: "",
  menu: null,
  hasPlusButton: false,
  hasMinusButton: false,
  onPlusButtonClick: null,
  onMinusButtonClick: null
}




export default PlaylistViewColumn;
