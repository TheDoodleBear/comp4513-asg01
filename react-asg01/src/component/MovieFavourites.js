
import React from "react";
import MovieFavouriteThumb from "./MovieFavoriteThumb";

const MovieThumb = (props) => {
    return (
        <div className="col-span-1 bg-[#279AF1] rounded-t-lg h-full p-2">
            <h1 className="w-full text-center">Favourites</h1>
            <MovieFavouriteThumb />
            <MovieFavouriteThumb />
            <MovieFavouriteThumb />
            <MovieFavouriteThumb />
            <MovieFavouriteThumb />
            <MovieFavouriteThumb />
            <MovieFavouriteThumb />
        </div>
    )
}

export default MovieThumb;