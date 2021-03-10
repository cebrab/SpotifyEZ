/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';


function HalfPagePlaylistItemAddButton(){

  const addButtonStyling = css `
    border: 0;
    background: transparent;
    box-sizing: border-box;
    font-size: 100px;
    margin: 5%;
    cursor: pointer;
    border-color: transparent transparent transparent #202020;
    &:hover {
      color: #404040;
    }
  `;
  function addButtonClicked(e){
    e.preventDefault();

  }

  return (
    <>
      <button css={addButtonStyling} onClick={addButtonClicked}> + </button>
    </>
  );
}
export default HalfPagePlaylistItemAddButton;
