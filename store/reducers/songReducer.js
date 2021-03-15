import * as types from '../types'

const initialState = {
  genreSeeds: [],
  searchSongs: []
}

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_GENRE_SEEDS:
      return {
        ...state,
        genreSeeds: action.genreSeeds
      }

    case types.GET_RECOMMENDATIONS:
      return {
        ...state,
        recommendations: action.recommendations
      }

    case types.GET_SONGS:
      return {
        ...state,
        searchSongs: action.searchSongs
      }
    
    default:
      return state
  }
}

export default songReducer
