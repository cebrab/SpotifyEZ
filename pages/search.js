import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getSongs } from '../store/actions/songAction'
import Layout from '../components/Layout'
import PlaylistColumn from '../components/PlaylistColumn'

function SearchResultsPage() {
  const dispatch = useDispatch()
  const router = useRouter()
  const { accessToken } = useSelector(state => state.auth)
  const { searchSongs } = useSelector(state => state.song)

  useEffect(() => {
    dispatch(getSongs(accessToken, router.query))
  }, [])

  console.log("Search songs array: ", searchSongs );

  return(
    <Layout>
      {searchSongs &&
        <PlaylistColumn
          playlist={
            {
    "tracks": {
        "href": "https://api.spotify.com/v1/search?query=%5Bobject+Object%5D&type=track&market=US&offset=0&limit=10",
        "items": [
            {
                "album": {
                    "album_type": "compilation",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
                            },
                            "href": "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
                            "id": "0LyfQWJT6nXafLPZqxe9Of",
                            "name": "Various Artists",
                            "type": "artist",
                            "uri": "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
                        }
                    ],
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/6lz0QOmLCbN9DXvriHEIl3"
                    },
                    "href": "https://api.spotify.com/v1/albums/6lz0QOmLCbN9DXvriHEIl3",
                    "id": "6lz0QOmLCbN9DXvriHEIl3",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273e097b1e19c7b51ea916e3b0c",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e02e097b1e19c7b51ea916e3b0c",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d00004851e097b1e19c7b51ea916e3b0c",
                            "width": 64
                        }
                    ],
                    "name": "Mindrive 06",
                    "release_date": "2020-08-31",
                    "release_date_precision": "day",
                    "total_tracks": 10,
                    "type": "album",
                    "uri": "spotify:album:6lz0QOmLCbN9DXvriHEIl3"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/6x5OZRXkIMa07MyXjTBMJE"
                        },
                        "href": "https://api.spotify.com/v1/artists/6x5OZRXkIMa07MyXjTBMJE",
                        "id": "6x5OZRXkIMa07MyXjTBMJE",
                        "name": "Art Object",
                        "type": "artist",
                        "uri": "spotify:artist:6x5OZRXkIMa07MyXjTBMJE"
                    }
                ],
                "disc_number": 1,
                "duration_ms": 373333,
                "explicit": false,
                "external_ids": {
                    "isrc": "GBKQU2093388"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/6T7da6rPWPgVWJ5TjMxw4X"
                },
                "href": "https://api.spotify.com/v1/tracks/6T7da6rPWPgVWJ5TjMxw4X",
                "id": "6T7da6rPWPgVWJ5TjMxw4X",
                "is_local": false,
                "is_playable": true,
                "name": "Progressive Object",
                "popularity": 24,
                "preview_url": "https://p.scdn.co/mp3-preview/53c0b357b144cef8e89c40006032f018e45d59f3?cid=2baa0fc179d94869b28342364bd5ef98",
                "track_number": 2,
                "type": "track",
                "uri": "spotify:track:6T7da6rPWPgVWJ5TjMxw4X"
            },
            {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/4LLpKhyESsyAXpc4laK94U"
                            },
                            "href": "https://api.spotify.com/v1/artists/4LLpKhyESsyAXpc4laK94U",
                            "id": "4LLpKhyESsyAXpc4laK94U",
                            "name": "Mac Miller",
                            "type": "artist",
                            "uri": "spotify:artist:4LLpKhyESsyAXpc4laK94U"
                        }
                    ],
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/3T02fCxAjApu18taJLLbyN"
                    },
                    "href": "https://api.spotify.com/v1/albums/3T02fCxAjApu18taJLLbyN",
                    "id": "3T02fCxAjApu18taJLLbyN",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273e89541ec125fcc0792749fdd",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e02e89541ec125fcc0792749fdd",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d00004851e89541ec125fcc0792749fdd",
                            "width": 64
                        }
                    ],
                    "name": "Watching Movies with the Sound Off (Deluxe Edition)",
                    "release_date": "2013-06-18",
                    "release_date_precision": "day",
                    "total_tracks": 19,
                    "type": "album",
                    "uri": "spotify:album:3T02fCxAjApu18taJLLbyN"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/4LLpKhyESsyAXpc4laK94U"
                        },
                        "href": "https://api.spotify.com/v1/artists/4LLpKhyESsyAXpc4laK94U",
                        "id": "4LLpKhyESsyAXpc4laK94U",
                        "name": "Mac Miller",
                        "type": "artist",
                        "uri": "spotify:artist:4LLpKhyESsyAXpc4laK94U"
                    }
                ],
                "disc_number": 1,
                "duration_ms": 259143,
                "explicit": true,
                "external_ids": {
                    "isrc": "USQY51374457"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/64gyqTtDDel7B2NoEkOa0A"
                },
                "href": "https://api.spotify.com/v1/tracks/64gyqTtDDel7B2NoEkOa0A",
                "id": "64gyqTtDDel7B2NoEkOa0A",
                "is_local": false,
                "is_playable": true,
                "name": "Objects in the Mirror",
                "popularity": 64,
                "preview_url": "https://p.scdn.co/mp3-preview/ba46d66153c3bc2eac286d28d09dc16169873c71?cid=2baa0fc179d94869b28342364bd5ef98",
                "track_number": 8,
                "type": "track",
                "uri": "spotify:track:64gyqTtDDel7B2NoEkOa0A"
            },
            {
                "album": {
                    "album_type": "compilation",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
                            },
                            "href": "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
                            "id": "0LyfQWJT6nXafLPZqxe9Of",
                            "name": "Various Artists",
                            "type": "artist",
                            "uri": "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
                        }
                    ],
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/0qzUZeMqLfYNRTbCxY0kHG"
                    },
                    "href": "https://api.spotify.com/v1/albums/0qzUZeMqLfYNRTbCxY0kHG",
                    "id": "0qzUZeMqLfYNRTbCxY0kHG",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2734a2391b5c80e3caf461ebd18",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e024a2391b5c80e3caf461ebd18",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d000048514a2391b5c80e3caf461ebd18",
                            "width": 64
                        }
                    ],
                    "name": "Mindrive 04",
                    "release_date": "2020-08-26",
                    "release_date_precision": "day",
                    "total_tracks": 10,
                    "type": "album",
                    "uri": "spotify:album:0qzUZeMqLfYNRTbCxY0kHG"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/6x5OZRXkIMa07MyXjTBMJE"
                        },
                        "href": "https://api.spotify.com/v1/artists/6x5OZRXkIMa07MyXjTBMJE",
                        "id": "6x5OZRXkIMa07MyXjTBMJE",
                        "name": "Art Object",
                        "type": "artist",
                        "uri": "spotify:artist:6x5OZRXkIMa07MyXjTBMJE"
                    }
                ],
                "disc_number": 1,
                "duration_ms": 340645,
                "explicit": false,
                "external_ids": {
                    "isrc": "GBKQU2091700"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/4JtHbDhtRqICeQWxMm1BRR"
                },
                "href": "https://api.spotify.com/v1/tracks/4JtHbDhtRqICeQWxMm1BRR",
                "id": "4JtHbDhtRqICeQWxMm1BRR",
                "is_local": false,
                "is_playable": true,
                "name": "Love Object",
                "popularity": 24,
                "preview_url": "https://p.scdn.co/mp3-preview/01adb0e8148b386492139f8f8ebb5a3c4a79cf8a?cid=2baa0fc179d94869b28342364bd5ef98",
                "track_number": 3,
                "type": "track",
                "uri": "spotify:track:4JtHbDhtRqICeQWxMm1BRR"
            },
            {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/0a9BgwCCRSeKbh2xXZsUaN"
                            },
                            "href": "https://api.spotify.com/v1/artists/0a9BgwCCRSeKbh2xXZsUaN",
                            "id": "0a9BgwCCRSeKbh2xXZsUaN",
                            "name": "Harris Heller",
                            "type": "artist",
                            "uri": "spotify:artist:0a9BgwCCRSeKbh2xXZsUaN"
                        }
                    ],
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/3VPlxAivVLNCQ00GpQQM6Z"
                    },
                    "href": "https://api.spotify.com/v1/albums/3VPlxAivVLNCQ00GpQQM6Z",
                    "id": "3VPlxAivVLNCQ00GpQQM6Z",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273c65cda76f8ed6c9508f2884e",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e02c65cda76f8ed6c9508f2884e",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d00004851c65cda76f8ed6c9508f2884e",
                            "width": 64
                        }
                    ],
                    "name": "Midnight",
                    "release_date": "2021-03-19",
                    "release_date_precision": "day",
                    "total_tracks": 30,
                    "type": "album",
                    "uri": "spotify:album:3VPlxAivVLNCQ00GpQQM6Z"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0a9BgwCCRSeKbh2xXZsUaN"
                        },
                        "href": "https://api.spotify.com/v1/artists/0a9BgwCCRSeKbh2xXZsUaN",
                        "id": "0a9BgwCCRSeKbh2xXZsUaN",
                        "name": "Harris Heller",
                        "type": "artist",
                        "uri": "spotify:artist:0a9BgwCCRSeKbh2xXZsUaN"
                    }
                ],
                "disc_number": 1,
                "duration_ms": 126319,
                "explicit": false,
                "external_ids": {
                    "isrc": "QZDA72152027"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/66fxFfyScEowUMT2tSwm2U"
                },
                "href": "https://api.spotify.com/v1/tracks/66fxFfyScEowUMT2tSwm2U",
                "id": "66fxFfyScEowUMT2tSwm2U",
                "is_local": false,
                "is_playable": true,
                "name": "Dull Objects",
                "popularity": 0,
                "preview_url": "https://p.scdn.co/mp3-preview/f1b8ddacdf3f028c9430eb62846355eb7ed941f1?cid=2baa0fc179d94869b28342364bd5ef98",
                "track_number": 20,
                "type": "track",
                "uri": "spotify:track:66fxFfyScEowUMT2tSwm2U"
            },
            {
                "album": {
                    "album_type": "compilation",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
                            },
                            "href": "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
                            "id": "0LyfQWJT6nXafLPZqxe9Of",
                            "name": "Various Artists",
                            "type": "artist",
                            "uri": "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
                        }
                    ],
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/2K5UEQHm9iTUmWgVqLIQQW"
                    },
                    "href": "https://api.spotify.com/v1/albums/2K5UEQHm9iTUmWgVqLIQQW",
                    "id": "2K5UEQHm9iTUmWgVqLIQQW",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27325064f86b4d28d439a19dd97",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e0225064f86b4d28d439a19dd97",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d0000485125064f86b4d28d439a19dd97",
                            "width": 64
                        }
                    ],
                    "name": "Mindrive 07",
                    "release_date": "2020-09-02",
                    "release_date_precision": "day",
                    "total_tracks": 10,
                    "type": "album",
                    "uri": "spotify:album:2K5UEQHm9iTUmWgVqLIQQW"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/7HVVicCy7NXIz99X16G6EE"
                        },
                        "href": "https://api.spotify.com/v1/artists/7HVVicCy7NXIz99X16G6EE",
                        "id": "7HVVicCy7NXIz99X16G6EE",
                        "name": "C-bulya",
                        "type": "artist",
                        "uri": "spotify:artist:7HVVicCy7NXIz99X16G6EE"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/6x5OZRXkIMa07MyXjTBMJE"
                        },
                        "href": "https://api.spotify.com/v1/artists/6x5OZRXkIMa07MyXjTBMJE",
                        "id": "6x5OZRXkIMa07MyXjTBMJE",
                        "name": "Art Object",
                        "type": "artist",
                        "uri": "spotify:artist:6x5OZRXkIMa07MyXjTBMJE"
                    }
                ],
                "disc_number": 1,
                "duration_ms": 430866,
                "explicit": false,
                "external_ids": {
                    "isrc": "GBKQU2093408"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/7euOzrxdmsOZz5A4oUTCvw"
                },
                "href": "https://api.spotify.com/v1/tracks/7euOzrxdmsOZz5A4oUTCvw",
                "id": "7euOzrxdmsOZz5A4oUTCvw",
                "is_local": false,
                "is_playable": true,
                "name": "Amber - Art Object Remix",
                "popularity": 24,
                "preview_url": "https://p.scdn.co/mp3-preview/9fc6d33299f18261843a6989bdbdfb144a11117e?cid=2baa0fc179d94869b28342364bd5ef98",
                "track_number": 9,
                "type": "track",
                "uri": "spotify:track:7euOzrxdmsOZz5A4oUTCvw"
            },
            {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/55VydwMyCuGcavwPuhutPL"
                            },
                            "href": "https://api.spotify.com/v1/artists/55VydwMyCuGcavwPuhutPL",
                            "id": "55VydwMyCuGcavwPuhutPL",
                            "name": "The Used",
                            "type": "artist",
                            "uri": "spotify:artist:55VydwMyCuGcavwPuhutPL"
                        }
                    ],
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/57d5dFo7oN2yUyGfSKPrRv"
                    },
                    "href": "https://api.spotify.com/v1/albums/57d5dFo7oN2yUyGfSKPrRv",
                    "id": "57d5dFo7oN2yUyGfSKPrRv",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273e0827a6cec3f1574249ec8c0",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e02e0827a6cec3f1574249ec8c0",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d00004851e0827a6cec3f1574249ec8c0",
                            "width": 64
                        }
                    ],
                    "name": "The Used",
                    "release_date": "2002-06-25",
                    "release_date_precision": "day",
                    "total_tracks": 12,
                    "type": "album",
                    "uri": "spotify:album:57d5dFo7oN2yUyGfSKPrRv"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/55VydwMyCuGcavwPuhutPL"
                        },
                        "href": "https://api.spotify.com/v1/artists/55VydwMyCuGcavwPuhutPL",
                        "id": "55VydwMyCuGcavwPuhutPL",
                        "name": "The Used",
                        "type": "artist",
                        "uri": "spotify:artist:55VydwMyCuGcavwPuhutPL"
                    }
                ],
                "disc_number": 1,
                "duration_ms": 176373,
                "explicit": true,
                "external_ids": {
                    "isrc": "USRE10200140"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/6IK1mlU9pJPPjkYD6jrRR5"
                },
                "href": "https://api.spotify.com/v1/tracks/6IK1mlU9pJPPjkYD6jrRR5",
                "id": "6IK1mlU9pJPPjkYD6jrRR5",
                "is_local": false,
                "is_playable": true,
                "name": "A Box Full of Sharp Objects",
                "popularity": 51,
                "preview_url": "https://p.scdn.co/mp3-preview/08662ca0c40a569a2d84b0ff8c9e91885a46f2d3?cid=2baa0fc179d94869b28342364bd5ef98",
                "track_number": 7,
                "type": "track",
                "uri": "spotify:track:6IK1mlU9pJPPjkYD6jrRR5"
            },
            {
                "album": {
                    "album_type": "compilation",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
                            },
                            "href": "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
                            "id": "0LyfQWJT6nXafLPZqxe9Of",
                            "name": "Various Artists",
                            "type": "artist",
                            "uri": "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
                        }
                    ],
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/6lz0QOmLCbN9DXvriHEIl3"
                    },
                    "href": "https://api.spotify.com/v1/albums/6lz0QOmLCbN9DXvriHEIl3",
                    "id": "6lz0QOmLCbN9DXvriHEIl3",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273e097b1e19c7b51ea916e3b0c",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e02e097b1e19c7b51ea916e3b0c",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d00004851e097b1e19c7b51ea916e3b0c",
                            "width": 64
                        }
                    ],
                    "name": "Mindrive 06",
                    "release_date": "2020-08-31",
                    "release_date_precision": "day",
                    "total_tracks": 10,
                    "type": "album",
                    "uri": "spotify:album:6lz0QOmLCbN9DXvriHEIl3"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/7HVVicCy7NXIz99X16G6EE"
                        },
                        "href": "https://api.spotify.com/v1/artists/7HVVicCy7NXIz99X16G6EE",
                        "id": "7HVVicCy7NXIz99X16G6EE",
                        "name": "C-bulya",
                        "type": "artist",
                        "uri": "spotify:artist:7HVVicCy7NXIz99X16G6EE"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/6x5OZRXkIMa07MyXjTBMJE"
                        },
                        "href": "https://api.spotify.com/v1/artists/6x5OZRXkIMa07MyXjTBMJE",
                        "id": "6x5OZRXkIMa07MyXjTBMJE",
                        "name": "Art Object",
                        "type": "artist",
                        "uri": "spotify:artist:6x5OZRXkIMa07MyXjTBMJE"
                    }
                ],
                "disc_number": 1,
                "duration_ms": 332903,
                "explicit": false,
                "external_ids": {
                    "isrc": "GBKQU2093390"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/4yTf5og3hZP9mmJsWJmcBU"
                },
                "href": "https://api.spotify.com/v1/tracks/4yTf5og3hZP9mmJsWJmcBU",
                "id": "4yTf5og3hZP9mmJsWJmcBU",
                "is_local": false,
                "is_playable": true,
                "name": "Stonehenge - Art Object Remix",
                "popularity": 24,
                "preview_url": "https://p.scdn.co/mp3-preview/c3a1299286e87cd333e06982f2dbdfa77d3c322e?cid=2baa0fc179d94869b28342364bd5ef98",
                "track_number": 4,
                "type": "track",
                "uri": "spotify:track:4yTf5og3hZP9mmJsWJmcBU"
            },
            {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/6W9OZQ862LR0HM76QQJJY3"
                            },
                            "href": "https://api.spotify.com/v1/artists/6W9OZQ862LR0HM76QQJJY3",
                            "id": "6W9OZQ862LR0HM76QQJJY3",
                            "name": "Starpoint",
                            "type": "artist",
                            "uri": "spotify:artist:6W9OZQ862LR0HM76QQJJY3"
                        }
                    ],
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/1RuIZ3XuB6TFN11ApV2tgG"
                    },
                    "href": "https://api.spotify.com/v1/albums/1RuIZ3XuB6TFN11ApV2tgG",
                    "id": "1RuIZ3XuB6TFN11ApV2tgG",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273e5856e26b8b55713c3ce7636",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e02e5856e26b8b55713c3ce7636",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d00004851e5856e26b8b55713c3ce7636",
                            "width": 64
                        }
                    ],
                    "name": "Restless",
                    "release_date": "1985",
                    "release_date_precision": "year",
                    "total_tracks": 8,
                    "type": "album",
                    "uri": "spotify:album:1RuIZ3XuB6TFN11ApV2tgG"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/6W9OZQ862LR0HM76QQJJY3"
                        },
                        "href": "https://api.spotify.com/v1/artists/6W9OZQ862LR0HM76QQJJY3",
                        "id": "6W9OZQ862LR0HM76QQJJY3",
                        "name": "Starpoint",
                        "type": "artist",
                        "uri": "spotify:artist:6W9OZQ862LR0HM76QQJJY3"
                    }
                ],
                "disc_number": 1,
                "duration_ms": 306453,
                "explicit": false,
                "external_ids": {
                    "isrc": "USEE10184909"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/63Ql2zSLiBryLRPihaUToK"
                },
                "href": "https://api.spotify.com/v1/tracks/63Ql2zSLiBryLRPihaUToK",
                "id": "63Ql2zSLiBryLRPihaUToK",
                "is_local": false,
                "is_playable": true,
                "name": "Object of My Desire",
                "popularity": 49,
                "preview_url": "https://p.scdn.co/mp3-preview/e505c943fb122001fb537c21a4fa8b50bbbd1a8f?cid=2baa0fc179d94869b28342364bd5ef98",
                "track_number": 1,
                "type": "track",
                "uri": "spotify:track:63Ql2zSLiBryLRPihaUToK"
            },
            {
                "album": {
                    "album_type": "compilation",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
                            },
                            "href": "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
                            "id": "0LyfQWJT6nXafLPZqxe9Of",
                            "name": "Various Artists",
                            "type": "artist",
                            "uri": "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
                        }
                    ],
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/75XSOfIqpTN4UKMK3e2lu3"
                    },
                    "href": "https://api.spotify.com/v1/albums/75XSOfIqpTN4UKMK3e2lu3",
                    "id": "75XSOfIqpTN4UKMK3e2lu3",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273ecf17155a5228f1287f6da7b",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e02ecf17155a5228f1287f6da7b",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d00004851ecf17155a5228f1287f6da7b",
                            "width": 64
                        }
                    ],
                    "name": "Mindrive 02",
                    "release_date": "2020-08-21",
                    "release_date_precision": "day",
                    "total_tracks": 10,
                    "type": "album",
                    "uri": "spotify:album:75XSOfIqpTN4UKMK3e2lu3"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/4Q8WqRYWGj9LpFDR65DNrl"
                        },
                        "href": "https://api.spotify.com/v1/artists/4Q8WqRYWGj9LpFDR65DNrl",
                        "id": "4Q8WqRYWGj9LpFDR65DNrl",
                        "name": "Flight Code",
                        "type": "artist",
                        "uri": "spotify:artist:4Q8WqRYWGj9LpFDR65DNrl"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/6x5OZRXkIMa07MyXjTBMJE"
                        },
                        "href": "https://api.spotify.com/v1/artists/6x5OZRXkIMa07MyXjTBMJE",
                        "id": "6x5OZRXkIMa07MyXjTBMJE",
                        "name": "Art Object",
                        "type": "artist",
                        "uri": "spotify:artist:6x5OZRXkIMa07MyXjTBMJE"
                    }
                ],
                "disc_number": 1,
                "duration_ms": 347317,
                "explicit": false,
                "external_ids": {
                    "isrc": "GBKQU2089956"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/2NWEXkCrkeIPXbfeToavEU"
                },
                "href": "https://api.spotify.com/v1/tracks/2NWEXkCrkeIPXbfeToavEU",
                "id": "2NWEXkCrkeIPXbfeToavEU",
                "is_local": false,
                "is_playable": true,
                "name": "Sprouting - Art Object Remix",
                "popularity": 24,
                "preview_url": "https://p.scdn.co/mp3-preview/e4546aad2d101187e80c6be918e970f98f5cf86f?cid=2baa0fc179d94869b28342364bd5ef98",
                "track_number": 7,
                "type": "track",
                "uri": "spotify:track:2NWEXkCrkeIPXbfeToavEU"
            },
            {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/0EmeFodog0BfCgMzAIvKQp"
                            },
                            "href": "https://api.spotify.com/v1/artists/0EmeFodog0BfCgMzAIvKQp",
                            "id": "0EmeFodog0BfCgMzAIvKQp",
                            "name": "Shakira",
                            "type": "artist",
                            "uri": "spotify:artist:0EmeFodog0BfCgMzAIvKQp"
                        }
                    ],
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/4DyMK9x2gnmRkRa16zHaEV"
                    },
                    "href": "https://api.spotify.com/v1/albums/4DyMK9x2gnmRkRa16zHaEV",
                    "id": "4DyMK9x2gnmRkRa16zHaEV",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2731f400a1f4d821b00824cf58f",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e021f400a1f4d821b00824cf58f",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d000048511f400a1f4d821b00824cf58f",
                            "width": 64
                        }
                    ],
                    "name": "Laundry Service",
                    "release_date": "2001-11-13",
                    "release_date_precision": "day",
                    "total_tracks": 13,
                    "type": "album",
                    "uri": "spotify:album:4DyMK9x2gnmRkRa16zHaEV"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0EmeFodog0BfCgMzAIvKQp"
                        },
                        "href": "https://api.spotify.com/v1/artists/0EmeFodog0BfCgMzAIvKQp",
                        "id": "0EmeFodog0BfCgMzAIvKQp",
                        "name": "Shakira",
                        "type": "artist",
                        "uri": "spotify:artist:0EmeFodog0BfCgMzAIvKQp"
                    }
                ],
                "disc_number": 1,
                "duration_ms": 222533,
                "explicit": false,
                "external_ids": {
                    "isrc": "NLB630100360"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/36YNa8joLwu9yor2TkZbIY"
                },
                "href": "https://api.spotify.com/v1/tracks/36YNa8joLwu9yor2TkZbIY",
                "id": "36YNa8joLwu9yor2TkZbIY",
                "is_local": false,
                "is_playable": true,
                "name": "Objection (Tango)",
                "popularity": 54,
                "preview_url": "https://p.scdn.co/mp3-preview/bf65095d5ce583587a0a6a8171f11541c2039cf0?cid=2baa0fc179d94869b28342364bd5ef98",
                "track_number": 1,
                "type": "track",
                "uri": "spotify:track:36YNa8joLwu9yor2TkZbIY"
            }
        ],
        "limit": 10,
        "next": "https://api.spotify.com/v1/search?query=%5Bobject+Object%5D&type=track&market=US&offset=10&limit=10",
        "offset": 0,
        "previous": null,
        "total": 18390
    }
}.tracks.items
          }
          playlistTitle={`Search results for: ${router.query}`}

        />
        }
    </Layout>
  )

}

export default SearchResultsPage;
