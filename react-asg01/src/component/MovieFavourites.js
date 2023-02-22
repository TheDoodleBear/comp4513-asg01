
import React from "react";
import Logo from "../logo.svg";

const MovieThumb = (props) => {
    return (
        <div className="movie-thumbnail">
            <figure>
                <img src={Logo}></img>
            </figure>
            <div>
                <h3>title</h3>
                <h3>Year</h3>
                <h3>Rating</h3>
                <h3>Popularity</h3>
            </div>
            <div>
                <button>❤</button>
                <button>View</button>
            </div>
        </div>
    )
}

export default MovieThumb;