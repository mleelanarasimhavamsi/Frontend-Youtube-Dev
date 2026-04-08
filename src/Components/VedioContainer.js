import React, { useEffect, useState } from "react";
import { YOUTUBE_VEDIO_API } from "../utils/constants";
import VedioCard from "./VedioCard";
import { Link } from "react-router-dom";

const VedioContainer = () => {
  const [vedios, setVedios] = useState([]);

  useEffect(() => {
    getVedioList();
  }, []);

  const getVedioList = async () => {
    const data = await fetch(YOUTUBE_VEDIO_API);
    const json = await data.json();
    setVedios(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {vedios.map((vedio) => (
        <Link key={vedio.id} to={"/watch?v=" + vedio.id}>
          <VedioCard info={vedio} />
        </Link>
      ))}
    </div>
  );
};

export default VedioContainer;
