import React from "react";
import { useNavigate } from 'react-router-dom';
import { DynamicStar } from 'react-dynamic-star';
import HeaderApp from "./HeaderApp";
import ImagePoster from "./ImagePoster"

const MovieDetails = props => {
    let bgUrl =
        "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80";

    const navigationView = useNavigate();
    const closeDetailedView = () => {
        navigationView(-1);
    }

    const addFav = () => {
        props.addFavorites(movie);
     }
        
     const movie = props.movies.find(m=> m.id === props.selectedMovie);

    const formatNumber = (q) => {
        return q.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
       } 
        return (

            <div className="h-full">
                <HeaderApp />
                <div className="grid h-[calc(100%-88px)] grid-cols-3 mt-2 bg-fixed bg-center bg-cover rounded-lg" style={{
                    backgroundImage: `url(${bgUrl})`,
                }
                }>
                    <div className="mt-auto mb-auto">
                        <h1>{movie.title}</h1>
                        {/* <figure className="p-2">
                            <img src={imgUrl+movie.poster} alt={movie.title} title={movie.title} onError={replaceImage}></img>
                        </figure> */}
                        <ImagePoster movie={movie}/>
                    </div>
                    <div className="grid h-full grid-rows-6 gap-2">
                        <div className="row-start-2 row-end-4 p-2 rounded-lg bg-slate-300">
                            <div>
                                <span>{movie.release_date},</span>
                                <span>{movie.runtime},</span>
                                <span>{movie.tagline},</span>
                                <span>
                                {formatNumber(movie.revenue)}
                                    </span>
                            </div>
                            <div>
                                <span><a href={"https://www.imdb.com/title/" + movie.imdb_id}>IMDB Link</a>,</span>
                                <span><a href={"https://www.themoviedb.org/movie/" + movie.tmdb_id}>TMDB Link</a></span>
                            </div>
                            <div>
                                <p>{movie.details.overview}</p>
                            </div>
                            <div>
                                <p>{movie.details.genres.map(genre=><span className="m-1">{genre.name}</span>)}</p>
                            </div>
                        </div>
                        <div className="row-start-4 row-end-6 p-2 rounded-lg bg-slate-300">
                            <h1>Rating</h1>
                            <div>
                            <DynamicStar rating={3} />
                            </div>
                            <span>{movie.ratings.popularity}, {movie.ratings.average}, {movie.ratings.count}</span>
                            <div>
                                <h1>Rate</h1>
                                <div>
                                    <DynamicStar rating={3} />
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div className="grid justify-end w-full h-full">
                        <div className="grid grid-row-2 grid-col-1 h-[80px] w-[200px] mt-2 mr-2">
                            <button className="w-full mx-auto bg-[#4C5760] hover:bg-[#A59E8C] text-white font-bold py-1 px-3 border border-blue-700 rounded mr-3" onClick={closeDetailedView}>Close</button>
                            <button className="w-full mx-auto bg-[#4C5760] hover:bg-[#A59E8C] text-white font-bold py-1 px-3 border border-blue-700 rounded mr-3" onClick={addFav}>❤ Add to Favorites</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    


export default MovieDetails;