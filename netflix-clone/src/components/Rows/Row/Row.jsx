
import React, { useState, useEffect } from 'react';
import axios from "../../../utilis/axioss"
import "./Row.css"
import movietrailer from "movie-trailer"
import Youtube from "react-youtube"
// import { width } from '@mui/system';


const Row = ({ title, fetchUrl ,islargeRow}) => {
  // const [selectedMovie, setSelectedMovie] = useState(null);
  const [movies, setMovies] = useState([]);
  // const [isFetching, setIsFetching] = useState(false);
  // const [isSliderActive, setIsSliderActive] = useState(false);
  // const [sliderPosition, setSliderPosition] = useState(0);
  const [TrailerUrl, setTrailerUrl] = useState("")
  
  const baseUrl = "https://image.tmdb.org/t/p/w300";

  useEffect(() => {
    // const fetchData =
      (async () => {
      // setIsFetching(true);
      try {
        
        const response = await axios.get(fetchUrl); 
        setMovies(response.data.results);
      
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
      
      // setIsFetching(false);
    })
    // fetchData
      ();
  }, [fetchUrl]);

  const handleclick = (movie) => {
    if (TrailerUrl) {
      setTrailerUrl('')
    }
    else {
      movietrailer(movie?.title || movie?.name || movie?.original_name)
        .then((Url)=>{
        const urlparams = new URLSearchParams(new URL(Url).search)
        setTrailerUrl(urlparams.get('v'))
      })
    }
  }

  // const handleSliderScroll = (direction) => {
  //   setIsSliderActive(true);
  //   if (direction === "left") {
  //     setSliderPosition(Math.max(sliderPosition - 250, 0));
  //   } else {
  //     setSliderPosition(
  //       Math.min(sliderPosition + 250, movies.length * 150 - window.innerWidth)
  //     );
  //   }
  // };

  // const handleSliderEnd = () => {
  //   setIsSliderActive(false);
  // };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay:1,
    },
  }
  
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies?.map((movie, index) => (
          <img
            onClick={() => handleclick(movie)}
            key={index}
            src={`${baseUrl}${
              islargeRow ? movie.poster_path : movie.backdrop_path
              }`}
            alt={movie.name}
            className={`row_poster ${islargeRow&& "row_posterlarge"}`}
          />
        ))}
      </div>
      <div style={{ padding: '40px ' }}>
        {TrailerUrl && <Youtube videoId={ TrailerUrl} opts={opts} />}

      </div>
    </div>
  );































//   return (
//     <div className="netflix-row">
//       <h2>{title}</h2>
//       <div className="netflix-slider-container">
//         {isSliderActive && (
//           <button
//             className="netflix-slider-button netflix-slider-button--left"
//             onClick={() => handleSliderScroll('left')}
//           >
//             &lt;
//           </button>
//         )}
//         <div
//           className="netflix-slider"
//           style={{ transform: `translateX(${sliderPosition}px)` }}
//           onTransitionEnd={handleSliderEnd}
//         >
//           {isFetching ? (
//             <div className="loading-spinner">Loading...</div>
//           ) : (
//             movies.map((movie) => (
//               <div key={movie.id} className="netflix-movie-card">
//                 <img
//                   onClick={()=>handleclick(movie)}
//                   src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
//               </div>
             
//             ))
//           )}
//         </div>
//         <div style={{ padding: '40px' }}>
//           {TrailerUrl && <Youtube videoid={TrailerUrl} opts={opts}/>}

//         </div>
//         {isSliderActive && (
//           <button
//             className="netflix-slider-button netflix-slider-button--right"
//             onClick={() => handleSliderScroll('right')}
//           >
//             &gt;
//           </button>
//         )}
//       </div>
//     </div>
//   );
};



export default Row
