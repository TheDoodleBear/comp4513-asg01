import React from "react";
import { useNavigate } from 'react-router-dom';
import HeaderApp from "./HeaderApp";

const MovieDetails = props => {
    let bgUrl =
        "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80";
    const imgUrl = "https://image.tmdb.org/t/p/w92/wby9315QzVKdW9BonAefg8jGTTb.jpg"
    const navigationView = useNavigate();
    const closeDetailedView = () => {
        navigationView(-1);
    }
    return (

        <div className="h-full">
            <HeaderApp />
            <div className="grid h-[calc(100%-88px)] grid-cols-3 mt-2 bg-fixed bg-center bg-cover rounded-lg" style={{
                backgroundImage: `url(${bgUrl})`,
            }
            }>
                <div className="mt-auto mb-auto">
                    <h1>Movie Title</h1>
                    <figure className="p-2">
                        <img src={imgUrl} alt='some logo' className="w-[432px] test"></img>
                    </figure>
                </div>
                <div className="grid h-full grid-rows-6 gap-2">
                    <div className="row-start-2 row-end-4 p-2 rounded-lg bg-slate-300">
                        <div>
                            <span>release date,</span>
                            <span>runtime,</span>
                            <span>tagline,</span>
                            <span>revenue</span>
                        </div>
                        <div>
                            <span>IMDB Link,</span>
                            <span>TMDB Link</span>
                        </div>
                        <div>
                            <p>overview</p>
                        </div>
                        <div>
                            <p>Genre</p>
                        </div>
                    </div>
                    <div className="row-start-4 row-end-6 p-2 rounded-lg bg-slate-300">
                        <h1>Ratings</h1>
                        <span>popularity, average, count</span>
                        <h1>Rate</h1>
                    </div>
                </div>
                <div className="grid justify-end w-full h-full">
                    <div className="grid grid-row-2 grid-col-1 h-[80px] w-[200px] mt-2 mr-2">
                        <button className="w-full mx-auto bg-[#4C5760] hover:bg-[#A59E8C] text-white font-bold py-1 px-3 border border-blue-700 rounded mr-3" onClick={closeDetailedView}>Close</button>
                        <button className="w-full mx-auto bg-[#4C5760] hover:bg-[#A59E8C] text-white font-bold py-1 px-3 border border-blue-700 rounded mr-3">❤ Add to Favorites</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;