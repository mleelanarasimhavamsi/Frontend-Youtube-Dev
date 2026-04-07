import React from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg ">
      <div className="flex col-span-1  ">
        <img
          onClick={toggleMenuHandler}
          className="h-10 cursor-pointer"
          alt="Hamburger"
          src="https://png.pngtree.com/element_our/20190601/ourmid/pngtree-menu-icon-image_1344445.jpg"
        />
        <a href="/">
          <img
            className="h-10 mx-2"
            alt="Youtube-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrQC95fPOYwwpvo9ZmHQ1ycq0YzqMDRO1GtA&s"
          />
        </a>
      </div>
      <div className="col-span-10 ">
        <input
          className="w-1/2 px-10 border border-gray-400 rounded-l-full p-1"
          type="text"
        />
        <button className="border border-gray-400 rounded-r-full p-1">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBp4rAadRiXmk6NWl3redkvGJgWGDkBT4vA&s"
        />
      </div>
    </div>
  );
};

export default Head;
