import React from 'react';
import MovieListItem from './MovieListItem';

const MovieList = (props) => {
    let moviesToPass = [];
    if(props.isFiltered){
         moviesToPass = props.movieFiltered
    }else(
         moviesToPass = props.movies
    )

    // let [moviesToPass, setMoviesToPass] = useState([]);
    //     if(props.isFiltered){
    //         setMoviesToPass(props.movieFiltered)
    // }else(
    //     setMoviesToPass(props.movies)
    // )

    
    return (
        <div className='bg-[#279AF1] rounded-t-lg h-full mr-2 ml-2 min-w-[500px] w-full'>
            <h1 className='w-full text-center'>List / Matches</h1>
            <div className='flex flex-col'>
                <table className='min-w-full divide-y divide-gray-200'>
                    <thead className='bg-blue-800'>
                        <tr>
                            <th className='text-center'><span ></span></th>
                            <th className='text-center text-slate-300'><span>Title</span></th>
                            <th className='text-center text-slate-300'><span>Year</span></th>
                            <th className='text-center text-slate-300'><span>Rating</span></th>
                            <th className='text-center max-w-[40px] text-slate-300'><span>Overall Interest</span></th>
                            <th className='text-center'><span></span></th>
                            <th className='text-center'><span></span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {moviesToPass?.map((p) =>
                            <MovieListItem 
                            movies={p} 
                            key={p.id} 
                            addFavourites={props.addFavourites}
                            showSelectedMovie={props.selectedMovie} />)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MovieList;