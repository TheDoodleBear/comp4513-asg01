import React from "react";
import { Link } from "react-router-dom";

const MovieFavouriteThumb = props => {
    
    const imgURL = `https://image.tmdb.org/t/p/w92/`;

    const handleViewClick = () => {
        props.showSelectedMovie(props.favourites.id);
     }

    const removeFav = (e) => {
        props.removeFavorites(props.favourites);
     };
    

    const replaceImage = (error) => {
        // const placeholder = 'https://via.placeholder.com/92'
        //replacement of broken Image
        error.target.src = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'; 
    }
    return (
        <div className="flex items-center p-3 flex-nowrap group static ">
            
            <figure onClick={handleViewClick}>
                <Link to='/moviedetails'>
                <img src={imgURL + props.favourites.poster} alt={props.favourites.title} title={props.favourites.title} onError={replaceImage}></img>
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