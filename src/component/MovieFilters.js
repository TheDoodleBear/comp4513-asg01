import React, {useState, useRef} from "react";
import LeftArrow from "./img/left_arrow.png";
import RightArrow from "./img/right_arrow.png";

const MovieFilters = props => {
  const filterDiv = useRef(null);
  let arrowPOS = RightArrow;
  const [sideView, setSideView] = useState(true);
  const handleSideBar = () => {
    setSideView(!sideView);
  };

  if (sideView) {
    arrowPOS = RightArrow;
  } else {
    arrowPOS = LeftArrow;
  }

  const formSubmit = () => {
    console.log("Submitted!");
  };

  const [selectedRadio, setSelectedRadio] = useState("gender");

  const HandleChangeValue = e => {
    setSelectedRadio(e.target.value);
  };

  return (
    <div className="bg-[#279AF1] rounded-t-lg min-h-full relative flex min-w[20px] ">
      {sideView &&
        <div className="max-w-[200px]" ref={filterDiv}>
          <div className="m-2">
            <h1 className="w-full text-center">Movie Filters</h1>
          </div>
          <div>
            <form onSubmit={formSubmit} className="m-2">
              <div>
                <div className="radio">
                  <input
                    id="title"
                    name="radioButton"
                    type="radio"
                    value={"title"}
                    defaultChecked
                    onChange={HandleChangeValue}
                  />
                  <label htmlFor="title">Title</label>
                  <input type={"text"} disabled={selectedRadio !== "title"} />
                </div>

                <div className="radio">
                  <input
                    id="genre"
                    name="radioButton"
                    type="radio"
                    value={"genre"}
                    onChange={HandleChangeValue}
                  />
                  <label htmlFor="genre">Genre</label>
                </div>
                <div className="">
                  <select disabled={selectedRadio !== "genre"}>
                    <option value="female" />
                    <option value="female">Drama</option>
                    <option value="male">Horror</option>
                    <option value="other">Action</option>
                  </select>
                </div>

                <div className="radio">
                  <input
                    id="year"
                    name="radioButton"
                    type="radio"
                    value={"year"}
                    defaultChecked
                    onChange={HandleChangeValue}
                  />
                  <label htmlFor="title">Year</label>
                  <input
                    type={"text"}
                    disabled={selectedRadio !== "year"}
                    className="m-1"
                  />
                  <input
                    type={"text"}
                    disabled={selectedRadio !== "year"}
                    className="m-1"
                  />
                </div>

                <div className="radio">
                  <input
                    id="rating"
                    name="radioButton"
                    type="radio"
                    value={"rating"}
                    defaultChecked
                    onChange={HandleChangeValue}
                  />
                  <label htmlFor="title">Rating</label>
                  <input
                    type={"text"}
                    disabled={selectedRadio !== "rating"}
                    className="m-1"
                  />
                  <input
                    type={"text"}
                    disabled={selectedRadio !== "rating"}
                    className="m-1"
                  />
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
            </form>
          </div>
        </div>}
      <div
        className="flex h-full bg-slate-300 min-w-[15px] w-[20px] justify-items-center rounded-tr-lg"
        onClick={handleSideBar}
      >
        <button className="bg-transparent">
          <img src={arrowPOS} alt="Arrow Button" />
        </button>
      </div>
    </div>
  );
};

export default MovieFilters;
