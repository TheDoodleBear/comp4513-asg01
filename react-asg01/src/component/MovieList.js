import React from 'react';
import MovieListItem from './MovieListItem';

const MovieList = (props) => {
    return (
        <div className='col-span-4 bg-[#279AF1] rounded-t-lg h-full p-2'>
            <h1 className='w-full text-center'>List/ Matches</h1>
            <div className='flex flex-col'>
                <table className='min-w-full divide-y divide-gray-200'>
                    <thead className='bg-blue-800'>
                        <tr>
                            <th className='text-center'><span ></span></th>
                            <th className='text-center'><span>Title</span></th>
                            <th className='text-center'><span>Year</span></th>
                            <th className='text-center'><span>Rating</span></th>
                            <th className='text-center max-w-[40px]'><span>Overall Interest</span></th>
                            <th className='text-center'><span></span></th>
                            <th className='text-center'><span></span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.movies.map((p) =>
                            <MovieListItem 
                            movies={p} 
                            key={p.id} 
                            addFavorites={props.addFavorites}
                            showSelectedMovie={props.selectedMovie} />)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MovieList;