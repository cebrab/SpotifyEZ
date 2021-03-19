/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';


function NewPlaylistModal(){

  const [toggleModal, setToggleModal] = useState(false)
  const outerContainerStyling = css`
    position: fixed;
    top: 9%;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1010;
    overflow: scroll;
    background-color: rgba(0, 0, 0, 0.65);
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const containerStyling = css`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div{
      font-size: 40px;
      padding: 10px;
      margin: 5px;
    }
    input{
      padding: 10px;
      margin: 5px;
      width: 80%;
    }
    textarea{
      padding: 10px;
      margin: 5px;
      width: 80%;
    }
    .PlaylistDescription{
      height: 50%;
    }
    background-color: floralwhite;
    width: 40%;
    height: 50%;
    border-radius: 8px;
  `;
const buttonContainerStyling=css`
  display: flex;
  flex-direction: row;
  button{
    width: 45%;
    height: 80%;
    padding: 5px;
    margin: 5px;
    border-radius: 8px;
    border-style: solid;
    border-width: 1px;

  }

`;

  function toggleModalClicked(){
    setToggleModal(!toggleModal)
  }
  function toggleClicked(e){
    e.preventDefault();
    setToggleModal(!toggleModal)
  }
  return (
      <>
      <button onClick={toggleModalClicked}> Toggle modal </button>
      <div>
      {toggleModal? (
        <div css={outerContainerStyling}>
          <form css={containerStyling}>
            <div>New playlist information</div>
            <input type="text" placeholder="Playlist name..."/>
            <textarea className="PlaylistDescription"type="text" placeholder="Playlist description..."/>

          <div css={buttonContainerStyling}>
            <button onClick={toggleClicked}> Cancel </button>
            <button onClick={toggleClicked}> Add new playlist </button>
          </div>
          </form>
        </div>)
      : null
      }

      </div>
      </>
  );
}
export default NewPlaylistModal
