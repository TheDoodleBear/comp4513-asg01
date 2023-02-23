import React from "react";
import { Link } from 'react-router-dom';
import HeaderApp from "./HeaderApp";
import MovieDetails from "./MovieDetails";
import MovieFavourites from "./MovieFavourites";
import MovieFilters from "./MovieFilters";
import MovieList from "./MovieList";

const MovieBrowser = (props) => {
    return (
        <main>
            <HeaderApp />
            <h1>Movie Browser Here</h1>
            <MovieList />
        </main>
    )
}

export default MovieBrowser;