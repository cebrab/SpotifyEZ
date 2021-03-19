/** @jsxImportSource @emotion/react */
import Layout from '../components/Layout'
import RecentlyPlayedSongsView from '../components/RecentlyPlayedSongsView'
import TwoColumnLayout from '../components/TwoColumnLayout'
import styled from '@emotion/styled';
import { css } from '@emotion/react';
const About = () => {

  const mainContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 20%;
    margin-right: 20%;
    h1{
      padding: 5px;
      margin: 10px;
    }
    h2{
      padding: 5px;
      margin: 10px;
    }
    h3{
    }
    color: floralwhite;
    border-style: solid;
    border-color: grey;
    border-width: 1px;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.65);

  `;
  return (
      <Layout>
        <div css={mainContainer}>
          <h1> About SpotifyEZ </h1>
          <h2> This project was created by Kuan-Lun Tseng, Loc Nguyen and Brian Cebra. </h2>
          <h3> Adding, making playlist in Spotify is just a pain. </h3>
          <h3>This app will provide and easy-to-use dashboard for managing Spotify playlists and songs.</h3>
          <h3>The app requires the user to log in to Spotify to use the features of this web app.</h3>

        </div>
      </Layout>
  )

}

export default About;
