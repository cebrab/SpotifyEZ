/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';


function HalfPagePlaylistItemRemoveButton(){

  const removeButtonStyling = css `
    cursor: pointer;
    width: 50px;
    height: 50px;
    margin: 10px;
    &:hover{
      transform:scale(1.1,1.1);
      -webkit-transform:scale(1.1,1.1);
      -moz-transform:scale(1.1,1.1);
    }
  `;
  function removeButtonClicked(e){
    e.preventDefault();

  }

  return (
    <>
      <img css={removeButtonStyling} src="../images/x-icon-transparent.png" alt="swipe left" onClick={removeButtonClicked}/>
    </>
  );
}
export default HalfPagePlaylistItemRemoveButton;
