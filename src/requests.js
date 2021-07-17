const API_KEY = "b01895bb6f0aca0b9385f46abe2e9ec8";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchActionMovies: `/discover/tv?api_key=${API_KEY}&with_networksgenres=28`,
  fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_networksgenres=35`,
  fetchHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_networksgenres=27`,
  fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_networksgenres=10749`,
  fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_networksgenres=99`
}

export default requests;

