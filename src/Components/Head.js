import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    console.log(json);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg ">
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
      <div className="col-span-10  px-10">
        <div>
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-1/2 px-5 border border-gray-400 rounded-l-full p-2"
            type="text"
            value={searchQuery}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />

          <button className="border border-gray-400 rounded-r-full p-1 px-5 py-2">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[27rem]  shadow-lg rounded-lg border border-grey-100">
            <ul>
              {suggestions.map((sug) => (
                <li key={sug} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {sug}
                </li>
              ))}
            </ul>
          </div>
        )}
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
