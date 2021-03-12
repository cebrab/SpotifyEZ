import Recommendation from "../../components/Recommendation"

export const SET_GENRE_SEEDS = 'SET_GENRE_SEEDS'
export const SET_RECOMMENDATIONS = 'SET_RECOMMENDATIONS'

export const setGenreSeeds = (genreSeeds) => {
  return {
    type: SET_GENRE_SEEDS,
    genreSeeds: genreSeeds
  }
}

export const setRecommendations = (recommendations) => {
  return {
    type: SET_RECOMMENDATIONS,
    recommendations: recommendations
  }
}