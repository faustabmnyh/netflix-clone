import React, { useEffect, useState } from "react";
import { useStateValue } from "../../context/StateProvider";
import axios from "../../function/axios";
import Player from "../Player";
import "./RowContainer.css";
import Fuse from "fuse.js";

const baseURL = "https://image.tmdb.org/t/p/original/";

function Home({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [feature, setFeature] = useState([]);
  const [itemFeature, setItemFeature] = useState(false);
  const [{ value }] = useStateValue();

  useEffect(() => {
    async function searchEngine() {
      const request = await axios.get(fetchURL);
      const fuse = new Fuse(request.data.results , {        
        keys: ['title',"name"],
      });
      const result = fuse.search(value).map(({item}) => item)
      setMovies(result)
      

    }
    searchEngine();
  }, [fetchURL, value]);
  
  
  useEffect(() => {
    //  if [], run once ,and when load dont run again
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);
  // dalam pembangunan

  // const fuse = new Fuse(movies, {
  //   keys: ["name", "title"]
  // })

  // const result = fuse.search("mulan")
  // console.log(result);



  //   misalnya ada yang berubah kita akan refile codenya

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => {
              setItemFeature(true);
              setFeature(movie);
            }}
          />
        ))}
      </div>
      {feature || itemFeature ? (
        <>
          <div
            className={`row__feature ${itemFeature && "feature__active"}`}
            style={{
              backgroundImage: `url("${baseURL}${feature.backdrop_path}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "400px",
            }}
          >
            <div className="row__featureText">
              <h1 className="feature__title">
                {feature.name || feature.title}
              </h1>
              <p className="feature__desc">{feature.overview}</p>
              <div className="feature__mainMaturity">
                <p
                  className={`feature__maturity ${
                    feature.adult === false && "feature__maturityPG"
                  } `}
                >
                  {feature.adult === false ? "PG" : "16+"}
                </p>
                <p className="feature__name">{title}</p>
              </div>
              <Player />
            </div>
            <img
              alt="close"
              src="./images/close.png"
              className="feature__close"
              onClick={() => setItemFeature(false)}
            />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Home;
