import React from "react";
import "./VideoItem.css";
function VideoItem({ video, onVideoSelect }) {
  return (
    <div
      className="video-item item"
      onClick={() => {
        onVideoSelect(video);
      }}
    >
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt="thumbail not found"
      ></img>

      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
}

export default VideoItem;
