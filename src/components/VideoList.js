import React from "react";
import VideoItem from "./VideoItem";

function VideoList({ videoslist, onVideoSelect }) {
  const videosarray = videoslist.map((videoele) => {
    return (
      <VideoItem
        video={videoele}
        onVideoSelect={onVideoSelect}
        key={videoele.id.videoId}
      />
    );
  });

  return <div className="ui relaxed divided list">{videosarray}</div>;
}

export default VideoList;
