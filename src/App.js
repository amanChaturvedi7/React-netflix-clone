import { useState } from "react";
import './App.css';
import Banner from './Components/Banner';
import Nav from "./Components/Nav";
import Row from './Components/Row';
import requests from "./requests";

function App() {
  const [movieCategories, setMovieCategories] = useState([{
    title: "NETFLIX ORIGINALS",
    fetchUrl: requests.fetchNetflixOriginals
  },
  {
    title: "Trending Now",
    fetchUrl: requests.fetchTrending
  },
  {
    title: "Top Rated",
    fetchUrl: requests.fetchTopRated
  },
  {
    title: "Action Movies",
    fetchUrl: requests.fetchActionMovies
  },
  {
    title: "Comedy Movies",
    fetchUrl: requests.fetchComedyMovies
  },
  {
    title: "Horror Movies",
    fetchUrl: requests.fetchHorrorMovies
  },
  {
    title: "Romantic Movies",
    fetchUrl: requests.fetchRomanceMovies
  },
  {
    title: "Documentaries",
    fetchUrl: requests.fetchDocumentaries
  }]);
  return (
    <div className="app">
      <Nav />
      <Banner />
      {movieCategories.map((category, index) => (
        <Row key={index} title={category.title} fetchUrl={category.fetchUrl} isLargeRow={category.title === "NETFLIX ORIGINALS" ? true : false} />
      ))}
    </div>
  );
}

export default App;
