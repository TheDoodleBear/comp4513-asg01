import React from "react";
import { Link } from 'react-router-dom';
import logo from "../logo.svg";

const HeaderApp = function (props) {
    return (
        <header className="h-[80px] w-full col-span-3 bg-[#279AF1] rounded-b-lg">
            <nav className="flex flex-wrap items-center justify-between ">
                <Link to='/'>
                    <img src={logo} className='w-20 h-20 ml-3' alt="Logo"></img>
                </Link>
                <Link to='/about'>
                    <button className="bg-[#4C5760] mr-3 hover:bg-[#A59E8C] text-white font-bold py-2 px-4 border border-blue-700 rounded ml-3">About</button>
                </Link>
            </nav>
        </header>
    )
}

export default HeaderApp;