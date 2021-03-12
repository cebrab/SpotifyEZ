import {
  SET_GENRE_SEEDS,
  SET_RECOMMENDATIONS
} from '../actions/songActions'

const songReducer = (state = {
  genreSeeds: []
}, action) => {
  switch (action.type) {
    case SET_GENRE_SEEDS:
      return {
        ...state,
        genreSeeds: action.genreSeeds
      }
    case SET_RECOMMENDATIONS:
      return {
        ...state,
        recommendations: action.recommendations
      }
    default:
      return state
  }
}

export default songReducer