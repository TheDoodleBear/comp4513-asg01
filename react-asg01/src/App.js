import React from 'react';
import './App.css';
import { useEffect, useState } from "react";
import Home from './component/Home.js';
import LoadingIndicator from './component/LoadingIndicator.js';

function App() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const url = 'https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?limit=200';
    if (movies.length <= 0) {
      // First retrieve data from localStorage
      const isLocalData = localStorage.getItem("key")
      // Is it There?
      if (isLocalData) {
        console.log("Retrieving data from local storage")
        const data = JSON.parse(isLocalData);
        console.log(data)
        setMovies(data);
        setLoading(true);
      } else {
        console.log('Local storage empty. Fetching data remotely')
        fetch(url)
          .then(resp => resp.json())
          .then(data => {
            localStorage.setItem("key", JSON.stringify(data));
            setMovies(data);
            setLoading(true);
          });
      }
    }
  }, [movies]);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {loading ? <Home /> : <LoadingIndicator />}
    </div>
  );
}

export default App;
