import React from 'react';
import HeaderApp from './HeaderApp';
import MovieFavourites from './MovieFavourites';
import MovieFilters from './MovieFilters';
import MovieList from './MovieList';

const MovieBrowser = props => {

    return (
        <main className='h-full'>
            <HeaderApp />
            <div className='grid grid-cols-6 gap-2 mt-2 h-[calc(100%-88px)]'>
                <MovieFilters />
                <MovieList 
                filterString={props.filterString}
                movies={props.movies} 
                selectedMovie={props.showSelectedMovie} 
                addFavorites={props.addFavorites} />
                <MovieFavourites 
                favourites={props.favourites}
                selectedMovie={props.showSelectedMovie} 
                removeFavorites={props.removeFavorites}/>
            </div>
        </main>
    )
}

export default MovieBrowser;