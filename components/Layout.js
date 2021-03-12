/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div css={css({
        marginLeft:'70px',
        marginTop: '90px'
      })}>
        {children}
      </div>
    </div>
  );
}