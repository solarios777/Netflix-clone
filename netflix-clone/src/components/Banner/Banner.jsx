import React, { useEffect, useState } from "react";
import axios from "../../utilis/axioss";
import requests from "../../utilis/requests";

import "./banner.css";

const Banner = () => {
  const [movie, setmovie] = useState();
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchnetflixoriginals);

        setmovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (err) {
        console.log("error", err);
      }
    })();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner">
        <div className="banner__content">
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>

          <h2 className="banner__description">
            {truncate(movie?.overview, 150)}
          </h2>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
          </div>
        </div>
        <div className="bannerfadeBottom " />
      </div>
    </div>
  );
};

export default Banner;
