import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="item video-item">
      <img
        alt={video.snippet.description}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
        <div className="extra">{video.snippet.channelTitle}</div>
      </div>
    </div>
  );
};

export default VideoItem;
