import axios from "../axios";
import { useState, useEffect } from "react";
import requests from "../requests";
import "./Banner.css";

function Banner() {
    const [movie, setMovie] = useState();

    useEffect(() => {
        async function fetchMovies() {
            const req = await axios.get(requests.fetchTrending);
            setMovie(req.data.results[
                Math.floor(Math.random() * req.data.results.length - 1)
            ]);
        }
        fetchMovies();
    }, []);

    const truncate = (text, max) => {
        return text && text.length > max ? text.slice(0, max).split(' ').slice(0, -1).join(' ') + "..." : text;
    }

    return (
        <header className="banner" style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundSize: "cover",
            backgroundPosition: "center center"
        }}>
            <div className="banner-content">
                <h1 className="banner-title">{movie?.name || movie?.title || movie?.original_name}</h1>
                <div className="banner-buttons">
                    <button className="banner-button">
                        Play
                    </button>
                    <button className="banner-button">
                        My List
                    </button>
                </div>
                <h1 className="banner-description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className="banner-fade" />
        </header>
    );
}

export default Banner;
