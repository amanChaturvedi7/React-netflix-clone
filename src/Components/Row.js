import axios from "./../axios";
import { useState, useEffect } from "react"
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import PlaceholderLoading from "react-placeholder-loading"

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const baseImgUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(fetchUrl);
      setMovies(req.data.results);
    }
    fetchData();
  }, [fetchUrl]);//when properties inside this array changes, useEffect will recall

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1
    }
  }

  const playTrailer = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("")
    }
    else {
      console.log(movie)
      movieTrailer(movie?.name || movie?.title || "")
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(url)
          setTrailerUrl(urlParams.get("v"))
        })
        .catch(err => console.log(err))
    }
  }

  return (
    <div className="row">
      <h3>{title}</h3>
      {movies.length > 0 && <div className="row-posters">
        {movies.map((movie, index) => (
          <img className={`row-poster ${isLargeRow && "row-poster-large"}`} key={index} src={`${baseImgUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} onClick={() => playTrailer(movie)} />
        ))}
      </div>}
      {movies.length == 0 && <div className="row-posters">
        <PlaceholderLoading shape="circle" className={`row-poster ${isLargeRow && "row-poster-large"}`} />
      </div>}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row
