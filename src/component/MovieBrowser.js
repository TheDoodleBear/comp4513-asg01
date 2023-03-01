import React from "react";
import HeaderApp from "./HeaderApp";
import MovieFavourites from "./MovieFavourites";
import MovieFilters from "./MovieFilters";
import MovieList from "./MovieList";

const MovieBrowser = props => {
  return (
    <main className="h-full">
      <HeaderApp />
      <div className="flex h-full mt-2">
        <MovieFilters />
        <MovieList
          filterString={props.filterString}
          movies={props.movies}
          moviesToPass={props.moviesToPass}
          selectedMovie={props.showSelectedMovie}
          addFavourites={props.addFavourites}
        />
        <MovieFavourites
          favourites={props.favourites}
          selectedMovie={props.showSelectedMovie}
          removeFavourites={props.removeFavourites}
        />
      </div>
    </main>
  );
};

export default MovieBrowser;
