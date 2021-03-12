/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setGenreSeeds, setRecommendations } from '../redux/actions/songActions'
import { getAccessToken, getAuth, getSong, getRecommendations } from '../redux/selectors'

const Recommendation = () => {
  const style = css({
    backgroundColor: 'lightgray',
    color: 'black',
    overflowY: 'scroll',
    maxHeight: '300px',
    maxWidth: '200px'
  })
  const [queryGenre, SetqueryGenre] = useState()
  const dispatch = useDispatch()
  const auth = useSelector(getAuth)
  const accessToken = useSelector(getAccessToken)
  const song = useSelector(getSong)
  const recommendations = useSelector(getRecommendations)

  useEffect(() => {
    const headers = new Headers()
    headers.append('Authorization', 'Bearer ' + accessToken)

    if (auth.isAuthed === true) {
      const fetchGenreSeeds = async (accessToken) => {

        const response = await fetch('https://api.spotify.com/v1/recommendations/available-genre-seeds', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': 'application/json',
          }
        })
        const responseBody = await response.json()
        console.log('Genre Seeds === ', responseBody.genres)
        dispatch(setGenreSeeds(responseBody.genres))
      }

      const fetchRecommendations = async (accessToken) => {
        const response = await fetch(`https://api.spotify.com/v1/recommendations?limit=10&seed_genres=${queryGenre}`, {
          method: 'GET',
          headers: headers
        })
        const responseBody = await response.json()
        console.log('Recommdations === ', responseBody.tracks)
        dispatch(setRecommendations(responseBody.tracks))
      }

      fetchGenreSeeds(accessToken)

      if (queryGenre) {
        fetchRecommendations(accessToken)
      }
    }
  }, [auth.isAuthed, queryGenre])

  console.log('Song === ', song)

  const genreSearchHandler = () => {
    
  }

  return (
    <div>

      <input placeholder={'Enter Genre Type...'} onChange={e => SetqueryGenre(e.target.value)} />

      <ul css={style}>
        {song.genreSeeds !== undefined && song.genreSeeds.map(genre => {
          return <li>{genre}</li>
        })}
      </ul>

      <ul css={style}>
        {recommendations !== undefined && recommendations.map(rec => {
          return <li>{rec.name}</li>
        })}
      </ul>

    </div>
  )
}

export default Recommendation
