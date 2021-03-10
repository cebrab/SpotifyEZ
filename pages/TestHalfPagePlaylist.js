/** @jsxImportSource @emotion/react */
import HalfPagePlaylist from '../components/HalfPagePlaylist'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const TestHalfPagePlaylistMainUIStyling = css`
  display: flex !important;
  flex-direction: column !important;
`;

const SecondRowStyling = css`
  display:flex !important;
  flex-direction: row !important;
`;

const OverwriteSidebarStyling = css`
  display: flex !important;
`;
export default function TestHalfPagePlaylist() {
  return(
    <>
      <HalfPagePlaylist/>
    </>
  );
}
