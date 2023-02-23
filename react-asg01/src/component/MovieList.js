import React from "react";
import MovieThumb from "./MovieFavourites";

const MovieList = (props) => {
    return (
        <div className="movie-list">
            <h1>List/ Matches</h1>
            <div>
                <label>Title</label>
                <label>Year</label>
                <label>Rating</label>
                <label>Popularity</label>
                <div>
                    <MovieThumb />
                </div>
            </div>

        </div>
    )
}

export default MovieList;