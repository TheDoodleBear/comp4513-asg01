import React from 'react';
import { Link } from 'react-router-dom';

const MovieListItem = props => {
    const imgURL = `http://www.randyconnolly.com/funwebdev/3rd/images/travel/square150/${props.movie.poster}`;
    if (props.movies > 1) {
        return (
            <tr className='bg-white'>
                <td className='block '>
                    <img src={imgURL} alt={props.movie.title} title={props.movie.title} className='max-h[120px] w-[80px] mx-auto'></img>
                </td>
                <td className='text-center'>Centerdasdasdsadsad</td>
                <td className='text-center'>Joe</td>
                <td className='text-center'>1234 Main Street</td>
                <td className='text-center'>06-15-2021</td>
                <td className='text-center'><Link to='/moviedetails'><button className='mx-auto bg-[#4C5760] hover:bg-[#A59E8C] text-white font-bold py-1 px-3 border border-blue-700 rounded mr-3'>View</button></Link></td>
                <td className='text-center'><button className='mx-auto bg-[#4C5760] hover:bg-[#A59E8C] text-white font-bold py-1 px-1 border border-blue-700 rounded mr-3'>❤</button></td>
            </tr>
        )
    } else
        return null;
}

export default MovieListItem;

{/* <div className='flex items-center p-3 flex-nowrap'>
<figure>
    <img src={Logo} alt='some logo' className='max-h[80px] w-[80px]'></img>
</figure>
<div className='flex items-center justify-between w-full p-3 ml-3 flex-nowrap'>
    <h3>title</h3>
    <h3>Year</h3>
    <h3>Rating</h3>
    <h3>Popularity</h3>
</div>
<div className='flex items-center'>
    <button className='bg-[#4C5760] hover:bg-[#A59E8C] text-white font-bold py-1 px-3 border border-blue-700 rounded mr-3'>View</button>
    <button className='bg-[#4C5760] hover:bg-[#A59E8C] text-white font-bold py-1 px-1 border border-blue-700 rounded mr-3'>❤</button>
</div>
</div> */}