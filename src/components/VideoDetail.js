import React from "react";

function VideoDetail({ selectedvideo }) {
  if (selectedvideo) {
    const videoSrc = `https://www.youtube.com/embed/${selectedvideo.id.videoId}`;
    return (
      <div>
        <div className="ui embed">
          <iframe title={selectedvideo.id} src={videoSrc}></iframe>
        </div>
        <div className="ui segment">
          <div className="ui header">
            <h4>{selectedvideo.snippet.title}</h4>
          </div>
          <p> {selectedvideo.snippet.description}</p>
        </div>
      </div>
    );
  } else {
    return <div>loading</div>;
  }
}
export default VideoDetail;
