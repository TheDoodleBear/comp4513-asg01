import React from "react";

const MovieFilters = (props) => {
    return (
        <div className="flex grid-cols-2 col-span-1 bg-[#279AF1] rounded-t-lg h-full p-2">
            <div >
                <h1 className="w-full text-center">Movie Filters</h1>
                <div>
                    <input type="radio" title="Title" />
                    <label>Title</label>
                    <input type='text' />
                </div>
                <div>
                    <input type="radio" title="Genre" />
                    <label>Genre</label>
                    <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div>
                    <input type="radio" title="Title" />
                    <label>Year</label>
                    <label>Less</label>
                    <input type='text' />
                    <label>Greater</label>
                    <input type='text' />
                </div>
                <div>
                    <input type="radio" title="Title" />
                    <label>Rating</label>
                    <label>Less</label>
                    <input type='text' />
                    <label>Greater</label>
                    <input type='text' />
                </div>
                <div className="flex items-center mt-2">
                    <button className="bg-[#4C5760] hover:bg-[#A59E8C] text-white font-bold py-2 px-4 border border-blue-700 rounded mr-3">Filter</button>
                    <button className="bg-[#4C5760] hover:bg-[#A59E8C] text-white font-bold py-2 px-4 border border-blue-700 rounded mr-3">Clear</button>
                </div>
            </div>
            <div className="w-3 h-full bg-slate-50"></div>
        </div>
    )
}

export default MovieFilters;