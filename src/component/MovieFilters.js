import React, {useState} from "react";
import LeftArrow from "./img/left_arrow.png";
import RightArrow from "./img/right_arrow.png";

const MovieFilters = props => {
  let arrowPOS = RightArrow;
  const [sideView, setSideView] = useState(false);
  const handleSideBar = () => {
    if (sideView) {
      setSideView(false);
    } else {
      setSideView(true);
    }
  };

  if (sideView) {
    arrowPOS = RightArrow;
  } else {
    arrowPOS = LeftArrow;
  }

  return (
    <div className="flex bg-[#279AF1] rounded-t-lg min-h-full min-w-[220px]">
      <div className="m-2">
        <h1 className="w-full text-center">Movie Filters</h1>
        <div className="m-2 flex-1">
          <input type="radio" title="Title" />
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="m-2 flex-1">
          <input type="radio" title="Genre" />
          <label>Genre</label>
          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="m-2 flex-1">
          <input type="radio" title="Title" />
          <label>Year</label>
          <label>Less</label>
          <input type="text" />
          <label>Greater</label>
          <input type="text" />
        </div>
        <div className="m-2 flex-1">
          <input type="radio" title="Title" />
          <label>Rating</label>
          <label>Less</label>
          <input type="text" />
          <label>Greater</label>
          <input type="text" />
        </div>
        <div className="flex items-center mt-2">
          <button className="bg-[#4C5760] hover:bg-[#A59E8C] text-white font-bold py-2 px-4 border border-blue-700 rounded mr-3">
            Filter
          </button>
          <button className="bg-[#4C5760] hover:bg-[#A59E8C] text-white font-bold py-2 px-4 border border-blue-700 rounded mr-3">
            Clear
          </button>
        </div>
      </div>
      <div
        className="flex h-full bg-slate-300 min-w-[15px] w-[20px] justify-items-center rounded-tr-lg"
        onClick={handleSideBar}
      >
        <button className="bg-opacity-0">
          <img src={arrowPOS} alt="Arrow Button" />
        </button>
      </div>
    </div>
  );
};

export default MovieFilters;
