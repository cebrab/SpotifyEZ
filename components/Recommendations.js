import { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getGenreSeeds, getRecommendations, getSongs } from '../store/actions/songAction'

const Recommendations = () => {
  const style = {
    backgroundColor: 'lightgray',
    color: 'black',
    overflowY: 'scroll',
    maxHeight: '300px',
    maxWidth: '200px'
  }
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()
  const { accessToken } = useSelector(state => state.auth)
  const { genres } = useSelector(state => state.song.genreSeeds)
  const { recommendations } = useSelector(state => state.song)
  const { tracks } = useSelector(state => state.song.searchSongs)

  useEffect(() => {
    dispatch(getGenreSeeds(accessToken))
    if (query.trim() != '') {
      dispatch(getRecommendations(accessToken, query))
    }
  }, [])

  //console.log('Genre Seeds === ', genres)
  console.log('Recommendations === ', recommendations)

  return (
    <div>
      <input
        placeholder={'Enter Genre Type...'}
        onChange={e => setQuery(e.target.value)}
      />
      <button onClick={() => { dispatch(getRecommendations(accessToken, query)) }}>
        Search
      </button>

      <h3>Genre List</h3>
      <ul style={style}>
        {genres !== undefined &&
          genres.map((genre) => {
            return <li key={genre}>{genre} </li>
          })}
      </ul>

      <h3>Recommendation List(Click me!):</h3>
      <ul style={style}>
        {recommendations !== undefined &&
          recommendations.tracks.map((track) => {
            return <li key={track.name} onClick={(e) => {dispatch(getSongs(accessToken, e.target.textContent))}} >{track.name}</li>
          })
        }
      </ul>

      <h3>Search Result</h3>
      <ul style={style}>
        {tracks !== undefined &&
          tracks.items.map((item) => {
            return <li key={item.name}>{item.name}</li>
          })
        }
      </ul>
    </div>
  )
}

export default Recommendations
