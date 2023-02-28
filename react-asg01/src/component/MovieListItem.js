import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';

const MovieListItem = (props) => {
    const imgURL = `https://image.tmdb.org/t/p/w92${props.movies.poster}`;
    const release_year = props.movies.release_date;
    const year = release_year.substring(4, 0);

    const handleViewClick = () => {
        props.showSelectedMovie(props.movies.id);
     }

    const addFav = () => {
        props.addFavorites(props.movies);
     }
    
        return (
            <tr className='bg-white'>
                <td>
                    <figure onClick={handleViewClick}>
                    <Link to='/moviedetails'>
                    <img src={imgURL} alt={props.movies.title} title={props.movies.title} className='max-h[120px] w-[80px] mx-auto'></img>
                    </Link>
                    </figure>                  
                </td>
                <td className='max-w-[100px] text-center'onClick={handleViewClick}><Link to='/moviedetails'><span>{props.movies.title}</span></Link></td>
                <td className='text-center'><span>{year}</span></td>
                <td className='max-w-[40px] text-center'><span><StarRating/></span></td>
                <td className='text-center'><span>{props.movies.ratings.popularity.toFixed(2)}</span></td>
                <td className='text-center'><Link to='/moviedetails'><button className='mx-auto bg-[#4C5760] hover:bg-[#A59E8C] text-white font-bold py-1 px-3 border border-blue-700 rounded mr-3'onClick={handleViewClick}>View</button></Link></td>
                <td className='text-center'><button className='mx-auto bg-[#4C5760] hover:bg-[#A59E8C] text-white font-bold py-1 px-1 border border-blue-700 rounded mr-3' onClick={addFav}>❤</button></td>
            </tr>
        )
}

export default MovieListItem;

