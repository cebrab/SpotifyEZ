/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';


function SearchResultPagePlaylistAddButton(){

  const addButtonStyling = css `
    border: 0;
    outline: none;
    background: transparent;
    box-sizing: border-box;
    font-size: 100px;
    margin: 2%;
    margin-left: 30px;
    cursor: pointer;
    color: floralwhite;
    &:hover {
      transform:scale(1.1,1.1);
      -webkit-transform:scale(1.1,1.1);
      -moz-transform:scale(1.1,1.1);
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
export default SearchResultPagePlaylistAddButton;
