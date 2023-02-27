import React from "react";

const MovieFavouriteThumb = props => {
    const imgUrl = "https://image.tmdb.org/t/p/w92/wby9315QzVKdW9BonAefg8jGTTb.jpg";
    return (
        <div className="flex items-center p-3 flex-nowrap">
            <figure>
                <img src={imgUrl} alt='some logo' className="max-h[120px] w-[70px]"></img>
            </figure>
            <div className="ml-3">
                <h3>title</h3>
            </div>
        </div>
    )
}

export default MovieFavouriteThumb;