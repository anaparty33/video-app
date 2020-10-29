import React, { useState, useEffect } from "react";
import youtubeAPI from "../api/youtubeAPI.js";

const useVideos = (defaultSearch) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    onSearchSubmit(defaultSearch);
  }, [defaultSearch]);

  const onSearchSubmit = async (searchVideo) => {
    const res = await youtubeAPI.get("/search", {
      params: {
        q: searchVideo,
      },
    });
    console.log(res.data.items);

    setVideos(res.data.items);
  };

  return [videos, onSearchSubmit];
};

export default useVideos;
