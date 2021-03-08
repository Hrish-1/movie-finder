//timestamp : 1:32:50
const API_KEY = '346b0cd424643bd7e2a09d3ab6bd4146';

export default {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`
}