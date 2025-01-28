const API_KEY = "3bbbef2890dc404b7962a58feac8577f";
const requests = {
  fetchTrending: `/trending/all.week?api_key=${API_KEY}&language=en-us`,
  fetchNetfilxoriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRoteMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-us`,
  fetchactions: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchcomedymovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchhorrormovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchromancemovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchdocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchtvshow: `tv/popular?api_key=${API_KEY}$language=en-us&page=1`,
};
export default requests;
