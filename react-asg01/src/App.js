import React from 'react';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import * as cloneDeep from 'lodash/cloneDeep';
import Home from './component/Home.js';
import LoadingIndicator from './component/LoadingIndicator.js';
import MovieBrowser from './component/MovieBrowser.js';
import MovieDetails from './component/MovieDetails.js'

function App() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const url = 'https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?limit=200';
    if (movies.length <= 0) {
      // First retrieve data from localStorage
      const isLocalData = localStorage.getItem('key');
      // Is it There?
      if (isLocalData) {
        console.log('Retrieving data from local storage');
        const data = JSON.parse(isLocalData);
        console.log(data)
        setMovies(data);
        setLoading(true);
      } else {
        console.log('Local storage empty. Fetching data remotely');
        fetch(url)
          .then(resp => resp.json())
          .then(data => {
            localStorage.setItem('key', JSON.stringify(data));
            setMovies(data);
            setLoading(true);
          });
      }
    }
  }, [movies, loading]);

  const [favourites, setfavourites] = useState([]);
  const addFavorites = (movie) => {
    const copyFavs = cloneDeep(favourites);
    let found = copyFavs.find(p => p.id === movie.id);
    if (found) return;
    copyFavs.push(movie);
    setfavourites(copyFavs);
  }

  const removeFavorites = (movies) => {
    let filteredFavs = favourites.filter(p => p.id !== movies.id);
    setfavourites(filteredFavs);
  }

  const [selectedMovie, setselectedMovie] = useState(0);

  const showSelectedMovie = (id) => {
    setselectedMovie(id);
  }

  const [filterString, setfilterString] = useState("");

  const homeFilterTitle = (string) => {
    setfilterString(string);
  };

  const [filteredMovie, setFilteredMovie] = useState([]);


  const filterMovie = ()=>{
    let filter = movies.filter( m => m.title.toString() === filterString)
    console.log("filter" + filter)
    setFilteredMovie(filter)
  }


  
  if (!loading) {
    return (
      <div className='App'>
        <LoadingIndicator />
      </div>
    );
  } else {
    return (
      <div className='h-screen App'>
        <Routes>
          <Route path='/' element={<Home homeFilterTitle={homeFilterTitle} 
          filterMovie={filterMovie}/>} />
          <Route path='/home' element={<Home homeFilterTitle={homeFilterTitle} 
          filterMovie={filterMovie}/>} />
          <Route path='/moviebrowser' element={<MovieBrowser movies={movies} 
          favourites={favourites}  
          filterString={filterString}    
          showSelectedMovie={showSelectedMovie}    
          removeFavorites={removeFavorites}
          addFavorites={addFavorites} 
          filteredMovie={filteredMovie}/>} />
          <Route path='/moviedetails' element={<MovieDetails 
          movies={movies} 
          favourites={favourites}      
          selectedMovie={selectedMovie}
          addFavorites={addFavorites}/>} />
        </Routes>
      </div>
    );
  }


}

export default App;
