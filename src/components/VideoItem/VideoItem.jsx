import './VideoItem.css';
import React from 'react';
import PropTypes from 'prop-types';

const VideoItem = (props) => {
  const { video, onVideoSelect } = props;
  return (
    <div
      className="video-item item"
      onClick={() => {
        onVideoSelect(video);
      }}
      role="presentation"
    >
      <img
        className="ui image"
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

const youtubeShape = {
  kind: PropTypes.string,
  etag: PropTypes.string,
  id: PropTypes.object,
  snippet: PropTypes.object,
};

VideoItem.propTypes = {
  video: PropTypes.shape(youtubeShape).isRequired,
  onVideoSelect: PropTypes.func.isRequired,
};

export default VideoItem;
