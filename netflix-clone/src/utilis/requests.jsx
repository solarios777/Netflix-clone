
const API_KEY = "54c83e07a8f8bc503b3c4a16748cffe1";

const requests = {
  fetchtranding: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
  fetchnetflixoriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchtopratedmovies: `/movie/top_rated?api_key=${API_KEY}`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchComedyMOvies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchCrimeMOvies: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
  fetchDramaMOvies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  fetchFamilyMOvies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  fetchfantasyMOvies: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  fetchhistoryMOvies: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
  fetchMusic: `/discover/movie?api_key=${API_KEY}&with_genres=10402`,
  fetchMysteryMOvies: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  fetchSifiMOvies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchTvMOvies: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  fetchThriller: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  fetchWarMOvies: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
  fetchwesternMOvies: `/discover/movie?api_key=${API_KEY}&with_genres=`,
  fetchHorrormovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchdocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchtvshows: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};
export default requests;
