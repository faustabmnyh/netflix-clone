import React, { useEffect, useState } from "react";
import axios from "../../function/axios";
import requests from "../../function/requests";
import Player from "../Player";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
    }
    fetchData();
  }, []);

  //  fungsi ini biar motong tulisan yang banyak
  function truncate(str, n){
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  } 


  return (
    <header
      className="banner"
      key={movie?.id}
      // ditaro disni karena linknya seperti itu
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
      <h1>
        {movie?.title || movie?.name || movie?.original_name}
      </h1>

      <div className="banner__buttons">
        <Player/>
        <button className="banner__button">My List</button>
      </div>

      <h1 className="banner__description">
        {truncate(movie?.overview, 420)}
      </h1>
      </div>
      <div className="banner--fadeBottom"/>
    </header>
  );
}

export default Banner;
