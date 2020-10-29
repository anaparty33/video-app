import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import youtubeAPI from "../api/youtubeAPI.js";
import VideoList from "./VideoList.js";
import VideoDetail from "./VideoDetail.js";
import useVideos from "../hooks/useVideos.js";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, onSearchSubmit] = useVideos("songs"); //custom hook
  useEffect(() => {
    console.log(videos[0]);
    setSelectedVideo(videos[0]);
  }, [videos]);
  // setSelectedVideo(videos[0]);
  // useEffect(() => {
  //   onSearchSubmit("songs");
  // }, []);

  // const onSearchSubmit = async (searchVideo) => {
  //   const res = await youtubeAPI.get("/search", {
  //     params: {
  //       q: searchVideo,
  //     },
  //   });
  //   console.log(res.data.items);

  //   setVideos(res.data.items);

  return (
    <div className="ui container">
      <SearchBar uponSubmit={onSearchSubmit} />

      <div className="ui grid">
        <div className="ui row">
          <div className="ten wide column">
            <VideoDetail selectedvideo={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              videoslist={videos}
              onVideoSelect={(eve) => {
                setSelectedVideo(eve);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
