/** @jsxImportSource @emotion/react */
import HalfPagePlaylist from '../components/HalfPagePlaylist'
import SpotifyTinder from '../components/SpotifyTinder'
import Layout from '../components/Layout';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux'
import { getSongRecommendations } from '../store/actions/songAction';
import PlaylistColumn from '../components/PlaylistColumn'
import PlaylistViewColumn from '../components/PlaylistViewColumn';
import { getRecents } from '../store/actions/songAction';

//note track is an array with one object, and that object contains
export default function TestHalfPagePlaylist() {
  const router = useRouter();
  const dispatch = useDispatch()
  const { accessToken } = useSelector(state => state.auth)
  const { recommendations } = useSelector(state => state.song)
  const [swipeRightList, addSwipeRightList] = useState([])
  const { recentSongs } = useSelector(state => state.song)
  function swipeRight(songObject){
    addSwipeRightList([...swipeRightList, songObject])
    console.log("Song object: " + songObject)
  }

  console.log(router.query)

  useEffect(() => {
    console.log("query seed is : " + router.query.oneSongSeed)
    if (router.query.oneSongSeed){
      dispatch(getSongRecommendations(accessToken, router.query.oneSongSeed))
    }
    else {
      dispatch(getRecents(accessToken))
      dispatch(getSongRecommendations(accessToken, recentSongs.items[0].track.id))
      console.log("recent song first item: "+ recentSongs.items[0].track.id);
    }

  }, [])

  console.log('Recommendation === ', recommendations)

  const SpotifyTinderPageContainerStyling = css`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  `;
  const [dummyData, setDummyData] = useState({
  "tracks": [
    {
      "album": {
        "album_type": "ALBUM",
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/26VFTg2z8YR0cCuwLzESi2"
            },
            "href": "https://api.spotify.com/v1/artists/26VFTg2z8YR0cCuwLzESi2",
            "id": "26VFTg2z8YR0cCuwLzESi2",
            "name": "Halsey",
            "type": "artist",
            "uri": "spotify:artist:26VFTg2z8YR0cCuwLzESi2"
          }
        ],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/7GjG91tyHQNGEHzKJaqOi0"
        },
        "href": "https://api.spotify.com/v1/albums/7GjG91tyHQNGEHzKJaqOi0",
        "id": "7GjG91tyHQNGEHzKJaqOi0",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2730f7ad6d8d829906c17cae210",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e020f7ad6d8d829906c17cae210",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048510f7ad6d8d829906c17cae210",
            "width": 64
          }
        ],
        "name": "hopeless fountain kingdom (Deluxe)",
        "release_date": "2017-06-02",
        "release_date_precision": "day",
        "total_tracks": 16,
        "type": "album",
        "uri": "spotify:album:7GjG91tyHQNGEHzKJaqOi0"
      },
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/26VFTg2z8YR0cCuwLzESi2"
          },
          "href": "https://api.spotify.com/v1/artists/26VFTg2z8YR0cCuwLzESi2",
          "id": "26VFTg2z8YR0cCuwLzESi2",
          "name": "Halsey",
          "type": "artist",
          "uri": "spotify:artist:26VFTg2z8YR0cCuwLzESi2"
        }
      ],
      "disc_number": 1,
      "duration_ms": 202438,
      "explicit": false,
      "external_ids": {
        "isrc": "USUM71702213"
      },
      "external_urls": {
        "spotify": "https://open.spotify.com/track/2WQn7Yvs728KZmmY6tgWqH"
      },
      "href": "https://api.spotify.com/v1/tracks/2WQn7Yvs728KZmmY6tgWqH",
      "id": "2WQn7Yvs728KZmmY6tgWqH",
      "is_local": false,
      "is_playable": true,
      "name": "Eyes Closed",
      "popularity": 60,
      "preview_url": null,
      "track_number": 3,
      "type": "track",
      "uri": "spotify:track:2WQn7Yvs728KZmmY6tgWqH"
    },
    {
      "album": {
        "album_type": "ALBUM",
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5WId4o5jdGVhptNU0uqKxu"
            },
            "href": "https://api.spotify.com/v1/artists/5WId4o5jdGVhptNU0uqKxu",
            "id": "5WId4o5jdGVhptNU0uqKxu",
            "name": "St. Lucia",
            "type": "artist",
            "uri": "spotify:artist:5WId4o5jdGVhptNU0uqKxu"
          }
        ],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/5Pjft9EbneGmlhOQ2mo6bo"
        },
        "href": "https://api.spotify.com/v1/albums/5Pjft9EbneGmlhOQ2mo6bo",
        "id": "5Pjft9EbneGmlhOQ2mo6bo",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2736ff9ef1fa0ddcd2ff9da505f",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e026ff9ef1fa0ddcd2ff9da505f",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048516ff9ef1fa0ddcd2ff9da505f",
            "width": 64
          }
        ],
        "name": "When The Night (Deluxe)",
        "release_date": "2012",
        "release_date_precision": "year",
        "total_tracks": 14,
        "type": "album",
        "uri": "spotify:album:5Pjft9EbneGmlhOQ2mo6bo"
      },
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5WId4o5jdGVhptNU0uqKxu"
          },
          "href": "https://api.spotify.com/v1/artists/5WId4o5jdGVhptNU0uqKxu",
          "id": "5WId4o5jdGVhptNU0uqKxu",
          "name": "St. Lucia",
          "type": "artist",
          "uri": "spotify:artist:5WId4o5jdGVhptNU0uqKxu"
        }
      ],
      "disc_number": 1,
      "duration_ms": 308360,
      "explicit": false,
      "external_ids": {
        "isrc": "USSM11303710"
      },
      "external_urls": {
        "spotify": "https://open.spotify.com/track/0pBLfQ5JBjh12H6DGZjMwM"
      },
      "href": "https://api.spotify.com/v1/tracks/0pBLfQ5JBjh12H6DGZjMwM",
      "id": "0pBLfQ5JBjh12H6DGZjMwM",
      "is_local": false,
      "is_playable": true,
      "name": "Elevate",
      "popularity": 55,
      "preview_url": "https://p.scdn.co/mp3-preview/1be8a852cfbe050a225b7fbc803215d57e48b341?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number": 3,
      "type": "track",
      "uri": "spotify:track:0pBLfQ5JBjh12H6DGZjMwM"
    },
    {
      "album": {
        "album_type": "ALBUM",
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2xe8IXgCTpwHE3eA9hTs4n"
            },
            "href": "https://api.spotify.com/v1/artists/2xe8IXgCTpwHE3eA9hTs4n",
            "id": "2xe8IXgCTpwHE3eA9hTs4n",
            "name": "BANKS",
            "type": "artist",
            "uri": "spotify:artist:2xe8IXgCTpwHE3eA9hTs4n"
          }
        ],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/1eeYYgK208xvkCEGkYqWah"
        },
        "href": "https://api.spotify.com/v1/albums/1eeYYgK208xvkCEGkYqWah",
        "id": "1eeYYgK208xvkCEGkYqWah",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2739c8dd74225a1fb838fa7dca6",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e029c8dd74225a1fb838fa7dca6",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048519c8dd74225a1fb838fa7dca6",
            "width": 64
          }
        ],
        "name": "Goddess (Deluxe)",
        "release_date": "2014-01-01",
        "release_date_precision": "day",
        "total_tracks": 18,
        "type": "album",
        "uri": "spotify:album:1eeYYgK208xvkCEGkYqWah"
      },
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2xe8IXgCTpwHE3eA9hTs4n"
          },
          "href": "https://api.spotify.com/v1/artists/2xe8IXgCTpwHE3eA9hTs4n",
          "id": "2xe8IXgCTpwHE3eA9hTs4n",
          "name": "BANKS",
          "type": "artist",
          "uri": "spotify:artist:2xe8IXgCTpwHE3eA9hTs4n"
        }
      ],
      "disc_number": 1,
      "duration_ms": 249739,
      "explicit": false,
      "external_ids": {
        "isrc": "USUM71405259"
      },
      "external_urls": {
        "spotify": "https://open.spotify.com/track/4PvD06Pmbm2rHG2JjSlElF"
      },
      "href": "https://api.spotify.com/v1/tracks/4PvD06Pmbm2rHG2JjSlElF",
      "id": "4PvD06Pmbm2rHG2JjSlElF",
      "is_local": false,
      "is_playable": true,
      "name": "Beggin For Thread",
      "popularity": 58,
      "preview_url": null,
      "track_number": 10,
      "type": "track",
      "uri": "spotify:track:4PvD06Pmbm2rHG2JjSlElF"
    }
  ],
  "seeds": [
    {
      "initialPoolSize": 277,
      "afterFilteringSize": 179,
      "afterRelinkingSize": 179,
      "id": "4NHQUGzhtTLFvgF5SZesLK",
      "type": "ARTIST",
      "href": "https://api.spotify.com/v1/artists/4NHQUGzhtTLFvgF5SZesLK"
    },
    {
      "initialPoolSize": 343,
      "afterFilteringSize": 43,
      "afterRelinkingSize": 43,
      "id": "0c6xIDDpzE81m2q797ordA",
      "type": "TRACK",
      "href": "https://api.spotify.com/v1/tracks/0c6xIDDpzE81m2q797ordA"
    }
  ]
});
  return(
    <>
    <Layout>

    <div css={SpotifyTinderPageContainerStyling}>
      <SpotifyTinder playlist={recommendations  ? recommendations.tracks : dummyData.tracks} SwipeRight={swipeRight}/>
      <>
      {router.query.playlistId ?
        <PlaylistColumn
          playlist={[]}
          addedSongs={swipeRightList ? swipeRightList : dummyData.tracks}
          setPlaylist={addSwipeRightList}
          hasMinusButton={true}
          playlistId={router.query.playlistId}
        /> :
        <PlaylistViewColumn
          playlist={[]}
          addedSongs={swipeRightList ? swipeRightList : dummyData.tracks}
          playlistTitle={"New playlist"}
          setPlaylist={addSwipeRightList}
          hasMinusButton={true}
        />
      }
      </>
    </div>


    </Layout>
    </>
  );
}
