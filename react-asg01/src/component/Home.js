import React from "react";
import { Link } from 'react-router-dom';

const Home = props => {
   let imgUrl =
      "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80";
   return (
      <div className='grid w-screen h-full bg-fixed bg-center bg-cover place-items-center' style={{
         backgroundImage: `url(${imgUrl})`,
      }
      }>
         <div className="h-[400px] w-[700px] bg-[#279AF1] rounded-xl">
            <form className='grid w-full h-full place-items-center'>
               <h1>Movie Browser</h1>
               <div>
                  <label className="mr-3">Title</label>
                  <input type='text' className=" ml-3 w-[400px] h-[35px]"></input>
               </div>
               <div>
                  <Link to='/moviebrowser'>
                     <button className="bg-[#4C5760] hover:bg-[#A59E8C] text-white font-bold py-2 px-4 border border-blue-700 rounded mr-3">Show Matching Movies</button>
                  </Link>
                  <Link to='/moviebrowser' movies={props.movies}>
                     <button className="bg-[#4C5760] hover:bg-[#A59E8C] text-white font-bold py-2 px-4 border border-blue-700 rounded ml-3">Show All Movies</button>
                  </Link>
               </div>
            </form>
         </div>
      </div >
   );
};

export default Home;