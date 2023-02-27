import React from 'react';
import './LoadingIndicator.css';

const LoadingIndicator = props => {

    return (
        <div className='center-screen'>
            <div className='flex items-center justify-center w-full min-h-screen'>
                <div className='flex items-center justify-center w-full min-h-screen '>
                    <div className='flex items-center justify-center rounded-full h-14 w-14 bg-gradient-to-tr from-indigo-500 to-pink-500 animate-spin'>
                        <div className='bg-gray-200 rounded-full h-9 w-9'></div>
                    </div>
                </div>
                <span>Loading Data...</span>
            </div>
        </div>
    )
}


export default LoadingIndicator;