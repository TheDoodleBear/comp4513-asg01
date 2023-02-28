
import React from "react";
import MovieFavouriteThumb from "./MovieFavoriteThumb";

const MovieFavourites = function (props){
        return (
            <div className="col-span-1 bg-[#279AF1] rounded-t-lg h-full p-2 relative">
                <h1 className="w-full text-center">Favourites</h1>
                {props.favourites?.map(fav => <MovieFavouriteThumb 
                key={fav.id} 
                favourites={fav} 
                showSelectedMovie={props.selectedMovie} 
                removeFavorites={props.removeFavorites}  />
                )}
            </div>
        )
    
}

export default MovieFavourites;