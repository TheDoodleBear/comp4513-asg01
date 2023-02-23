import React from "react";
import { Link } from 'react-router-dom';

const HeaderApp = function (props) {
    return (
        <header className="header">

            <nav>
                <Link to='/'>
                    <h1>This is a header</h1>
                </Link>
                <Link to='/about'>
                    <button>About</button>
                </Link>
            </nav>
        </header>
    )
}

export default HeaderApp;