/** @jsxImportSource @emotion/react */
import HalfPagePlaylist from '../components/HalfPagePlaylist'
import Layout from '../components/Layout';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export default function TestHalfPagePlaylist() {
  return(
    <>
    <Layout>
      <style global jsx>{`
      html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div {
        height: 100%;
        background: #034143;
        background: -webkit-linear-gradient(top left, #034143, #B64A2F);
        background: -moz-linear-gradient(top left, #034143, #B64A2F);
        background: linear-gradient(to bottom right, #034143, #B64A2F);
      };
      }
    `}</style>
      <HalfPagePlaylist/>
    </Layout>
    </>
  );
}
