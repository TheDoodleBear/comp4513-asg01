
import React, { useState } from "react";
import MovieFavouriteThumb from "./MovieFavouriteThumb";
import LeftArrow from "./img/left_arrow.png";
import RightArrow from "./img/right_arrow.png";

const MovieFavourites = function (props){
        let arrowPOS = LeftArrow;
        const [sideView, setSideView] = useState(false);
        const handleSideBar = () =>{
            if(sideView){
                setSideView(false);
            }else{
                setSideView(true);
            }
        }

        if(sideView){
            arrowPOS = LeftArrow;
        }else {
            arrowPOS = RightArrow;
        }


        return (
            <div className="bg-[#279AF1] rounded-t-lg min-h-full relative flex min-w-[220px]">
                <div className="flex p-2 h-full bg-slate-300 min-w-[15px] w-[20px] justify-items-center rounded-tl-lg" onClick={handleSideBar}>
                    <button className=""><img src={arrowPOS} alt="Arrow Button"/></button>
                </div>
               <div className="m-2">
               <h1 className="w-full text-center">Favourites</h1>
                {props.favourites?.map(fav => <MovieFavouriteThumb 
                key={fav.id} 
                favourites={fav} 
                showSelectedMovie={props.selectedMovie} 
                removeFavourites={props.removeFavourites}  />
                )}
               </div>
            </div>
        )
    
}

export default MovieFavourites;