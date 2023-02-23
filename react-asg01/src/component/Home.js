import React from "react";
import { Link } from 'react-router-dom';

const Home = props => {
   let imgUrl =
      "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80";
   return (
      <div className='h-screen bg-fixed bg-center bg-cover' style={{
         backgroundImage: `url(${imgUrl})`,
      }
      }>
         <div className="m-0 ">
            <form className='bg-blue-400 grid-col-2'>
               <h1 className="object-left col-span-2 ">Movie Browser</h1>
               <label>Title</label>
               <input type='text'></input>
               <p>
                  <Link to='/movielist'>
                     <button>Show Matching Movies</button>
                  </Link>
                  <Link to='/movielist'>
                     <button>Show All Movies</button>
                  </Link>
               </p>
            </form>
         </div>
      </div >
   );
};

export default Home;