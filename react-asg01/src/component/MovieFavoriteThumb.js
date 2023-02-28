import React from "react";
import { Link } from "react-router-dom";

const MovieFavouriteThumb = props => {

    const handleViewClick = () => {
        props.showSelectedMovie(props.favourites.id);
     }

    const removeFav = (e) => {
        props.removeFavorites(props.favourites);
     };

    
    const imgURL = `https://image.tmdb.org/t/p/w92${props.favourites.poster}`;
    return (
        <div className="flex items-center p-3 flex-nowrap group static ">
            
            <figure onClick={handleViewClick}>
                <Link to='/moviedetails'>
                <img src={imgURL} alt={props.favourites.title} title={props.favourites.title}></img>
                </Link>
            </figure>
            <div className="ml-3">
                <span>{props.favourites.title}</span>
            </div>
            <div className="static">
                <button className="rounded absolute hidden text-gray-700 pt-1 group-hover:block w-[40px]" onClick={removeFav}>x</button>
            </div>
        </div>
    )
}

export default MovieFavouriteThumb;