import React from "react";
import {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";
import * as cloneDeep from "lodash/cloneDeep";
import Home from "./component/Home.js";
import LoadingIndicator from "./component/LoadingIndicator.js";
import MovieBrowser from "./component/MovieBrowser.js";
import MovieDetails from "./component/MovieDetails.js";

function App() {
  //  Define variable states
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setselectedMovie] = useState(0);

  //  Fetching movies data.
  useEffect(
    () => {
      const url =
        "https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?limit=200";
      //  Check if movies array is empty
      if (movies.length <= 0) {
        // Retrieve data from localStorage
        const isLocalData = localStorage.getItem("key");
        // Check if data exists
        if (isLocalData) {
          // If exists load data to cache
          console.log("Retrieving data from local storage");
          const data = JSON.parse(isLocalData);
          setMovies(data);
          //  This will close the loading animation screen
          setLoading(true);
        } else {
          //  Fetch Data from API if local data doesn't exist
          console.log("Local storage empty. Fetching data remotely");
          fetch(url).then(resp => resp.json()).then(data => {
            localStorage.setItem("key", JSON.stringify(data));
            setMovies(data);
            //  This will close the loading animation screen
            setLoading(true);
          });
        }
      }
    },
    [movies, loading]
  );

  console.log(movies);

  // Add Movies to Favourites
  const [favourites, setfavourites] = useState([]);
  const addFavourites = movie => {
    const copyFavs = cloneDeep(favourites);
    let found = copyFavs.find(p => p.id === movie.id);
    if (found) return;
    copyFavs.push(movie);
    setfavourites(copyFavs);
  };

  // Add Remove to Favourites
  const removeFavourites = movies => {
    let filteredFavs = favourites.filter(p => p.id !== movies.id);
    setfavourites(filteredFavs);
  };

  // Set movie to be shown on MovieDetails component
  const showSelectedMovie = id => {
    setselectedMovie(id);
  };

  const [moviesToPass, setMoviesToPass] = useState([]);

  const filterMovie = (movie, string) => {
    //  If the string is not empty filter movies based on string passed
    if (string !== "") {
      let filter = movie.filter(m =>
        m.title.toString().toLowerCase().includes(string)
      );
      // Update moviesToPass state with filtered movies
      setMoviesToPass(filter);
    } else {
      // If String is empty just pass the movie through props
      setMoviesToPass(movie);
    }
  };

  // const generateGenderDataForDropdown = () => {
  //   return [...new Set(movies.map(item => item.details))];
  // };
  // const details = generateGenderDataForDropdown();
  // const generateGenderDataForDropdownx = () => {
  //   return [...new Set(details.map(item => item.genres))];
  // };
  // const genres = generateGenderDataForDropdownx();
  // const generateGenderDataForDropdownxx = () => {
  //   return [...new Set(genres?.map(item => item.name ))];
  // };

  // console.log(generateGenderDataForDropdownxx());

  // Check if data is being retrieved
  if (!loading) {
    // Show loading screen if true
    return (
      <div className="h-full App">
        <LoadingIndicator />
        {/* <DynamicStarRating /> */}
      </div>
    );
  } else {
    return (
      <div className="h-full App">
        <Routes>
          <Route
            exact
            path="/"
            element={<Home movies={movies} filterMovie={filterMovie} />}
          />
          <Route
            exact
            path="/home"
            element={<Home movies={movies} filterMovie={filterMovie} />}
          />
          <Route
            exact
            path="/moviebrowser"
            element={
              <MovieBrowser
                movies={movies}
                favourites={favourites}
                moviesToPass={moviesToPass}
                showSelectedMovie={showSelectedMovie}
                removeFavourites={removeFavourites}
                addFavourites={addFavourites}
              />
            }
          />
          <Route
            exact
            path="/moviedetails"
            element={
              <MovieDetails
                movies={movies}
                favourites={favourites}
                selectedMovie={selectedMovie}
                removeFavourites={removeFavourites}
                addFavourites={addFavourites}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}

export default App;
