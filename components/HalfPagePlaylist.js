/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import HalfPagePlaylistItem from './HalfPagePlaylistItem'

const HalfPagePlaylistContainerStyling = css`
  list-style: none;
  width: 45%;
  height: 100%;
`;


function HalfPagePlaylist(){
  return (
    <>
    <div>
      <ul css={HalfPagePlaylistContainerStyling}>
        <li>
          <HalfPagePlaylistItem/>
          <HalfPagePlaylistItem/>
          <HalfPagePlaylistItem/>
        </li>
      </ul>
    </div>
    </>
  );
}
export default HalfPagePlaylist;
