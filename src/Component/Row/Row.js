import React from "react";
import RowContainer from "./RowContainer";
import requests from "../../function/requests";

function Row() {

  
  return (
    <div>
      <RowContainer
        title={"NETFLIX ORIGINAL"}
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <RowContainer title={"Trending Now"} fetchURL={requests.fetchTrending} />
      <RowContainer title={"Top Rated"} fetchURL={requests.fetchTopRated} />
      <RowContainer
        title={"Action Movies"}
        fetchURL={requests.fetchActionMovies}
      />
      <RowContainer
        title={"Horror Movies"}
        fetchURL={requests.fetchHorrorMovies}
      />
      <RowContainer
        title={"Comedy Movies"}
        fetchURL={requests.fetchComedyMovies}
      />
      <RowContainer
        title={"Fantasy Movies"}
        fetchURL={requests.fetchFantasyMovies}
      />
      <RowContainer
        title={"Science Fiction Movies"}
        fetchURL={requests.fetchScienceMovies}
      />
      <RowContainer title={"Series"} fetchURL={requests.fetchTVMovies} />
    </div>
  );
}

export default Row;
