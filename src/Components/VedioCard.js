import React from "react";

const VedioCard = ({ info }) => {
  const {snippet, statistics} = info;
  const {channelTitle, title, thumbnails} = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg ">
      <img className="rounded-lg" alt="thumbnails" src={thumbnails?.medium?.url} />
      <ul>
        <li className="font-bold py-2 h-15 overflow-hidden">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount}</li>
      </ul>
    </div>
  );
};

export default VedioCard;
